const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');

const cardList = []

const roleMap = {
    Engineer, 
    Employee, 
    Manager,
    Intern };

const questions = [{
    type: "list",
    name: "role",
    message: "Select the role of the employee",
    choices: ['Intern', 'Employee', 'Engineer', 'Manager'],
}, {
    type: "text",
    name: "name",
    message: "Enter name:",
}, {
    type: "text",
    name: "id",
    message: "Enter id:",
}, {
    type: "text",
    name: "email",
    message: "Enter email:",
}
];

const promptLoop = () => {
    inquirer.prompt(questions)
    .then (({role, name, id, email}) => {
        const employee = new roleMap[role](name, id, email, role)
        if (role === 'Intern') {
            inquirer.prompt({
                type: "text",
                name: "school",
                message: "Enter school:",
            }).then((school) => {
                employee.school = school.school
              }).then(() => {
                const card = (
                `<div class="card border">
                <h2>Name: ${employee.name}</h2>
                <h2>Role: ${employee.role}</h2>
                <h2>ID: ${employee.id}</h2>
                <a href="mailto:${employee.email}">${employee.email}</a>
                <h2>${employee.school}</h2>        
                </div>`
                )
                cardList.push(card)
              }).then(() => {
                askAgain()
                })
                    .catch((err) => {
                    console.error(err)});
        } else if (role === 'Engineer') {
            inquirer.prompt({
                type: "text",
                name: "github",
                message: "Enter github:",
            }).then((github) => {
                employee.github = github.github
              }).then(() => {
                const card = (
                `<div class="card border">
                <h2>Name: ${employee.name}</h2>
                <h2>Role: ${employee.role}</h2>
                <h2>ID: ${employee.id}</h2>
                <a href="mailto:${employee.email}">${employee.email}</a>
                <a href="https://github.com/${employee.github}">Github Account</a>  
                </div>`
                )
                cardList.push(card)
              }).then(() => {
                askAgain()
                })
                    .catch((err) => {
                    console.error(err)});
        } else if (role === 'Manager') {
            inquirer.prompt({
                type: "text",
                name: "officeNumber",
                message: "Enter office number of manager:",
            }).then((officeNumber) => {
                employee.officeNumber = officeNumber.officeNumber
              }).then(() => {
                const card = (
                `<div class="card border">
                <h2>Name: ${employee.name}</h2>
                <h2>Role: ${employee.role}</h2>
                <h2>ID: ${employee.id}</h2>
                <a href="mailto:${employee.email}">${employee.email}</a>
                <h2>${employee.officeNumber}</h2> 
                </div>`
                )
                cardList.push(card)
              }).then(() => {
                    askAgain()
                })
                    .catch((err) => {
                    console.error(err)});
        }
      })


      function askAgain() {
        inquirer.prompt({
            name: "choice",
            type: "confirm",
            message: "Do you want to add another employee?",
        })
     .then((choice) => {
        if(choice.choice === true){
            return promptLoop();
        } else {
            fs.writeFile('./dist/index.html', 
     
            `<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>My Team</title>
           <link rel="stylesheet" href="./styles.css">
       </head>
       <body>
           <header>
               <h1>Document</h1>
           </header>
       
           <main>
               <div class="container">` +
               cardList.join('') +
                   `</div>
           </main>
       
           </body>
       </html>`
       
            , function (err) {
               if (err) throw err;
               console.log('Saved!');
             });
        }
      })
      .catch((err) => {
        console.error(err)});
    }};

promptLoop()