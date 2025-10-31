// function testScope() {
//     if (true) {
//         var a = 10;
//         let b = 20;
//         const c = 30;
//     }
//     console.log(a); // 10
//     // console.log(b); 
//     // console.log(c); ❌ Error
// }
// testScope();


// function sumRange(start, end) {
//     let sum = 0;
//     for (let i = start; i < end; i++);
//         sum += i;
//     return sum;
// }

// function findLargest(arr) {
//     let largest = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// console.log(findLargest(arr))

// console.log(Math.random())
// console.log(Math.floor(9.8))
// console.log(Math.ceil(4.1)); 
// console.log(Math.round(4.3)); 
// console.log(Math.round(4.5)); 
// console.log(Math.ceil(8.01)); 

// console.log(Number.parseFloat("56yz"))
// 🔹 Converts a number to a string and formats it to n decimal places.
// let price = 44.56224
// console.log(price.toFixed(2))

// let num = 123 
// console.log(num.toString())

// Math.random()	Random number between 0 and 1
// Math.floor()	Round down
// Math.ceil()	Round up
// Math.round()	Round to nearest integer
// Math.trunc()	Remove decimal part
// parseFloat()	Convert string to float
// parseInt()	Convert string to integer
// Number.isNaN()	Check if value is NaN
// toFixed(n)	Format to n decimal places
// toString()	Convert number to string
// let mixedArray = [10, "hello", true, null];
// let cars = ["BMW", "Audi", "Toyota"];
// console.log(cars[0]); // BMW
// console.log(cars[2]); // Toyota
// let pets = ["cat", "dog", "rabbit"];
// console.log(pets.includes("dog"));  // true
// console.log(pets.indexOf("rabbit")); // 2
// let words = ["I", "love", "coding"];
// console.log(words.join(" "));  // "I love coding"
// let feelings = ["I", "Love", "You"]
// console.log(feelings.join(" "))


// let arr = [5, 10, 15];
// for(let i = 0;i<arr.length;i++ ){
//     console.log(arr[i])
// }

// for(let item of arr){
//     console.log(item)
// }

// let nums = [1, 2, 3];
// ans = nums.map((num)=> num**2)
// console.log(ans)

// let numbers = [12,100,188,1900]
// final = numbers.map((ans)=> ans**3)
// console.log(final)

// let matrix = [[1, 2], [3, 4], [5, 6]];
// let flat = matrix.flat()
// console.log(flat)

// let dup = [1,1,2,3,4,4,5,6,6]
// let s = [...new Set(dup)]
// console.log(s)

// let fruits = ["apple", "banana", "cherry"];
// for(let i = 0; i<fruits.length;i++){
//     console.log(fruits[i])
// }

// for(let i of fruits){
//     console.log(i)
// }

// fruits.map((item)=> console.log(item))

// let marks = [45, 78, 90, 33];
// ans = marks.filter(mark=> mark>50)
// console.log(ans)


// ans = marks.filter((item)=> item>100)
// function add(a,b){
//     return a+b
// }
// console.log(add(2,3))

// const add=(a,b)=>{
// return a+b
// }
// console.log(add(2,1))

// const farenhite = (c)=> {
//     return (c*9/5)+35
// }
// console.log(farenhite(7))

// const farenhite = (c)=>{
//     return (c*9/5)+ 35
// }
// console.log(farenhite(7))


// let nested = [[1], [2, 3], [4, 5]];
// let flat1 = nested.map((arr)=> arr.join(','))
// console.log(flat1)


// let data = [1, 2, 3];
// let data1 = data.map((n)=> n+1).map((n)=> n*2).map((n)=> n**2).map((n)=> n-100)
// console.log(data1)

// const numbers1 = [1, 2, 3, 4, 5];
// const res = numbers1.reduce((acc,num)=> acc+num,0)
// console.log(res)

// let person = {
//     name: "John",
//     age: 30
//   };
  
//   console.log(person.name); // John
//   console.log(person.age);  // 30
  

//   let person = {
//     name: "John",
//     age: 30,
//     address:"Meerut"
//   };
  
//   console.log(person["name"]); // John
//   console.log(person["age"]);  // 30
//   person.name = "Vanshika"
//   console.log(person.name)
// console.log(person)
//   delete person.address
//   console.log(person)
  

//   for(let key in person){
//     console.log(key, person[key])
//   }

//   ans = Object.values(person)
//   console.log(ans)


//   let keys = Object.values(person)


  // let person = {
  //   name: "John",
  //   age: 30,
  //   occupation: "Engineer"
  // };
  // let ans1 = Object.entries(person)
  // console.log(ans1)

  // const mypromise = new Promise((resolve,reject)=>{
  //   let success = true
  //   if (success){
  //     resolve("Task is completed")
  //   }
  //   else{
  //     reject("Task failed")
  //   }
  // })


  // mypromise
  // .then((res)=> console.log(res))
  // .catch((err)=> console.log(err))

//   const newPromise = new Promise((resolve,reject)=>{

//     const task = false
//     if(task){
//       resolve("Task is successful")
    
//     }
//     else{
//       reject("Task is not commpleted yet")
//     }
//   })


//   newPromise
// .then((result)=> console.log(result))
// .catch((error)=> console.log(error))

// const asyncTask = new Promise((resolve,reject)=>{

//   setTimeout(()=>{
//     resolve("Hey i am resolved after 2 secs")
//   },2000)
//   reject("LOL")
// })
// asyncTask
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error))


// set  time out will get executed after 2 sec and before that the reject code will ge run


