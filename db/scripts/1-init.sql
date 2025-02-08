CREATE TABLE IF NOT EXISTS client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gmail VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,   
    password VARCHAR(100) NOT NULL,
    fidelity INTEGER DEFAULT 0,
    is_verified BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS admin (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gmail VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE menu (
    id_menu SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE "group" (
    id_g SERIAL PRIMARY KEY,
    id_menu INT REFERENCES menu(id_menu) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE item (
    id_i SERIAL PRIMARY KEY,
    id_g INT REFERENCES "group"(id_g) ON DELETE CASCADE,
    new_price NUMERIC,
    price NUMERIC NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    photo TEXT
);

CREATE TABLE complement (
    id_comp SERIAL PRIMARY KEY,
    id_i INT REFERENCES item(id_i) ON DELETE CASCADE
);

CREATE TABLE group_c (
    id_gc SERIAL PRIMARY KEY,
    id_comp INT REFERENCES complement(id_comp) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    mandatory BOOLEAN NOT NULL,
    min INT DEFAULT 0,
    max INT DEFAULT 0
);

CREATE TABLE item_c (
    id_ic SERIAL PRIMARY KEY,
    id_gc INT REFERENCES group_c(id_gc) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    price NUMERIC,
    description TEXT,
    status BOOLEAN DEFAULT TRUE,
    photo TEXT
);

CREATE TABLE IF NOT EXISTS cart (
    id_cart SERIAL PRIMARY KEY,
    client_id INT UNIQUE NOT NULL REFERENCES client(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fidelity_discount BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS cart_item (
    id_cart_item SERIAL PRIMARY KEY,
    cart_id INT NOT NULL REFERENCES cart(id_cart) ON DELETE CASCADE,
    item_id INT NOT NULL REFERENCES item(id_i) ON DELETE CASCADE,
    quantity INT DEFAULT 1,
    added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cart_item_complement (
    id_cart_complement SERIAL PRIMARY KEY,
    id_cart_item INT NOT NULL REFERENCES cart_item(id_cart_item) ON DELETE CASCADE,
    id_ic INT NOT NULL REFERENCES item_c(id_ic) ON DELETE CASCADE,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    full_price NUMERIC NOT NULL
);

CREATE TABLE IF NOT EXISTS request (
    id_request SERIAL PRIMARY KEY,
    cart_id INT NOT NULL REFERENCES cart(id_cart) ON DELETE CASCADE,
    admin_id INT NOT NULL REFERENCES admin(id) ON DELETE CASCADE,
    address TEXT,
    delivery_option INT NOT NULL CHECK (delivery_option IN (1, 2)), -- 1 para retirada, 2 para delivery
    order_details TEXT, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    is_completed BOOLEAN DEFAULT FALSE
);
