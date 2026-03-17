/*  pass by value (when we create a new variable and assign a primitive to it js creates an independent copy of it
                changing the new variable does not affect the original variable)
*/

let x=10
let y=x
y=20
console.log(x)  //10
console.log(y)  //20

/* pass-by-reference (when we create a new variable and assign object/array both the variables point to the same 
                     memory location and new variable affects the original)

*/
let obj={x:5}
let newObj=obj
newObj.x=10
console.log(obj.x)