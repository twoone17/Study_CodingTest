const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
result = []
input.forEach((item)=>{
    result.push(Number(item) % 42)
})
const set = new Set(result);
console.log(set.size)