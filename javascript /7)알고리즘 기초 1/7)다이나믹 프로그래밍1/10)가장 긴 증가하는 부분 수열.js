const fs = require('fs')
let input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
// let input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const N = Number(input.shift())
input = input.shift().split(' ').map(item=>+item)
let dp = []
dp[0] = 1
let max
for(let i = 1;i<N;i++)
{
    //왜 max가 1이 아니라 0일까 아 1이면  10 20 10 에서 2번째가 2가 되는구나 1인데
    max = 0;
    for(let j = 0;j<i;j++)
    {
        //현재 대상이 이전 대상들보다 크다면
        if(input[i] > input[j])
        {

            max = Math.max(max,dp[j])
        }
    }
    dp[i] = max +1
}
console.log(dp)
console.log(Math.max(...dp))


// dp[N-1] = 0
// for(let i = N-2;i>=0;i--)
// {
//     if(input[i]<input[i+1])
//     {
//         dp[i] = dp[i+1] +1
//     }
//     else
//     {
//         dp[i] = dp[i+1]
//     }
// }
//
// console.log(dp[0]+1)
// console.log(dp)