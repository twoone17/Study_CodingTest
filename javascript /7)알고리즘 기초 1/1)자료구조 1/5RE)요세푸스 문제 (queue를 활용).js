const fs = require('fs')
// const input = fs.readFileSync('../../test.txt').toString().split(' ').map(item=>+item)
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(item=>+item)
const [n,k] = input
//이렇게 배열을 선언 안하고 좀더 효율적인 방법이 있을듯

function solution(N,K)
{
    let queue = []
    for(let i= 1;i<=N;i++)
    {
        queue.push(i)
    }

    let result = []
    let count = 0;
    while(queue.length)
    {
        let removed = queue.shift()
        count++
        if(count%k === 0)
        {
            result.push(removed)
        }
        else
        {
            queue.push(removed)
        }

    }
    return result.join(', ')
}

console.log("<" + solution(n,k) + ">")
