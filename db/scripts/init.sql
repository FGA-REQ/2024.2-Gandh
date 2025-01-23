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
    gmail VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO admin (name, gmail, password) VALUES
('unidade1', 'unidade1@gmail.com', '1234'),
('unidade2', 'unidade2@gmail.com', '1234');
