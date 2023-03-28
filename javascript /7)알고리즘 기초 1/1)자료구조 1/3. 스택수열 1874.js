const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item =>+item)
const n = input.shift();
const array = [];
let num;
let count = 1;
let result = ''
for(let i =0 ;i<n;i++)
{
    num = input.shift()
    while(count < num)
    {
        count++
        array.push(count)
        result += '+'
    }
    if(count === num)
    {
        array.pop()
        result += '-'
    }


}
