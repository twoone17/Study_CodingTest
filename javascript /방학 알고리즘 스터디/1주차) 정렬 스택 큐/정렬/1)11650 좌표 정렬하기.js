const fs = require('fs');
let input = fs.readFileSync('../text.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item))
// let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const n = input.shift()
input = input.sort(function(a,b){
    //x의 값이 같지 않다면 일반 정렬
    if(a[0]!=b[0])
    {
        if(a[0]>b[0])
        {
            return 1
        }
        else
        {
            return -1
        }
        // return a[0]-b[0]
    }
    //X의 값이 같다면 y를 기준으로 정렬
    else
    {
        if(a[1]>b[1])
        {
            return 1;
        }
        else
        {
            return -1
        }
        // return a[1]-b[1]
    }
})
let result = ''
input.forEach(item=>{
    result += item.join(' ')
    result+= '\n'
})
console.log(result)