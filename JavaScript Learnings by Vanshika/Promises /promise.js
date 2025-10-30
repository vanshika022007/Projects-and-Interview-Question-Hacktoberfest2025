// **PROMISE YT LEARNING 
// new - gives us new instance 
// promises takes a callback inside 


// *Example 1 
// const promise = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Async task is complete ")
//     resolve()
//     reject()
//   },1000)
// })
// console.log(promise)

// promise.then(function(){
//   console.log("promise fulfilled")
// })
// .catch("promise rejected")


// *Example 2

// const promise1 = new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("VANSHIKA IS LEARNING JS")
//     reject()
//   },1000)
// })
// console.log(promise1)
// promise1
// .then(function(){
//   console.log("Promise is resolved")
// })
// .catch("Promise is rejected")

// *Example 3 
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//        console.log("i am inside settimeout") 
//        resolve()
//     })
// })

// .then(()=>{
//     console.log("Set time out function resolved")
// })

// *Example 4 
//consumption of data 
// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({userame:"vanshika_yadav",
//             email:"vanshika@coding.com"
//         })
//     },2000)
// })

// promise3
// .then((user)=>{
//     console.log(user)
// })
// .catch(()=>{

// })


// *Example 5 
//fetching out data from promises - chaining of then 
// const promise5 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({username:"Vansh_deshwal",password:"2345"})
//         }
//         else{
//             reject("Something went wrong ")
//         }
//     },1000)
// })

// promise5
// .then((data)=>{
//     console.log(data)
//     return data.username
// })
// .then((returnvalue)=>{
//     console.log(returnvalue)
// })
// .catch((value)=>{
//     console.log(value)
// })
// .finally(()=>{
//     console.log("Promise is resolved or rejected")
// })

// finally()- It is useful for cleanup tasks like hiding a loader, closing a connection, or resetting variables.

// *Example 6
// const promise6 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username:"Javascript",password:"learning promises"})
//         }
//         else{
//             reject("Javascript went wrong ***** ERROR ")
//         }
//     },1000)
// })
// handling promise by async await 
// async function consumePromise6(){
//     try {
//         const res = await promise6
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }

// *Example 7 - video 2 learnings 

// let p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("vanshika")
//     }, 3000);
//     resolve("i am done ")
// })

// *promise chaining 

// let promise = new Promise((resolve,reject)=>{
//     let success = true
//     if(success){
//         resolve("Vanshika's Promise is fulfilled")
//     }
//     else{
//         reject("Promise is rejected")
//     }
// })

// promise
// .then(()=>{
//     setTimeout(()=>{
//         console.log("finally promise is fulfilled")
//     },2000)
// })
// .then(()=>{
//     console.log("Message")
// })
// .catch((err)=>{
//     console.log(err)
// })


// promise
// .then((Message)=>{
//     console.log("first message:"+ Message)
//     return 20
// })
// .then((Message)=>{
//     console.log("second message:"+ Message)
//     return 100
// })
// .then((Message)=>{
//     console.log("third message:"+ Message)
//     return 200
// })
// .finally(()=>{
//     console.log("I will always run ")
// })

// *promise handeling example - pomise.all 

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First")
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second")
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third")
})
let promise4 = new Promise((resolve,reject)=>{
    setTimeout(resolve,4000,"Fourth")
})

let promise5 = new Promise((resolve,reject)=>{
    setTimeout(resolve,5000,"Fifth")
})

Promise.all([promise1, promise2 , promise3, promise4 , promise5])
.then((values)=>{
    console.log(values)
})
// above promise will be marked as fulfilled when all the above promise will be marked as fulfilled 

// if one of the promise fails than alll of them will be  marked as failed 


const p = Promise(resolve)

p
.then((res)=>{
    console.log(res)
    return res*res
})
.then((res1)=>{
    console.log(res1)
    return res1*res1
})
.then((res2)=>{
    console.log(res2)
    return res2*res2
})
.then((res3)=>{
    console.log(res3)
    return res3*res3
})

//chaining
//*yes
// then to then 
// catch to then 
//*no
// catch to catch 
// then to catch 
