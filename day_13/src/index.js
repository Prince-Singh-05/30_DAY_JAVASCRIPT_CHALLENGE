
// Activity 1: Creating and Exporting Modules

// Task 1 Create a module that exports a function to add two numbers. Import and use this module in another script.

import add from "./add.js";
const result = add(4, 6);
console.log(result);

// Task 2 Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import {person} from "./person.js";
person.greet();

// Activity 2: Named and Default Exports

// Task 3 Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import { subtract, multiply, divide } from "./named_export.js";

console.log(subtract(3, 8));
console.log(multiply(3, 8));
console.log(divide(3, 8));

// Task 4 Create a module that exports a single function using default export. Import and use this function in another script.

import greetMsg from "./default_export.js";
greetMsg();

// Activity 3: Importing Entire Modules

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import { greeting } from "./multiConstAndFunc.js";
greeting();

//Activity 4: Using Third-Party Modules

// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import lodash from 'lodash';
console.log(lodash.add(38, 94));
console.log(lodash.random(1, 100));

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.

import axios from 'axios';
axios.get("https://api.restful-api.dev/objects").then(response => {
    console.log(response.data);
});

// Activity 5: Module Bundling (Optional)

// Task 8: Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.




