import inquirer from "inquirer";

/**
 * This is a description of the inquirerPromisify function
 * @private
 * @function inquirerPromisify
 * @param options - options come from parameters passed to question functions
 * @returns {string | boolean | array} only answer available, default answer or selected answer(s)
 */
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

/** Ask user a yes or no question
 * @function yesNo
 * @param {string} question - "Do you like cheese?"
 * @param {boolean} defaultAns - default = true
 * @returns {promise} The user's answer {boolean} if fulfilled, or an error if rejected.
 */
export function yesNo(question, defaultAns = true) {
    return inquirerPromisify({
        type: "confirm",
        message: question,
        default: defaultAns
    });
}

/** For questions with open ended answers
 * @function text
 * @param {string} question - "What's your name?"
 * @param {string} defaultAns - default = null
 * @returns {promise} The user's answer {string} if fulfilled, or an error if rejected.
 */
export function text(question, defaultAns = null) {
    return inquirerPromisify({
        type: "input",
        message: question,
        default: defaultAns
    });
}

/** For questions with a password as an answer
 * @function password
 * @param {string} question - "What's your password?"
 * @param {string} defaultAns - default = null
 * @returns {promise} The user's answer {string} if fulfilled, or an error if rejected.
 */
export function password(question, defaultAns = null) {
    return inquirerPromisify({
        type: "password",
        message: question,
        default: defaultAns
    });
}

/**
 * For multiple choice questions that can accept one answer
 * @function list
 * @param {string} question - "Which of these is your favorite color? (mark all that apply)"
 * @param {array} choices - ["red", "blue", "yellow"]
 * @param {string} defaultAns - default = array[0]
 * @returns {promise} The user's answer {string} if fulfilled, or an error if rejected.
 */
export function list(question, choices, defaultAns = 0) {
    return inquirerPromisify({
        type: "list",
        message: question,
        default: defaultAns,
        choices: choices
    });
}

/**
 * For multiple choice questions that can accept multiple answers
 * @function checkbox
 * @param {string} question - "Which one of these is your favorite color?"
 * @param {array} choices - ["red", "blue", "yellow"]
 * @returns {promise} The user's answer(s) {array of string(s)} if fulfilled, or an error if rejected.
 */
export function checkbox(question, choices) {
    return inquirerPromisify({
        type: "checkbox",
        choices: choices,
        message: question
    });
}
