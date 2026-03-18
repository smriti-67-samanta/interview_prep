/*  arrow functions are the shorter syntax of function expression, introduced in ES^ and having some differences from normal functions.
         1. Inherits this from surrounding lexical scope
         2. does not need own argument.
         3.not hoisted
*/


//example (normal function)


function multiply(a, b) {
    return a * b;
}
console.log(multiply(3, 4)); // 12

// example (arrow function)
const multiply2 = (a, b) => a * b;

console.log(multiply2(3, 4)); // 12