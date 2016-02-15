import inquirer from "inquirer";

/**
 * This is a description of the inquirerPromisify function
 * @private
 * @function inquirerPromisify
 * @param options - options come from parameters passed through question functions
 * @returns {string | boolean | array} the only answer available, default answer or selected answer(s)
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

/** Ask a yes or no question
 * @function yesNo
 * @param {string} question - "Do you like cheese?"
 * @param {boolean} defaultAns - default = true
 * @returns {promise} The user's answer {boolean} if fulfilled, or an error if rejected.
 * @example
 * // returns user's answer as boolean or default answer
 * yesNo("Do you like cheese?");
 * @example
 * // returns user's answer as boolean or default answer
 * yesNo("Do you hate cheese?", false);
 */
export function yesNo(question, defaultAns = true) {
    return inquirerPromisify({
        type: "confirm",
        message: question,
        default: defaultAns
    });
}

/** Ask an open-ended question
 * @function text
 * @param {string} question - "What's your name?"
 * @param {string} defaultAns - default = null
 * @returns {promise} The user's answer {string} if fulfilled, or an error if rejected.
 * @example
 * // returns user's answer as string or default answer
 * text("What is your name?");
 */
export function text(question, defaultAns = null) {
    return inquirerPromisify({
        type: "input",
        message: question,
        default: defaultAns
    });
}

/** Ask for a password
 * @function password
 * @param {string} question - "What's your password?"
 * @param {string} defaultAns - default = null
 * @returns {promise} The user's answer {string} if fulfilled, or an error if rejected.
 * @example
 * //returns user's answer as string or default answer
 * password("What is your password?");
 */
export function password(question, defaultAns = null) {
    return inquirerPromisify({
        type: "password",
        message: question,
        default: defaultAns
    });
}

/** Ask a question with multiple choices that accepts one answer
 * @function list
 * @param {string} question - "Which of these is your favorite color? (mark all that apply)"
 * @param {array} choices - ["red", "blue", "yellow"]
 * @param {string} defaultAns - default = array[0]
 * @returns {promise} The user's answer {string} if fulfilled, or an error if rejected.
 * @example
 * //returns user's answer as string or default answer
 * list("Which is your favorite color?", ["red", "blue", "yellow"]);
 */
export function list(question, choices, defaultAns = 0) {
    return inquirerPromisify({
        type: "list",
        message: question,
        default: defaultAns,
        choices: choices
    });
}

/** Ask a question with multiple choices that accepts one or more answers
 * @function checkbox
 * @param {string} question - "Which one of these is your favorite color?"
 * @param {array} choices - ["red", "blue", "yellow"]
 * @returns {promise} The user's answer(s) {array of strings} if fulfilled, or an error if rejected.
 * @example
 * //returns user's answer(s) as an array of strings
 * checkbox("Which places have you visited?", ["Columbia, SC", "Charlotte, NC", "Manchester, England"]);
 */
export function checkbox(question, choices) {
    return inquirerPromisify({
        type: "checkbox",
        choices: choices,
        message: question
    });
}
