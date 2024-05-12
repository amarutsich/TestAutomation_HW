const STR3_4 = "I'm learning typescript!";

console.log(`Without "I'm learning": ${STR3_4.substring(12)}`);
console.log(`Without "typescript": ${STR3_4.slice(0, 12)}${STR3_4.slice(-1)}`);
