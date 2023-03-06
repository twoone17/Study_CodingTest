const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
let array = [];

for (let i = 1; i <= N; i++) {
  let count = 0;
  let sum = 0;
  let average = 0;

    array = input[i].split(" ").map(item=>parseInt(item));
    for(let j  =1 ; j<=array[0];j++)
    {
      sum = sum + array[j]
    }
    average = sum/array[0];

  for(let j  =1 ; j<=array[0];j++)
  {
    if(array[j] > average)
    {
      count++;
    }
  }

  console.log((count/array[0]*100).toFixed(3)+"%");
}