// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
   
  if(!license === "Unlicense"){
    return '';
  } else {
    const licenseBadge = license.replace('-', '_')
    return `\n[![License: ${license}](https://img.shields.io/badge/License-${licenseBadge}-yellow.svg)](https://opensource.org/licenses/${license})`
  }
  // } else if (license === "MIT") {
  //   return `\n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  // } else if (license === "Apache-2.0") {
  //   return `\n[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  // } else if (license === "GPL-2.0") {
  //   return `\n[![License: GPL-2.0](https://img.shields.io/badge/License-GPL_2.0-orange.svg)](https://opensource.org/licenses/GPL-2.0)`
  // } else if (license === "GPL-3.0") {
  //   return `\n[![License: GPL-3.0](https://img.shields.io/badge/License-GPL_3.0-red.svg)](https://opensource.org/licenses/GPL-3.0)`
  // } else if (license === "EPL-2.0") {
  //   return `\n[![License: EPL-2.0](https://img.shields.io/badge/License-EPL_2.0-yellow.svg)](https://opensource.org/licenses/EPL-2.0)`
  // } else if (license === "MPL-2.0") {
  //   return `\n[![License: MPL-2.0](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)`
  // } else if (license === "LGPL-2.0") {
  //   return `\n[![License: LGPL-2.0](https://img.shields.io/badge/License-LGPL_2.0-brightgreen.svg)](https://opensource.org/licenses/LGPL-2.0)`
  // } else if (license === "LGPL-2.1") {
  //   return `\n[![License: LGPL-2.1](https://img.shields.io/badge/License-LGPL_2.1-orange.svg)](https://opensource.org/licenses/LGPL-2.1)`
  // } else if (license === "LGPL-3.0") {
  //   return `\n[![License: LGPL-3.0](https://img.shields.io/badge/License-LGPL_3.0-red.svg)](https://opensource.org/licenses/LGPL-3.0)`
  // } else if (license === "BSD-2-Clause") {
  //   return `\n[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD_2_Clause-yellow.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  // } else if (license === "BSD-3-Clause") {
  //   return `\n[![License: BSD-3-Clause](https://img.shields.io/badge/License-BSD_2_Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  // }

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (data, license) => {
  if(!renderLicenseBadge){
    return '';
  }
  return `  
  ## License
  Copyright (c) ${data.username}\n
  Licensed under the ${license} License
  ${renderLicenseBadge(license)}
  `

}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
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


  ## Contributing
  If you are looking to contribute you can for example: 
  * ${data.contributing}\n
  If you have any questions or comments you can reach out to me directly at:${data.email}
  ${renderLicenseSection(data, data.license)}
  `;
}

module.exports = generateMarkdown;
