let count = 42;
let userName = "42";

let countStr = count.toString();
let countStr2 = String(count);

let userNameNum = Number();
let userNameNum2 = parseInt(userName);
let userNameNum3 = parseFloat(userName);

console.log(
    'countStr - '+ typeof(countStr) +
    '\ncountStr2 - '+ typeof(countStr2) +
    '\nuserNameNum - '+ typeof(userNameNum) +
    '\nuserNameNum2 - '+ typeof(userNameNum2) +
    '\nuserNameNum3 - '+ typeof(userNameNum3) 
);