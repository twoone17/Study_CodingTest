const fs =require('fs');
// let input =fs.readFileSync('../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
let input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));

const n = input.shift()
const item = input.shift()
const m = input.shift();
const newItem = input.shift();
let result = ''


const set = new Set(item);

newItem.forEach(x=>{
    if(set.has(x))
    {
        result += '1'
    }
    else{
        result += '0'
    }
    result += " "
})

console.log(result)

// newItem.forEach(x => {
//     if (item.includes(x))
//     {
//         result += '1'
//     }
//     else{
//         result += '0'
//     }
//     result += " "
// })
//이렇게하면 최대 500000*500000이라 2500억번으로 너무 많게된다
//이럴땐 set를 사용하는게 빠르다
