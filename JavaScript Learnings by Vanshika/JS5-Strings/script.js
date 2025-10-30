let str3 = "Hello, World!"

console.log(str3.toUpperCase())
console.log(str3.toLowerCase())
console.log(str3.includes("World"))
console.log(str3.startsWith("Hello"))
console.log(str3.endsWith("!"))
console.log(str3.indexOf("o"))
console.log(str3.lastIndexOf("o"))
console.log(str3.charAt(1))
console.log(str3.substring(0, 5))
console.log(str3.slice(0, 5))
console.log(str3.split(", "))
console.log(str3.replace("World", "JavaScript"))
console.log(str3.trim())
console.log(str3.repeat(2))


// Concatenation of string 
let str4 = "Hello";
let str5 = "World";
let concatenatedStr = str4.concat(", ", str5, "!");
console.log(concatenatedStr);

// *Learning Stings in JS 
// *My code 

let str1 = "Vanshika"
let str2 = 'Vanshii'
let strn = "Bhuvi and Pari"
console.log(str1[0]);
console.log(str2.length);
console.log(strn.length);
console.log(strn[10]);
console.log(strn[100]); //undefined , not error 



// Example of template literals and their uses

let name = "Vanshika";
let age = 25;
let city = "New York";

// Using template literals to create a string with embedded expressions
let introduction = `My name is ${name}, I am ${age} years old and I live in ${city}.`;
console.log(introduction);

// Template Literal 
let special_string = `This is a template literal ${100/5} ${100+5} ${100%5} ${10**5} `;
console.log(special_string)
// we can perform mathematical operations in template literals 


// interview question 
// define template literals and string interpolation 


// Escape characters in JavaScript

// Newline
let newlineExample = "Hello,\nWorld!";
console.log(newlineExample);

// Backslash
let backslashExample = "This is a backslash: \\";
console.log(backslashExample);

// Single quote
let singleQuoteExample = 'It\'s a beautiful day!';
console.log(singleQuoteExample);

// Double quote
let doubleQuoteExample = "He said, \"Hello!\"";
console.log(doubleQuoteExample);

// Carriage return
let carriageReturnExample = "Hello,\rWorld!";
console.log(carriageReturnExample);

// Tab
let tabExample = "Hello,\tWorld!";
console.log(tabExample);

// Unicode
let unicodeExample = "Unicode character: \u263A";
console.log(unicodeExample);

// Backspace
let backspaceExample = "Hello,\bWorld!";
console.log(backspaceExample);

// Form feed
let formFeedExample = "Hello,\fWorld!";
console.log(formFeedExample);


// escape character is counted as single element - (\t) = single element = (1)

// Methods in strings 
let str8 = "javascript"
let newstr8 = str8.toUpperCase()
console.log(newstr8)


let str9 = "javascript"
let newstr9 = str9.toLowerCase()
console.log(newstr9)

// **** toUpperCase , toLowerCase does  not make change in original string , it returns changes in new string ***** , as strings are immutable so original string does not gets change !! 


let str10 = "   java    script     "
let newstr10 = str10.trim()
console.log(newstr10)

// trim - removes starting and ending spaces 

// ***GIVE ERROR *** 
// let line = "
// "

// let line1 = '
// '


// ***DO NOT GIVE ERROR ***
let backticks = `
` 

// **Some other Methods**
// 1. toString()
let num = 123;
let numStr = num.toString(); // Convert number to string
console.log(numStr); // Output: "123"
console.log(typeof numStr); // Output: "string"

// 2. replace()
let sentence = "Hello, World!";
let newSentence = sentence.replace("World", "JavaScript"); // Replace 'World' with 'JavaScript'
console.log(newSentence); // Output: "Hello, JavaScript!"

// Replace all occurrences using regular expression
let text = "apple, orange, apple, banana";
let newText = text.replace(/apple/g, "mango"); // Replace all occurrences of 'apple'
console.log(newText); // Output: "mango, orange, mango, banana"

// 3. includes()
let phrase = "I love JavaScript!";
let result = phrase.includes("JavaScript"); // Check if 'JavaScript' is in the string
console.log(result); // Output: true

