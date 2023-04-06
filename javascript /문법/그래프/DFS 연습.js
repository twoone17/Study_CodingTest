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

function dfs(graph,startVertex)
{
    let stack = [startVertex]
    let visited = {}
    visited[startVertex] = true;

    while(stack.length)
    {
        const currentVertex = stack.pop()
        const neighbors = graph[currentVertex]
        // for(let i = neighbors.length-1 ; i>=0;i--)
        for(let i = 0 ; i<neighbors.length;i++)
        {
            const neighbor = neighbors[i]
            if(!visited[neighbor])
            {
                visited[neighbor] = true;
                stack.push(neighbor)
            }
        }
    }

    return Object.keys(visited)
}

console.log(dfs(graph,'A'))