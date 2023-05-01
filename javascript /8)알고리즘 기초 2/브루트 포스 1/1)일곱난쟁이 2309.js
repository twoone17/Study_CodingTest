/**
 * for문을 7번 돌릴수는 없으니, 9 - 7 = 2를 제외하는 식으로 해야겠다
 * ! for문을 4번이상 돌리는건 말이 안됨 ! 그래야 한다면 다른 방식을 생각해보자
 */
const fs = require('fs')
// const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item=>+item)
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item=>+item)

const sum = input.reduce((prev,cur)=>{
    return prev+cur
},0)
let answer
let exceptSum = 0;
for(let i = 0; i<input.length-1;i++)
{
    for(let j = i+1;j<input.length;j++)
    {
        let a = input[i]
        let b = input[j]
        exceptSum = a + b
        if(sum-exceptSum === 100)
        {
            answer = input.filter((item)=>item!=input[i] && item!=input[j])
            break;
        }
    }
}

answer.sort((a,b)=>
{
    return a-b
})

console.log(answer.join('\n'))