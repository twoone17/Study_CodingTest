const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(x=>+x));
const array = Array.from(Array(9),()=>new Array(9));

let max = input[0][0]
let row, column;
for(let i = 0; i<9;i++)
{
    for (let j = 0; j<9; j++)
    {
        if(max <= input[i][j])
        {
            max = input[i][j];
            [row,column] = [i,j];
        }
    }
}

console.log(max);
console.log(row+1, column+1)
