function Kajal() {
  return Sonam();
}

function Sonam() {
  return Sonali();
}

function Sonali() {
  return Lovely();
}

function Lovely() {
  // base case
  return true;
}

// console.log(Kajal());

function goToLunch(person) {
  if (person === 5) return true;
  console.log(person);
  return goToLunch(person + 1);
}

// console.log("outcome:", goToLunch(1));

// Loops vs Recursion

// function multiply(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }

function multiply(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  } else return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}

console.log(multiply([1, 2, 3, 4]));
