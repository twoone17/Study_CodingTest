const fs = require('fs')
const input = fs.readFileSync('../../test.txt').toString().split('')
let word;
let count = 0;
let stack = []
let temp;
let result = 0
while(word = input.shift())
{
    if(word === '(')
    {
        stack.push(word)
    }
    else if(word === ')')
    {
        if(temp === '(') //레이저 ()일때
        {
            stack.pop()
            result = result + stack.length
        }
        else //쇠 막대기일때
        {
                result = result + 1
                stack.pop()
        }
    }
    temp = word
}

console.log(result)
//
// const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split('');
// let stack = [];
// let result = 0;
//
// for (let i = 0; i < input.length; i++) {
//     if (input[i] === '(') {
//         if (input[i + 1] === ')') {
//             // 레이저인 경우
//             result += stack.length;
//             i++; // 다음 ')'는 이미 처리되었으므로 건너뜁니다.
//         } else {
//             // 쇠막대기의 시작인 경우
//             stack.push('(');
//         }
//     } else if (input[i] === ')') {
//         stack.pop();
//         result++; // 쇠막대기의 끝인 경우
//     }
// }
//
// console.log(result);
//
//
//
//
//
