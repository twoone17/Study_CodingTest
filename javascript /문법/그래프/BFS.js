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

function bfs(graph,startVertex){
    //객체로 사용하면 문자열을 키로 잡을수도 있고 탐색할때 배열의 includes를 사용하는 것보다 (O(n)) 빠르다 (O(1))
    const visited = {};
    const queue = [startVertex];

    visited[startVertex] = true;

    //queue에 값이 들어있지 않을때까지 반복
    while(queue.length)
    {
        //큐에서 노드 하나를 꺼냄
        const currentVertex = queue.shift();
        //꺼낸 노드의 인접 노드들을 가져온다(인접리스트로 선언해주었기 때문에 가능)
        const neighbors = graph[currentVertex];

        for(let i = 0; i< neighbors.length;i++)
        {
            const neighbor = neighbors[i]

            if(!visited[neighbor]) //방문하지 않은 노드라면
            {
                visited[neighbor] = true; //방문한 것으로 표시
                queue.push(neighbor) //큐에 추가
            }
        }

    }

    return Object.keys(visited); //방문한 노드들을 배열로 반환한다
}

console.log(bfs(graph,'A'))


