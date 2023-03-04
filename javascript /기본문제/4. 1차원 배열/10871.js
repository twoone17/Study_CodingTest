const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n')
const [n,x] = input[0].split(' ').map((item) => Number(item));
let A = [];
input[1].split(' ').map((item)=>A.push(Number(item)));

const result = A.filter((item)=>{
    return item < x
})

let str = '';
result.forEach((item)=>{
    str = str + item;
    str += ' '
})

console.log(str)

//join 을 사용하기 !
// result.join(" ");