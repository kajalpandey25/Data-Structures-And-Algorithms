// Q-1: Fibonacci Number
// Fibonacci series => 0,1,1,2,3,5,8,13,55,89,144,233.......
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1
// Input: n = 3 --------->>>>> output : 2

function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

function fibRecursion(n) {
  if (n <= 1) return n;
  return fibRecursion(n - 1) + fibRecursion(n - 2);
}

// console.log(fibRecursion(15));

// Q-2 : Reverse a String
//  Input: "kajal"   ----------->>>>>>> output: "lajak"

function reverseString(str) {
  if (str === "") {
    return "";
  } else return reverseString(str.substr(1)) + str.charAt(0);
}

// console.log(reverseString("kajal"));

// Q-3 : Subset (Backtracking Algorithms using Recursion)
// Given an integer array nums of unique elements, return all possible subsets (the power set)
// The solution set must not contain duplicate subset. Return the solution in any order.

// Input: [1,2,3]   -------->>>>>>>>> output: [[],[1], [2], [1,2],[3], [1,3], [2,3], [1,2,3]]
// Input: [0]   ------------>>>>>>>> output: [[], [0]]

function subsets(nums) {
  let result = [];
  let temp = [];

  function recursiveSubsets(nums, i) {
    if(i === nums.length){
      return result.push([...temp]);
    }
    temp.push(nums[i])
    recursiveSubsets(nums, i+1);
    temp.pop();
    recursiveSubsets(nums, i+1);
  
  }
  recursiveSubsets(nums, 0);
  return result;
}

console.log(subsets([1]));
console.log(subsets([1,2,3]));

