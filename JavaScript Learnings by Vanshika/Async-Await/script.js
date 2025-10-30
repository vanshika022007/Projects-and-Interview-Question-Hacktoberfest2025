// async function getData(){
//     setTimeout(()=>{
//         console.log("I am asycn function")
//     },3000)
// }
// let ans = getData()
// console.log(ans)

// async function greet(){
//     console.log("Good Morning Vanshika")
// }
// greet()

// async function getUrl(url){


    // fetch(url).then((res)=>{
    //     res.json().then(data=>{
    //         console.log(data)
    //     })
    // })

//     try{
//         const p = await fetch(url);
//         const res = await p.json()
//         console.log(res)
//     }
//     catch(error){
//         console.log(error)
//     }

    

// }
// const ans = getUrl("https://jsonplaceholder.typicode.com/posts")
// console.log(ans)

// await fetch(...) waits for the API response.
// await response.json() waits for the response to be converted to JSON.

// async function getData(){
//     // let response = await fetch("https://jsonplaceholder.typicode.com/posts")

//     let response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")

//     let data = await response.json()
//     console.log(response)
    
// }
// getData()

// scenario
// prepare url/api endpoint -> sync 
// fetch data -> network call -> async 
// process data - sync 


// json is also takes time


// await - aync code gets sync 
// we always use await with async function


// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }
// console.log("Loading Modules")

// console.log("Something else")

// console.log("Load Data")  

// let data = getData()

// data.then((v)=>{
//     console.log(v)
//     console.log("Process data")
// })




