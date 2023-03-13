const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => + item);
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => + item);
const n = input.shift();
input.sort(function(a,b){
  return a-b;
})
for(let i = 0; i<n;i++){
    console.log(input[i])
}