const receiveData = fs.require('../index.js');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT'){

  };
  if (license == 'Yale'){

  }
  if (license == 'Harvard'){

  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.name}

  ## ${answers.description}

  ### Table of Contents
  
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Tests](#tests)

  <a name="installation"/a>
  #### ${answers.installation}

  <a name="usage"/a>
  #### ${answers.usage}

  <a name="license"/a>
  #### ${answers.license}

  <a name="contributing"/a>
  #### ${answers.contributing}

  <a name="tests"/a>
  #### ${answers.tests}
`;
}

module.exports = generateMarkdown;
