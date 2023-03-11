const fs =require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split(' ').map(item=>+item);
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(item=>+item);
const [n,k] = [input[0],input[1]];
let array = [];
for(let i = 1 ; i<=n;i++)
{
    if(n%i ===0)
    {
        array.push(i);
    }
}
if(array[k-1])
{
    console.log(array[k-1])
}else{
    console.log(0)
}

