const fs = require('fs');
const input = fs.readFileSync('../test.txt').toString().split(' ');
//백준에서 입력 방식
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const a = input[0]
console.log(a)

//파일로 입력을 받는게 javascript의 일반적인 입력방식