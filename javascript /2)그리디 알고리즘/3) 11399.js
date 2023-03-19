const fs = require('fs');
// const input = fs.readFileSync('../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const n = input.shift();
const flatInput = input.flat(1);
flatInput.sort(function(a,b){
  if(a>b)
  {
      return 1;
  }
  else{
      return -1;
  }
})
let sum = 0;
let result = [];
for(let i =0;i<n;i++)
{
    sum+= flatInput[i];
    result.push(sum);
}

const totalResult = result.reduce((prev,cur)=>{
    return prev+cur;
},0)
console.log(totalResult)