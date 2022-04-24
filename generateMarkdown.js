
function renderLicenseBadge(data) {
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
    else {
        return ``;
    }

}


function renderLicenseSection(data) {
    if (data.license == "Apache 2.0") {
        return `This application utilizes the Apache 2.0 license. Click on the badge above for more information.`;
        
    }
    if (data.license == "Boost 1.0") {
        return `This application utilizes the Boost 1.0 license. Click on the badge above for more information.`;
    }
    if (data.license == "BSD 3-Clause") {
        return `This application utilizes the BSD 3-Clause license. Click on the badge above for more information.`;
        
    }
    if (data.license == "BSD 2-Clause") {
        return `This application utilizes the BSD 2-Clause license. Click on the badge above for more information.`;
    }
    else {
        return ``;
    }
}

function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseBadge(data)}

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

${renderLicenseSection(data)}

## Tests

${data.tests}

## Questions

Github username: ${data.github}

Github URL ${data.githubURL}

Email: ${data.email}
`;
}

module.exports = generateMarkdown;