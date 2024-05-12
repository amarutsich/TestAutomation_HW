const daysInYear = 365n;
const hoursInDay = 24n;
const minutesInHour = 60n;
const secondsInMinutes = 60n;

let age = 21n;

let myAgeInSeconds = age * daysInYear * hoursInDay * minutesInHour * secondsInMinutes;

console.log(myAgeInSeconds);