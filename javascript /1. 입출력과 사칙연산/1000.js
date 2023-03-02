// const fs = require('fs');
// const input = fs.readFileSync('../test.txt').toString().split(' ');
// const a = input[0]
// console.log(a)

const fs = require('fs');
const input = fs.readFileSync('../test.txt').toString().split(' ');
const num1 = parseInt(input[0])
const num2 = parseInt(input[1])

console.log(num1 + num2);