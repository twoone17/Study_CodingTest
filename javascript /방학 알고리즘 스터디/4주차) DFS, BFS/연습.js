//인접 리스트 구현
const V = 4;
const adjList = new Map()

for(let i = 0; i<4; i++)
{
    adjList.set(i,[])
}

function addEdge(u,v)
{
    adjList.get(u).push(v)
    adjList.get(v).push(u)
}

function printGraph(adjList)
{
    let keys = adjList.keys()
    for(let key of keys)
    {
        let values = adjList.get(key)
        let str= ''

        for(let value of values)
        {
            str += value + " "
        }
        console.log(key + " -> " + str)
    }
}

addEdge(0,1)
addEdge(0,2)
addEdge(1,2)
addEdge(2,3)
console.log(adjList)
printGraph(adjList)