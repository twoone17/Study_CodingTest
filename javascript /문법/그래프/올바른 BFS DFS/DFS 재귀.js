const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"],
};


let visited = []

function DFS(vertex)
{
    if(!visited.includes(vertex))
    {
        visited[vertex] = true;
    }

    for(let currentVertex of graph[vertex])
    {
        if(!visited[currentVertex])
        {
            DFS(currentVertex)
        }

    }

    // return visited
    return Object.keys(visited)

}

console.log(DFS("A"))