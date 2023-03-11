const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split('\n')
const input = fs.readFileSync('dev/stdin').toString().split('\n')
const N = parseInt(input[0]);
let array = [];
let num = N;
for(let i = 2;i<=N;i++)
{
    while(num%i === 0)
    {
        array.push(i);
        num = num/i;
    }
}
console.log(array.join('\n'))

// //재귀로 풀다가 실패, 재귀로 풀지말고 / 를 이용해서 재귀랑 비슷한 느낌을 사용하자
// const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString();
// const N = parseInt(input[0]);
// let array = [];
// for(let i = 1; i<=N;i++)
// {
//     if(N%i === 0)
//     {
//         array.push(i);
//     }
//     let middleIndex = Math.floor(array.length/2)
//     //개수가 짝수일때
//     divide(array);
//     // if(array.length % 2)
//     // {
//     //     divide(array[middleIndex-1])
//     //     divide(array[middleIndex])
//     // }
//     // //개수가 홀수일때
//     // else
//     // {
//     //     divide(array[middleIndex])
//     // }
// }
//
// function divide(array)
// {
//     let middleIndex = Math.floor(array.length/2)
//     if(array.length % 2)
//     {
//         divide(array[middleIndex-1])
//         divide(array[middleIndex])
//     }
//     //개수가 홀수일때
//     else
//     {
//         divide(array[middleIndex])
//     }
// }
