const fs = require('fs')
// const input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const [N,M] = input.shift()

//인접리스트로 변환
let graph = {}

for(let i = 0 ;i<N;i++)
{
    graph[i] = []
}

for(let i = 0 ;i<input.length;i++)
{
    let edge = input[i]
    graph[edge[0]].push(edge[1])
    graph[edge[1]].push(edge[0])
}

let visited = {}
let flag = 0
function dfs(vertex,count)
{
    if(flag)
        return;
    if(count === 4)
    {
        flag = 1
        return;
    }
    visited[vertex] = true

    graph[vertex].forEach(item=>{
        if(visited[item] != true)
        {
            dfs(item,count+1)
        }
    })

    visited[vertex] = false


}
let result
for(let i = 0;i<N;i++)
{
    dfs(i,0)
    if(flag ===1)
    {
        result = 1
        break;
    }
    else
    {
        result = 0
    }
}
console.log(result)