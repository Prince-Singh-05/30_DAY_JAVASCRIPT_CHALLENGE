// Activity 1: Class Definition

// Task 1 Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log(`Hi there, my name is ${this.name} and I am ${this.age} years old!. Nice to meet ya :)`);
    }

}

const prince = new Person("Prince", 21);
prince.greeting();

// Task 2 Add a method to the Person class that updates the age property and logs the updated age.

Person.prototype.setAge = function (age) {
    this.age = age;
}
Person.prototype.sayName = function () {
    console.log(`${this.name}`);
}
const rohan = new Person("Rohan", 34);
rohan.setAge(30);
rohan.greeting();
rohan.sayName();

// Activity 2: Class Inheritance

// Task 3 Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.

class Student extends Person {

    static numOfStudent = 0;
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
        // this.numOfStudent++;
        console.log(`Number of student - ${++Student.numOfStudent}`);
    }

}

const mohit = new Student("Mohit", 23, "20BCS9847");
console.log(`Mohit's student ID is ${mohit.studentId}.`);

// Task 4 Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

Student.prototype.greeting = function () {
    console.log(`Hi there, I am ${this.name}, my student id is ${this.studentId} and I am ${this.age} years old.`);
}

mohit.greeting();


// Activity 3: Static Methods and Properties

// Task 5 Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

Person.genericGreeting = function () {
    console.log("This is an static method in Person class.");
}

// mohit.genericGreeting() // this line give the error genericGreeting not defined
Person.genericGreeting(); // static methods are called directly by class name

// Task 6 Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

const student1 = new Student("Pushpraj", 22, "20BCS9866");
console.log(student1);

const student2 = new Student("Prince", 21, "20BCS1058");
console.log(student2);

// console.log(Student.numOfStudent);

// Activity 4: Getters and Setters

// Task 7 Add a getter method to the Person class to return the full name (assume a FirstName and LastName property). Create an instance and log the full name using the getter.

// Task 8 Add a setter method to the Person class to update the name properties (FirstName and LastName). Update the name using the setter and log the updated full name.

Person.FirstName = "";
Person.LastName = "";

Person.prototype.setFullName = function (FirstName, LastName) {
    Person.FirstName = FirstName;
    Person.LastName = LastName;
}

Person.prototype.getFullName = function () {
    console.log(`My full name is ${Person.FirstName} ${Person.LastName}.`);
}

const person1 = new Person("Radha", 20);
person1.setFullName("Radha", "Rani");
person1.getFullName();

// Activity 5: Private Fields (Optional)

// Task 9 Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    #balance = 0;

    deposite = (amount) => {
        if(amount > 0) {
            this.#balance += amount;
            console.log(`${amount} debited to your balance.`);
        }
        else {
            console.log("amount must be in positive for deposite.")
        }
    }

    withdraw = (amount) => {
        if(amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`${amount} credited from your balance.`);
        }
        else {
            console.log("Insufficient balance")
        }
    }

    getBalance() {
        console.log(`Your current balance is ${this.#balance}.`);
    }
}


// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

const account1 = new Account();
account1.getBalance();
account1.deposite(100);
account1.getBalance();
account1.withdraw(40);
account1.getBalance();










