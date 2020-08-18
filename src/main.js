const inquirer = require('inquirer');
// const fs = require('fs/promises');
const languages = require('./lang');

const validateApiToken = (key) => /[\d\w]{20}/g.test(key);

inquirer.prompt(
    [
        {
            name: 'token',
            message: 'Please tell me your codewars API-Key',
            mask: '*',
            validate: (key) => validateApiToken(key),
        },
        {
            name: 'lang',
            message: 'What language do you want to use?',
            default: 'JS',
            choices: Object.keys(languages),
        },
    ],
);

module.exports = {
    validateApiToken,
};
