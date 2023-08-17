const fs= require('fs')
// const input = fs.readFileSync('../text.txt').toString().trim().split('\n')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const T = input.shift()
let visited ;
for(let j = 0; j<T;j++)
{
    let result = 0;
    const [M,N,K] = input.shift().split(' ').map(item=>+item)
    //row M, column N만큼의 배추밭 선언, 0으로 초기화
    const field = Array.from({length : M}, ()=> Array(N).fill(0))
    //방문한 노드를 확인하는 이차원 배열 선언
    visited = Array.from({length : M}, ()=> Array(N).fill(false))
    //주어진 배추의 좌표를 1로 초기화
    for(let i =0; i<K;i++)
    {
        let line = input.shift().split(' ').map(item=>+item)
        field[line[0]][line[1]] = 1
    }

    for(let row = 0;row<M;row++)
    {
        for(let column = 0;column<N; column++)
        {
            //방문하지 않았고 배추가 심어져 있다면
            if(visited[row][column] === false && field[row][column] === 1)
            {
                //x좌표, y좌표, 테스트케이스의 field를 넘겨주어 bfs 탐색, 방문한 노드들을 true로 만들어준다
                bfs(row,column,field,M,N)
                //인접해있는 배추들이 몇군데 퍼져있는지 (그래프 순회가 몇번 사용이 됐는지)
                result++
            }
        }
    }

    console.log(result)

}


function bfs(x,y,field,M,N)
{
    //방문할 노드를 확인하는 queue생성
    let needVisit = []
    //파라미터로 받은 최초 x,y push
    needVisit.push([x,y])
    visited[x][y] = true
    //왼쪽, 위, 오른쪽, 아래 순서로 접근할 수 있는 좌표 생성
    const [xval,yval] = [[0,-1,0,1],[-1,0,1,0]]

    while(needVisit.length)
    {
        let currentVertex = needVisit.shift()
        //인접한 좌표값을 계산
        for(let i = 0; i<4;i++)
        {
            //탐색하는 좌표에서의 왼쪽, 위 , 오른쪽, 아래의 좌표 하나씩 탐색
            let [nx,ny] = [xval[i]+currentVertex[0],yval[i]+currentVertex[1]]

            //좌표가 범위를 넘어가지 않을때
            if(nx >=0 && ny >=0 && nx<M && ny <N)
            {
                //(왼쪽,위,오른쪽,아래)탐색하는 노드가 이전에 방문한 적이 없고 배추가 심어져 있을때
                if(visited[nx][ny] === false && field[nx][ny] === 1)
                {
                    //해당 노드를 방문할 노드에 추가
                    needVisit.push([nx,ny])
                    //해당 노드를 방문했다고 추가
                    visited[nx][ny] =true
                }

            }

        }
    }
}



