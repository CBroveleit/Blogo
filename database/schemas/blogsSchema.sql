CREATE TABLE blogs(
    id serial PRIMARY KEY,
    name varchar,
    user integer foreign Key,
);