const fs = require('fs')
// const input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item =>item.split(' '))
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item =>item.split(' '))
const n = input.shift()
let arr
let result = ''
while(arr = input.shift())
{

    result += arr.map(item=>item.split('').reverse().join('')).join(' ')
    result +='\n'
}
console.log(result)