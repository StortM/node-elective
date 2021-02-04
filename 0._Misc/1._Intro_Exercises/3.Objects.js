// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 

console.log(myObj.message);

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 

const meObj = {
    name: "Michael",
    age: 24
};

console.log(meObj.name);
console.log(meObj.age);

// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true

// Ikke helt sikekr på hvad du vil have her, men da opgaven hedder "add a property", så tilføjer jeg bare en property til stackOverflow

stackOverflow.rule = true;
console.log(stackOverflow.rule);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;
thisSong.about = "Just a tribute";
console.log(thisSong.about);

// --------------------------------------


