// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log ('Please enter a title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project. (Required)',
            validate: descripInput => {
                if (descripInput) {
                    return true;
                } else {
                console.log('Please describe your project!');
                return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'installConfirm',
            message: 'Do you want to add a description of installation?'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            when: answers => {
                return answers.installConfirm;
            }
        },
        {
            type: 'confirm',
            name: 'usageConfirm',
            message: 'Do you want to provide usage information?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use',
            when: answers => {
                return answers.usageConfirm;
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List any collaborators on the project'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Choose a license associated with the project.',
            choices: ['MIT', 'Apache', 'BSD', 'GPL', 'Mozilla Public']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your gitHub username? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your gitHub username!');
                    return false;
                }
            }
        }

    ])
    .then((answers) => {    
        console.log(JSON.stringify(answers, null, '  '));  
    });
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log(success)
    );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

questions();

