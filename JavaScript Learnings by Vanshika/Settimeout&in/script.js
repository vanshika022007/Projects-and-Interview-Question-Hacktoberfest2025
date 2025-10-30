// Set time out and set time in concept 


// setTimeout
// Executes a function once after a specified delay.


// setInterval
// Executes a function repeatedly at a fixed interval 


function myname(){
    console.log("Vanshika")
}
setTimeout(myname,2000) 
// this will console vanshika only once after 2000ms
// setInterval(myname,3000) 
//this will repeatedly console vanshika after 3000ms


// clearTimeout(timerID)  
//Cancels a setTimeout before it runs.
clearTimeout(myname)

// clearInterval(timerID)
//  Stops a setInterval from executing repeatedly.
clearInterval(myname)


// TRUST ISSUE WITH setTimeout 
    

console.log("start")

setTimeout(function callmyname() {
    console.log("vanshika")
}, 5000);

console.log("END")


// million of line of code
// below code will block our main thread 



// let startDate = new Date().getTime();
// let endDate = startDate

// while(endDate<=startDate+10000) {
//     endDate = new Date().getTime()
// }
// console.log("While expires")

//output 
// start
// END
// While expires 
// vanshika


console.log("start")
setTimeout(function cb() {
    console.log("callback")
},0);
console.log("end")

// output of above code 
// start 
// end 
// callback 

// because setTimeout will register the function in web api environment and then it will go in queue - so it takes time 




