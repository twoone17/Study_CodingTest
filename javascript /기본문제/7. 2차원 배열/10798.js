const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.trim().split(""))

let result = '';
console.log(input[0].length)

let max = 0;
for(let i = 0; i< input.length;i++)
{
    if(max <= input[i].length)
    {
        max = input[i].length
    }
}

const maxLength = Math.max(...input.map(i=>i.length))
console.log(maxLength)

for(let i = 0; i<max;i++)
{
    for (let j = 0; j< input.length;j++)
    {
        if(input[j][i] === undefined)
        {
            continue;
        }
        result += input[j][i];
    }
}

console.log(result);