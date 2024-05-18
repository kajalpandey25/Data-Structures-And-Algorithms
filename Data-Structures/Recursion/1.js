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

console.log(fibRecursion(15));
