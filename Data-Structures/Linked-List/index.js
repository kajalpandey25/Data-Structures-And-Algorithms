class List{
    constructor(data){
        this.head = {
            value: data,
            next:null
        };
        this.tail = this.head;
    }
    appenNode(nodeData){
        let newNode = {
            value:nodeData,
            next:null
        };
        this.tail.next= newNode;
        this.tail = newNode;
    }
}
let list = new List(200);
list.appenNode(300)
list.appenNode(400)
console.log(list);

