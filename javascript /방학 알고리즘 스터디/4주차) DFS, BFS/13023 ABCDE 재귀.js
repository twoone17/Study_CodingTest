const fs = require('fs')
const input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item => item.split(' ').map(item=>+item))
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => item.split(' ').map(item=>+item))

let [N,M] = input.shift()
//효율성을 위해 인접 리스트를 map으로 구현
let adjList = {}
//사람 수만큼 빈 map 만들기
for(let i = 0; i<N;i++)
{
    adjList[i] = []
}

//인접리스트에 추가
for(let i = 0; i<input.length;i++)
{
    let edge = input[i]
    adjList[edge[0]].push(edge[1])
    adjList[edge[1]].push(edge[0])
}

let visited = {}
let count = 0
let value = 0
function dfs(adjList,vertex,count)
{
    visited[vertex] = true
    if(value)
    {return;}
    if(count ===4)
    {
        value = 1
        return;
    }

    adjList[vertex].forEach(item=>{
        if(visited[item]!=true)
        {
            dfs(adjList,item,count+1)
        }
    })

    visited[vertex] = false
    //이걸 해야 통과된다.. 백트래킹을 위

}
let result;
for(let i=0; i<input.length;i++)
{
    visited = {}
    value = 0
    dfs(adjList,i,0)
    if(value === 1)
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