const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n');
const [n,m] = input[0].split(' ').map(item => parseInt(item));

let array = [];
for(let i =1 ; i<=n;i++)
{
    array.push(i)
}

for(let p = 1; p<= m;p++)
{
    let [i,j] = input[p].toString().split(' ').map(item => parseInt(item));

    let newArr = array.slice(i-1,j).reverse();
    array.splice(i-1,j-i+1,...newArr);
}
console.log(array.join(' '))

