import inquirer from "inquirer";

function inquirerPromisify(options) {
    options.name = "answer";
    return new Promise((resolve) => {
        // if there is only one choice, skip asking the question
        if(options.choices && options.choices.length === 1) {
            resolve(options.choices[0]);
        } else {
            inquirer.prompt([options], function(answers) {
                resolve(answers.answer);
            });
        }
    });
}

export function yesNo(question, defaultAns = true) {
    return inquirerPromisify({
        type: "confirm",
        message: question,
        default: defaultAns
    });
}

export function text(question, defaultAns = null) {
    return inquirerPromisify({
        type: "input",
        message: question,
        default: defaultAns
    });
}

export function password(question, defaultAns = null) {
    return inquirerPromisify({
        type: "password",
        message: question,
        default: defaultAns
    });
}

export function list(question, choices, defaultAns = 0) {
    return inquirerPromisify({
        type: "list",
        message: question,
        default: defaultAns,
        choices: choices
    });
}

export function checkbox(question, choices) {
    return inquirerPromisify({
        type: "checkbox",
        choices: choices,
        message: question
    });
}
