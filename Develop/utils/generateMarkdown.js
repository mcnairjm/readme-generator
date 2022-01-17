// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Badges
  ${renderLicenseBadge(answers.license)}

  ## Table of Contents
  * [License](#license)
  * [Title](#title)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Questions](#questions)
  
  ## License
  ${renderLicenseSection(answers.license)}
  ${renderLicenseLink(answers.license)}

  ## Title
  ${answers.title}

  ## Description
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## Credits
  ${answers.credits}

  ## Questions
  ### Reach out to me at:
  ${answers.username}

`;
}

module.exports = generateMarkdown;
