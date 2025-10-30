arr = [1,2,3,4,5,6,7];
arr.push("hello")
console.log(arr)

arr.push("A" , "B" , "C")
console.log(arr)

arr.pop()
console.log(arr)

// **String split method**
const Message = "DSA*javascipt*Maths*stats";
let result1 = Message.split("*")
console.log(result1)
//[ 'DSA', 'javascipt', 'Maths', 'stats' ]


// **String join method**
const array2 = ["A" , "B" , 'C' , "D"]
const result2 = array2.join(",")
console.log(result2)
