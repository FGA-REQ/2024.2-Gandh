CREATE OR REPLACE FUNCTION block_fidelity_update()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.fidelity <> OLD.fidelity THEN
        RAISE EXCEPTION 'A coluna fidelity não pode ser alterada diretamente.';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER prevent_fidelity_update
BEFORE UPDATE ON client
FOR EACH ROW
WHEN (OLD.fidelity IS DISTINCT FROM NEW.fidelity)
EXECUTE FUNCTION block_fidelity_update();

CREATE OR REPLACE FUNCTION create_menu_for_admin()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO menu (name)
    VALUES (NEW.name);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_menu_trigger
AFTER INSERT ON admin
FOR EACH ROW
EXECUTE FUNCTION create_menu_for_admin();

CREATE OR REPLACE FUNCTION update_fidelity(client_id INT, points_to_add INT)
RETURNS VOID AS $$
BEGIN

    ALTER TABLE client DISABLE TRIGGER prevent_fidelity_update;

    UPDATE client
    SET fidelity = fidelity + points_to_add
    WHERE id = client_id;

    ALTER TABLE client ENABLE TRIGGER prevent_fidelity_update;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION create_cart_for_client()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO cart (client_id) VALUES (NEW.id);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER create_cart_trigger
AFTER INSERT ON client
FOR EACH ROW
EXECUTE FUNCTION create_cart_for_client();

CREATE OR REPLACE FUNCTION get_cart_total(p_cart_id INT)
RETURNS NUMERIC AS $$
DECLARE
    total NUMERIC;
    discount_applied BOOLEAN;
BEGIN
    SELECT COALESCE(SUM(COALESCE(i.new_price, i.price) * ci.quantity), 0)
      INTO total
      FROM cart_item ci
      JOIN item i ON ci.item_id = i.id_i
     WHERE ci.cart_id = p_cart_id;

    SELECT total + COALESCE(SUM(cic.full_price), 0)
      INTO total
      FROM cart_item_complement cic
      JOIN cart_item ci ON cic.id_cart_item = ci.id_cart_item
     WHERE ci.cart_id = p_cart_id;

    SELECT fidelity_discount
      INTO discount_applied
      FROM cart
     WHERE id_cart = p_cart_id;

    IF discount_applied THEN
        RAISE NOTICE 'O desconto de 15 reais foi aplicado';
        total := GREATEST(total - 15, 0);
    END IF;

    RETURN total;
END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION get_menu_structure(p_menu_id INT)
RETURNS JSON AS $$
DECLARE
  result JSON;
BEGIN
  SELECT JSON_AGG(
           JSON_BUILD_OBJECT(
             'group_name', g.name,
             'items', (
               SELECT COALESCE(JSON_AGG(
                 JSON_BUILD_OBJECT(
                   'name', i.name,
                   'description', i.description,
                   'photo', i.photo,
                   'price', COALESCE(i.new_price, i.price)
                 )
               ), '[]'::json)
               FROM item i
               WHERE i.id_g = g.id_g
             )
           )
         ) INTO result
  FROM "group" g
  WHERE g.id_menu = p_menu_id;

  RETURN result;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION apply_fidelity_discount()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.fidelity >= 12 THEN
        NEW.fidelity := 0;
        UPDATE cart
           SET fidelity_discount = true
         WHERE client_id = NEW.id;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER fidelity_discount_trigger
BEFORE UPDATE ON client
FOR EACH ROW
WHEN (NEW.fidelity >= 12)
EXECUTE FUNCTION apply_fidelity_discount();

CREATE OR REPLACE FUNCTION create_complement_for_cart_item(p_cart_item_id INT, p_complement_id INT, p_quantity INT)
RETURNS VOID AS $$
BEGIN
    IF p_quantity > 0 THEN
        INSERT INTO cart_item_complement (id_cart_item, id_ic, quantity, full_price)
        SELECT p_cart_item_id, p_complement_id, p_quantity, COALESCE(price, 0) * p_quantity
        FROM item_c
        WHERE id_ic = p_complement_id;
    END IF;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION delete_completed_request()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.is_completed THEN
        DELETE FROM request WHERE id_request = OLD.id_request;
        RETURN NULL;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_delete_completed_request
BEFORE UPDATE OF is_completed
ON request
FOR EACH ROW
WHEN (NEW.is_completed = TRUE)
EXECUTE FUNCTION delete_completed_request();

CREATE OR REPLACE FUNCTION create_order(
    p_cart_id INT,
    p_address TEXT,
    p_delivery_option INT,
    p_order_details TEXT
)
RETURNS VOID AS $$
BEGIN
    IF p_delivery_option NOT IN (1, 2) THEN
        RAISE EXCEPTION 'Opção de entrega inválida: %', p_delivery_option;
    END IF;

    INSERT INTO request (cart_id, address, delivery_option, order_details)
    VALUES (p_cart_id, p_address, p_delivery_option, p_order_details);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_order_details(p_request_id INT)
RETURNS TABLE (
    item_name VARCHAR,
    item_quantity INT,
    complement_name VARCHAR,
    complement_quantity INT,
    order_details TEXT,
    delivery_option INT,
    created_at TIMESTAMP
) AS $$
BEGIN
    RETURN QUERY 
    SELECT 
        i.name AS item_name,
        ci.quantity AS item_quantity,
        ic.name AS complement_name,
        cic.quantity AS complement_quantity,
        r.order_details,
        r.delivery_option,
        r.created_at
    FROM request r
    JOIN cart c ON r.cart_id = c.id_cart
    JOIN cart_item ci ON c.id_cart = ci.cart_id
    JOIN item i ON ci.item_id = i.id_i
    LEFT JOIN cart_item_complement cic ON ci.id_cart_item = cic.id_cart_item
    LEFT JOIN item_c ic ON cic.id_ic = ic.id_ic
    WHERE r.id_request = p_request_id;
END;
$$ LANGUAGE plpgsql;

