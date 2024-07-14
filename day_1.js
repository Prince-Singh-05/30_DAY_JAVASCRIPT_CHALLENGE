// Challange 1: https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge/30-days-javascript-challenge/section/515627/lesson/3196994

// Activity 1

var todaysDate=13
let currentMonth="July"
console.log(`Todays date is ${todaysDate}`);
console.log(`The current month is ${currentMonth}`);

// Activity 2

const amIMotivated=true
console.log(amIMotivated);

// Activity 3

let currentYear=2024
let designation="learner"
let consistency=true
let myself=new Object({ 
    name:"Vaibhav",
    languageLearning:"javascript",
    dayInChallange:1,
})

let favYoutubers= new Array("Hitesh sir","Harkirat","Piyush Garg")

console.table([currentYear, typeof(currentYear)])
console.table([designation, typeof(designation)])
console.table([consistency, typeof(consistency)])
console.table([myself, typeof(myself)])
console.table([favYoutubers, typeof(favYoutubers)])

// Activity 4

let loggedIn="LOGGED IN"
console.log(`status initially is ${loggedIn}`);
loggedIn="LOGGED OUT"
console.log(`status after reassigning is ${loggedIn}`);

// Activity 5

// referring to the const variable amIMotivated in // Activity 2

/*
amIMotivated=false
console.log(amIMotivated); // TypeError: Assignment to constant variable.
*/