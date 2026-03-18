/* 
Event Loop: JavaScript's mechanism that enables non-blocking asynchronous 
execution despite being single-threaded. It continuously monitors the 
Call Stack and:
1. Executes all synchronous code in the Call Stack
2. When Call Stack is empty, processes ALL microtasks (Promises, queueMicrotask)
3. Then takes one task from the Callback/Macrotask Queue (setTimeout, setInterval)
4. Repeats the cycle
*/

//example->

console.log("1. Start");  // Call Stack

setTimeout(() => {
    console.log("4. Timeout");  // Callback Queue (Macrotask)
}, 0);

Promise.resolve()
    .then(() => {
        console.log("3. Promise");  // Microtask Queue
    });

console.log("2. End");  // Call Stack

//output