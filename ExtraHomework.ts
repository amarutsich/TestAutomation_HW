const numArray : number[] = [-2, 2, 1, 1, 3, -123, 123]

///Task 1

const negativeNumbers = (numArray : number[]) => {
    let counter : number = 0
    for (let value of numArray){
        if (value < 0){
            counter++
        }
    }

    return console.log(`Quantity of negative numbers in array is ${counter}`)
}

negativeNumbers(numArray);

/// Task 2

const firstPartDividedBySecond = (numArray : number[]) => {
    let dividend = 0
    let divisoe = 0

    for(let i = 0; i < Math.trunc(numArray.length/2); i++){
        dividend += numArray[i]
    }
    

    if(dividend === 0){
        return console.log(`Dividend is equal to 0! Try to pass different num array`)
    }

    for(let i = Math.trunc(numArray.length/2); i < numArray.length; i++){
        divisoe += numArray[i]
    }

    return console.log(`First part of array divided by second equal to ${dividend/divisoe}`)
}

firstPartDividedBySecond(numArray);

// Task 3

 const firstWord = "suii"
 const secondWord = "iAnkaramess"

 const isFirstLetterEqualToLast = (firstWord : string, secondWord : string) => {
    console.log(`Is first letter of first word equal to the last of second word? - ${firstWord.slice(-1) === secondWord.slice(0, 1)}`)
 }

 isFirstLetterEqualToLast(firstWord, secondWord)

 // Task 4

 const strNumber = 'd!fsa.321dvyg'

 const indexOfNumber = [].findIndex.call(strNumber, (element) => {
    return !isNaN(element) 
 })

 indexOfNumber === -1 ? console.log(`String does not have any numbers`) 
 : console.log(`Index of number is ${indexOfNumber}`)

 // Task 5

 const digitsToCheck = 123468

 const howManyEvenDigits = (digitsToCheck : number) => {
    const tempStr = digitsToCheck.toString()
    let counter = 0
    for (let value of tempStr){
        if(Number(value) % 2 === 0){
            counter++
        }
    }

    return console.log(`Quantity of even digits is ${counter}`)
 }

 howManyEvenDigits(digitsToCheck)