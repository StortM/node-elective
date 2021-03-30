// create a function that is called myFirstFunction that return a greeting of sorts

function myFirstFunction() {
    return "Hello";
}

const myVariableFunction = function() {
    console.log("helllo from anon");
};

const myArrowFunction = () => {
    return "hello from arrow func";
};

//callbacks

function sayHiLater(anyFunctionReference) {
    // simulate some code running
    // takes some more time
    // and more time..
    anyFunctionReference();
}

const hiArrowFunc = () => {
    console.log("hi");
};

sayHiLater(hiArrowFunc);

function interact(genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => {
    return "poke " + name;
};

interact(poke, "michael");

interact((name) => "Hug " + name, "Napster");