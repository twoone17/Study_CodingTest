/**
 * 2 1 5일때
 *
 * 2x >=5 이면  -1
 *
 *
 * 밤에 미끄러지는 수를 뺴서 나누면 되는구나.. 왜 그생각을 못했지..
 */

const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().split(' ').map(item=>+item);
const [a,b,v]  = input;

console.log(Math.ceil((v-b)/(a-b)))

// const fs = require('fs');
// // const input = fs.readFileSync('dev/stdin').toString().split(' ').map(item=>+item);
// const input = fs.readFileSync('../../test.txt').toString().split(' ').map(item=>+item);
// const [a,b,v]  = input;
// let sum = 0;
// let result;
// let startPoint;
// // if(Math.floor(v/a) >=1)
// // {
// //     sum = (Math.floor(v/a))*a-Math.floor(v/a)*b
// //     startPoint = Math.floor(v/a);
// // }
// // else{
// //     sum = 0;
// //     startPoint = 1;
// // }
//
//
// if(Math.floor(v-a) >=1)
// {
//     sum = (v - a);
//     startPoint = (v-a)/(a-b)
// }
// else{
//     sum = 0;
//     startPoint = 1;
// }
//
// for(let i = startPoint+1; i< v; i++)
// {
//     sum = sum + a;
//     if(sum >= v)
//     {
//         result = i;
//         break;
//     }
//     else{
//         sum = sum -b;
//     }
// }
//
// console.log(result);