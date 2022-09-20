const inquirer = require('inquirer');
// const fs = require('fs');

// const Employee = require('./lib/Employee');
// const Intern = require('./lib/Intern');
// const Engineer = require('./lib/Engineer');
// const Manager = require('./lib/Manager');

// const roleMap = {
//     Engineer, 
//     Employee, 
//     Manager,
//     Intern };

// const questions = [{
//     type: "list",
//     name: "role",
//     message: "Select the role of the employee",
//     choices: ['Intern', 'Employee', 'Engineer', 'Manager'],
// }, {
//     type: "text",
//     name: "name",
//     message: "Enter name:",
// }, {
//     type: "text",
//     name: "id",
//     message: "Enter id:",
// }, {
//     type: "text",
//     name: "email",
//     message: "Enter email:",
// }];

// inquirer.prompt(questions).then(({role, name, id, email}) => {
//      const employee = new roleMap[role](name, id, email) 

//      fs.writeFile('./dist/index.html', 
     
//      `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="./styles.css">
// </head>
// <body>
//     <header class="border">
//         <h1>Document</h1>
//     </header>

//     <main>
//         <div class="container border">` +
//         `<div class="card border">
//                 <h2>${name}</h2>
//                 <h2>${role}</h2>
//                 <h2>${id}</h2>
//                 <h2>${email}</h2>
//                 <h2>github/officeNumber/school</h2> 
//             </div>` +
//             `</div>
//     </main>

//     </body>
// </html>`

//      , function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });

//      console.log(employee.name)
//     }).catch(err => {
//         console.error(err)});

const promptLoop = () => {
     inquirer.prompt([
        {
          name: "choice",
          type: "confirm",
          message: "Do you want to add another employee?",
        },
      ]).then((choice) => {
        if(choice){
            return promptLoop();
        } else {
            
        }
      }).catch((err) => {
        console.error(err)});
    };

promptLoop()
