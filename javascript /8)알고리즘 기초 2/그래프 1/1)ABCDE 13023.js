const fs = require('fs')
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => item.split(' ').map(item =>+item))
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => item.split(' ').map(item =>+item))
const [N,M] = input.shift()
let line;
const adjList = new Map()
for(let i = 0;i<N;i++)
{
    adjList.set(i,[])
}
while(line = input.shift())
{
    const [a,b] = line;
    adjList.get(a).push(b)
    adjList.get(b).push(a)
}

const visited = []

let flag = 0;
function dfs(vertex,cnt)
{

    if(flag) return;
    if(cnt === 4)
    {
        flag = 1;
        return;
    }

    if(!visited.includes(vertex))
    {
        visited[vertex] = true;
    }

    for(let currentVertex of adjList.get(vertex))
    {
        //방문하지 않았다면
        if(!visited[currentVertex])
        {
            dfs(currentVertex,cnt+1)
        }
    }

    visited[vertex] = false;

}

for(let i = 0; i<N;i++)
{
    dfs(i,0)
    if(flag)
    {
        break
    }
}

console.log(flag)



