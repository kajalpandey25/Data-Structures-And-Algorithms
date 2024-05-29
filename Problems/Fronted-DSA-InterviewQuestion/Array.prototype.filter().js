Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, 3, 4, 5, 6, 7, 8].myFilter((x) => x % 2 === 0)); // O/P: [2,4]

// Implement Array.prototype.map()

Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([1, 2, 3, 4].myMap((x) => x * 2)); // Output: [2, 4, 6, 8]
