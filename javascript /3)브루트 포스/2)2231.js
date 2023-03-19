const fs =require('fs');
// let input =fs.readFileSync('../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
let input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const n = input.shift();
let sum = 0;
let array = [];
for(let i = 0;i<n;i++)
{
    sum = 0;
    for(let p = 0;p<n;p++)
    {
        if(input[i][0] < input[p][0] && input[i][1] < input[p][1])
        {
           sum++;
        }
    }
    array.push(sum+1);
}
console.log(array.join(' '))