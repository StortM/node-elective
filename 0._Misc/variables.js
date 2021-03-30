"use strict";

// strict mode throws errors whenever we write "bad code" examples below

// never EVER do this
// totalGlobalVariable = "My total global variable";

// let someVarToDelete = "dont hurt me";
// delete someVarToDelete;

// are obejcts truly immutable in JavaScript? NO!
const myObject = {
    attribute: "value"
};
myObject.attribute = "other value";

let variableA;
let variableB;

console.log(variableA + variableB);
console.log(variableA, variableB);

// type coercion
//          ^ JS tries to convert types to work in the context it is in

// example
// 2 + 2 = 4
// "2" + 2 = "22"

// type coersion can be avoided with "===" instead of "=="
// this way we compare using both value and type

{
    // this is a new scope
    let scopedVariable = "abc";
    {
        // this is a nested scope that inherits from the previous scope
        scopedVariable = 123;
    }
    console.log(scopedVariable);
}



