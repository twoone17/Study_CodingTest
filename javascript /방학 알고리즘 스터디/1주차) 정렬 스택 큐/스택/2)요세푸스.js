const fs = require('fs')
const input = fs.readFileSync('../text.txt').toString().trim().split(' ').map(item =>+item)
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item =>item.split(' '))
const [n,k] = input
let arr = []
for(let i = 1; i<=n;i++)
{
    arr.push(i)
}

let result = []
let index = 0;
while(arr.length)
{
    index++
    let temp = arr.shift()
    if(index % k === 0)
    {
        result.push(temp)
    }
    else
    {
        arr.push(temp)
    }
}
// console.log(result)
let newResult = ''
newResult +='<'
newResult +=result.join(', ')
newResult +='>'
console.log(newResult)