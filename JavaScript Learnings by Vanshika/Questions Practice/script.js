// Question.1 1. Problem: Find the Larger Number
// Write a JavaScript function that takes two numbers as input and outputs the larger of the two numbers. If the numbers are equal, it should return a message saying the numbers are equal.

let num1 = 10;
let num2 = 20;

if(num1<num2){
    console.log(`${num1} is smaller than ${num2}`)
}
else if (num1>num2){
    console.log(`${num1} is larger than ${num2}`)
}
else if(num1 === num2){
    console.log("Numbers are equal")
}

// Question.2 2. Problem: Check if a Number is Positive, Negative, or Zero
// Write a JavaScript function that takes a number as input and prints whether the number is positive, negative, or zero.

let num = 10
if(num>0){
    console.log("Positive")
}
else if(num<0){
    console.log("Negative")
}
else{
    console.log("Number is zero")
}


// Question.3 3. Problem: Even or Odd
// Write a JavaScript function that takes a number as input and checks whether it is even or odd. 

let number = 10
if(number%2 == 0){
    console.log("Even")
}
else if(number%2!==0){
    console.log("Odd")
}

// Question.4 5. Problem: Grade Evaluation
// Write a JavaScript function that takes the marks of a student and evaluates their grade. The grading system is:

// Marks 90 and above: A
// Marks 75 to 89: B
// Marks 50 to 74: C
// Marks below 50: Fail

let marks = 88
if(marks>=90){
    console.log("A")
}
else if(marks>=75 && marks<=89){
    console.log("B")
}
else if(marks>=74 && marks<=50){
    console.log("C")
}
else{
    console.log("fail")
}

// Question 5 - Find count of one specific element in an array

let arr = [2,2,3,4,5,6,2,7,8,2];
let numz = 2;
function countNumber(arr,numz){
    count = 0
    for(let i=0;i<arr.length;i++){
        if (arr[i] === numz){
            count++;
        }
    }
    return count
}



// Test Cases
// console.log(countElement([1, 2, 3, 4, 1, 5, 1], 1)); // Expected: 3
// console.log(countElement([10, 20, 30, 40], 30)); // Expected: 1
// console.log(countElement([1, 1, 1, 1], 1)); // Expected: 4
// console.log(countElement([5, 6, 7, 8, 9], 10)); // Expected: 0


