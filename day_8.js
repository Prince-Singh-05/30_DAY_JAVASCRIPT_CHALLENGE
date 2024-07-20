// Activity 1: Template Literals

// Task 1

const person = {
    _name: "",
    get name() {
        return this._name;      
    },
    set name(newName) {
        return this._name = this.newName;
    },
    _age: 0,
    get age() {
        return this._age;      
    },
    set age(newAge) {
        return this._age = this.newAge;
    },
}


let message = `Hello! My name is ${person.name = "Prince"} and I'am ${person.age = 21} years old.`;
console.log(message);

/* Output: Hello! My name is Prince and I'am 21 years old. */

// Task 2

const multiLineString = `Hii this is a multi line string.
created using template literals.`;

console.log(multiLineString);

/* Output: 

Hii this is a multi line string.
created using template literals.

*/

// Activity 2: Destructuring

// Task 3

const numbers = [10, 5, 2003];

const [date, month] = numbers;

console.log(`Day and Month of D.O.B - ${date}/${month}`);

/* Output: Day and Month of D.O.B - 10/5 */

// Task 4

const book = {
    title: "My Book",
    author: "xyz",
    year: 2020
}

function myBook({title, author}) {
    console.log(`${title} is written by ${author}`);
}

myBook(book);

/* Output: My Book is written by xyz */

// Activity 3: Spread and Rest Operators

// Task 5

const arr = [21, 10, 5];
const newArray = [...arr, 2003];

console.log(newArray);

/* Output: [ 21, 10, 5, 2003 ] */

// Task 6

function sum(...num) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const result = sum(10,21,13,64,25);
console.log(result);

/* Output: 2018 */

// Activity 4: Default Parameters

// Task 7

function prod(a, b = 1) {
    return a*b;
}

console.log("Result of calling the prod function without second parameter - ", prod(2));

console.log("Result of calling the prod function with second parameter - ", prod(2,2));

/* Output: 

Result of calling the prod function without second parameter -  2
Result of calling the prod function with second parameter -  4

*/

// Activity 5: Enhanced Object Literals

// Task 8

const _name = "Prince";
const age = 21;
function play() {
    console.log(`${this._name} ♥ to play Basketball`);
}

const myObj = {_name, age, play};

myObj.play();

/* Output: Prince ♥ to play Basketball */

// Task 9

const firstName = "Prince";
const lastName = "Singh";
const Age = 21;

const Person = {
    [`${firstName} ${lastName}`]: {
        Age,
        occupation: "Software Engineer"
    }
};

console.log(Person);

/* Output: 

{ 
    'Prince Singh': { 
        Age: 21, 
        occupation: 'Software Engineer' 
    } 
}

*/
