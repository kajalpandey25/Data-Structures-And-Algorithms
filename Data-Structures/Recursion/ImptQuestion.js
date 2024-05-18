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

function isPalindrome(x) {
  // Convert the integer to a string
  const str = x.toString();

  // Recursive function to check palindrome
  function checkPalindrome(s, start, end) {
      // Base case: if start index is greater than or equal to end index
      if (start >= end) {
          return true;
      }
      // Check the first and last characters
      if (s[start] !== s[end]) {
          return false;
      }
      // Recursive call
      return checkPalindrome(s, start + 1, end - 1);
  }

  // Start the recursion from the first and last characters of the string
  return checkPalindrome(str, 0, str.length - 1);
}

// Example usage
const x = 121;
console.log(isPalindrome(x)); // Output: true

const y = -121;
console.log(isPalindrome(y)); // Output: false

const z = 10;
console.log(isPalindrome(z)); // Output: false




