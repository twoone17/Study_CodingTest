const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n');
const n = parseInt(input[0]);

for(let i =1; i<=n;i++)
{
    let string = input[i]
    console.log(string[0]+string[string.length-1])
}