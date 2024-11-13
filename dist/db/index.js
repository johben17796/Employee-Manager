import { pool } from "./connection.js";
export default class DB {
    constructor() { }
    async query(sql, args = []) {
        const client = await pool.connect();
        try {
            return client.query(sql, args);
        }
        finally {
            client.release();
        }
    }
    // get all employees
    getAllEmployees() {
        return this.query("SELECT employee.id, employee.first_name, employee.last_name FROM employee");
    }
    // add employees
    createEmployee(first_name, last_name, role_id, manager_id) {
        return this.query("INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)", [first_name, last_name, role_id, manager_id]);
    }
    // update employee Role
    updateEmployeeRoles(employee_id, role_id) {
        return this.query("UPDATE employee SET role_id = $1 WHERE id = $2", [role_id, employee_id]);
    }
    // view all roles 
    getAllRoles() {
        return this.query("SELECT role.title AS Job Title, role.id, department.name AS Department Name, role.salary AS salary FROM role LEFT JOIN movies ON role.department_id = department.id;");
    }
    // add a role 
    createRole(title, salary, department_id) {
        return this.query("INSERT INTO role(title, salary, department_id) VALUES ($1, $2, $3)", [title, salary, department_id]);
    }
    // get all departments 
    getAllDepartment() {
        return this.query("SELECT * FROM department");
    }
    // add a department
    createDepartment(departmentName) {
        return this.query("INSERT INTO department(name) VALUES ($1)", [departmentName]);
    }
}
