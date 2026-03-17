/* Closures --> functions that remembers the variable from it's outer scope even after the outer 
                function has finished execution
*/
//example
function outer(){
    let count=0
  return function inner() {
    count++
    return count
  }
    
}
const res=outer()
console.log(res())
console.log(res())
console.log(res())