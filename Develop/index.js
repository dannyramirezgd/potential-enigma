const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const promptUser = () => { 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub Username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        }, 
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of the project.'
        }, 
        {
            type: 'input',
            name: 'license',
            message: 'What kind of license should your project have?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What command should be run to run tests?'
        },
        {
            type: 'input',
            name: 'features',
            message: 'What does the user need to know about using the Repo?'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'
        }
    ])
};
const writeToFile = fileName => {
        return fs.writeFile("./dist/README.md", fileName, err => {
            err ? console.error(err) : console.log('file created!')
        }) 
}
promptUser()
.then(data => {
    return generateMarkdown(data)
})
.then(markdownData => {
    return writeToFile(markdownData)
});

