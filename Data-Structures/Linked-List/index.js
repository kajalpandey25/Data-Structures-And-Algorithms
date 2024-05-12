class List {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appenNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      // console.log(currentNode);
      currentNode=currentNode.next;
      counter++;
    }
  }

  deleteNode(index){
     let counter = 1;
     let lead = this.head;
     if(index===1){
        this.head= this.head.next;
     } else{
      while(counter<index-1){
        lead=lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      console.log(lead);
     }
  }
}
let list = new List(200);
list.appenNode(300);
list.appenNode(400);
list.appenNode(500);
list.appenNode(600);
list.appenNode(700)
list.traversing();
list.deleteNode(4);

console.log(list);
