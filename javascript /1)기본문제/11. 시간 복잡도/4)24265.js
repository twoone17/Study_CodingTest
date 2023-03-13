const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split().map(item=>+item);
const input = fs.readFileSync('dev/stdin').toString().split().map(item=>+item);
let n = input[0];

console.log(n*(n-1)/2);
console.log(2)
/**
 * n = 5
 * 1 to 4
 * i+1 to 5
 * 4*3 + 3*2 + 2*1
 */