// const asyncfunction2 = new Promise((resolve,reject)=>{

//   setTimeout(()=>{
//     resolve("Hey here i am getting resolved")
//   },3000)

//   reject(" i wil run before resolve because reslove is in async set time out function ")
// })

// asyncfunction2
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error))

// const mypromise = new Promise((resolve,reject)=>{
//   reject("hey something is wrong here")
// })

// mypromise
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))
// .finally(()=> {
//   console.log("hey i will always run ")
// })

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((res)=> res.json())
// .then((data)=> console.log(data))
// .catch(error=> console.log(error))


// async await 

// async function greet (){
//   return "Hello vanshika"
// }
// greet()
// .then((msg)=> console.log(msg))

// async function greetings(){
//   return "hey good morning how are u doing"
// }

// greetings()
// .then((message)=> console.log(message))




// async function fetchdata(){
//   const response  = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data  = await response.json()
//   console.log(data)
// }
// fetchdata()


// async function getData(){
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   const data = await response.json()
//   console.log(data)
// }
// getData()

// *✅ Q1. Use async/await to fetch data and check if the response is OK
// Problem: Fetch a user from an API and log their name if successful.
// async function getUser() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   if (res.ok) {
//     let user = await res.json();
//     console.log(user.name);
//   } else {
//     console.log("Failed to fetch user");
//   }
// }
// getUser();


// *✅ Q2. Function that fetches posts and handles error with try/catch
// Problem: Fetch posts and handle error gracefully using try/catch
// async function getPosts() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     if (!res.ok) throw new Error("Failed to load posts");
//     let posts = await res.json();
//     console.log(posts.slice(0, 3)); // Show top 3
//   } catch (err) {
//     console.error("Error:", err.message);
//   }
// }
// getPosts();


// **✅ Q3. Create a reusable fetchData(url) function
// Problem: Write a reusable function to fetch and return JSON from any URL, handling failure
// async function fetchData(url) {
//   let response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("Request failed with status " + response.status);
//   }
//   return await response.json();
// }

// Usage example:
// fetchData("https://jsonplaceholder.typicode.com/comments/1")
//   .then(data => console.log(data))
//   .catch(err => console.error("Error:", err));


// **✅ Q4. Call 2 APIs in parallel and wait for both
// Problem: Fetch both users and posts in parallel, then log their lengths
// async function fetchBoth() {
//   let [users, posts] = await Promise.all([
//     fetch("https://jsonplaceholder.typicode.com/users"),
//     fetch("https://jsonplaceholder.typicode.com/posts")
//   ]);

//   let usersData = await users.json();
//   let postsData = await posts.json();

//   console.log("Users:", usersData.length);
//   console.log("Posts:", postsData.length);
// }
// fetchBoth();


// **callback examples
// function loginStatusChecker(token, callback, tokens){
//   callback(tokens.includes(token))
// }
// function emailcheck(email,callback,emalList){
//   callback(emalList.includes(email))
// }

// *🔽 Flattening an Array
// const arr = [1, 2, [3, 4], [5, 6]];
// const flatten_arr = arr.reduce((acc,curr)=>{
//   return acc.concat(curr)
// },[])
// console.log(flatten_arr)



// function flattenArray(arr) {
//   return arr.reduce((acc, val) => {
//       return acc.concat(Array.isArray(val) ? flattenArray(val) : val);
//   }, []);
// }

// array = ["dog", "elephant", "cat", "tiger"]
// const ans = array.filter(((item)=> item.length>3)).sort()
// console.log(ans)

// function arrayOperations(numbers, names, targetName, targetNumber) {
//   const firstEven = numbers.find((num)=> num%2== 0) || null 

//   const indexOfname = names.indexOf(targetName)

//   const isNumberPresent = numbers.includes(targetNumber) ? 1 : 0;


//   const result = (firstEven || 0) + nameIndex + isNumberPresent;

//   return result
// }


// */ Q: Fetch data from an API and log it if response is OK. Otherwise, log "Failed to fetch"
// *"https://jsonplaceholder.typicode.com/posts/1" - api to use 
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(reponse=> {
//   if(reponse.ok){
//     return reponse.json()
//   }
//   else{
//     throw new error("Hey data is not coming yar")
//   }
// })
// .then(data=>{
//   if(data){
//     console.log(data)
//   }
// })
// .catch(error=> console.log(error))


// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => response.json())
// .then((data)=> console.log(data))
// .catch((error)=> console.log(error))

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
// .then(response => response.json())
// .then(data => console.log(data.email))

// *🔰 Section 1: Basic fetch() Questions (Using .then())

// fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

// *🔰 Section 2: Using async/await for Fetching Data
// *🟨 4. // How to fetch data using async/await and log the title?

// async function fetchPost(){
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   const data = await res.json()
//   console.log(data)
// }

// *🟨 6. // How to wrap fetch in try/catch block using async/await?

// async function fetchData(){
//   try{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//     const data = await res.json()
//     console.log(data)
//   }
//   catch(error){
//     console.log(error)
//   }
// }


// *🔰 Section 3: Handling response.ok & Status Codes
 7. // How to check if the fetch response was successful using response.ok?

//  fetch("https://jsonplaceholder.typicode.com/posts/1")
//  .then((response)=>{
//   if(response.ok){
//     ans = response.json()
//     return ans 
//   }
//   else{
//     return "Response is not okay "
//   }
//  })
//  .then(data => console.log(data) )
//  .catch(error => console.log(error))