const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item => item.split(' ').map(item=>+item)).flat();
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item => item.split(' ').map(item=>+item)).flat();
const n = input.shift();

let num;
let result = 0;
while(num = input.shift())
{

    let array = [];
    for(let i = 1;i<=num;i++)
    {
        if(num%i===0)
        {
            array.push(i);
        }
    }
    if(array.length === 2)
    {
        result +=1;
    }
}
console.log(result)
