// Promises are used to handel async operations in JS,
// Promises help in handling asynchronous operations like fetching data, reading files, or performing network requests.
// *A Promise can have three states:

// *Pending: The initial state (operation not completed).
// *Fulfilled: The operation was successful.
// *Rejected: The operation failed.

// Example1 

// const cart = ["bucket", "pen", "notebook"]

// createOrder(cart,function (orderID){
//     proceedToPayment(orderID);
// }); 

// const promise = createOrder(cart);
// promise - empty obj with some data values 

// promise.then(function (orderID){
//     proceedToPayment(orderID);
// });
// promises gives us guarentee that the callback function is called 

// .then() → Runs when the promise is resolved.
// .catch() → Runs when the promise is rejected.

// **fetch() - api given by browser to make external calls , fetch returns us promises 

// const githubApi = "https://github.com/connectwithvanshika"

// const user = fetch(githubApi)
// console.log(user)

// user.then(function(data){
//     console.log(data)
// })

// promise objects are immutable 


// output 
// [[Prototype]]
// Promise
// [[PromiseState]]
// "rejected"
// [[PromiseResult]]
// TypeError: Failed to fetch at http://127.0.0.1:3000/Promises%2

// **promise obj is a placeholder for a certain period of time until we recieve a value from aync operation 

// **a container for future value 

// ** The Promise object represents the eventual completion (or failure) of an asynchronous operation .

// async operation will be eventually completed so its and obj that represents it and that obj is promises 


//CRETAING PROMISES 
// console.log("syntax for creating promises")
// function promiseCallback(resolve,reject){
//     resolve()
// }

// const promise = new Promise(promiseCallback);//creating a promise 
// console.log(promise)
// promise will remain in pendig state until and unless we dont call resolve or reject 


// resolve - promise is fulfilled 
// 1st parameter will always be fulfilled 
// reject - promise is rejected 
// 2nd parameter will be considered as rejected one 


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Promise Resolved!"), 2000);
// });

// Reading the result using .then()
// promise
//     .then((result) => console.log("Success:", result)) // If resolved
//     .catch((error) => console.log("Error:", error));   // If rejected

// **in class example 
// let promise = new Promise((resolve,reject)=>{
//     let a = 50;
//     let b = 5;
//     if(a==b){
//         resolve("PROMISE RESOLVED")
//     }
//     else{
//         reject(" Promise REJECTED")
//     }
// })
// console.log(promise)
// promise.then((data)=>{
//     console.log(data)
// })

// promise
// .catch((value)=>{
//     console.log(value)
// })


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, "one");
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, "two");
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);

//   });

