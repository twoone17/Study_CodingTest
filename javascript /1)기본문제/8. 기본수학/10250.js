const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item => item.split(' ').map(item => +item));
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item => item.split(' ').map(item => +item));
const T = input[0];

for(let i = 1; i<=T;i++)
{
    const [H,W,N] = input[i];
    let floor;
    if(N%H === 0)
    {
        floor = H;
    }

    else
    {
        floor = N%H;
    }

    let result = floor*100 + Math.ceil(N/H)
    console.log(result)
}