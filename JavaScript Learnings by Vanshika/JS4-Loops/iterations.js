// Q1. Print sum of numbers 1 to 10: 
let sum = 0
for( let i = 0;i<=10;i++){
    sum+=i
}
console.log(sum)

// Q2. Write a for loop to print all even numbers from 1 to 20. 

for(let i = 0;i<=20;i++){
    if (i%2 == 0){
        console.log(i)
    }
}

// Q3. Write a for loop to print all odd numbers between 1 and 20. 
for(let i = 0;i<=20;i++){
    if(i%2!=0){
        console.log(i)
    }
}

// Q4. Write a for loop that prints numbers from 1 to 10. 
for(let i = 0;i<=10;i++){
    console.log(i)
}

// Q.5  Given an array const arr = [2, 4, 6, 8, 10], write a for loop to print all elements in the array. 
let arr = [2,4,6,8,10]
for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}
// for(let i of arr){
//     console.log(i)
// }

for(let i = 10;i>=1;i--){
    console.log(i)
}





