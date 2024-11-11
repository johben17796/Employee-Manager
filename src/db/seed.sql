

INSERT INTO department (id, name)
VALUES (1, 'Produce'),
        (2, 'Grocery')
;


INSERT INTO role (title, salary, department_id)
VALUES ('Manager', '10000', 1),
        ('Lackey', '1000', 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Ben', 'Johnson', '1', '1'),
        ('Joe', 'Dirt', '2', '1');
