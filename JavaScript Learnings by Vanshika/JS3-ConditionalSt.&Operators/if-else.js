// Example 1: Check Even or Odd
let number = 10;
if (number % 2 === 0) {
    console.log("The number is even.");
} else {
    console.log("The number is odd.");
}

// Example 2: Age Verification
let age = 17;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Example 3: Simple Grading System
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Example 4: Light Signal Checker
let trafficLight = "red";
if (trafficLight === "red") {
    console.log("Stop!");
} else if (trafficLight === "yellow") {
    console.log("Get ready to move.");
} else if (trafficLight === "green") {
    console.log("Go!");
} else {
    console.log("Invalid light signal.");
}

// Example 5: Check Positive, Negative, or Zero
let num = -15;
if (num > 0) {
    console.log("The number is positive.");
} else if (num < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Example 6: Authentication System
let username = "user1";
let password = "password123";
if (username === "user1" && password === "password123") {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}

// Example 7: Check Largest of Two Numbers
let a = 5, b = 10;
if (a > b) {
    console.log("a is larger.");
} else if (a < b) {
    console.log("b is larger.");
} else {
    console.log("Both numbers are equal.");
}

// Example 8: Check Leap Year
let year = 2023;
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

// Example 9: Grade Example
let percentage = 100;

if(percentage>=90){
    console.log("A")
}
else if (percentage<90 && percentage>=80){
    console.log("B")
}
else if (percentage<80 && percentage>=70){
    console.log("C")
}
else if (percentage<60 && percentage>=50){
    console.log("D")
}


// Ternary operator 
const message = percentage>80? "YAy" : "Fail"
console.log(message)

