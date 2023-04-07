const fs = require('fs')
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => item.split(' ').map(item =>+item))
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => item.split(' ').map(item =>+item))
const [N,M,V] = input.shift()
let line;
let adjList = new Map()
//인접리스트 초기화


for(let i = 1; i<=N;i++)
{
    adjList.set(i,[])
}


while(line = input.shift())
{
    const [a,b] = line
   adjList.get(a).push(b)
   adjList.get(b).push(a)
}

function BFS(graph,startVertex)
{
    let visited = []
    let queue = []
    queue.push(startVertex)

    while(queue.length)
    {
        const currentVertex = queue.shift()
        if(!visited.includes(currentVertex))
        {
            visited.push(currentVertex)
            queue = [...queue,...graph.get(currentVertex).sort((a,b)=>a-b)]
        }
    }
    return visited
}

function DFS(graph,startVertex)
{
    let visited = []
    let stack = []
    stack.push(startVertex)

    while(stack.length)
    {
        const currentVertex = stack.pop()
        if(!visited.includes(currentVertex))
        {
            visited.push(currentVertex)
            stack = [...stack,...graph.get(currentVertex).sort((a,b)=>b-a)]
            //그냥 sort를 하나만 하면 , 원래의 배열에 영향을 미치므로 bfs까지 sort를 해주어야한다.
            //깊은 복사를 살펴봐야겠다
        }
    }
    return visited
}


console.log(DFS(adjList,V).join(' '))
console.log(BFS(adjList,V).join(' '))