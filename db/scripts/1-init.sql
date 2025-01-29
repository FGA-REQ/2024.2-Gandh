CREATE TABLE IF NOT EXISTS client (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gmail VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL,   
    address VARCHAR(100) NOT NULL,
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
    status BOOLEAN NOT NULL DEFAULT TRUE,
    photo TEXT
);
