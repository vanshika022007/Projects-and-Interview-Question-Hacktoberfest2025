// we can pass comma seprated values in console 
var o = 100;
var b = 800;
var d = 700;
console.log(o,b,d) // Output 100 800 700 



// variables in js 
let nam_of_person = "vanshika";
let x = null;
let y = undefined;
let isallowed= true;
let isnotallowed= false;
console.log(nam_of_person);
console.log(x);
console.log(y);
console.log(isallowed);
console.log(isnotallowed);


// let , var and const are used to declare variables, but they have different behaviors and scopes.

// 1. **`var`**:   - (Global/Function Scoped)
//    - Old way to declare variables.  
//    - Can be updated and re-declared.  
//    - Has **function scope** (accessible inside the function where it's defined).  
//    - Doesn't respect block scope (can "leak" outside of blocks like `if` or `for`).  

// 2. **`let`**:  - block scope variable  
//    - Modern way to declare variables.  
//    - Can be updated but **not re-declared** in the same scope.  
//    - Has **block scope** (only accessible within `{}` where it's defined).  

// 3. **`const`**:  - (Block Scoped, Immutable Reference) 
//    - Used to declare constants (values that don't change).  
//    - Cannot be updated or re-declared.  
//    - Has **block scope**, like `let`.  

// Use `let` and `const` for modern, safer code!



// below example shows that variables can be re-declared using var keyword
var student_name = "vanshika"; //variable declaration 
var student_name = "vansh";  //re-assigining the value and re-declaration of variable
var student_name = "vanshi"; //again value is re-assigned and re-declaration of variable
console.log(student_name);

// let can not be re-declared , below example shows error
// let student_name1 = "vanshika";
// let student_name1 = "vansh";

// example of updation of variable using let keyword
let student_name2 = "vanshika";
student_name2 = "vansh";  //re-assignment of value - but in this case we can nit re-declare the variable
student_name2 = "vanshikaaaa";
console.log(student_name2);

let my_name = "Vanashika"
my_name = "Vanshika Y" //re-assigning the value 

// const can not be updated nor re-declared , below example shows error
// const student_name3 = "vanshika";
// student_name3 = "vansh";
// console.log(student_name3);

// correct example of const
const pi = 3.14;
console.log(pi);

// let declarations may not be initialized with a value, but they can be assigned a value later on. , but const must be initialized with a value.

// example of let

// let a:
// console.log(a); // undefined

let a;
a = 100;
console.log(a); // 100


// example of const - this will give error
// const b:
// b = 199
// console.log(b);

