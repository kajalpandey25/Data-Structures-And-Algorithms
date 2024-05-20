// Q-1 : Palindrome Number
// An integer is a palindrome when it reads the same forword and backward.

// I/P: X = 121   --------->>>>>>>>>> O/P: TRUE
// I/P: X = 10    --------->>>>>>>>>> O/P:FALSE

const isPalindrome = function (x) {
  return x<0 ? false:  (x === +x.toString().split("").reverse().join(""));
};

const res = isPalindrome(121);
console.log(res);

// 121 => "121" => ["1", "2", "1"] => ["1", "2", "1"] => "121"

// An integer is a palindrome when it reads the same forword and backward.

function isPalindrome2(str) {
  // Step 1: Normalize the string by converting it to lowercase
  const normalizedStr = str.toLowerCase();
  
  // Step 2: Remove non-alphanumeric characters (optional)
  const alphanumericStr = normalizedStr.replace(/[^a-z0-9]/g, '');
  
  // Step 3: Reverse the string
  const reversedStr = alphanumericStr.split('').reverse().join('');
  
  // Step 4: Compare the original string with the reversed string
  return alphanumericStr === reversedStr;
}

// Example usage:
console.log(isPalindrome2("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome2("racecar")); // true
console.log(isPalindrome2("hello")); // false
