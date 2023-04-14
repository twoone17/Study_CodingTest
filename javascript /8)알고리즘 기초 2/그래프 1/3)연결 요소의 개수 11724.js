const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => item.split(' ').map(item => +item));
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => item.split(' ').map(item => +item));
const [N,M] = input.shift()

/*const adjList = new Map()
for(let i = 1;i<=N;i++)
{
    adjList.set(i,[])
}
let n;
while(n = input.shift())
{
    const [a,b] = n
    adjList.get(a).push(b)
    adjList.get(b).push(a)
}*/

const adjList = []
for(let i = 1;i <=N;i++)
{
    adjList[i] = []
}

for(let i = 0;i<M;i++)
{
    const [a,b] = input[i]
    adjList[a].push(b)
    adjList[b].push(a)
}


let visited = []
function dfs(vertex) {

    //visited에 vertex가 없다면
    if (!visited[vertex]) {
        //해당 vertex를 방문했다고 표시
        visited[vertex] = true
    }


    //인접한 노드를 adjList에서 찾고, 그걸 for문을 돌려 깊이탐색을한다
    for (let i = 0; i<adjList[vertex].length; i++) {
        //찾는 노드가 방문을 하지 않았다면
        let currentVertex = adjList[vertex][i]
        if (!visited[currentVertex]) {
            //dfs 재귀 실행
            dfs(currentVertex)
        }
    }
}

let count = 0
for (let i = 1;i<
adjList.length;i++)
{
    if(!visited[i])
    {
        dfs(i)
        count++;
    }
}

console.log(count)
