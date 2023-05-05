const fs = require('fs')
// const input = fs.readFileSync('../../test.txt').toString().split(' ').map(item=>+item)
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(item=>+item)
const [n,k] = input
//이렇게 배열을 선언 안하고 좀더 효율적인 방법이 있을듯

function solution(N,K)
{
    let array = []

    for(let i= 1;i<=N;i++)
    {
        array.push(i)
    }

    let index = 0
    let result = []
    while(array.length)
    {
        index = (index + K-1)%array.length

        let removed = array.splice(index,1)
        result = [...result,...removed]
    }

    return result.join(', ')
}

console.log("<" + solution(n,k) + ">")
