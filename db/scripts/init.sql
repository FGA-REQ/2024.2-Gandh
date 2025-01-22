CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gmail VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,   
    address VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    fidelity INTEGER
);

CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    gmail VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO admin (name, gmail, password) VALUES
('unidade1', 'unidade1@gmail.com', '1234');
