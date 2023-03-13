//1은 소수가 아니다 !
const fs=  require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item => +item);
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item => +item);

function isPrime(x){
    let flag = true;
    if(x ===1)
    {
        return false;
    }
    if(x === 2 || x ===3)
    {
        return flag;
    }
    for(let i = 2;i<=Math.sqrt(x);i++)
    {
        if(x%i === 0)
        {
            flag = false;
            break;
        }
    }
    return flag;
}

m = input.shift()
n = input.shift()
let result = [];
for(let i = m; i<=n;i++)
{
    if(isPrime(i))
    {
        result.push(i)
    }
}
let sum = result.reduce((prev,cur)=>{
    return prev+cur
},0)

if(result.length >=1)
{
    console.log(sum);
    console.log(result[0]);
}
else{
    console.log(-1)
}