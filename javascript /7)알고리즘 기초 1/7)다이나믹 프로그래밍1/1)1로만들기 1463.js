/**
 * 1.DP로 풀수 있는 문제인지 확인
 * x = 5
 * /2 , /3 안되니까 -1
 * 4 -> /2
 * 2 -> /2 -> 1
 *
 * 그냥 재귀로 풀면 안되나? 재활용 할 만한게 있나?
 * x : 15
 * 15/3 -> 5 /2 , /3 x -> -1
 */

// const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString()
// const n = parseInt(input)
// let count = 0;
// function solution(n)
// {
//
//     //완료 조건
//     if(n === 1)
//     {
//         return count;
//     }
//
//     if(n%3 === 0)
//     {
//         count++;
//         return n/3
//     }
//     else if(n%2 === 0)
//     {
//         count++;
//         return n/2
//     }
//     else{
//         count++;
//         return n-1;
//     }
//     //서브테스크
// }

// console.log(solution(n))
//이렇게 하면 어떤게 최선인지 모르는구나, 경우의 수를 다 구해서 그중에 최소를 구하는 방식으로 해야하는듯 !! 그렇게 되면 DP를 사용해야 하는거겠네
/**
 * 단순한 계산이 아닌 다 해봐야 알 수 있는 것이니 재활용을 해야한다
 * //일단 0부터 다 써보자
 *
 */

const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString()
const input = fs.readFileSync('dev/stdin').toString()
const n = parseInt(input)
let dp = new Array(n+1).fill(0)
//bottom to top 방식을 이용하는게 이해하기 편하다

function solution(n)
{
    for(let i = 2; i<=n;i++)
    {
        dp[i] = dp[i-1] +1

        if(i % 2 === 0)
        {
            dp[i] = Math.min(dp[i],dp[i/2] + 1)
        }

        if(i % 3 === 0)
        {
            dp[i] = Math.min(dp[i],dp[i/3] +1)
        }

    }
    return dp[n]
}

console.log(solution(n))







