const fs = require('fs')
let input = fs.readFileSync('../text.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item))
let N = input.shift()

let priceArray  = []
function dfs(time)
{
    //n일의 time만큼 더해주기
    let price = 0

        let currentVertex = input[time-1]
        const profitIfTaken = currentVertex[1] + dfs(time + currentVertex[1]);
        const profitIfSkipped = dfs(time + 1);

        return Math.max(profitIfTaken,profitIfSkipped)

}

console.log(dfs(0))