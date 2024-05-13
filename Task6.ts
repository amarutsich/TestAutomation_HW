/// Task 1
const colors = ['red', 'green', 'blue'];

console.log(`Length of array is ${colors.length}\n`);


/// Task 2

const animals = ['monkey', 'dog', 'cat']

console.log(`Last element of an array is ${colors.slice(-1)}\n`);

/// Task 3
const students = ['Polina', 'Dasha', 'Masha']

students.pop();
students.push("Borya");
students.shift();
students.unshift("Andrey");

console.log(students + '\n');

/// Task 4

const cats = ['Gachito', 'Tom', 'Batman'];

console.log("Via 'for' loop:");

for(let i = 0; i < cats.length; i++){
    console.log(cats[i]);
}

console.log("\nVia 'for of' loop:")

for(let values of cats){
    console.log(values);
}

/// Task 5

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const numbers = evenNumbers.concat(oddNumbers);
console.log(`\nIndex of '8' value is ${numbers.indexOf(8)}\n`);

/// Task 6
const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

fibonacci.forEach((element) => {
    console.log(element);
})

/// Task 7
const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const members = users.map((element) => {
    return `Member ${users.indexOf(element) + 1}: ` + element;
})

console.log(members + `\n`);

/// Task 8
const numbers8 = [7, -4, 32, -90, 54, 32, -21];

const positiveNumbers = numbers8.filter((element) => {
    return element >= 0;
})
console.log(positiveNumbers + '\n');

/// Task 9
const sum6_9 = fibonacci.reduce((accumulator, currentValue) => {
    return currentValue + accumulator;
})

console.log(`Sum of array elements is ${sum6_9}`);

/// Task 10
const numbers6_10_11 = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

console.log(`First even number is ${numbers6_10_11.find((element) => {
    return element % 2 === 0;
})}`)

/// Task 11

console.log(`Is any element in the array that is a multiple of 3 and 5 ->
 -> ${numbers6_10_11.some((element) => {
    return element % 3 === 0 && element % 5 === 0;
})}`);