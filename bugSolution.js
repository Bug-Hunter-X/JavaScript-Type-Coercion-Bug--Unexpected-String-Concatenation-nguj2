function foo(a, b) {
  // Explicit type checking and conversion
  a = Number(a);
  b = Number(b);
  // Handle potential NaN cases
  if (isNaN(a) || isNaN(b)) {
    return 0; // or throw an error
  }
  return a + b;}
console.log(foo(1, "2")); // Output: 3
console.log(foo(1, 2)); //Output: 3
console.log(foo("a",2)); //Output: 0