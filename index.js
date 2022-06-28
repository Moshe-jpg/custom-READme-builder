// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateMarkdown = require('utils\\generateMarkdown.js');


// TODO: Create an array of questions for user input
const promptQuestions = readmeData => {
    console.log('Add A New readME.md');

    if (!readmeData){
        readmeData = [];
    }

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
            type: 'checkbox',
            name: 'license',
            message: 'Which license would you like to include?',
            choices: [
                new inquirer.Separator(' = The Choices = '),
                {
                    name: 'MIT'
                },
                {
                    name: 'Yale'
                },
                {
                    name: 'Harvard'
                }
            ],
            validate(answer) {
                if (answer.length < 1) {
                  return 'You must choose at least one License.';
                }
                return true;
            }
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
        }
    ])
    .then(answers => {
        readmeData.push(answers)
        return answers;
    })
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '))
    });
};

promptQuestions();


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
