// Activity 1: Basic Regular Expression

// Task 1 Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "Javascript" in a string.)

const regExp1 = /JavaScript/g;
const text1 = "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles."

console.log(text1.match(regExp1));

// Task 2 Write a regular expression to match all digits in a string.

const regExp2 = /[0-9]/g
const text2 = "Hii there my age is 22, and my number is 9878188199"

console.log(text2.match(regExp2));

// Activity 2: Character Classes and Quantifiers

// Task 3 Write a regular expression to match all words in a string that start with a captial letter.

const regExp3 = /[A-Z][A-Za-z]+/g;
console.log(text1.match(regExp3));

// Task 4 Write a regular expression to match all sequences of one or more digits in a string.

const regExp4 = /[0-9]+/g;
console.log(text2.match(regExp4));

// Activity 3: Grouping and Capturing

// Task 5 Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890)

// const regExp5 = /(\d+)/g;
const regExp5 = /\((\d{3})\)\s(\d{3})-(\d{4})/g;
const test5 = "Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890)"

console.log(test5.match(regExp5));

// Task 6 Write a regular expression to capture the username and domain from an email address.

const regExp6 = /[^@]+/g;
const text6 = "princesingh@gamil.com";

console.log(text6.match(regExp6));


// Activity 4: Assertion and Boundaries

// Task 7 Write a regular expression to match a word only if it is at the beginning of a string.

const regExp7 = /^\w+/g;
const text7 = "Write a regular expression to match a word only if it is at the beginning of a string.";

console.log(text7.match(regExp7));

// Task 8 Write a regular expression to match a word only if it is at the end of a string.

const regExp8 = /\w+$/g;
const text8 = "Write a regular expression to match a word only if it is at the end of a string"

console.log(text8.match(regExp8));

// Activity 5: Practical Applications

// Task 9 Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). 

const regExp9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/g;
const text9 = "Prince@01";

let isValid = text9.match(regExp9);
if (isValid) {
    console.log("Password is valid");
} else {
    console.log("Password is Invalid");
}

// Task 10 Write a regular expression to validate a URL.

const regExp10 = /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w-]*)*(\?[;&a-z=\d%_]*)?(\#[\w-]*)?$/gi;
const text10 = "https://github.com/Prince-Singh-05";

isValid = text10.match(regExp10);

if (isValid) {
    console.log("URL is valid");
} else {
    console.log("URL is Invalid");
}
