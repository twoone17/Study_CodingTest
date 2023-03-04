const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().split('\n')
const n = Number(input[0]);
let array = [];
input[1].split(" ").map(data => array.push(Number(data)))

let v = Number(input[2]);

const result = array.filter((item) => {
    return item === v;
});

console.log(result.length);