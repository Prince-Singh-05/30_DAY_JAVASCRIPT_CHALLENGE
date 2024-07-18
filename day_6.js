// Activity 1: Array Creation and Access

// Task 1

let arr = [1,2,3,4,5];
console.log(arr);

/* Output: [ 1, 2, 3, 4, 5 ] */

// Task 2

console.log("First element: ", arr[0]);
console.log("Last element: ", arr[4]);

/* Output: 

First element:  1
Last element:  5

*/

// Activity 2: Array Methods (Basic)

// Task 3

arr.push(6);
console.log("After adding 6 at end - ", arr);

/* Output: After adding 6 at end -  [ 1, 2, 3, 4, 5, 6 ] */

// Task 4

arr.pop();
console.log("After removing last element - ", arr);

/* Output: After removing last element -  [ 1, 2, 3, 4, 5 ] */

// Task 5

arr.shift();
console.log("After removing first element - ", arr);

/* Output: After removing first element -  [ 2, 3, 4, 5 ] */

// Task 6

arr.unshift(1);
console.log("After adding 1 at front - ", arr);

/* Output: After adding 1 at front -  [ 1, 2, 3, 4, 5 ] */

// Activity 3: Array Methods (Intermediate)

// Task 7

const maparr = arr.map((num) => {
    return num*2;
});

console.log("New array using map on arr: ", maparr);

/* Output: New array using map on arr:  [ 2, 4, 6, 8, 10 ] */

// Task 8

const filterarr = arr.filter((num) => {
    if(num%2 == 0) {
        return num;
    }
});

console.log("New array using filter on arr: ", filterarr);

/* Output: New array using filter on arr:  [ 2, 4 ] */

// Task 9

const value = 0;
const sum = arr.reduce((first, second) => {
    return first + second;
});

console.log(sum);

/* Output: 15 */

// Activity 4: Array Iteration

// Task 10

console.log(`<-- Printing arr using for loop -->`)
for (let i = 0; i < arr.length; i++) {
    console.log(`Element ${i+1} = `, arr[i]);
}

/* Output: 

<-- Printing arr using for loop -->
Element 1 =  1
Element 2 =  2
Element 3 =  3
Element 4 =  4
Element 5 =  5

*/

// Task 11

console.log(`<-- Printing arr using foreach loop -->`);
let i = 1;
arr.forEach(ele => {
    console.log(`Element ${i} = `, ele);
    i++;
});

/* Output: 

<-- Printing arr using foreach loop -->
Element 1 =  1
Element 2 =  2
Element 3 =  3
Element 4 =  4
Element 5 =  5

*/

// Activity 5: Multi-dimensional Arrays

// Task 12

console.log(`<-- Printing 2D arr - matrix -->`)
const matrix = [
    [1,2,3],
    [4,5,6]
];

console.log(matrix);

/* Output: 

<-- Printing 2D arr - matrix -->
[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

*/

// Task 13

console.log(matrix[1][1]);

/* Output: 5 */
