DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    birthday DATE NOT NULL,
    salary INTEGER NOT NULL
);


