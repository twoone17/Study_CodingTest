const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString()
const input = fs.readFileSync('dev/stdin').toString().trim()
const n = parseInt(input)
let dp = Array(n + 1).fill(0);
// let dp = []
dp[1] = 1;
dp[2] = 2;
function solution(n) {


    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2])%10007
    }

    return dp[n]
}

console.log(solution(n));

//왜 자꾸 에러뜨냐 ㅅㅂ
