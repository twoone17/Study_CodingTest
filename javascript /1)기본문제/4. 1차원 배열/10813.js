const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().split('\n');
let [n,m] = input[0].split(" ")

const array = [];
for(let i = 1 ;i <= n; i++)
{
 array.push(i);
}

let temp;
for(let p = 1; p<=m; p++)
{
    const [i,j] = input[p].split(" ")

    temp = array[i-1];
    array[i-1] = array[j-1];
    array[j-1] = temp;
}
console.log(array.join(" "))