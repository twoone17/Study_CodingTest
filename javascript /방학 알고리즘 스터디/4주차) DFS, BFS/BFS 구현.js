//인접 리스트 주어짐
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'G', 'H', 'I'],
    D: ['B', 'E', 'F'],
    E: ['D'],
    F: ['D'],
    G: ['C'],
    H: ['C'],
    I: ['C', 'J'],
    J: ['I']
};

//BFS
console.log(bfs(graph,'A'))
function bfs(graph,startVertex)
{
    //방문했는지 여부를 확인하는 visited 객체 선언
    let visited = {}
    //큐를 사용해서 BFS 구현
    let needVisit = []
    //시작 노드 추가
    needVisit.push(startVertex)
    //queue가 존재할때까지
    while(needVisit.length >0)
    {
        //queue 맨 앞에 있는게 탐색할 vertex
        let currentVertex = needVisit.shift()
        //방문하지 않았다면
        if(visited[currentVertex] != true)
        {
            //방문했다고 변경
            visited[currentVertex] = true
            //탐색하던 depth를 먼저 탐색할 수 있게 needvisit를 먼저 넣고, 인접한 노드들을 뒤에 넣는다
            needVisit = [...needVisit,...graph[currentVertex]]

        }

    }

    return Object.keys(visited)
}