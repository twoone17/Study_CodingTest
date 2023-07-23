const fs = require('fs')
// const input = fs.readFileSync('../text.txt').toString().trim().split('-').map(item=>item.split('+'))
const input = fs.readFileSync('dev/stdin').toString().trim().split('-').map(item=>item.split('+'))
// console.log(input)
let result = input.map(item=>item.reduce((prev,cur)=>{
   prev += Number(cur)
    return prev
},0))
let sum =0
for(let i = 1;i<result.length;i++)
{
    sum = sum+result[i]
}
console.log(result[0]-sum)