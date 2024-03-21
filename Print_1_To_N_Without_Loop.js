// Print numbers from 1 to N without the help of loops.

// Example 1:

// Input:
// N = 10
// Output: 1 2 3 4 5 6 7 8 9 10

// Example 2:

// Input:
// N = 5
// Output: 1 2 3 4 5

class Solution{
    constructor() {
  this.s = ""; // Initialize an empty string to store the numbers.
}

printNosRecur(N) {
  if (N === 0) {
    return; // Base case: return when N reaches 0.
  }
  this.printNosRecur(N - 1); // Recursive call to printNosRecur() with N-1.
  this.s += N + " "; // Append N to the string s.
}

printNos(N) {
  this.printNosRecur(N); // Call the printNosRecur() function.
  console.log(this.s); // Print the final string s.
}
}
