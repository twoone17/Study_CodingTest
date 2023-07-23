const fs = require('fs')
// let input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let n = input.shift()
//끝나는 시간을 기준으로 정렬
//이전에 끝나는 시간보다 다음 시작시간이 크거나 같은 순으로 넣기

//input 끝나는 시간을 기준으로 정렬,
//끝나는 값이 같다면? 시작시간이 빠른 순으로 정렬 -> 그래야 회의시간이 짧으니까
input.sort((a,b)=>{
    if(a[1] === b[1])
    {
        return a[0] - b[0]
    }
    else
    {
        return a[1]-b[1]
    }

})

let result = 0
let compare = input[0][1]
for(let i = 0;i<input.length;i++)
{
    if(i === 0 )
    {
        result = 1
    }
    else
    {
        if(input[i][0] >= compare)
        {
            compare = input[i][1]
            result ++;
        }
    }

}
console.log(result)

