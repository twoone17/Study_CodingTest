const fs = require('fs')
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const N = Number(input.shift())
const problem = input.shift().split('')
let num
// let numArray = []
//number 미리 배열에 받아놓기
// while(num = Number(input.shift()))
// {
//     numArray.push(num)
// }

let eng = {}

for(let i=0;i<N;i++)
{
    eng[String.fromCharCode(i+65)] = input[i]
}


const operator = ['*','/','+','-']
//problem에 있는 배열을 number로 치환하기
for(let i = 0;i<problem.length;i++)
{
    //연산자가 아니라면, ABCD 등등이라면
    if(!operator.includes(problem[i]))
    {
        //저장한 numArray를 queue형식으로 pop한다
        problem[i] = eng[problem[i]]
    }
}

let word
//쵝근에 넣은걸 pop해서 계산해야 하기 때문에 stack을 사용한다
let stack = []
let result = 0;
//한글자씩 반복문
while(word = problem.shift())
{
    //연산자가 아니라면
    if(!operator.includes(word))
    {
        //stack에 push
        stack.push(word)
    }
    //연산자라면
    else
    {
        let operation = ''
        let b = stack.pop()
        let a = stack.pop()
        //두개 pop해서 연산자와 계산
        operation = a + word + b
        //string을 실행시켜주는 eval함수 :
        let operateResult = eval(operation)
        stack.push(operateResult)
    }
}
console.log(stack[0].toFixed(2))



