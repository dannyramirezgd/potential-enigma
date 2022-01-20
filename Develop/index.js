const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "What is your GitHub Username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type:"input",
      name: "link",
      message: "What is the full url for the live page?"
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a short description of the project.",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: [
        "MIT",
        "Apache-2.0",
        "GPL-2.0",
        "GPL-3.0",
        "EPL-2.0",
        "MPL-2.0", 
        "LGPL-2.0",
        "LGPL-2.1",
        "LGPL-3.0",
        "BSD-2-Clause", 
        "BSD-3-Clause",      
        "Unlicense",
      ],
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies",
    },
    {
      type: "checkbox",
      name: "frameworks",
      message: "What technologies did you use to build this app?",
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node'],
    },
    {
      type: "input",
      name: "features",
      message: "What does the user need to know about using the Repo?",
    },
    {
      type: "checkbox",
      name: "contributing",
      message: "How can a user contribute to your repo?",
      choices: [
          "Submit bugs and feature requests",
          "Review code changes",
          "Review documentation",
      ]

    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command could a user type to test the repo?'
    }
  ]);
};
const writeToFile = (fileName) => {
  return fs.writeFile("./dist/README.md", fileName, (err) => {
    err ? console.error(err) : console.log("file created!");
  });
};
promptUser()
  .then((data) => {
    return generateMarkdown(data);
  })
  .then((markdownData) => {
    return writeToFile(markdownData);
  });
