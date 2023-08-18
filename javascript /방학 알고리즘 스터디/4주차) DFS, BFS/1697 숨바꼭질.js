const fs = require('fs')
const input = fs.readFileSync('../text.txt').toString().split(' ').map(item=>+item)
// const input = fs.readFileSync('dev/stdin').toString().split(' ').map(item=>+item)
const [N,K] = input
console.log(bfs(N,K))
function bfs(x,y)
{
    let visited = {}
    //현재 좌표와 depth를 선언
    let needVisit = [[N,0]]
    let count = 0
    while(needVisit.length>0)
    {
        console.log(needVisit)
        let [currentVertex,depth] = needVisit.shift()
        //수빈이가 동생의 좌표라면
        if(currentVertex === y)
        {
            //depth를 출력 , depth가 결국 시간이 됨
            return depth
            break;
        }
        let changedVertex;
        //+1,-1,곱하기 2의 경우의 수 중 좌표 조건을 만족하고 방문을 하지 않았다면 넣고 bfs를 돌리기
        [currentVertex-1,currentVertex+1,currentVertex*2].forEach(vertex=>{
            if(vertex >=0 && vertex <= 100000 && visited[vertex] != true)
            {
                //그 노드를 방문했다고 초기화
                visited[vertex] = true
                //방문할 노드에 추가
                needVisit.push([vertex,depth+1])
            }
        })

        count++;


    }


}