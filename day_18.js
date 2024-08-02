// Activity 1: Sorting Algorithms

let arr = [5,4,9,8,10,0,3,6,2,11,7];

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function printArray(arr) {
    for(let i of arr) {
        process.stdout.write(i + " ");
    }

    console.log();
}

// Task 1

const bubbleSort = (arr) => {

    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                swap(arr, i, j);
            }
        }
    }
}

// bubbleSort(arr);
// printArray(arr);

// Task 2

function findSamallest(arr, i) {
    let mini = i;
    for(let j = i+1; j<arr.length; j++) {
        if(arr[j] < arr[mini]) {
            mini = j;
        }
    }
    return mini;
}

const selectionSort = (arr) => {

    for(let i = 0; i<arr.length; i++) {
        let minElem = findSamallest(arr, i);
        swap(arr, minElem, i);
    }
}

// selectionSort(arr);
// printArray(arr);

// Task 3

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low-1;

    for(let j = low; j <= high; j++) {
        if(arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return i+1;
}

const quickSort = (arr, low, high) => {
    if(low >= high) return;
    let p = partition(arr, low, high);

    quickSort(arr, low, p-1);
    quickSort(arr, p+1, high);
}

// quickSort(arr, 0, arr.length-1);
// printArray(arr);


// Activity 2: Searching Algorithms

// Task 4

const linearSearch = (arr, target) => {

    for(let i = 0; i<arr.length; i++) {
        if(arr[i] == target) return true;
    }

    return false;
}

console.log(linearSearch(arr, 9));

// Task 5

const binarySearch = (arr, target) => {

    let low = 0, high = arr.length-1;

    while(low <= high) {
        let mid = low + (high-low)/2;

        if(arr[mid] == target) {
            return true;
        }
        else if(arr[mid] < target) {
            low = mid+1;
        }
        else {
            high = mid-1;
        }
    }

    return false;

}

quickSort(arr, 0, arr.length-1);
console.log(binarySearch(arr, 5));

// Activity 3: String Alogorithms

let str = "abskababbakkajs";

// Task 6

const countOccur = (str) => {
    let map = {};

    for(let ch of str) {
        if(map[ch]) {
            map[ch]++;
        }
        else {
            map[ch] = 1;
        }
    }

    console.log("Character Counts:", map);
}

countOccur(str);

// Task 7

const longSubString = (str) => {
    let s = 0, maxLen = 0;
    let map = {};

    for(let e = 0; e < str.length; e++) {
        if(map[str[e]]) {
            s = Math.max(map[str[e]]+1, s);
        }

        map[str[e]] = e;
        maxLen = Math.max(maxLen, e-s+1);
    }

    console.log("Length of the longest Sub String without repetition:", maxLen);
}

longSubString(str);

// Activity 4: Array Algorithms

// Task 8

// console.log(arr);

function rotateArray(arr, k) {
    k = k % arr.length;
    let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));
    console.log(`Rotated Array: ${rotatedArray}`);
}

rotateArray(arr, 3);

// Task 9

function mergeSortedArray(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while(i < arr1.length && j<arr2.length) {
        if(arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    while(j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log(`Merged Sorted Array: ${mergedArray}`);
}

let arr1 = [2,5,6,8];
let arr2 = [0,1,3,4,9,11]

mergeSortedArray(arr1, arr2);


// Activity 5: Dynamic Programming (Optional)

// Task 10

function fibboDP(n) {
    let fib = [0,1];
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }

    console.log(`Fibonacci number at ${n} is ${fib[n-1]}`);
}

fibboDP(5);

// Task 11

// knapsack problem -> leetcode




