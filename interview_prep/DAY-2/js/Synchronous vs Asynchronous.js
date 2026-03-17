/* Synchronous --> runs the code line by line, blocks function executions untill the previous function 
                   complete execution.
*/
//example -
console.log('1');
console.log('2');
console.log('3');
console.log('a');
console.log('b');
console.log('c');
//output -> 1,2,3,a,b,c

  /* Asynchronous --> does not block function execution rather runs simultaniously and show the outputs
                    as per priority.
                    
*/
//example-

 console.log("1");
setTimeout(() => {
  console.log("2");
}, 2000);
console.log("3");