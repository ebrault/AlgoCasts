// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  let cache = {};
  return function(...args) {
    if(cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) {
    return n;
  } else {
    return fib(n-1) + fib(n-2)
  }
}

fib = memoize(fib);

module.exports = fib;

// Solution 1:
// Approx. exponential runtime
// function fib(n) {
//   if (n < 2) {
//    return n;
//   } else {
//     return fib(n-1) + fib(n-2)
//   }
// }

// Solution 2:
// function fib(n) {
//   // Linear runtime
//   let results = [0, 1];
//   for (let i = 2; i <= n; i++) {
//     const a = results[i-1]
//     const b = results[i-2]
//     results.push(a + b)
//   }
//   return results[n];
// }
