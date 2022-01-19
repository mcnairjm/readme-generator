// TODO: Create a function that returns a license badge based on which license is passed in
const licenseArr = ['MIT', 'Apache 2.0', 'BSD', 'GNU GPL v3', 'Mozilla Public'];
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return `[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === licenseArr[1]) {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === licenseArr[2]) {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  } else if (license === licenseArr[3]) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === licenseArr[4]) {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${renderLicenseBadge(answers.license)}
  
  ## Description
  ${answers.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Credits](#credits)
  * [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  ${renderLicenseSection(answers.license)}
  ${renderLicenseLink(answers.license)}

  ## Credits
  ${answers.credits}

  ## Questions
  ### Reach out to me at:
  ${answers.username}

`;
}

module.exports = generateMarkdown;
