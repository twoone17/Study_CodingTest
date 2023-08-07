const fs = require('fs')
const input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item => item.split(' ').map(item=>+item))

let [N,M] = input.shift()
//효율성을 위해 인접 리스트를 map으로 구현
let adjList = new Map()
//사람 수만큼 빈 map 만들기
for(let i = 0; i<N;i++)
{
    adjList.set(i,[])
}

//인접리스트에 추가
for(let i = 0; i<input.length;i++)
{
    let edge = input[i]
    adjList.get(edge[0]).push(edge[1])
    adjList.get(edge[1]).push(edge[0])
}

//DFS 함수 구현
function DFS(graph)
{
    //방문 여부를 확인
    let visited = {}
    //방문해야할 node
    let needVisit = []
    //시작 노드 하나하나 검증 (답 나오면 break)
    for(let i=0;i<adjList.size;i++)
    {

        needVisit.push(i)
        let count =1
        while(needVisit.length > 0 && count <=4)
        {
            //검색할 노드
            let currentVertex = needVisit.shift()

            //방문을 안했다면
            if(visited[currentVertex]!=true)
            {
                visited[currentVertex] = true
                if(adjList.get(currentVertex))
                {
                    needVisit = [...adjList.get(currentVertex),...needVisit]
                    count++
                }
                else
                {

                }
                // if(adjList.get(currentVertex).length )
                // count++
            }
        }
    }
    //첫번째 방문할 노드 0으로 설정

}

console.log(DFS(adjList))