const fs = require('fs')
let input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
// let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const N = Number(input.shift())
input = input.shift().split(' ').map(item=>+item)
let dp = []
// dp = [[1,[input[0]]]]
dp[0] = [1]
let dp2 = []
dp2[0] = [input[0]]
let max
let array = []
for(let i = 1; i<N;i++)
{
    max = 0
    array = []
    for(let j = 0;j<=i;j++)
    {
        if(input[i]>input[j])
        {
           max = Math.max(max,dp[j][0])
            console.log(dp[i-1][1])
            dp[i][1] = [dp[i-1][1]]
            dp[i][1].push(input[i])
        }

    }
    // console.log(dp)
    dp[i][0] = max +1

}

console.log(dp)

