// Day 3: Control Structures

// Activity 1: If-Else Statements

// Task 1

let num = 5;

if(num < 0) {
    console.log(`${num} is negative`);
} else if (num > 0) {
    console.log(`${num} is positive`);
} else {
    console.log(`${num} is equal to zero`);
}

// Task 2

let age = 17;

if(age >= 18) {
    console.log(`Your age is ${age}, thus you are eligible to vote`);
} else {
    console.log(`Your age is ${age}, thus you are not eligible to vote`);
}

// Activity 2: Nested if-else statements

// Task 3

let num1 = 10, num2 = 5, num3 = 10;

if(num1 > num2) {
    if(num1 > num3) {
        console.log(`${num1} is largest`);
    } else {
        console.log(`${num3} is largest`);
    }
} else {
    if(num2 > num3) {
        console.log(`${num2} is largest`);
    } else {
        console.log(`${num3} is largest`);
    }
}

// Activity 3: Switch case

// Task 4

let day = 2;

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;

    default:
        console.log('Please! Enter the day between 1 and 7 only')
        break;
}


// Task 5

let score = 95;

switch (true){
    case (score >= 90):
        console.log("A")
        break;
    case (score >= 80 && score < 90):
        console.log('B')
        break;
    case (score >= 70 && score < 80):
        console.log('C')
        break;
    case (score >= 60 && score < 70):
        console.log('D')
        break;
    case (score >= 50 && score < 60):
        console.log('F')
        break;
    default:
        console.log("Fail")
} 


// Activity 4: Conditional (Ternary) operator

// Task 6

let number = 50;

(number%2 != 0) ? console.log(`${number} is odd`) : console.log(`${number} is even`);


// Activity 5: Combining Conditions

// Task 7

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}





