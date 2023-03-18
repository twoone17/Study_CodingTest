/**
 * 1. 끝나는 시간으로 정렬
 * 2. 끝나는 시간 <= 시작하는 시간 짧은 순으로 나열
 */

const fs = require('fs');
// const input = fs.readFileSync('../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const n = input.shift();
input.sort(function(a,b){
    if(a[1] > b[1])
    {
        return 1;
    }
    else if(a[1]<b[1])
    {
        return -1
    }
    else if(a[1] === b[1])
    {
        return a[0]- b[0]
    }
})

let temp;
let count = 0;
for(let i = 0; i< n;i++)
{
    if(i===0)
    {
        temp = input[0][1];
        count++;
    }
    else
    {
        if(input[i][0]>=temp)
        {
            count++;
            temp = input[i][1];
        }
    }
}
console.log(count)