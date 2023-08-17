const input = require('fs').readFileSync('../text.txt').toString().trim().split('\n')
const [row,column] = input.shift().split(' ').map(item=>+item)
//배열의 각 키 값을 가로부터 순차적으로 대응
console.log(input)
//주어진 이차원 미로 선언
let maze = new Array(row)
//미로의 각 노드를 방문했는지 확인하는 visited
let visited = new Array(row)
for(let i = 0; i< maze.length;i++)
{
    visited[i] = new Array(row)
    maze[i] = [...input.shift().split('').map(item=>+item)]
}


//visited 배열 false로 초기화 : 나중에 fill하는 쉬운 방법 찾아보기
for(let i = 0; i<row;i++)
{
    for(let j = 0;j<column;j++)
    {
        visited[i][j] = false
    }
}

console.log(maze)

let startVertex = maze[0][0]
let flag= 0
let result;
function dfs(n,m,cnt)
{
    if(flag)
    {
        result = cnt;
        return cnt+1
    }
    visited[n][m] = true


    if(n === row-1 && m === column-1)
    {
        flag = 1
        result = cnt
        return cnt+1
    }
    else
    {

        //아래
        if(n <row-1)
        {
            if(visited[n+1][m] != true && maze[n+1][m] === 1 )
            {
                cnt = dfs(n+1,m,cnt+1)
            }
        }

        if(m < column-1)
        {
            //오른쪽
            if(visited[n][m+1]!=true && maze[n][m+1] === 1 )
            {
                cnt =dfs(n,m+1,cnt+1)
            }
        }

        if(n>0)
        {
            if(visited[n-1][m]!=true && maze[n-1][m] === 1 )
            {
                cnt = dfs(n-1,m,cnt+1)
            }
        }
        //위쪽
    }

    return cnt



}

console.log("정답" + dfs(0,0,0))
console.log(result)

