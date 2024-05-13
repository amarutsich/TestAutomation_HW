const objT1 = {
    name: "Artyom",
    age: 21
}

const controlKey = "age";

console.log(`Does ${controlKey} is in object? - ${controlKey in objT1}`);

const student = {
    name: 'John',
    age: 19,
    isHappy: true
}

for (let key in student){
    let value = student[key];
    console.log(`Key - ${key}, value - ${value}`);
}

const colors = {
    'ru pum pu ru rum': {
        red: 'red',
        green: 'green',
        blue: 'blue'
    },
};

console.log(`Red - ${colors["ru pum pu ru rum"].red}, 
Blue - ${colors["ru pum pu ru rum"].blue}`);

let salaries = {
    andreys: 500,
    sveta: 413,
    anton: 987,
    alexandra: 199
}

const values = Object.values(salaries);
let sum = 0
for (let i = 0; i < values.length; i++){
    sum += values[i];
}

let avgSalary = sum/values.length;

console.log(`Average salary is ${avgSalary}`);