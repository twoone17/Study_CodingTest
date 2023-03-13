/**
 * 5 -> 1 + 2 : 2+1 번쨰 대각선 a , 나머지 2 : 대각선 몇번째인지 b
 * 대각선 index % 2 가 짝수이면 분모 a에서부터 -1 씩 감소, 분자 1에서부터 a까지 1씩 증가
 * 대각선 index % 2 가 홀수이면 분모 1에서부터 a까지 1 씩 증가, 분모 a에서부터 1씩 감소
 *
 * for문으로 x가 몇번째 대각선인지 계산, 나머지 몇인지 계산
 * %2 로 각각의 로직 구현
 */

const fs = require('fs');
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
const x = parseInt(input[0]);


// const max = 99;
let sum = 0;
let index_a, // 대각선 index
    index_b; // 나머지 index
for(let i = 1; i<=x;i++)
{
    //sum을 통해 대각선 index 계산, sum 전 index가 대각선 index
    sum += i;
    if(sum >= x)
    {
        index_a = i;
        index_b = x - (sum - i) //이전 합을 계산해서 x와 빼면서 나머지 index를 구한다
        break;
    }
}
let result;
//대각선 index가 홀수일때 : 분자가 감소, 분모가 증가
if(index_a % 2 === 1)
{
    result = (index_a-(index_b-1)) + "/" + (1 + index_b - 1)
}else
{
    result =  (1 + index_b-1) + "/" + (index_a-(index_b-1))
}

console.log(result);







/**
 * 분자, 분모가 연속적인 특징을 이용하자
 * 지그재그 방식을 잘모 ㅅ이해했다.. 1/1 -> 1/2 -> 2/1 ->1/3 -> 2/2. ... 이런식인줄
 * 아니 문제가 너무 불친절한거 아니냐
 */



// const fs = require('fs');
// // const input = fs.readFileSync('../../test.txt').toString()
// const input = fs.readFileSync('dev/stdin').toString()
// let n = parseInt(input);
//
// let max = 100;
// let sum = 0;
// let sumIndex = 0;
// for(let i = 1; i < max; i++)
// {
//     if(sum >= n)
//     {
//         sumIndex = i-1;
//         sum = sum - (i-1)
//         break;
//     }
//     sum = sum + i;
// }
//
// //1+2 .. 에서 얼마나 남았는지 : y값
// let index = n - sum;
// let a = sumIndex - index + 1
//
// console.log(index+ "/" + a)

