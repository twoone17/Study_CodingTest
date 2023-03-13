const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim();
const result = input[0].charCodeAt(0)
console.log(result)