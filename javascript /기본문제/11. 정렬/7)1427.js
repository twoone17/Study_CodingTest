const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('').map(item => + item);
const input = fs.readFileSync('dev/stdin').toString().trim().split('').map(item => + item);
input.sort(function(a,b){
    return b-a;
})

console.log(input.join(''))