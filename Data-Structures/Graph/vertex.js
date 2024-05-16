class Graph {
  constructor() {
    this.data = {};
  }

  //Add Vertex in Graph
  addVertex(vertex) {
    if (!this.data[vertex]) {
      this.data[vertex] = [];
    }
  }

  // Add Edge in Graph
  addEdge(v1, v2) {
    if (!this.data[v1]) {
      this.addVertex(v1);
    }
    if (!this.data[v2]) {
      this.addVertex[v2];
    }
    this.data[v1].push(v2);
    this.data[v2].push(v1);
  }

  // Remove Edge in Graph
  removeEdge(v1, v2) {
    this.data[v1] = this.data[v1].filter((item) => {
      // console.log(item);
      return item != v2;
    });

    this.data[v2] = this.data[v2].filter((item) => {
      // console.log(item);
      return item != v1;
    });
  }

  // Remove Vertex in Graph
  removeVertex(vertex) {
    if (!this.data[vertex]) {
      return;
    }
    for (let item of this.data[vertex]) {
      console.log(item);
      this.removeEdge(vertex, item);
    }

    delete this.data[vertex];
  }
}

const graph1 = new Graph();
graph1.addVertex("A");
graph1.addVertex("B");
graph1.addVertex("C");
graph1.addVertex("D");
// console.log(graph1.data);

graph1.addEdge("A", "C");
graph1.addEdge("A", "B");
graph1.addEdge("B", "C");
graph1.addEdge("B", "D");

// graph1.removeEdge("A", "B");
// graph1.removeEdge("B", "D");

graph1.removeVertex("A");
graph1.removeVertex("D")

console.log(graph1.data);
