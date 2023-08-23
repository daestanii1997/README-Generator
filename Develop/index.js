// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const writeToFile = ({name, description, usage, link}) =>
    `# ${name}
 
     ## Desctiption
     ${description}
 
     ## usage
     ${usage}
 
     ## link
     ${link} `;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples of usage.',
        },
        {
            type: 'input',
            name: 'link',
            message: 'Please enter the link for your project.',
        },
    ]) 
    .then((answers) => {

        const readMeFile = writeToFile(answers);

        fs.writeFile('README.md', readMeFile, (err) =>
            err ? console.log(err) : console.log('A README file has been created!')
            );
    }) 
