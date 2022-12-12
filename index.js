// http://fredkschott.com/post/2014/06/require-and-the-module-system/
// https://www.stanleyulili.com/node/node-modules-import-and-use-functions-from-another-file/
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// Array of questions for the user
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
        name: 'install',
        type: 'input',
        message: 'What command should be run to install?',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'How does the user use this repo?',
    },
    {
        name: 'tests',
        type: 'input',
        message: 'What command should be used to run tests?',
    },
    {
        name: 'contribute',
        type: 'input',
        message: 'How can the user contribute to the repo?',
    },
    {
        name: 'license',
        type: 'list',
        message: 'What license should this project have?',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
];


// Function writes the README file
// TA assistance with the writeToFile and init functions
function writeToFile(answers) {
    const readMeContent = generate(answers);
    fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Success!'))
};

// Function initializes app
function init() {
       inquirer.prompt(questions).then((answers) => 
       writeToFile(answers));
};

// Function call to initialize app
init();
