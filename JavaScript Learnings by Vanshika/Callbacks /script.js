// JS is a sync single threaded language - sync means executing the code in a sequence and single threaded means executing one operation at a time.

// **Single-Threaded
// JavaScript executes one operation at a time, meaning it has only one call stack.
// It processes one instruction after another in a sequential manner.
// It does not execute multiple tasks at the same time (no parallel execution).

// **"Synchronous"
//  means tasks are executed in the order they appear in the code.
// Each task must complete before the next one starts.
// If a task takes time, it blocks the execution of the next task.

// What is callback function 
// function passed in another function is known as callback function , due to callbacks we can do async things in js 
// **Example//
//  Example of set time out

// **Yes! A function passed into setTimeout() is always a callback function. 
setTimeout(function(){
    console.log("Timer")
},2000)

function x(y){
    console.log("x")
    y()
}
x(function y(){
    console.log("y")
})
// *in above example y is a callback function 

// **Execution Flow:
// x() is invoked with a function y as an argument.
// Inside x():
// "x" is printed.
// y() is called.
// The function y() executes:
// "y" is printed.

// **code blocking example 
// console.log("Start");

// A blocking operation (infinite loop)
// while (true) {
    // This loop never ends, blocking everything after it
// }

// console.log("End"); // This will NEVER execute


// Callback hell (also known as "Pyramid of Doom") happens when multiple nested callbacks are used, making the code hard to read and maintain.

console.log("Start");

setTimeout(() => {
    console.log("Task 1 completed");

    setTimeout(() => {
        console.log("Task 2 completed");

        setTimeout(() => {
            console.log("Task 3 completed");

            setTimeout(() => {
                console.log("Task 4 completed");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);

console.log("End");

