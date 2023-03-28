const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item => +item)
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item => +item)
const n = input.shift();
const array = [];
let count = 1;
let result = ''
let temp = n + 1;

function solution() {
    for (let i = 0; i < n; i++) {
        let num = input.shift()
        while (count <= num) {
            array.push(count++)
            result += '+'
            result += '\n'
        }

            const poppedNum = array.pop();
        if(poppedNum !=num)
        {
            return 'NO'
        }

        result += '-'
        result += '\n'
    }
    return result
}

console.log(solution())