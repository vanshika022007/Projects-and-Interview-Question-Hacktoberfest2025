// Both setTimeout and setInterval are asynchronous functions in JavaScript that help schedule tasks after a certain delay. They are part of the Web APIs provided by browsers and execute in a non-blocking manner.

// set time out - It delays the execution of a function by a specified time (in milliseconds).
// ***Example 1 
console.log("START")
setTimeout(function cb() {
    console.log("Callback")
},2000);
console.log("END")

// Because setTimeout is asynchronous, it sends the callback function to the event queue and does not block execution.

// ***Example 2  - using set time out in a function 
function greeting(name){
    setTimeout(()=>{
        console.log("hello vanshika good morning")
    },2000)
}
greeting("vanshika")

// **clearTimeout - it cancels the scheduled set time out 
let timeOutId = setTimeout(()=>{
    console.log("Clear time out is not  applied on me")
},2000);
clearTimeout(timeOutId)

console.log("Clear time out is applied on me")




