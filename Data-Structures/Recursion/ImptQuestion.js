//  Most Asked Recursion Question for DSA Interviews

// Q 1 : Factorial of n
// n-> 5 -> 5*4*3*2*1

function factorial(n) {
  if (n === 0) {
    return 1;
  } else return n * factorial(n - 1);
}

// console.log(factorial(5));

// Q 2 : Create an array with range of numbers
// Input: start - 1, end - 5 -------->>>>> Output:

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// console.log(rangeOfNumbers(0, 5));


// Q 3 : Given an integer x, return true if x is a palinfrome, and false otherwise.
// Input : X = 121   ------------>>>>>>>> output : true;



