const V = 4; //정점의 개수
const adjList = new Map();

//인접리스트 초기화
for(let i = 0;i<V;i++)
{
    adjList.set(i,[])
}


//간선 추가 함수
function addEdge(u,v)
{
    adjList.get(u).push(v);
    adjList.get(v).push(u);
}

function printGraph()
{
 let keys = adjList.keys();
 for(let key of keys) {
     let values = adjList.get(key);
     let str = '';

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
printGraph()