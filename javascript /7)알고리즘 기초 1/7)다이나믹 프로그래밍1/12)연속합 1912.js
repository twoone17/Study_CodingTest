const fs =require('fs')
// let input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const N = Number(input.shift())
input = input.flat()
let dp = []
dp[0] = input[0]
let max = dp[0]
for(let i = 1;i<N;i++)
{
    dp[i] = Math.max(dp[i-1]+input[i],input[i])
}
max = Math.max(...dp)
console.log(max)
