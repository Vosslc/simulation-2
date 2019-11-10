INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
VALUES (${name}, ${address}, ${city}, ${state}, ${zip}, ${img}, ${mortgage}, ${rent})

-- INSERT INTO houses (name, address, city, state, zip, img, mortgage, rent)
-- VALUES (${1}, ${2}, ${3}, ${4}, ${5}, ${6}, ${7}, ${8})

-- ******Adding columns to a sql table.
-- ALTER TABLE houses
-- ADD COLUMN mortgage decimal,
-- ADD COLUMN rent decimal;