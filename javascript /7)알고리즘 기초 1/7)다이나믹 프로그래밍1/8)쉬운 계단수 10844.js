const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString()
const input = fs.readFileSync('dev/stdin').toString()

function countUp(array){
    let result = array.reduce((prev,cur)=>{
       prev = prev + cur
        return prev;
    },0)
    return result%1000000000;
}

function solution(n)
{
    //fill함수를 사용하면 new Array()이렇게 하니까 모든 배열이 참조값이 같으니까 for문을 사용해서 값을 변화하면 하나만 변화시켜도 다른값이 다 변하게 된다 !!!! 와..
    // let dp = Array(n+1).fill(new Array(10).fill(0))
    let dp = new Array(n+1);
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(10).fill(0);
    }
    //첫번째 배열은 index로 접근하니 1부터 시작, 0으로 채워넣는다(값 안씀)
    //개수로 변수를 지정
    dp[1] = [0,1,1,1,1,1,1,1,1,1]
    dp[2] = [0,2,2,2,2,2,2,2,2,1]

    for(let i = 3; i<=n;i++)
    {
        for(let j=2;j<9;j++)
        {
            dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1])%1000000000
        }
        dp[i][9] = (dp[i-1][8])%1000000000
        dp[i][1] = (dp[i-1][2] + dp[i-2][1])%1000000000

    }

    return countUp(dp[n])
}

console.log(solution(parseInt(input)))
