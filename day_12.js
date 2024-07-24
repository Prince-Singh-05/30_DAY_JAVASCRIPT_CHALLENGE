// Activity 1: Basic Error Handling with Try-Catch

// Task 1

const task1Func = () => {
    try {
        data == 1;
    } catch (err) {
        console.log(`Error occured in task 1 - ${err.message}`);
    }
}

task1Func();

// Task 2

const num = 8;
const den = 0;

const task2Func = (num, den) => {
    try {
        if(den > 0) {
            console.log(num/den);
        }
        else {
            throw new Error(`Denominator can not be zero`);
        }
    } catch (error) {
        console.log(`Error occured in task 2 - ${error.message}`);
    }
}

task2Func(num, den);

// Activity 2: Finally Block

// Task 3

const task3Func = () => {
    try {
        console.log("Inside the try block")
    } catch (error) {
        console.log("Inside the cath block")
    } finally {
        console.log("Inside the finally block")
    }
}

task3Func();

// Activity 3: Custom Error Objects

// Task 4

const age = 12;
const task4Func = (age) => {
    try {
        if(age < 18) {
            throw new Error(`Get lost you are not eligible to drink`)
        }
        console.log("Sure, Here is your drink! Enjoy")
    } catch (error) {
        console.log(`Error occured in task 4 - ${error}`)
    }
}

task4Func(age);

// Task 5

const _name = "";
const greet = (name) => {
    try {
        if(name.trim().length === 0) {
            throw new Error(`No name is provided, Please enter your name correctly!`)
        }
        else {
            console.log(`Hi ${name}, have a great day ahead ♥`)
        }
    } catch (error) {
        console.log(`Error occured in task 5 - ${error.message}`);
    }
}

greet(_name);

// Activity 4: Error Handling in Promises

// Task 6

const task6promise = new Promise((resolve, reject) => {
    const randNum = Math.floor(Math.random() * 10);

    if(randNum > 5) {
        resolve(randNum);
    }
    else {
        reject(`Promise rjected as the randNum <= 5, Please try again`);
    }

}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(`Error occured in task 6 - ${err}`)
})

// Task 7

const task7Func = async (msg, response) => {
    try {
        if(response == 1) {
            console.log(msg);
        }
        else {
            throw new Error(msg);
        }
    } catch (e) {
        console.log(`Error occured in task 7 - ${e.message}`)
    }
}

const task7promise = new Promise((resolve, reject) => {
    const randNum = Math.floor(Math.random() * 10);

    if(randNum > 5) {
        resolve(randNum);
    }
    else {
        reject(`Promise rjected as the randNum <= 5, Please try again`);
    }

}).then(data => {
    task7Func(data, 1);
}).catch(err => {
    task7Func(err, 0);
})

// Activity 5: Graceful Error Handling in Fetch

// Task 8

const data = fetch("https://api.com/")
    .catch(error => 
        console.log(`Error occured in task 8 - ${error.message}`)
    );

// Task 9

const task9Func = async () => {
    try {
        const data = await fetch("https://api.restful-api.dev/objects/-1");
        const response = await data.json();
        console.log(response);
    }
    catch(err) {
        console.log(`Error occured in task 9 - ${err}`);
    }
}

task9Func();







