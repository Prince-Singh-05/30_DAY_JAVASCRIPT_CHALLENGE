// Activity 1: Linked List

// Task 1 Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    val;
    next;
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const firstNode = new Node(2);
const secondNode = new Node(10);
firstNode.next = secondNode;
console.log(firstNode);
console.log(firstNode.next);

// Task 2 Implement a LinkedList class with methods to add a node to the end, remove the node from the end and display all nodes.

class LinkedList {

    constructor() {
        this.head = null;
    }
    
    add(val) {
        let newNode = new Node(val);
        if(this.head == null) {
            this.head = newNode;
        }
        else {
            let temp = this.head;
            while(temp.next != null) temp = temp.next;
            temp.next = newNode;
        }
    }

    remove() {
        if(!this.head) {
            return null;
        }
        else if(!this.head.next) {
            return this.head = null;
        }
        let temp = this.head;
        while(temp.next.next != null) {
            temp = temp.next;
        }

        temp.next = null;
    }

    show() {
        let temp = this.head;
        while(temp != null) {
            process.stdout.write(temp.val + " -> ");
            temp = temp.next;
        }
        console.log("null");
    }
}

const ll = new LinkedList;
ll.add(3);
ll.add(5);
ll.add(7);
ll.add(2);
ll.add(19);
ll.show();
ll.remove();
ll.show();

// Activity 2: Stack

// Task 3 Implement a Stack class wtih methods push, pop and peek.

class Stack {

    constructor() {
        this.arr = [];
    }

    push(val) {
        this.arr.push(val);
    }

    pop() {
        if(this.isEmpty()) {
            throw new Error("Stack is Empty!!");
        }
        return this.arr.pop();
    }

    peak() {
        if(this.isEmpty()) {
            throw new Error("Stack is Empty!!");
        }

        return this.arr[this.arr.length-1];
    }

    isEmpty() {
        return this.arr.length == 0;
    }
}

let st = new Stack;
st.push(3);
st.push(6);
st.push(1);
st.push(19);
console.log(st.peak());
st.pop();
console.log(st.peak());


// Task 4 Use the satck class to reverse the string by puhsing all characters onto the stack and then popping them off.

let str = "Prince Singh";
let revStr = new Stack;
for(let i = 0; i<str.length; i++) {
    revStr.push(str.charAt(i));
}

let reversed = "";

while(!revStr.isEmpty()) {
    reversed += revStr.pop();
}

console.log(reversed);

// Activity 3: Queue

// Task 5 Implement a queue class with methods enqueue (add element), dequeue(remvoe element), and front(view first element).

class Queue {
    constructor() {
        this.arr = [];
    }

    enqueue(val) {
        this.arr.push(val);
    }

    dequeue() {
        if(this.isEmpty()) {
            throw new Error("Queue is Empty!!");
        }

        return this.arr.shift();
    }

    front() {
        if(this.isEmpty()) {
            throw new Error("Queue is Empty!!");
        }

        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length === 0;
    }
}

let q = new Queue;
q.enqueue(12);
q.enqueue(24);
q.enqueue(36);
q.enqueue(48);
console.log(q.front());
q.dequeue();
console.log(q.front());
q.dequeue();
console.log(q.front());

// Task 6- Use the queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

let printer = new Queue;

printer.enqueue("Task 1");
printer.enqueue("Task 2");
printer.enqueue("Task 3");
printer.enqueue("Task 4");
printer.enqueue("Task 5");

while(!printer.isEmpty()) {
    let front = printer.dequeue();
    console.log(front + " Completed.");
}

// Activity 4: Binary Tree

// Task 7 Implement a TreeNode class to represent a node in a binary tree with properties value left right.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(19);

console.log(root.left.val + " <- " + root.val + " -> " + root.right.val);

// Task 8 Implement a BinaryTree class with moethods for inserting values and performing in-order traversal to display nodes.

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new TreeNode(val);
        if(this.root == null) {
            this.root = newNode;
            return;
        }

        this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {
        if(node.val > newNode.val) {
            if(node.left === null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if(node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraversal(root = this.root) {
        if(root == null) return null;
    
        this.inOrderTraversal(root.left);
        process.stdout.write(root.val + " -> ");
        this.inOrderTraversal(root.right);
    }
}

let bt = new BinaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(25);
bt.insert(3);
bt.insert(23);
bt.insert(10);
bt.inOrderTraversal();


// Activity 5: Graph (Optional)

// Task 9 Implement a Graph class wtih methods to vertices, add edeges and perform a breadth-frsit search(BFS).


