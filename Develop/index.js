// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ({ name, description, usage, link }) =>

    writeToFile();

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
    ]);

// TODO: Create a function to write README file
function writeToFile(questions) {
    // return 
    // # ${questions.name}

    // ## Desctiption
    // ${questions.description}

    // ## usage
    // ${questions.usage}

    // ## link
    // ${questions.link} 
}

// TODO: Create a function to initialize app
function init() {
    const readMeFile = questions(answers);

    fs.writeFile('README.md', readMeFile, (err) =>
        err ? console.log(err) : console.log('A README file has been created!'))
}

// Function call to initialize app
init();
