const renderLicenseBadge = license => {
   
  if(!license === "Unlicense"){
    return '';
  } else {
    const licenseBadge = license.replace('-', '_')
    return `[![License: ${license}](https://img.shields.io/badge/License-${licenseBadge}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
}

const renderLicenseSection = (data, license) => {
  return `  
  ## License
  Copyright (c) ${data.username}\n
  Licensed under the ${renderLicenseBadge(license)}
  `

}
const renderContributionsList = contributionsArr => {
  if(!contributionsArr){
    return '';
  }
  const newContArr = contributionsArr
    .map(contribution => "* "+ contribution + "\n")
    .join('');
   return newContArr
}
const renderContributionsSection = data => {
  if(!renderContributionsList){
    return '';
  }
  return `
  ## Contributing
  If you are looking to contribute you can for example: 
  ${renderContributionsList(data)}`
}
const generateMarkdown = data => {
  const contributions = data.contributing.slice().join(' ');
  return `
# ${data.title}

## Description
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
## Installation
${data.installation}
## Usage

${renderContributionsSection (data.contributing)}

If you have any questions or comments you can reach out to me directly at: ${data.email}
${renderLicenseSection(data, data.license)}
  `;
}

module.exports = generateMarkdown;
