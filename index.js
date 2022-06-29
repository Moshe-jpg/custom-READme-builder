// TODO: Include packages needed for this application
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const promptQuestions = readmeData => {
    console.log('⬇⬇⬇ Add A New readME.md ⬇⬇⬇');

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project called?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('You need to enter a project name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'How would you describe your project?',
            validate: descriptionInput => {
                if (descriptionInput) {
                  return true;
                } else {
                  console.log('You need to enter a project description!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install this project?',
            validate: installationInput => {
                if (installationInput) {
                  return true;
                } else {
                  console.log('You need to explain how to install it!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('You need to explain how to use it!');
                  return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to include?',
            choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "none"]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who contributed to this project?',
            validate: contributingInput => {
                if (contributingInput) {
                  return true;
                } else {
                  console.log('You need to explain who contributed!\ If nobody contributed, just input N/A');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How did you test this project?',
            validate: testsInput => {
                if (testsInput) {
                  return true;
                } else {
                  console.log('You need to explain how you tested it!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What questions do you have about this project?',
            validate: questionsInput => {
                if (questionsInput) {
                  return true;
                } else {
                  console.log('You need to include at least 1 question!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username',
            validate: githubUsernameInput => {
                if (githubUsernameInput) {
                  return true;
                } else {
                  console.log('You need to type your Github username!');
                  return false;
                }
            }
        }
    ])
    .then(answers => {
        console.log(answers);
        const readMePath = path.join(__dirname, '/dist', 'README.md');
        fs.writeFileSync(readMePath, generateMarkdown(answers), (err) => {
            if (err){
                console.log(err);
            }
        });
    })
    .catch(err => {
        console.log(err);
    });
};

// // Function call to initialize app
promptQuestions();
