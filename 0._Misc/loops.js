// function looping methods are preferred
// such as map, reduce, filter, find etc.

const fruits = ["apples", "bananas", "blueberries"];

// use map to print out each fruit
fruits.map(fruit => console.log(fruit));

const copiedFruits = fruits.map((fruit, index) => {
    return {id: index, fruit, delicious: "yes yes yes" };
});

console.log(copiedFruits);