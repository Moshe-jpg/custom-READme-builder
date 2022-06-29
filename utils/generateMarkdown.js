
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != "none"){
    return `<img src="https://img.shields.io/badge/license-${license}-blue.svg" alt="Github license">`;
  }
  return ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != "none"){
    return `* [License](#license)`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "none"){
    return `## License\nThis Project Is Licensed Under The ${license} License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.name}


  ## ${renderLicenseBadge(answers.license)}


  ## ${answers.description}



  ### Table of Contents
  
  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(answers.license)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)



  ## Installation
  #### ${answers.installation}



  ## Usage
  #### ${answers.usage}



  ${renderLicenseSection(answers.license)}



  ## Contributing
  #### ${answers.contributing}



  ## Tests
  #### ${answers.tests}



  ## Questions
  #### ${answers.questions}


  ## Created By:
  [${answers.githubUsername}](github.com/${answers.githubUsername})
`;
}

module.exports = generateMarkdown;
