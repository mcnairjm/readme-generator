// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
            type: 'confirm',
            name: 'testConfirm',
            message: 'Do you have testing instructions?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Detail any test instructions.',
            when: answers => {
                return answers.testConfirm;
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license associated with the project.',
            choices: ['MIT', 'Apache 2.0', 'BSD', 'GNU GPL v3', 'Mozilla Public']
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
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your e-mail address?'
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'What is the title of your README?'
        },
        
    ])
    /*.then((answers) => {    
        console.log(JSON.stringify(answers, null, '  '));
    });*/
}

// TODO: Create a function to write README file
const writeToFile = (fileName, answers) => {
    fs.appendFile(`${fileName}.md`, answers, (err) => 
        err ? console.error(err) : console.log('Your README has been created')
    );
}
// TODO: Create a function to initialize app
async function init() {
    let answers = await questions();
    writeToFile((answers.fileName), (generateMarkdown(answers)));
    
}

// Function call to initialize app
init();




