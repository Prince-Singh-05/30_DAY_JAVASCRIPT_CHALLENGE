const person = {
    name: "Prince Singh",
    age: 22,
    greet() {
        console.log(`Hey there, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

export {person};