const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ');
const num1 = input[0];
const num2 = input[1];
console.log(num1 - num2)