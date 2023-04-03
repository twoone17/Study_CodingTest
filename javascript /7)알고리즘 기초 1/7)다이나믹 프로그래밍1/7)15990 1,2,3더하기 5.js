const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => +item);
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => +item);
let t = input.shift()[0]
let n;
let result
let index = 4;
let dp = []
let i
dp[1] = {1: 1, 2: 0, 3: 0}
dp[2] = {1: 0, 2: 1, 3: 0}
dp[3] = {1: 1, 2: 1, 3: 1}
while (n = input.shift()) {
    [result,index] = solution(n,index)
    console.log(result)
}


function solution(n,indexTemp) {


    for(i = indexTemp; i<=n;i++)
    {
        dp[i] = {1: (dp[i-1]['2']+ dp[i-1]['3'])%1000000009, 2: (dp[i-2]['1'] + dp[i-2]['3'])%1000000009, 3: (dp[i-3]['1'] + dp[i-3]['2'])%1000000009}

    }
    return [(dp[n]['1'] + dp[n]['2'] +dp[n]['3'])%1000000009,i]
}


//1,2,3을 이용해야 하기때문에 이렇게 객체로 만들어서 했고, test case를 돌릴때 계산한 dp에 이어서 구해주기 위해 i를 반환했다.
//근데 틀렸습니다 뜨는데 왜그러는지 모르겠음

