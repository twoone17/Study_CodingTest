/**
 * x
 */
const fs =require('fs');
let input =fs.readFileSync('../test.txt').toString().split('\n');
// let input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
console.log(input)
const[n,m] = input[0].split(' ');
input.shift()

input = input.map(item=>item.split(''))
const firstColor = input[0][0];
let count=0;
let sum = 0;
for(let i = 0;i<n;i++)
{
    for(let j = 0;j<m;j++)
    {
        if(firstColor === 'W')
        {
            if((i+j) % 2 === 0 && input[i][j]!='W')
            {
                count++;
            }
            else if((i+j) % 2 === 1 && input[i][j]!='B')
            {
                count++;
            }
        }
        console.log(count)
    }
}