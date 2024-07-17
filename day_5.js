// Activity 1: Function Declaration

// Task 1

function evenOrOdd(number) {
    if(number % 2 === 0) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
}

evenOrOdd(7);

/* Output: 7 is odd */

// Task 2

function sqOfNumber(number) {
    let square = number * number;
    return square;
}

console.log(sqOfNumber(5));

/* Output: 25 */

// Activity 2: Function Expression

// Task 3

function maxOfTwoNumbers(num1, num2) {
    if(num1 > num2) {
        console.log(`${num1} is max`);
    } else {
        console.log(`${num2} is max`);
    }
}

maxOfTwoNumbers(10, 8);

/* Output: 10 is max */

// Task 4

function concat(str1, str2) {
    return str1 + " " + str2;
}

console.log(concat("Prince", "Singh"));

/* Output: Prince Singh */

// Activity 3: Arrow Functions

// Task 5

const sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(4, 8));

/* Output: 12 */

// Task 6

const includeChar = (str, ch) => {
    return str.includes(ch);
}

console.log(includeChar("Prince Singh", 'w'));

/* Output: false */

// Activity 4: Function Parameters and Default Values

// Task 7

const product = (num1, num2=9) => {
    return num1 * num2;
}

console.log(product(7));

/* Output: 63 */

// Task 8

const greet = (Name, Age=21) => {
    console.log(`Hi ${Name}(${Age}), Welcome to 30 Days Javascript Challenge`)
}

greet("Prince");

/* Output: Hi Prince(21), Welcome to 30 Days Javascript Challenge */

// Activity 5

// Task 9

const callBack = (fun, n) => {
    for(let i = 1; i<=n; i++) {
        fun();
    }
}

function fun() {
    console.log("callback function called from Task 9");
}

callBack(fun, 3);

/* Output

callback function called from Task 9
callback function called from Task 9
callback function called from Task 9

*/

// Task 10

const validToVote = (calcAge, isValid, birthYear) => {
    return isValid(calcAge(birthYear));
}

function calcAge(birthYear) {
    let age = 2024 - birthYear;
    console.log(`Your age is ${age}`);
    return age;
}

function isValid(calcAge) {
    return calcAge > 18;
}

console.log(validToVote(calcAge, isValid, 2003));

/* Output

Your age is 21
Valid to vote
undefined   // can any body explain me why this undefined gets printed

*/

