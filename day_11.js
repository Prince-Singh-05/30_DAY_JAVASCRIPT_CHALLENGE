// Activity 1: Understanding Promises

// Task 1

const task1promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(`task1promise resolved`);
    }, 2000);
}).then((value) => {
    console.log(value);
});

// Task 2

const task2promise = new Promise(reject => {

    const x = 0;
    x = 9;
    setTimeout(() => {
        reject(new Error("task2promise with error"));
    }, 1000);
    
});

task2promise.catch(err => {
    console.error("task2 error: ", err.message);
});

// Activity 2: Chaining Promises

// Task 3

const getData = (userName, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`User Name - ${userName}`)
        }, delay);
    })
}

getData("Prince", 2000)
    .then(data => {
        console.log(data);
        return getData("Piyush", 1000);
    })
    .then(data => {
        console.log(data)
        return getData("Rohit", 2000)
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(`Error Occured: ${err.message}`);
    })


// Activity 3: Using Async/Await

// Task 4

const task4Func = async (value) => {
    console.log(value);
}

const task4promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise for task 4 is resolved")
    }, 4000);
}).then(value => {
    task4Func(value);
})

// Task 5

const task5Func = async (error) => {
    console.log("task5 error: ", error);
}

const task5promise = new Promise((resolve, reject) => {
    const x = 0;
    x = 9;
    setTimeout(() => {
        reject(new Error("task5promise with error"));
    }, 4000);
}).catch(err => {
    task5Func(err.message);
})

// Activity 4: Fetching Data from an API

// Task 6

const fetchData = fetch("https://api.restful-api.dev/objects")
    .then(response => {
        console.log(response)
    })


// Task 7

async function task7Data() {
    try {
        const fetchData = await fetch("https://api.restful-api.dev/objects");
        const response = await fetchData.json();
        console.log(response);

    } catch (err) {
        console.error(err.message);
    }
}

task7Data();

// Activity 5: Concurrent Promises

// Task 8

function multiplePromise(data, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(data+" "+delay)
        }, delay);
    })
}

async function promiseAll() {
    let promise1 = multiplePromise("promise1", 2000)
    let promise2 = multiplePromise("promise2", 1000)
    let promise3 = multiplePromise("promise3", 500)
    let promise4 = multiplePromise("promise4", 4000)

    let result = await Promise.all([promise1, promise2, promise3, promise4])
    console.log("Promise all - ")
    console.log(result);
}

promiseAll();

// Task 9

async function promiseRace() {
    let promise1 = multiplePromise("promise1", 2000)
    let promise2 = multiplePromise("promise2", 1000)
    let promise3 = multiplePromise("promise3", 500)
    let promise4 = multiplePromise("promise4", 4000)

    let result = await Promise.race([promise1, promise2, promise3, promise4])
    console.log("Promise race - ")
    console.log(result);
}

promiseRace();






