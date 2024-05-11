// Define a class for the Node
class Node {
    constructor(data) {
        this.data = data; // Data stored in the node
        this.next = null; // Pointer to the next node, initially null
    }
}

// Define the LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Points to the head of the list, initially null
    }

    // Method to add a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If list is empty, newNode becomes the head
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode; // Append newNode to the end of the list
        }
    }
}

// Create a new linked list
const myList = new LinkedList();

// Add elements to the linked list
myList.append(1);
myList.append(2);
myList.append(3);

// Display the linked list
let current = myList.head;
while (current) {
    console.log(current.data);
    current = current.next;
}
