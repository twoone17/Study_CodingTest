const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n');
const M = parseInt(input[0]);
const array = input[1].split(" ").map((item)=>parseInt(item))

const max  = Math.max(...array)

let total = 0;
array.forEach((item)=> {
    total = total + item / max*100
})

console.log(total/M);


