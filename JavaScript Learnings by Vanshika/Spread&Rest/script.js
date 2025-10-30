// Spread Operator 
// The spread operator is used to expand elements of an array, object, or iterable into individual elements.
let z = ["hello", 10,45,100]
let y = ["vanshika" , "yash" , "she" , "her"]
console.log(...z)
console.log(...y)
console.log(...z,...y)

// Finding out maximum element by using spread operator 

let lst = [200,2000,20000,20000]
console.log(Math.max(...lst))

let lst2 = [2,500,8,700,1.0,1.5]
console.log(Math.min(...lst2))

// Rest operator 
// The rest operator (...) is used to collect multiple values into an array. It is mainly used in function parameters and destructuring.

function Sum(a,b){
    return a+b
}
Sum(1,2)

// This code will give sum of all the numbers that are passed 
function Sum(a,b, ...res){
    let sum = a+b
    for(let i = 0;i<res.length;i++){
        sum = sum+res[i]
    }
    return sum

}
console.log(Sum(10, 20, 30, 40, 50));

// The ...res rest parameter collects all additional arguments (after a and b) into an array named res. 
// return (Sum(2,2,43,45,3,5453))

// Find sum of array 
const constant = [2,2,3,4,44,5,5,211,234,231]
const result = Sum(...constant)
console.log(result)

