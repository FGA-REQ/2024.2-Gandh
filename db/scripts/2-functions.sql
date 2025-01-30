CREATE OR REPLACE FUNCTION create_client(
    p_name VARCHAR,
    p_gmail VARCHAR,
    p_phone VARCHAR,
    p_address VARCHAR,
    p_password VARCHAR
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO client (name, gmail, phone, address, password)
    VALUES (p_name, p_gmail, p_phone, p_address, p_password);
END;
$$ LANGUAGE plpgsql;

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
