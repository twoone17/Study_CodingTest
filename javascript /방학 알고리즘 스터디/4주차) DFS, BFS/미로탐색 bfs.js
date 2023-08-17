const fs = require("fs")
// const input = fs.readFileSync('../text.txt').toString().trim().split('\n')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const [N,M] = input.shift().split(' ').map(item=>+item)
const maze = []
for(let i = 0 ; i< input.length;i++)
{
    maze.push(input[i].split('').map(item=>+item))
}
const visited = Array.from({length: N}, ()=>Array(M).fill(0))
visited[0][0] = 1

function bfs(row,col)
{
    //왼쪽 위 오른쪽 아래 순서대로 더할 배열 선언
    const xval = [-1,0,1,0]
    const yval = [0,1,0,-1]
    //방문할 노드 담기
    const needVisit = []
    needVisit.push([row,col])
    while(needVisit.length)
    {
        const [x,y] = needVisit.shift()
        for(let i =0;i<4;i++)
        {
            //각 방향의 좌표
            const [nx,ny] = [x+xval[i],y+yval[i]]

            //좌표가 범위안이어야함
            if(nx>=0 && ny >=0 && nx <N && ny <M)
            {
                //방문할 노드가 길이 있다면(maze가 1이라면), 방문을 안했던 노드라면(visited가 0이라면)
                if(maze[nx][ny] === 1 && visited[nx][ny]=== 0)
                {
                    //현재 노드에서 +1
                    visited[nx][ny] = visited[x][y] +1
                    //for문에서 돌린 4가지 좌표중 조건을 만족하는게 있다면 다 needVisit 배열에 넣어서 bfs를 진행하기
                    needVisit.push([nx,ny])
                }
            }
        }

    }
    return visited[N-1][M-1]
}

console.log(bfs(0,0))
