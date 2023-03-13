/**
 * 정렬은 파이썬 lambda보다 복잡하긴하지만, 이해하기가 쉽다
 * 기본적으로 a-b 하면 1,2,3.. 오름차순으로 정렬이 되고 어떤 것을 정렬할지 정하는 기준은 a[0], b[0], a[1].. 이렇게 정하면 된다
 */
const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));

const n = input.shift();
input.sort(function(a,b){
    if(a[0]!=b[0])
    {
        return a[0] - b[0]
    }
    else
    {
        return a[1]- b[1]
    }

})

let result = '';
input.forEach(item=>{
    result += item.join(' ')
    result += '\n'
})

console.log(result)