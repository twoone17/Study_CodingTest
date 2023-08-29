const fs = require('fs')
let input = fs.readFileSync('../text.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item))
let N = input.shift()

let priceArray  = []
function dfs(time)
{
    //n일의 time만큼 더해주기
    let price = 0
    while(time>=7)
    {
        if(time-1 >= N)
        {
            return
        }
        let currentVertex = input[time-1]
        price = price + currentVertex[1]

        dfs(time + currentVertex[0])

    }
    return time
}

console.log(dfs(0))