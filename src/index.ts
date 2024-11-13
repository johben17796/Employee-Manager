import inquirer from "inquirer";
import DB from "./db/index.ts";

const db = new DB();

init();
function init() {
    startingPrompts()
}

   function startingPrompts(): void {
        inquirer
        .prompt ([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
                'Quit'
            ],
        }
    ])
        .then((answers) => {
            if (answers.action === 'View All Employees') {
                viewallEmployees();
                return
            } else if (answers.action === 'Add Employee') {
                addEmployee();
                return
            } else if (answers.action === 'Update Employee Role') {
                updateEmployeeRole();
                return
            } else if (answers.action === 'View All Roles') {
                viewallRoles();
                return
            } else if (answers.action === 'Add Role') {
                addRole();
                return
            } else if (answers.action === 'View All Departments') {
                viewallDepartments();
                return
            } else if (answers.action === 'Add Department') {
                addDepartment();
                return
            } else if (answers.action === 'Quit') {
                quit();
                return
            }

        })
}

function viewallEmployees() {
    db.getAllEmployees()
        .then(({ rows }) => {
            const employees = rows;
            console.log ('\n');
            console.table(employees)
        })
        .then(() => startingPrompts())
}

async function addEmployee() {
    inquirer
        .prompt([{
            type: 'input',
            name: 'firstname',
            message: "Enter the employee's first name"
        },
        {
            type: 'input',
            name: 'lastname',
            message: "Enter the employee's name" 
        },
        {
            type: 'number',
            name: 'roleid',
            message: "Enter the id to assign the employee their role"
        },
        {
            type: 'number',
            name: 'managerid',
            message: "Enter the id to assign the employee their manager"
        }
        ])
    .then((answers) => {
        db.createEmployee(answers.firstname, answers.lastname, answers.roleid, answers.managerid)
})
    }
function updateEmployeeRole() {
    inquirer
        .prompt([{
            type: 'number',
            name: 'employeeid',
            message: "Enter employee ID"
        },
        {
            type: 'number',
            name: 'roleid',
            message: "Enter the id of the role you want to reassign the employee to"
        }])
    .then((answers) => {
    db.updateEmployeeRoles(answers.employeeid, answers.roleid)
    })
}
function viewallRoles() {
    db.getAllRoles()
    .then(({ rows }) => {
        const roles = rows;
        console.log ('\n');
        console.table(roles)
    })
    .then(() => startingPrompts())
}
async function addRole() {   
     inquirer
        .prompt([{
            type: 'input',
            name: 'title',
            message: "Enter the title of the role"
    },
    {
        type: 'number',
        name: 'salary',
        message: "Enter the salary" 
    },
    {
        type: 'number',
        name: 'departmentID',
        message: "Enter the id to assign this role its department"
    }
    ])
.then((answers) => {
    db.createRole(answers.title, answers.salary, answers.departmentID)
})
}
function viewallDepartments() {
    db.getAllDepartment()
    .then(({ rows }) => {
        const departments = rows;
        console.log ('\n');
        console.table(departments)
    })
    .then(() => startingPrompts())
}
async function addDepartment() {
    inquirer
    .prompt([{
        type: 'input',
        name: 'department',
        message: "Enter the name of the department"
    }])
    .then((answers) => {
    db.createDepartment(answers.department)
})
}
function quit() {
    return
}