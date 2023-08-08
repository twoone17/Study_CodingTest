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

let visited = {}
let result = []
function dfs(graph,vertex)
{
    visited[vertex] = true
    result.push(vertex)
    graph[vertex].forEach(item=>{
        if(visited[item] != true)
        {
            dfs(graph,item)
        }
    })
}

console.log(dfs(graph,"A"))
console.log(result)