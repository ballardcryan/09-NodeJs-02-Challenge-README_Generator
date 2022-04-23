
function renderLicenseBadge(license) {
    if (data.license == "Apache 2.0") {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        
    }
    if (data.license == "Boost 1.0") {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    }
    if (data.license == "BSD 3-Clause") {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
        
    }
    if (data.license == "BSD 2-Clause") {
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    }

}


function renderLicenseSection(license) {
    if (data.license == "Apache 2.0") {
        return `This application utilizes the Apache 2.0 license.`;
        
    }
    if (data.license == "Boost 1.0") {
        return `This application utilizes the Boost 1.0 license.`;
    }
    if (data.license == "BSD 3-Clause") {
        return `This application utilizes the BSD 3-Clause license.`;
        
    }
    if (data.license == "BSD 2-Clause") {
        return `This application utilizes the BSD 2-Clause license.`;
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `#${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}

## License

${renderLicenseSection(data.license)}

## Tests

${data.tests}

## Questions

${data.github}
${data.githubURL}
${data.email}
`;
}

module.exports = generateMarkdown;