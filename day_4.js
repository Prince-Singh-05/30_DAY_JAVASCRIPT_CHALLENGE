
// Activity 1: For loop

// Task 1

function print1to10() {

    for(let i = 1; i <= 10; i++) {

        // console.log() prints every digit in newline
        // console.log(i);

        // while using process.stdout we can print the digits in same line
        process.stdout.write(`${i} `);
    }
    console.log();
}

print1to10();

// Task 2

function multiplicationTable(number) {

    for(let i = 1; i <= 10; i++) {
        console.log(`${number} X ${i} = ${number * i}`);
    }
}

multiplicationTable(5);


// Activity 2: While loop

// Task 3

function sum1to10() {
    let limit = 10;
    let sum = 0;

    while(limit) {
        sum += limit;
        limit--;
    }

    console.log(sum);
}

sum1to10();

// Task 4

function print10to1() {

    let limit = 10;
    while(limit) {
        process.stdout.write(`${limit} `);
        limit--;
    }

    console.log();
}

print10to1();

// Activity 3: DO...While loop

// Task 5

function print1to5() {

    let limit = 1;
    do {
        process.stdout.write(`${limit} `);
        limit++;
    } while(limit <= 5);

    console.log();
}

print1to5();

// Task 6

function factorial(num) {

    let fact = 1;

    do {
        fact *= num;
        num--;
    } while(num);

    console.log(fact);
}

factorial(10);

// Activity 4: Nested loops

// Task 7

function printPattern(height) {

    for(let i = 1; i <= height; i++) {
        for(let j = 1; j <= i; j++) {
            process.stdout.write(`* `);
        }

        console.log();
    }
}

printPattern(5);

// Activity 5: Loop control statements

// Task 8

function skip5() {

    for(let i = 1; i<=10; i++) {
        if(i == 5) {
            continue;
        }

        process.stdout.write(`${i} `);
    }
    console.log();
}

skip5();

// Task 9

function breakAt7() {
    for(let i = 1; i<=10; i++) {
        if(i == 7) {
            break;
        }

        process.stdout.write(`${i} `);
    }

    console.log();
}

breakAt7();

