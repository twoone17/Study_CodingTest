const fs =require('fs')
const input = fs.readFileSync('../../test.txt').toString().trim().split(' ').map(item=>+item)
const [N,K] = input
//편의를 위해 dp는 1부터 시작하도록 함
let dp = Array.from({length : K+1}, ()=> 0)
dp[1] = 1;
dp[2] = N+1
//더하는 수가 3개 이상일때
if(K>2)
{
    for(let i = 3;i<=K;i++)
    {
        for(let j=0;j<N;j++)
        {
            dp[i] = dp[i] + dp[i-1] -j
        }
    }

}

console.log(dp)
