const fs = require('fs')
// const input =fs.readFileSync('../text.txt').toString().trim().split('\n').map(item=>+item)
const input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>+item)
let [n,k] = input
// console.log(n,k)
console.log(binarySearch(n,k))
function binarySearch(n,k)
{
    let head = 1
    let tail = n*n
    let mid
    let result

    while(head <=tail)
    {
        mid = Math.floor((head+tail)/2)
        result = mid
        let count = 0
        for(let i = 1;i<=n;i++)
        {
            if(Math.floor(mid/i) >=n)
            {
                count += n
            }
            else
            {
            count += Math.floor(mid/i)
            }

        }

        if(count === k) {
            result = mid
        }
        else if(count < k)
        {
            head = mid +1
        }
        else
        {
            tail = mid -1
        }

    }
    return result
}