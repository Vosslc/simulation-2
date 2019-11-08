CREATE TABLE houses (
    id serial primary key,
    name VARCHAR (30),
    address VARCHAR(100),
    city VARCHAR (100),
    state VARCHAR (2),
    zip INT, 
    img TEXT,
    mortgage DECIMAL,
    rent DECIMAL
);

INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES 
('Summit Park Modern Cabin', '2500 Summit RD', 'Summit City', 'UT', 84111,'http://www.tuscancafe.net/aura/Modern-Cabin-Floor-Plans-Decoration-MODERN-HOUSE-PLAN.jpg', 1000000.01, 2500 );