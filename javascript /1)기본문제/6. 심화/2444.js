const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString();
const N = parseInt(input);

let star = "*";
let starResult = '';
let space = " ";
let spaceResult = "";
let M = N;
let result = "";
for(let i =0;i<N; i++)
{
    starResult = star.repeat(2*i+1)
    spaceResult = space.repeat(M-1);
    M = M - 1;
    result = result + spaceResult + starResult + "\n"
}

for(let i =N-1; i>0;i--)
{
    M = M +1;
    starResult = star.repeat(2*(i-1)+1);
    spaceResult =  spaceResult = space.repeat(M);
    result = result + spaceResult + starResult + "\n"
}

console.log(result)
