// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if(license!=='No'){
    return`![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  else{ return''}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license!=='No'){
    return' -[License](#License) '
  }
  else{ return''}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license!=='No'){
    return`## License 
    ${license}` 
  }
  else{ return''}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge (data.License)}
## Description
${data.Description}

## Table of contents
-[Installation](#Installation)
-[Usage](#Usage)
-[Contribution](#Contribution)
-[Test](#Test)
${
  renderLicenseLink(data.License)
}


## Installation
${data.Installation}

## Usage
${data.Usage}

## Contribution
${data.Contribution}


## Tests
${data.Tests}

## Github username
${data.Github_username}

## Email Address
${data.Email}

${renderLicenseSection(data.License)}

`;
}

module.exports = generateMarkdown;
