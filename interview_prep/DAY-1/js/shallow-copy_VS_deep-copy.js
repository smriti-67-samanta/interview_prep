/* shallow copy --> copies only top level properties
                method--> {...obj}

    deep copy --> copies all the level including nested objects.it's a fully independent clone
                method-->JSON.parse(JSON.stringify(obj))
*/

//example-1(shallow copy)
let obj1={x:6, y:10, z:{a:8}}
let copy={...obj1}
copy.z.a=20
console.log(obj1.z.a) //20

//example-2(deep-copy)
let obj2={x:6, y:10, z:{a:8}}
let copy2=JSON.parse(JSON.stringify(obj2))
copy2.z.a=20
console.log(obj2.z.a)