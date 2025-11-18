// Getting True From Three Variables Swapping Each Question Mark With Operator To Get True
// The Variables
let a = 20;
let b = 30;
let c = 10;

// First Statement
// console.log(a ? b && a ? c || a ? b);
// The Solution
console.log((a < b && a > c) || a < b); //True

// Second Statement
// console.log(a ? b ? a ? c);
// The Solution
console.log(a < b && a > c); //True

// Third Statement
// console.log(?(a ? b) && !(a ? b) && ?(a ? c) && ?(a ? c));
// The Solution
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); //True
