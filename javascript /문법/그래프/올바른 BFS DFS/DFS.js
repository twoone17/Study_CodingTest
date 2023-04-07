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
    J: ["I"]
};

function DFS(graph,startVertex)
{
    let stack = []
    let visited = []

    stack.push(startVertex)

    while(stack.length)
    {
        const currentVertex = stack.pop()
        if(!visited.includes(currentVertex))
        {
            visited.push(currentVertex)
            stack.push(...stack,...graph[currentVertex])
        }
    }

    return visited
}

console.log(DFS(graph,'A'))