// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function badge(license) {
    if (license !== "None") {
      return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
    }
    return ``;
  }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function link(license) {
    if (license !== "None") {
      return `- [License](#license-📝)`
    }
    return ``;
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

  function section(license) {
    if (license !== "None") {
      return `## License 📝
      This application is covered by the ${license} license.`
    }
    return ``;
  
  }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  For more information on how to add screenshots for examples, visit the following website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  Please contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
