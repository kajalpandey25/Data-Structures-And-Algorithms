class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  // Appending Node
  appenNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  // Traversing Node
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      // console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }

  // Deleting Node
  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      console.log(lead);
    }
  }

  // Inserting Node
  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter > index) {
      counter++;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value: value,
      next: nextNode,
    };
  }

  // Searching Node
  searchNode(data){
    let result = undefined;
    let lead = this.head;
    let loop = true;
    while(loop){
      lead=lead.next;
      // console.log(lead);
      loop = !!lead;
      if(loop && lead.value === data){
        loop=false;
        result=lead;
      }

    }
    console.log(result);
  }
}
let list = new List(200);
list.appenNode(300);
list.appenNode(400);
list.appenNode(500);
list.appenNode(600);
list.appenNode(700);
// list.traversing();
// list.deleteNode(4);
// list.insertNode(3, 4000);
list.searchNode(600);

console.log(list);



