class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let lastNode = this.head;
        while (lastNode.next !== null) {
            lastNode = lastNode.next;
        }
        lastNode.next = newNode;
    }

    printList() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.data + " -> ");
            currentNode = currentNode.next;
        }
        console.log("null");
    }
}

// Example usage
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

// Print the linked list
linkedList.printList();
