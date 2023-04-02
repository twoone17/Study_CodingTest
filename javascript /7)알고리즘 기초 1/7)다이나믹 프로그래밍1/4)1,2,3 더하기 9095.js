const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>+item)
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>+item)
const t = input.shift()
let n;
let dp = [];
function solution(n)
{
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for(let i = 4; i<=n;i++)
    {
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3]
    }

    return dp[n]
}

while(n = input.shift())
{
    console.log(solution(n))
}

