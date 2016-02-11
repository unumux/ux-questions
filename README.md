# UX-Questions

[![travis build](https://img.shields.io/travis/unumux/ux-questions.svg?style=flat-square)](https://travis-ci.org/unumux/ux-questions)
[![codecov coverage](https://img.shields.io/codecov/c/github/unumux/ux-questions.svg?style=flat-square)](https://codecov.io/github/unumux/ux-questions)
[![npm version](https://img.shields.io/npm/v/@unumux/ux-questions.svg?style=flat-square)](https://www.npmjs.com/package/@unumux/ux-questions)

## yesNo(question, defaultAns) => promise
Ask user a yes or no question

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;Do you like cheese?&quot; |
| defaultAns | boolean | default = true |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer {boolean} if fulfilled, or an error if rejected. |


Source: index.js, line: 24

---

## text(question, defaultAns) => promise
For questions with open ended answers

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;What&#x27;s your name?&quot; |
| defaultAns | string | default = null |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer {string} if fulfilled, or an error if rejected. |


Source: index.js, line: 38

---

## password(question, defaultAns) => promise
For questions with a password as an answer

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;What&#x27;s your password?&quot; |
| defaultAns | string | default = null |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer {string} if fulfilled, or an error if rejected. |


Source: index.js, line: 52

---

## list(question, choices, defaultAns) => promise
For multiple choice questions that can accept one answer

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


Source: index.js, line: 66

---

## checkbox(question, choices) => promise
For multiple choice questions that can accept multiple answers

**Parameters**

| Name | Type | Description |
| --- | --- | --- |
| question | string | &quot;Which one of these is your favorite color?&quot; |
| choices | array | [&quot;red&quot;, &quot;blue&quot;, &quot;yellow&quot;] |


**Returns**

| Type | Description |
| --- | --- |
| promise | The user&#x27;s answer(s) {array of string(s)} if fulfilled, or an error if rejected. |


Source: index.js, line: 83

---

