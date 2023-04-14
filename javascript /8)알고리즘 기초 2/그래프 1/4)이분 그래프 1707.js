const fs = require('fs')
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const T = input.shift()
let depth;
for(let t=0;t<T;t++)
{
    depth = 1;
    let [V,E] = input.shift()
    let visited = new Map()
    const adjList = []
//배열로 인접리스트를 선언, index를 활용할것이기 때문에 1부터 초기화
    for(let i =1;i<=V;i++)
    {
        adjList[i] = []
        visited.set(i,[])
    }

    for(let i = 0 ;i<E;i++)
    {
        const [a,b] = input.shift()
        adjList[a].push(b)
        adjList[b].push(a)
    }


    bfs(1,adjList,visited)

}


function bfs(vertex,adjList,visited)
{
    //첫번째 요소는 탐색하는 vertex, 두번째는 깊이정보
    let queue = []

    if(!visited.get(vertex).length)
    {
        visited.get(vertex).push(depth)
        queue.push(vertex)
    }
    depth++;

    while(queue.length)
    {
        let currentVertex = queue.pop()
        adjList[currentVertex]

        if(!visited.get(currentVertex).length)
        {
            visited.get(currentVertex).push(depth)
            queue.push(...adjList[currentVertex])
        }

    }

}