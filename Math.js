//fibonacci
//fib(2) op:[0,1]
//fib(3) op:[0,1,1]
//fib(4) op:[0,1,1,2]
function fib(n) {
  let fib = [0, 1];
  if (n <= 2) return false;
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

//console.log(fib(7))

//factorial of number
//factorial(4)==4*3*2*1==24; op:24
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
//console.log(factorial(5));
// Prime number
function prime(n) {
  for (let i = 2; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
//console.log(prime(10))
//power of two
function power(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
//console.log(power(8));
