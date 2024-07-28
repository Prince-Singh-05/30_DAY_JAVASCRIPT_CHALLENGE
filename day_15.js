/* Day 15: Closures */

/* Activity 1: Understanding Clousers */

// Task 1 : write a function that returns another function , where inner function access the variable from outer functions scope. call inner functions and log the result

function animal() {
    let numOfLegs = 2;

    function dog() {
        numOfLegs = 4;
        console.log(`My dog have ${numOfLegs} legs.`)
    }

    dog();

}

animal();


// Task 2: Create a closure that maintains a private counter. implement functions to increament and get the current value of the counter

function counter() {
    let currCounter = 0;

    return function incCounter() {
        console.log(`Counter increased to ${++currCounter}.`);
    }

}

const count = counter();
count();

/* Activity 2: Practical Closures */

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function uniqueIDs() {
    let id = 1000;

    return function generateNextID() {
        return ++id;
    }

}

const currID = uniqueIDs();
for (let i = 0; i < 5; i++) {
    console.log(`Curr ID is ${currID()}.`);
};

// Task 4: create a closure that captures user name, return a greet function which greets the user by its name

function greetUser(user) {
    this.user = user;

    return function message() {
        console.log(`Hi ${user}, nice to meet you.`)
    }

    // message();

}

const greet = greetUser("Prince");
greet();

/* Activity 3: Closures in loops */

// Task 5: write a loop that creates an array of functions. each function should log its index when called. use closure to ensure that each function call the correct index.

function createFunction() {
    let functions = [];

    function createFunc(index) {
        return function() {
            console.log(`Index of the function is - ${index}.`);
        };
    }

    for(let i = 0; i<3; i++) {
        functions[i] = createFunc(i);
    }

    return functions;
}

const functionArray = createFunction();
for (let i = 0; i < functionArray.length; i++) {
    functionArray[i]();
}


/* Activity 4: Module Pattern */

//Task 6: Use closures to create a simple module for managing a collection of items, implement methods to add, remove and list items.

// const itemModule = (() => {
//     let items = [];

//     function add(item) {
//         items.push(item);
//     }

//     function remove(item) {
//         items = items.filter(function(i) {
//             return i !== item;
//         })
//     }

//     function listItems() {
//         return items;
//     }

//     return {add, remove, listItems};
// })();

// itemModule.add(1);
// itemModule.add(2);
// itemModule.add(3);
// itemModule.add(4);

// console.log(itemModule.listItems());

// itemModule.remove(2);
// console.log(itemModule.listItems());

/* making a function */

function itemModule() {
    let items = [];

    function add(item) {
        items.push(item);
    }

    function remove(item) {
        items = items.filter(function(i) {
            return i !== item;
        })
    }

    function listItems() {
        return items;
    }

    return {add, remove, listItems};
};

// export {itemModule};

const ans = itemModule();
ans.add(1);
ans.add(2);
ans.add(3);
ans.add(4);

console.log(ans.listItems());

ans.remove(2);
console.log(ans.listItems());


/* Activity 5: Memoization */

// Task 7: Write a function that memoizes the result of another function. Use a closure to store the result of the previous computations.

function memoize(fn) {
    const cache = {};

    return function(num) {
        const key = JSON.stringify(num);
        if(cache[key]) {
            return cache[key];
        } else {
            const result = fn(num);
            cache[key] = result;
            return result
        }
    };
}

function slowFunction(num) {
    return num * 2;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); // Computed and cached
console.log(memoizedSlowFunction(5)); // Retrieved from cache
console.log(memoizedSlowFunction(10)); // Computed and cached
console.log(memoizedSlowFunction(10)); // Retrieved from cache

// Task 8: create a memoized version of a function which calculates the factorial of a number

function memoizeNew(fn) {
    const cache = {};
    
    return function(num) {
        const key = JSON.stringify(num);
        if(cache[key]) {
            return cache[key];
        }
        else {
            const result = fn(num);
            cache[key] = result;
            return result;
        }
    }
}

function factorial(num) {
    if(num <= 1) {
        return 1;
    }
    return num * factorial(num-1);
}

const memoizeFactorial = memoizeNew(factorial);

console.log(memoizeFactorial(6)); // calculate for factorial of 6
console.log(memoizeFactorial(9)); // cache factorial of 6 and use it for factorial of 9
console.log(memoizeFactorial(12)); //cache factorial of 9 and use it for factorial of 12
