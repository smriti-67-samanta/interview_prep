/* var --> global scope
           hoisted, initialized as undefined
           can be reassigned and redeclared 

   let --> block scope
           hoisted but in TDZ
           can be reassigned but can't be redeclared

   const --> block scope
             hoisted but in TDZ
             can't be reassigned and redeclared
*/

//example-1(var)
console.log(a) //undefined
var a=5
console.log(a) //5

//example-2(let)
//console.log(b) //reference error
let b=10
console.log(b) //10

//example-3(const)
//console.log(c) //reference error
const c=15
console.log(c) //15