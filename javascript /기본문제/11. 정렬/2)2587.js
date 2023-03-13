const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>+item);
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>+item);
input.sort(function(a,b){
    return a-b;
})

const middleNumber = input[Math.floor(input.length/2)]
let sum = input.reduce((prev,cur) =>{
    prev = prev + cur;
    return prev;
},0)

let average = sum/input.length;

console.log(average);
console.log(middleNumber);
