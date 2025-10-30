// Example 1 
// in ascending order 
const num = [2,2,400,66,900,10000]
function CompareFunc(a,b){
    return a-b
}
console.log(num.sort(CompareFunc))

// in descending order 
// const num1 = [10000,3,4,5,60]
// function CompareFunc(a,b){
//     return b-a
// }
// console.log(num1.sort(CompareFunc))

// Example 2 
const numbers = [10, 5, 40, 1, 100];
numbers.sort((a, b) => a - b);
console.log(numbers);


// Find method  - reutun 1st value which matches the condition 

const list = [2,4,5,10,100]

function check(a){
    return a%5 == 0 && a%10 == 0
}
const findValue = list.find(check)
console.log(findValue)


// Another example of find() - who can vote and who can not 

const vote = [21,22,34,18,19]

function check(v){
    return v>=18;
}
const Vote = vote.find(check)
console.log(Vote)

