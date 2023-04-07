//https://ryusm.tistory.com/48
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

function BFS(graph,startVertex)
{
    let visited = []
    let queue = []

    queue.push(startVertex)

    while(queue.length)
    {
        const currentVertex = queue.shift()
        if(!visited.includes(currentVertex))
        {
            visited.push(currentVertex)
            queue = [...queue,...graph[currentVertex]]
        }
    }

    return visited

}

console.log(BFS(graph,'A'))