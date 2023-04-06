const fs = require('fs')
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => item.split(' ').map(item =>+item))
const [N,M,V] = input.shift()
let line;
let adjList = new Map()
//인접 리스트 초기화
for(let i = 1;i<=N;i++)
{
    adjList.set(i,[])
}

while(line = input.shift())
{
    const [a,b] = line
    adjList.get(a).push(b)
    adjList.get(b).push(a)
}

console.log(adjList)



function BFS(graph,startVertex)
{
    let queue = [startVertex]
    //원래 객체로 했는데 탐색한 순서대로 출력해야 하기 때문에 배열을 사용함
    let visited = []
    visited.push(startVertex)
    while(queue.length)
    {
        const currentVertex = queue.shift()
        const neighbors = graph.get(currentVertex)

        for(let i = 0; i<neighbors.length;i++)
        {
            const neighbor = neighbors[i]
            if(!visited.includes(neighbor))
            {
                visited.push(neighbor)
                queue.push(neighbor)
            }
        }
    }

    return visited.join(' ')
}
// function DFS(graph,startVertex)
// {
//     let visited = []
//     let stack = [startVertex]
//     visited.push(startVertex)
//     while(stack.length)
//     {
//         //탐색할 vertex
//         const currentVertex = stack.pop()
//         //vertex 인접한 정점들 가져오기
//         const neighbors = graph.get(currentVertex)
//         //하나하나 확인, stack이니까 뒤에서부터
//
//         console.log(neighbors)
//         // for(let i = neighbors.length-1;i>=0;i--)
//         for(let i =0;i<neighbors.length;i++)
//         {
//             const neighbor = neighbors[i]
//             //탐색을 안했던 정점이라면
//             if(!visited.includes(neighbor))
//             {
//                 //탐색했다고 기록
//                 visited.push(neighbor)
//                 //stack에 넣는다
//                 stack.push(neighbor)
//             }
//         }
//     }
//
//     return visited.join(' ')
// }

function DFS(graph, startVertex) {
    const visited = {};   // 방문한 노드를 저장하기 위한 객체를 생성합니다.
    const stack = [startVertex];   // 스택을 생성하고 시작 노드를 삽입합니다.

    visited[startVertex] = true;   // 시작 노드를 방문한 것으로 표시합니다.

    while (stack.length) {   // 스택이 비어 있지 않은 동안 반복합니다.
        const currentVertex = stack.pop();   // 스택에서 노드를 하나 꺼냅니다.
        // const neighbors = graph[currentVertex];   // 해당 노드의 인접 노드들을 가져옵니다.
                const neighbors = graph.get(currentVertex)

        for (let i = 0; i < neighbors.length; i++) {   // 인접 노드들을 순회합니다.
            const neighbor = neighbors[i];

            if (!visited[neighbor]) {   // 방문하지 않은 노드라면
                visited[neighbor] = true;   // 방문한 것으로 표시합니다.
                stack.push(neighbor);   // 스택에 추가합니다.
            }
        }
    }

    return Object.keys(visited);   // 방문한 노드들을 배열로 반환합니다.
}


console.log(DFS(adjList,V))
console.log(BFS(adjList,V))

