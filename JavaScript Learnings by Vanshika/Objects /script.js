let information = {
    name: "Vanshika",
    role: "student",
    age:"18",
    fav_car:"Same as of Him"

}
console.log(information)

let book = {
    name:"Forever", 
    author: "Judy Blume",
    year : 1977
}
console.log(book)
book.genre = "romance"
console.log(book)

let subjects = new Object();
subjects.subject1 = "Mathematics";
subjects.subject2 = "WAP";
subjects.subject3 = "Dsa"

console.log(subjects)
console.log(book.genre)
subjects.timeWaste = "Rufp"
console.log(subjects)

delete book.year 
console.log(book)


// JavaScript object where values include different data types like array, boolean, function, object, and null:

let userProfile = {
    id: 101,
    name: "Vanshika",
    age: 20,
    isStudent: true, // Boolean
    hobbies: ["coding", "reading", "traveling"], // Array
    address: { // Nested Object
        city: "Delhi",
        zip: 110001
    },
    greet: function() { // Function as a value
        return `Hello, my name is ${this.name}`;
    },
    favoriteNumbers: [7, 13, 21], // Another array
    hasDrivingLicense: false, // Boolean
    education: null, // Null value
    skills: { // Nested object with array
        programming: ["JavaScript", "Python", "C++"],
        softSkills: ["Communication", "Problem-solving","art"]
    }
};


console.log(userProfile.hobbies[0])
console.log(userProfile.hobbies[1])
console.log(userProfile.hobbies[2])

console.log(userProfile.skills.programming)
console.log(userProfile.skills.softSkills)
console.log(userProfile.skills.softSkills[1])

console.log(userProfile.address.zip = "zip-value-updated")


