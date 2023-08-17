const fs = require('fs')
// const input =fs.readFileSync('../text.txt').toString().trim().split('\n')
const input =fs.readFileSync('dev/stdin').toString().trim().split('\n')
const n = Number(input.shift())
const apart = []
//아파트 이차원 배열 선언
for(let i = 0; i<input.length;i++)
{
    apart.push(input[i].split('').map(item=>+item))
}

//방문한 노드와 단지모임의 총 개수를 계산해주는 변수,최초 0으로 초기화
let visited = Array.from({length : n}, ()=>Array(n).fill(0))

//인접한 좌표를 계산해주는 변수([xval,yval] 왼쪽, 위, 오른쪽, 아래 순서)
const [xval,yval] = [[-1,0,1,0],[0,1,0,-1]]
let groupCount = 0
let result = []
let apartNumber;
for(let i = 0; i< n;i++)
{
    for(let j=0;j<n;j++)
    {
        //방문하지 않았고 아파트가 존재한다면
        if(visited[i][j] ===0 && apart[i][j] === 1)
        {
            //좌표마다 bfs 순회
            apartNumber = bfs(i,j)
            result.push(apartNumber)
            groupCount++
        }
    }
}

bfs(0,1)

function bfs(x,y)
{
    const needVisit = []
    needVisit.push([x,y])
    visited[x][y] = 1
    let count = 1;

            //bfs 순회
    while(needVisit.length>0)
    {
        const currentApart = needVisit.shift()

        for(let i = 0; i<4;i++)
        {
            //시작 노드에서 인접 노드 (왼쪽, 위, 오른쪽, 아래)계산
            const [nx,ny] = [currentApart[0]+xval[i],currentApart[1]+yval[i]]

            //인접한 x,y의 좌표가 0보다 크거나 같고 n보다 작을때 (존재하는 좌표 범위 내에 있을때)
            if(nx >=0 && ny>=0 && nx<n && ny<n)
            {
                //아파트가 있을떄 (값이 1일때), 방문하지 않은 노드일때
                if(apart[nx][ny] === 1 && visited[nx][ny] === 0 )
                {
                    count++
                    visited[nx][ny] = visited[nx][ny]+ count
                    needVisit.push([nx,ny])
                }
            }
        }

    }
    return count
}

console.log(groupCount)
console.log(result.sort((a,b)=>{return a-b}).join('\n'))