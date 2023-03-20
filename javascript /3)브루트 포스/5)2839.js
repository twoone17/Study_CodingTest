/**
 * 3을 0부터 시작해서 계속 먼저 빼고, 5로 나누어 떨어지는지 확인
 * 나누어 떨어진다면 종료
 * 나누어 떨어지지 않는다면 계속 3을 빼기
 * 만약 3으로 계속뺐는데
 */

const fs =require('fs');
// let input =fs.readFileSync('../test.txt').toString();
let input =fs.readFileSync('dev/stdin').toString()
const n = parseInt(input)
let result = 0;
function solution(x)
{
    while(true)
    {
        if(x>0)
        {
            if(x%5 === 0)
            {
                result = result + x/5;
                return result;
                break;
            }
            else
            {
                x = x-3;
                result++;
            }
        }
        else if(x===0)
        {
            return result;
            break;
        }
        else
        {
            result = -1;
            return result;
            break;
        }
    }

}

console.log(solution(n))