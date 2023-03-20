/**
 * 0 -> 666
 * 1 -> 1666
 * 2 -> 2666
 * 6 -> 5666
 * 7--> 6661
 * 8 -> 6662
 * 9 -> 6663
 * 10 ->6664
 * 6669
 * 7666
 * 8666
 * 9666
 * 16661
 *
 *
 * 666이 포함되어있는데 숫자가 가장 작은 경우를 순서대로 계산하고, 순서에 따라 출력
 *
 */

const fs =require('fs');
// let input =fs.readFileSync('../test.txt').toString();
let input =fs.readFileSync('dev/stdin').toString()
const n = parseInt(input)
// let input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));

let answer = 0;
function solution(n)
{
    let current = 666;
    while(true)
    {
        if(String(current).includes('666'))
        {
            answer++;
            if(answer === n)
            {
                answer = current;
                break;
            }
        }
        current++;
    }
    return answer;
}

console.log(solution(n))