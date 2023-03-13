const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ');
num1 = input[0];
num2 = input[1];

console.log(num1 * num2);