CREATE TABLE blogs(
    id serial PRIMARY KEY,
    name varchar,
    user INTEGER foreign Key,
);