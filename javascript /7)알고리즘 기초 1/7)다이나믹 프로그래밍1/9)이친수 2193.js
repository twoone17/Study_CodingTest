//n을 넣었을때 값이 너무 크다 하면 BigInt()로 변환하고, toString 을 사용해야한다.

const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim()
const input = fs.readFileSync('dev/stdin').toString().trim()

function solution(n)
{
    let dp = Array(n+1).fill(0)
    dp[1] = 1;
    dp[2] = 1;
    dp[3] = 2;

    for(let i = 4; i<=n;i++)
    {
        for(let j = 1; j<=i-2;j++)
        {
            dp[i] = BigInt(dp[i]) + BigInt(dp[j])
        }
        dp[i] = dp[i] + BigInt(1)
    }

    return dp[n].toString()
}

console.log(solution(parseInt(input)))