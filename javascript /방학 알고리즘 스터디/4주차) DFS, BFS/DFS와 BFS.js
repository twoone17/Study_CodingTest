const input = require('fs').readFileSync('../text.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
// const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const [n,m,v] = input.shift()
let adjList = {}
for(let i =1; i<=n;i++)
{
    adjList[i]  =[]
}


for(let i=0;i<m;i++)
{
    let edge = input[i]
    adjList[edge[0]].push(edge[1])
    adjList[edge[1]].push(edge[0])
}



for(let i = 1; i<=n;i++)
{
    adjList[i].sort((a,b)=>{
        return a-b
    })
}

let dfsResult = ''

function dfs(vertex,visited)
{
    visited[vertex] = true
    dfsResult += vertex
    dfsResult += ' '

        adjList[vertex].forEach(item=>{
            if(visited[item] != true) {
                dfs(item,visited)
            }
        })

}

dfs(v,{})

let bfsResult = ''
function bfs(vertex,visited)
{
    let needVisit = []
    needVisit.push(vertex)
    while(needVisit.length>0)
    {
        let visiting = needVisit.shift()
        if(visited[visiting] != true)
        {
            visited[visiting] = true
            needVisit = [...needVisit,...adjList[visiting]]
        }
    }

    return visited
}

bfs(v,{})
console.log(dfsResult)
console.log(bfsResult)

