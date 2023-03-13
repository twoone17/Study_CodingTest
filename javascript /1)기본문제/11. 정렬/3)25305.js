const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const [n,k] = input[0];
const array = input[1];

array.sort(function(a,b){
    return b-a;
})

console.log(array[k-1]);


