const fs = require('fs')
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item =>item.trim().split(" ").map(item=>+item));
const [n,m] = input.shift();
let array = Array.from(Array(n),()=>new Array(m));
let number = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            array[i][j] = input[i][j] + input[i+n][j]
        }
    }

    let answer = '';
    for(let i = 0; i<n;i++)
    {
        for(let j= 0 ; j<m; j++)
        {
            answer += array[i][j].toString() + " ";
        }
        answer  += "\n";
    }

console.log(answer)


//input은 2차원 배열로 받을 수 있다. [row][column]