const fs = require('fs')
// const N = Number(fs.readFileSync('../../test.txt').toString().trim())
const N = Number(fs.readFileSync('dev/stdin').toString().trim())
let dp = []
dp[0] = 1
let min;
let arr = []
for(let i = 1;i<=N;i++)
{
    //루트로 한번에 나눠진다면
    if(Number.isInteger(Math.sqrt(i)))
    {
        dp[i] = 1
    }
    //한번에 나눠지지 않는다면
    else
    {
        let a = Math.floor(Math.sqrt(i))
        //제곱한걸 뺀 나머지가 루트로 나누어 떨어질때까지

        // dp[i] = dp[a*a]+dp[i-a*a]
        for(let j = a;j>0;j--)
        {
            let temp = dp[i-j*j]+1
            arr.push(temp)
        }
        min = Math.min(...arr)
        dp[i] = min
        arr = []
    }
}
console.log(dp[N])