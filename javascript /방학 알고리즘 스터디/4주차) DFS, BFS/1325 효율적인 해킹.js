const fs =require('fs')
const input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const [N,M] = input.shift()
const adjList = {}

//인접리스트 객체 key : value(배열) 로 초기화
for(let i = 1; i<=N;i++)
{
    adjList[i] = []
}

for(let i = 0; i<M;i++)
{
    let edge = input[i]
    adjList[edge[1]].push(edge[0]) //A가 B를 신뢰한다 -> B를 해킹하면 A를 해킹할 수 있다 -> B에 A가 연결된 구조
    // adjList[edge[0]] = edge[1] -> 기존의 인접리스트와는 다르게 주어진 간선만을 할당해줌
}


function bfs(startVertex)
{
    //방문했는지 확인하는 visited 객체
    let visited = {}
    //방문이 필요한 노드를 확인하는 queue 선언
    let needVisit = []

    //start vertex를 방문할 노드에 추가
    needVisit.push(startVertex)
    //start vertex를 방문했다고 추가
    visited[startVertex] = true
    //방문할 노드가 없을때까지
    while(needVisit.length)
    {
        //bfs이니까 맨 앞에있는것부터 너비 탐킹색 shift로 빼주기
        let currentVertex = needVisit.shift()
        //탐색하는 노드에 연결되어있는 인접리스트를 탐색
            adjList[currentVertex].forEach(vertex=>{
                //연결되어있는 인접리스트가 방문하지 않았다면
                if(visited[vertex] != true) {
                    //방문했다고 변경하고
                    visited[vertex] = true
                    //탐색할 노드에 추가
                    needVisit.push(vertex)
                }
            })
    }
    //startvertex에서부터 bfs로 탐색하면 몇개의 노드를 탐색하는지에 대한 개수를 반환
    return Object.keys(visited).length
}

let max = 0;
let result = []
//startvertex를 하나씩 모두 확인
for(let i = 1;i<=M;i++)
{
    //bfs로 탐색했을때 노드의 개수가 최대인지 확인
    if(max < bfs(i))
    {
        result = []
        max = bfs(i)
        result.push(i)
    }
    else if(max === bfs(i))
    {
        result.push(i)
    }
}
console.log(result.join(' '))


