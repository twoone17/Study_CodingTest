/**
 * 다시풀기
 */
const fs =require('fs');
let input =fs.readFileSync('../test.txt').toString();
// let input =fs.readFileSync('dev/stdin').toString();
const N = parseInt(input);
result =''
function solution(n)
{
    //중단조건
    if(n === 3)
    {
        for(let i = 0; i<3;i++)
        {
            for(let j = 0; j<3;j++)
            {
                //중앙인 경우
                if(i === 1 && j === 1)
                {
                    result = result+ " "
                }
                //일반적
                else
                {
                    result = result + "*"
                }
            }
            // result = result +'\n'
        }
        return result;
    }
    else
    {
        for(let i = 0; i<3;i++)
        {
            for(let j = 0; j<3;j++)
            {
                //중앙인 경우
                if(i === 1 && j === 1)
                {
                    result = result+ " "
                }
                //일반적
                else
                {
                    result =result + solution(n/3)
                }
            }
            result = result +'\n'
        }
        return result;
    }
}

console.log(solution(N));