let result2 = phrase.includes("Python"); // Check if 'Python' is in the string
console.log(result2); // Output: false

// 4. indexOf
let statement = "JS is fun !!"
let ans = statement.indexOf("f")
console.log(ans)

// **ALL STRING METHODS**
// 1. charAt(index)
console.log("Hello".charAt(1)); // Output: "e"

// 2. charCodeAt(index)
console.log("Hello".charCodeAt(1)); // Output: 101

// 3. concat(string1, string2, ..., stringN)
console.log("Hello".concat(" World", "!")); // Output: "Hello World!"

// 4. endsWith(searchString, length)
console.log("JavaScript".endsWith("Script")); // Output: true

// 5. includes(searchString, position)
console.log("JavaScript".includes("Script")); // Output: true

// 6. indexOf(searchValue, fromIndex)
console.log("JavaScript".indexOf("a")); // Output: 1

// 7. lastIndexOf(searchValue, fromIndex)
console.log("JavaScript".lastIndexOf("a")); // Output: 3

// 8. localeCompare(compareString)
console.log("apple".localeCompare("banana")); // Output: -1

// 9. match(regexp)
console.log("The rain in Spain".match(/ain/g)); // Output: ["ain", "ain"]

// 10. matchAll(regexp)
const matches = "The rain in Spain".matchAll(/ain/g);
for (const match of matches) {
  console.log(match[0]); // Output: "ain", "ain"
}

// 11. padEnd(targetLength, padString)
console.log("Hello".padEnd(10, ".")); // Output: "Hello....."

// 12. padStart(targetLength, padString)
console.log("Hello".padStart(10, ".")); // Output: ".....Hello"

// 13. repeat(count)
console.log("Hello".repeat(3)); // Output: "HelloHelloHello"

// 14. replace(searchValue, newValue)
console.log("Hello World".replace("World", "JavaScript")); // Output: "Hello JavaScript"

// 15. replaceAll(searchValue, newValue)
console.log("Hello World World".replaceAll("World", "JavaScript")); // Output: "Hello JavaScript JavaScript"

// 16. search(regexp)
console.log("JavaScript".search(/Script/)); // Output: 4

// 17. slice(beginIndex, endIndex)
console.log("Hello World".slice(0, 5)); // Output: "Hello"

// 18. split(separator, limit)
console.log("Hello World".split(" ")); // Output: ["Hello", "World"]

const Message = "DSA*javascipt*Maths*stats";
let result1 = Message.split("*")
console.log(result1)
//[ 'DSA', 'javascipt', 'Maths', 'stats' ]

// 19. startsWith(searchString, position)
console.log("JavaScript".startsWith("Java")); // Output: true

// 20. substring(startIndex, endIndex)
console.log("Hello World".substring(0, 5)); // Output: "Hello"

// 21. toLocaleLowerCase()
console.log("HELLO".toLocaleLowerCase()); // Output: "hello"

// 22. toLocaleUpperCase()
console.log("hello".toLocaleUpperCase()); // Output: "HELLO"

// 23. toLowerCase()
console.log("HELLO".toLowerCase()); // Output: "hello"

// 24. toUpperCase()
console.log("hello".toUpperCase()); // Output: "HELLO"

// 25. trim()
console.log("  Hello World  ".trim()); // Output: "Hello World"

// 26. trimStart() / trimLeft()
console.log("  Hello World  ".trimStart()); // Output: "Hello World "

// 27. trimEnd() / trimRight()
console.log("  Hello World  ".trimEnd()); // Output: "  Hello World"

// 28. valueOf()
console.log(new String("Hello").valueOf()); // Output: "Hello"

// 29. toString()
console.log(new String("Hello").toString()); // Output: "Hello"

// 30. length (Property)
console.log("Hello World".length); // Output: 11

// **String join method**
const array2 = ["A" , "B" , 'C' , "D"]
const result3 = array2.join(",")
console.log(result3)



console.log(typeof NaN)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof 0)
console.log(typeof Infinity)

