const fs = require('fs')
const input = fs.readFileSync('../../test.txt').toString().split('<' || '>')

console.log(input)