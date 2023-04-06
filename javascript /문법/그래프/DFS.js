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

function dfs(graph, startVertex) {   // DFS 알고리즘을 구현합니다.
    const visited = {};   // 방문한 노드를 저장하기 위한 객체를 생성합니다.
    const stack = [startVertex];   // 스택을 생성하고 시작 노드를 삽입합니다.

    visited[startVertex] = true;   // 시작 노드를 방문한 것으로 표시합니다.

    while (stack.length) {   // 스택이 비어 있지 않은 동안 반복합니다.
        const currentVertex = stack.pop();   // 스택에서 노드를 하나 꺼냅니다.
        const neighbors = graph[currentVertex];   // 해당 노드의 인접 노드들을 가져옵니다.

        for (let i = neighbors.length-1; i >= 0; i--) {   // 인접 노드들을 순회합니다.
            const neighbor = neighbors[i];

            if (!visited[neighbor]) {   // 방문하지 않은 노드라면
                visited[neighbor] = true;   // 방문한 것으로 표시합니다.
                stack.push(neighbor);   // 스택에 추가합니다.
            }
        }
    }

    return Object.keys(visited);   // 방문한 노드들을 배열로 반환합니다.
}

console.log(dfs(graph, 'A'));   // DFS 알고리즘을 실행하고 결과를 출력합니다.