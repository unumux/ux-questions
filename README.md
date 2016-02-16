# UX-Questions

A library for creating CLI questions using Inquirer Promisify

[![travis build](https://img.shields.io/travis/unumux/ux-questions.svg?style=flat-square)](https://travis-ci.org/unumux/ux-questions)
[![codecov coverage](https://img.shields.io/codecov/c/github/unumux/ux-questions.svg?style=flat-square)](https://codecov.io/github/unumux/ux-questions)
[![npm version](https://img.shields.io/npm/v/@unumux/ux-questions.svg?style=flat-square)](https://www.npmjs.com/package/@unumux/ux-questions)

## yesNo(question, defaultAns) => promise
Ask a yes or no question

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;Do you like cheese?&quot; |
| defaultAns | boolean | default = true |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer {boolean} if fulfilled, or an error if rejected. |

**Examples**
```js

// returns user's answer as boolean or default answer
yesNo("Do you like cheese?");

// returns user's answer as boolean or default answer
yesNo("Do you hate cheese?", false);
```


Source: index.js, line: 24

---

## text(question, defaultAns) => promise
Ask an open-ended question

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;What&#x27;s your name?&quot; |
| defaultAns | string | default = null |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer {string} if fulfilled, or an error if rejected. |

**Examples**
```js

// returns user's answer as string or default answer
text("What is your name?");
```


Source: index.js, line: 44

---

## password(question, defaultAns) => promise
Ask for a password

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;What&#x27;s your password?&quot; |
| defaultAns | string | default = null |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer {string} if fulfilled, or an error if rejected. |

**Examples**
```js

//returns user's answer as string or default answer
password("What is your password?");
```


Source: index.js, line: 61

---

## list(question, choices, defaultAns) => promise
Ask a question with multiple choices that accepts one answer

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;Which of these is your favorite color? (mark all that apply)&quot; |
| choices | array | [&quot;red&quot;, &quot;blue&quot;, &quot;yellow&quot;] |
| defaultAns | string | default = array[0] |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer {string} if fulfilled, or an error if rejected. |

**Examples**
```js

//returns user's answer as string or default answer 
list("Which is your favorite color?", ["red", "blue", "yellow"]);
```


Source: index.js, line: 78

---

## checkbox(question, choices) => promise
Ask a question with multiple choices that accepts one or more answers

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;Which one of these is your favorite color?&quot; |
| choices | array | [&quot;red&quot;, &quot;blue&quot;, &quot;yellow&quot;] |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer(s) {array of strings} if fulfilled, or an error if rejected. |

**Examples**
```js

//returns user's answer(s) as an array of strings
checkbox("Which places have you visited?", ["Columbia, SC", "Charlotte, NC", "Manchester, England"]);
```


Source: index.js, line: 97

---

