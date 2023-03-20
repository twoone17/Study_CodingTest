/**
 * 재귀의 호출은 같은 문제 내에서 더 범위가 작은 값, 즉, 하위 문제에 대해 이루어져야 한다.
 * 재귀함수 호출은 더 이상 반복되지 않는 base case에 도달해야 한다.
 */
const fs =require('fs');
// let input =fs.readFileSync('../test.txt').toString();
let input =fs.readFileSync('dev/stdin').toString();
const N = parseInt(input);
function solution(n)
{
    //탈출조건(base case)
    if(n === 1)
    {
        return 1;
    }
    else if(n === 0)
    {
        return 1;
    }
    //하위 문제
    else
    {
        //재귀
        return n*solution(n-1)
    }
}

console.log(solution(N))