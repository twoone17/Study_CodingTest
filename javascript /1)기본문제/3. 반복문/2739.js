const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString();
n = parseInt(input[0]);

for(let i = 1; i <= 9; i++)
{
    console.log(n, "*" , i ,"=" , n*i)
}