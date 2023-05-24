// https://devjeong.com/algorithm/algorithm-1/ 사이트 참고
const fs = require('fs')
// let input = Number(fs.readFileSync('../../test.txt').toString().trim())
let input = Number(fs.readFileSync('dev/stdin').toString().trim())

let stack = [...Array(input).keys()].map(item=>item+1).sort((a,b) => {return b-a})
while(stack.length !=1)
{
    stack.pop()
    let temp = stack.pop()
    stack.unshift(temp)
}

console.log(Number(stack))


