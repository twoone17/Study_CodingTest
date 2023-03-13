const fs = require('fs');
// const input = fs.readFileSync('../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
const [n,k] = input.shift();
const newInput = input.flat(3);
let result = 0;
let remain = k;
newInput.sort(function(a,b){
    return b-a;
})
let i = 0;
while(remain)
{
    if(remain-newInput[i]>=0)
    {
        remain = remain - newInput[i];
        result +=1;
    }
    else{
        i++;
    }

}
console.log(result)