const fs =require('fs');
// let input =fs.readFileSync('../test.txt').toString().trim().split('\n');
let input =fs.readFileSync('dev/stdin').toString().trim().split('\n');
const [n,m] = input.shift().split(' ')
const set = new Set();
for(let i = 0;i<n;i++)
{
    set.add(input.shift())
}

const array = [];
for(let i = 0;i<m;i++)
{
    array.push(input.shift())
}

let count = 0;
array.forEach(item=>{
    if(set.has(item))
    {
        count++;
    }
})

console.log(count)
// let input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));