const fs =require('fs');
// let input =fs.readFileSync('../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
let input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));

const n = input.shift()
const item = input.shift()
const m = input.shift();
const newItem = input.shift();
let result = ''


const map = new Map();
item.forEach(x=>{
    let count = 0;
    if(map.has(x))
    {
        count = map.get(x) + 1
        map.set(x,count);
    }
    else
    {
        map.set(x,1)
    }
})

newItem.forEach(x=>{
    if(map.has(x))
    {
        result += map.get(x)
    }
    else{
        result += '0'
    }
    result += " "
})

console.log(result)

