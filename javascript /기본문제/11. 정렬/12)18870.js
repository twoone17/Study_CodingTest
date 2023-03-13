const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => item.split(' ').map(item => +item));
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => item.split(' ').map(item => +item));
const n = input.shift();
const newInput = input.flat(3);
const set = new Set([...newInput]);
const uniqueArray = Array.from(set);

const map = new Map();
uniqueArray.sort(function (a, b) {
    return a - b;
})
uniqueArray.forEach((item, idx) => {
    map.set(item, idx);
})

let array = [];
for (let i = 0; i < n; i++) {
    array.push(map.get(newInput[i]))
}

console.log(array.join(' '))

