// Q-1: Fibonacci Number
// Fibonacci series => 0,1,1,2,3,5,8,13,55,89,144,233.......
// F(0) = 0, F(1) = 1
// F(n) = F(n-1) + F(n-2), for n > 1

// Input: n = 3 --------->>>>> output : 2

const fib = function (n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
};
// console.log(fib(5));

function fibRecursion(n) {
    if (n <= 1) return n;
    return fibRecursion(n - 1) + fibRecursion(n - 2);
  }
 
console.log(fibRecursion(6));
