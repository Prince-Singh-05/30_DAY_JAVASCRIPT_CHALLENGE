// Activity 1: Selecting and Manipulating Elements

// Task 1

const container = document.getElementById("container");
container.innerHTML = "Changed Using GetElementById method.";

/* Output: Changed Using GetElementById method */

// Task 2

const myClass = document.getElementsByClassName("myClass");
myClass[0].style.backgroundColor = "red";

/* Output: Changed background color to red Using GetElementByClassName method */

// Activity 2: Creating and Appending Elements

// Task 3

const newDiv = document.createElement("div");
newDiv.textContent = "This is a new div";
document.body.appendChild(newDiv);

/* Output: A new div element is created and added in html file with text - This is a new div */

// Task 4

const myList = document.querySelector("#myList");
const newListElement = document.createElement("li");
newListElement.textContent = "Basketball♥";
myList.appendChild(newListElement);

/* Output:

Previous list - 
Cricket
Footbal

New List - 
Cricket
Football
Basketball♥

*/

// Activity 3: Removing Elements

// Task 5

myClass[0].remove();

/* Output: Removed div element with class name - myClass */

// Task 6

myList.lastChild.remove();

/* Output: Removed Basketball♥ from ul */

// Activity 4: Modifying Attributes and Classes

// Task 7

const myImg = document.querySelector("#myImg");
myImg.setAttribute(
    "src", 
    "https://images.unsplash.com/photo-1620429485215-e5e0e295c6f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"
);

/* Output: Changed image src */

// Task 8

myList.classList.add("red");
myList.classList.remove("red");

/* Output: first adding a calss name red to ul  and then remove the same calss from ul */

// Activity 5: Event Handling

// Task 9

const cahngeContentBtn = document.querySelector("#cahnge-content");
const content = document.querySelector("#content");
cahngeContentBtn.addEventListener("click", () => {
    content.textContent = "This is changed content";
});

/* Output: This is content becomes -> This is changed content when clicked on Change Button  */

// Task 10

cahngeContentBtn.addEventListener("mouseover", () => {
    cahngeContentBtn.style.borderColor = "black";
});

/* Output: Border color of the Change Button becomes black */

