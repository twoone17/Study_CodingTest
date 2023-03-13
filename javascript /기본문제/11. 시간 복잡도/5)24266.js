const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split()
const input  = fs.readFileSync('dev/stdin').toString().trim().split()
const n = parseInt(input[0])
console.log(n*(n-1)*(n-2)/6);
console.log(3)
//O(n세제곱)