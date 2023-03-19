/**
 *
+55-50+40
+55-50-40

55-50+40+100-30
-를 찾고, 다음 - 를 찾을때까지 숫자들을 array에 넣거나 lengh까지 넣기
 다음에...

 -를 기준으로 split 해서 map으로 다 더해준다.
 나머지는 더해주면 끝


*/
const fs= require('fs');
// const input = fs.readFileSync('../test.txt').toString().split('-').map(item=>item.split('+'));
const input = fs.readFileSync('dev/stdin').toString().split('-').map(item=>item.split('+'));
let result =input.map(item=>item.reduce((prev,cur)=>{
    prev = Number(cur) + prev;
    return prev;
},0))
let sum = 0;
for(let i= 1;i<result.length;i++)
{
    sum = sum + result[i];
}
let result2= result[0]- sum;
console.log(result2)




