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

function bfs(graph,startVertex)
{
    let visited = {};
    let queue = [startVertex];

    visited[startVertex] = true;

    while(queue.length)
    {
        const currentVertex = queue.shift()
        const neighbors = graph[currentVertex]

        for(let i = 0;i<neighbors.length;i++)
        {
            const neighbor = neighbors[i]
            if(!visited[neighbor])
            {
                visited[neighbor] = true
                queue.push(neighbor)

            }
        }
    }
    return Object.keys(visited)
}


console.log(bfs(graph,'A'));