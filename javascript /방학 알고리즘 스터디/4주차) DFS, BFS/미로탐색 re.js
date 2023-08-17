const fs = require('fs')
// const input = fs.readFileSync('../text.txt').toString().trim().split('\n')
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n')
const [N,M] = input.shift().split(' ').map(item=>+item)
const maze = []
for(let i = 0; i<input.length;i++)
{
    maze.push(input[i].split('').map(item=>+item))
}
let visited = Array.from({length : N}, ()=>Array(M).fill(0));

function bfs(row,col){
    //왼쪽 위 오른쪽 아래
    const dx = [-1,0,1,0]
    const dy = [0,1,0,-1]
    const queue = []
    queue.push([row,col])
    visited[row][col] = 1;
    while(queue.length)
    {
        // console.log(visited)
        const [x,y] = queue.shift()
        for(let i =0;i<4;i++)
        {
            const [nx,ny] = [x+dx[i],y+dy[i]]
            if(nx >= 0 && ny >= 0 && nx < N && ny <M ) //좌표 범위 내에 있을때
            {
                if(visited[nx][ny]===0 && maze[nx][ny] === 1) //방문하지 않았고 길이 있다면
                {
                    visited[nx][ny] = visited[x][y] +1
                    queue.push([nx,ny])
                }

            }
        }
    }
}

bfs(0,0)
console.log(visited[N-1][M-1])