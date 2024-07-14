// Activity 1 : Arithmetic Operations

// Task 1

function add(a, b) {
    console.log(`Addition of ${a} and ${b} = `, a+b);
}

add(4,5);

// Task 2

function subtract(a, b) {
    console.log(`Subtraction of ${a} and ${b} = `, a-b);
}

subtract(6, 9);

// Task 3

function multiply(a, b) {
    console.log(`Multiplication of ${a} and ${b} = `, a*b);
}

multiply(2, 3);

// Task 4

function divide(a, b) {
    console.log(`Division of ${a} and ${b} = `, a/b);
}

divide(4, 2);

// Task 5

function modulo(a, b) {
    console.log(`Modulo of ${a} and ${b} = `, a%b);
}

modulo(18,4);


// Activity 2 : Assignment Operators

// Task 6

let inc = 10;
console.log('Before += Operator', inc);
inc += 1;
console.log('After += Operator', inc);

// Task 7

let dec = 10;
console.log('Before -= Operator', dec);
dec -= 1;
console.log('After -= Operator', dec);


// Activity 3 : Comparison Operators

// Task 8, Task 9 & Task 10

function compare(a, b, c, d) {

    // Task 8
    if(a > b) {
        console.log(`${a} is greater than ${b}`);
    } else {
        console.log(`${b} is greater than ${a}`);
    }

    // Task 9
    if(c >= d) {
        console.log(`${c} is greater than or equals to ${d}`);
    } else {
        console.log(`${d} is greater than ${c}`);
    }

    // Task 10
    if(a == c) {
        console.log(`Value of ${a} and ${c} are equal`);
    } else {
        console.log(`Value of ${a} and ${c} are not equal`);
    }

    if(a === c) {
        console.log(`Value and type of ${a} and ${c} are equal`);
    } else {
        console.log(`Type of ${a} and ${c} are not equal`);
    }

}

compare(2, 5, '2', 1)


// Activity 4 : Logical Operators

// Task 11

let num = 10;

if(num > 0 && num <= 10) {
    console.log(`${num} is between range 0 and 10`);
}

// Task 12

num = 21;
if(num == 18 || num > 18) {
    console.log(`${num} is greater than or equal to 18`)
}

// Task 13

if(num != 18) {
    console.log(`${num} is not equal to 18`);
}

// Activity 5 : Ternary Operator

// Task 14

(num >= 18) ? console.log('Eligible to Vote') : console.log('Not eligible to Vote');
