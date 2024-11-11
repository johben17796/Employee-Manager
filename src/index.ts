import inquirer from "inquirer";

class Inquiry {
   startingPrompt(): void {
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

            } else if (answers.action === 'Add Employee') {
                
            } else if (answers.action === 'Update Employee Role') {
                
            } else if (answers.action === 'View All Roles') {
                
            } else if (answers.action === 'Add Role') {
                
            } else if (answers.action === 'View All Departments') {
                
            } else if (answers.action === 'Add Department') {
                
            } else if (answers.action === 'Quit') {

            }

        })
}}