// Activity 1: Basic Recursion

// Task 1 Write a recusive function to calculate the factorial of a number.

function factorial(num) {
    if(num <= 1) {
        return 1;
    }

    return num * factorial(num-1);
}

console.log(factorial(4));
console.log(factorial(5));

// Task 2 Write a recursive to calculate the nth fibonacci number. Log the result for a few test case.

const fibo = (num) => {
    if(num == 0) return 0;
    if(num == 1) return 1;

    return fibo(num-1) + fibo(num-2);
}

console.log(fibo(5));
console.log(fibo(6));

// Activity 2: Recursion with Arrays

// Task 3 Write a recursive function to find the sum of all elements in an array. Log the result to the console for few test cases.

function sumOfElem(arr = [], n) {
    if(n < 0) {
        return 0;
    }

    return sum = arr[n] + sumOfElem(arr, --n);
}

console.log(sumOfElem([1,2,3,4,5], 4))
console.log(sumOfElem([1,2,6,7,6,9,0], 6))


// Task 4 Write a recusive function to find the maximum elemtn in an array. Log the result for a few test cases.

function maxElem(arr = [], n) {
    if(n < 0) {
        return -1;
    }

    return Math.max(arr[n], maxElem(arr, --n));
}

console.log(maxElem([1,2,3,4,5], 4))
console.log(maxElem([1,2,6,7,6,9,0], 6))

// Activity 3: String Manipulation with Recursion

// Task 5 Write a recursive function to rever a string. Log the result for a test case.

function reverseString(str) {
    if(str === "") {
        return "";
    }

    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("hello"))
console.log(reverseString("prince"))
console.log(reverseString("singh"))

// Task 6 write a recursive function to check if a string is a palindrome. Log the result for a few test case.

// function checkPalindrome(str) {
    
//     let revStr = reverseString(str);
//     if(str === revStr) return true;
//     else return false;
// }

function checkPalindrome(str, s = 0, e = str.length-1){
    if(str.length == 0) return true;
    if(s>=e) return true;
    if(str.charAt(s) != str.charAt(e)) return false;
    return checkPalindrome(str, s+1, e-1);
}

console.log(checkPalindrome("abba"))
console.log(checkPalindrome("racecar"))
console.log(checkPalindrome("prince"))

// Activity 4: Recursive Search

// Task 7 Write a recusive function to perform a binary search on a sorted arary. Log the index of the target elemnt for a few test cases.

function binarySearch(arr = [], target, l = 0, h = arr.length-1) {
    if(l > h) {
        return -1;
    }

    let mid = l + Math.floor((h-l)/2);
    if(arr[mid] == target) return mid;

    if(arr[mid] < target) {
        return binarySearch(arr, target, mid+1, h);
    }

    return binarySearch(arr, target, l, mid-1);
}

// const arr = [2, 3, 4, 9, 9 ,9, 12, 14, 51];
// console.log(binarySearch(arr, 14))
// console.log(binarySearch(arr, 2))

console.log(binarySearch([1,2,3,4,5,6], 3));
console.log(binarySearch([-1,0,1,1,1,1,2,5,6,7,7,9,12], 7));

// Task 8 Write a recursive function to count the occurences of a target elemnet in arrary and log the result for few test cases.

function linearSearch(arr = [], target, n = arr.length-1, count = 0) {
    if(n < 0) return count;

    if(arr[n]==target) ++count;
    return linearSearch(arr, target, --n, count);
}

console.log(linearSearch([1,2,3,4,3,5,3,6], 3));
console.log(linearSearch([-1,0,1,7,1,7,2,5,6,7,7,9,12], 7));


// Activity 5: Tree Traveersal (Optional)

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(19);

// Task 9 Write a recusive function to perform an in-oder tarversal of a binary tree. Log the nodes as they are visited.

function inOrderTraversal(root) {
    if(root == null) return;
    inOrderTraversal(root.left);
    process.stdout.write(root.val + " ");
    inOrderTraversal(root.right);
}

inOrderTraversal(root);
console.log();

// Task 10 Write a recusive function to calculate the depth of a binary tree. Log the result for a few test cases.

function depthOfBT(root) {
    if(root == null) return 0;
    return 1+Math.max(depthOfBT(root.left), depthOfBT(root.right));
}

// depthOfBT(root);

console.log(depthOfBT(root));
root.left.left.left = new TreeNode(1);
console.log(depthOfBT(root));
inOrderTraversal(root);
console.log()




