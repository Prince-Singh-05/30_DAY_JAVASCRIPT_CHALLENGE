// Activity 1: Basic Event Handling

// Task 1

const task1Btn = document.querySelector("#task1Btn");
const task1Para = document.querySelector("#task1Para");

task1Btn.addEventListener("click", () => {
    task1Para.textContent = "This para is changed.";
});

// Task 2

const task2Img = document.querySelector("#task2Img");

task2Img.addEventListener("dblclick", () => {
    task2Img.classList.toggle("hide");
});

// Activity 2: Mouse Events

// Task 3

const task3div = document.querySelector(".task3div");

task3div.addEventListener("mouseover", () => {
    task3div.classList.add("changeBgcolor");
});

// Task 4

task3div.addEventListener("mouseout", () => {
    task3div.classList.remove("changeBgcolor");
});

// Activity 3: Keyboard Events

// Task 5

const act3Inp = document.querySelector(".act3Inp");

act3Inp.addEventListener("keydown", (event) => {
    let str = event.key;
    console.log(str);
});

// Task 6

act3Inp.addEventListener("keyup", (event) => {
    console.log(event.target.value);
});

// Activity 4: Form Events

const task7form = document.querySelector("#task7form");

task7form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(task7form);
    const formObj = {};

    formData.forEach((data, key) => {
        formObj[key] = data;
    });
    console.log(`Form Data: `, formObj);
});

// Task 8

const task8select = document.querySelector("#task8select");
const task8para = document.querySelector("#task8para");

task8select.addEventListener("change", (event) => {
    task8para.textContent = `Great Choice - ${event.target.value}`;
});

// Activity 5: Event Delegation

// Task 9

const task9ul = document.querySelector("#task9ul");

task9ul.addEventListener("click", (event) => {
    if(event.target && event.target.nodeName === "LI") {
        console.log(`You clicked on - ${event.target.textContent}`);
    }
});

// Task 10

const task10parent = document.querySelector(".task10parent");
const addChildBtn = document.querySelector(".addChildBtn");

function addChild() {
    const newChild = document.createElement("div");
    newChild.className = "child";
    newChild.textContent = `child ${
        document.querySelectorAll(".child").length + 1
    }`;

    task10parent.appendChild(newChild);
};

addChildBtn.addEventListener("click", addChild);

task10parent.addEventListener("click", (event) => {
    if(event.target && event.target.className === "child") {
        console.log(`Dynamically added child clicked: ${event.target.textContent}`);
    }
});


