const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is this project's title?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a detailed description of this project.",
        name: "description",
    },
    {
        type: "input",
        message: "Provide installation instructions for this project.",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
    },
    {
        type: "list",
        message: "Select one of the following licenses, if applicable.",
        name: "license",
        choices: ["Apache 2.0", "Boost 1.0", "BSD 3-Clause", "BSD 2-Clause", "None"],
    },
    {
        type: "input",
        message: "Provide information about contributors, third-party assets, tutorials, etc.",
        name: "credits",
    },
    {
        type: "input",
        message: "Provide information about any application tests, if applicable.",
        name: "tests",
    },
    {
        type: "input",
        message: "Provide your github username.",
        name: "github",
    },
    {
        type: "input",
        message: "Provide your github URL",
        name: "githubURL",
    },
    {
        type: "input",
        message: "Provide your email address",
        name: "email",
    }
];


function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const filename = `${data.title.toLowerCase().split(' ').join('')}_README.md`;
            console.log(data);
            fs.writeFile(filename, generateMarkdown(data), (err) => {
                err ? console.error(err) : console.log('Success!')
            })
        })

}

init();

