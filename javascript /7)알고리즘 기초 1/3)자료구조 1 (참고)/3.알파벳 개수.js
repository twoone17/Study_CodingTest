const fs = require('fs')
// const input = fs.readFileSync('../../test.txt').toString().trim().split('')
const input = fs.readFileSync('dev/stdin').toString().trim().split('')

//알파벳에 상응하는 객체를 만들기
const eng = {}
for(let i = 0; i<26;i++)
{
    eng[String.fromCharCode(i+97)] = 0;
}

let word;
while(word = input.shift())
{
    eng[word]++
}

let result = ''
for(let i = 0;i<26;i++)
{
    result += eng[String.fromCharCode(i+97)]
    result += " "
}

console.log(result)