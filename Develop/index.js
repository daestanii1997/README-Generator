// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const writeToFile = ({ name, description, installation, usage, license, contributing, tests, username, email }) =>
    `# ${name}
 
    ## Description
    ${description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation
    ${installation}
     
    ## Usage

    ${usage}

    ## License
    ${license}

    ## Contributing
    ${contributing}

    ## Tests
    ${tests}
    
    ## Questions
    [Github](github.com/${username})
    ${email} `;

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
            name: 'installation',
            message: 'Please enter any necessary installation instructions.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples of usage.',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Which license will you be using?',
            choices: ['MIT', 'Apache 2.0', 'Boost Software', 'Eclipse Public 2.0'],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter the contribution guidelines.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter test instructions.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your Github username.',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.',
        },
    ])
    .then((answers) => {

        const readMeFile = writeToFile(answers);

        fs.writeFile('README.md', readMeFile, (err) =>
            err ? console.log(err) : console.log('A README file has been created!')
        );
    }) 
