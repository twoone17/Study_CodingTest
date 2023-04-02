const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item => +item))
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item => +item))
const n = input.shift()[0]
const card = input.shift().flat()

function solution(arr,n) {
    let dp = Array(n+1).fill(0)
    dp[0] = 0;

    for (let i = 1; i <= n; i++)
    {
        for(let j=1;j<=i;j++)
        {
            dp[i] = Math.max(dp[i],dp[i-j]+arr[j-1])
        }
    }
    return dp[n]
}

console.log(solution(card,n))