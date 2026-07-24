

USE employee_db;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    salary DECIMAL(10,2)
);

INSERT INTO employees (name, department, salary)
VALUES
('Rahul', 'IT', 50000),
('Priya', 'HR', 45000),
('Amit', 'Finance', 60000);
