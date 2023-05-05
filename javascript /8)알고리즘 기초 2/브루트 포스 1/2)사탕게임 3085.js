// const fs = require('fs')
// let input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
// const n = input.shift()
// input = input.map(item=>item.split(''))
//
// for(let i = 0;i<input.length;i++)
// {
//     for(let j = 0;j<input[i].length-1;j++)
//     {
//
//     }
// }

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n');

const n = parseInt(input[0]);
const grid = input.slice(1).map(row => row.split(''));

let maxLen = 0;

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // Check horizontal sequences
        let len = 1;
        for (let k = j + 1; k < n && grid[i][k] === grid[i][j]; k++) {
            len++;
        }
        maxLen = Math.max(maxLen, len);

        // Check vertical sequences
        len = 1;
        for (let k = i + 1; k < n && grid[k][j] === grid[i][j]; k++) {
            len++;
        }
        maxLen = Math.max(maxLen, len);
    }
}

console.log(maxLen);


