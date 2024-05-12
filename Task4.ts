const getSum = (sumNum : number) => {
    let sum = 0;
    for(let i = 1; i <= sumNum; i++){
        sum +=i;
    }

    return sum;
}

console.log(`Sum is ${getSum(100)}`);

const getSumNumbers = (numberToBeSummedByDigits : number) => {
    let sum = 0;
    let digits = numberToBeSummedByDigits.toString();
    for(let i = 0; i < digits.length; i++){
        sum += Number(digits[i]);
    }
    
    return sum;
}

console.log(`Digits sum is ${getSumNumbers(2024)}`);

const getSum2 = (a : number, b : number) => {
    let highest = 0;
    let lowest = 0
    let sum = 0;

    if (a > b){
        lowest = b;
        highest = a;
    } else {
        lowest = a;
        highest = b;
    }

    for (let i = lowest; i <= highest; i++){
        sum += i
    }

    return sum;
}

console.log (`Sum between a and b equal to ${getSum2(1, 1)}`);

const faqt = (num : number) => {
    let multiply = 1; 

    if (num > 0 && Number.isInteger(num)){
        for(let i = 1; i <= num; i++){
            multiply *= i;
        }

    } else if (num === 0){
        return 1;
    } else{
        return "Inserted value is not positive integer! Try again..."
    }

    return multiply;
}

console.log(faqt(10));