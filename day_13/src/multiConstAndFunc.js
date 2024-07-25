const name = "Prince Singh";
const isValidToVote = true;
const age = 22;


function greeting() {
    
    if(isValidToVote) {
        console.log(`Hello, my name is ${name}, and I am ${age} years old and I am eligible to vote.`);
    }
    else {
        console.log(`Hello, my name is ${name}, and I am ${age} years old but I am not eligible to vote.`);
    }
}

function sayName(name){
    console.log("Hy "+name);
}

function sayAge(age){
    console.log("Your age is "+age);
}

export {name,isValidToVote,age,sayAge,sayName,greeting};