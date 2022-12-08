// TODO: Include packages needed for this application
// http://fredkschott.com/post/2014/06/require-and-the-module-system/
// https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            name: 'name',
            type: 'input',
            message: 'What is your GitHub username?',
        },
        {
            name: 'email',
            type: 'input',
            message: 'What is your email address?',
        },
        {
            name: 'title',
            type: 'input',
            message: 'What is the project name?',
        },
        {
            name: 'description',
            type: 'input',
            message: 'Write a short description about your project.',
        },
        {
            name: 'license',
            type: 'list',
            message: 'What license should this project have?',
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        },
        {
            name: 'install',
            type: 'input',
            message: 'What command should be run to install dependencies?',
        },
        {
            name: 'tests',
            type: 'input',
            message: 'What command should be used to run tests?',
        },
        {
            name: 'usage',
            type: 'input',
            message: 'What does the user need to know about using this repo?',
        },
        {
            name: 'contribute',
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
        },
    ];

// TODO: Create a function to write README file
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
// https://stackoverflow.com/questions/63433310/how-to-wait-inquirer-answer-to-be-processed-by-fs-writefile-before-continuing
function writeToFile(answers) {
    const readMeContent = generate(answers);
fs.writeFile('README.md', readMeContent, (err) =>
err ? console.log(err) : console.log('Success!'))
}
// TODO: Create a function to initialize app
function init() {
    const answers = inquirer.prompt(questions);
}

// Function call to initialize app
 init();
