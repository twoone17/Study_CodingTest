const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split().map(item=>+item);
const input = fs.readFileSync('dev/stdin').toString().split().map(item=>+item);
let n = input[0];

console.log(n*n);
console.log(2)
//O(n제곱)