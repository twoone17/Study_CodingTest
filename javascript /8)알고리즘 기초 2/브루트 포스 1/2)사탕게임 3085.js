const fs = require('fs')
let input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
const n = input.shift()
input = input.map(item=>item.split(''))
for(let i = 0;i<n;i++)
{
    for(let j = 0;j<n;j++)
    {
        if(input[i][j] != input[i])
    }
}