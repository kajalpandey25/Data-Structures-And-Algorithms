class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}
class BSTree {
  constructor() {
    this.root = null;
  }
  isTreeEmpty() {
    return this.root === null;
  }
  makeTree(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  // Inserting Node
  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    }else{
      if(root.left === null){
        root.left = newNode;
      }else{
        this.insertNode(root.right, newNode)
      }
    }
  }
}
let bst = new BSTree();
bst.makeTree(20);
bst.makeTree(10);
bst.makeTree(5);
console.log(bst);
