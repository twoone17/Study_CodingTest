const fs =require('fs');
// let input =fs.readFileSync('dev/stdin').trim().toString();
let input =fs.readFileSync('../test.txt').toString();
const N =parseInt(input);

function solution(N){
    //중단 조건
    if(N ===0)
    {
        return 0;
    }
    else if(N === 1)
    {
        return 1;
    }
else{
        return solution(N-2) + solution(N-1)
    }


    //재귀 조건
}

console.log(solution(N));