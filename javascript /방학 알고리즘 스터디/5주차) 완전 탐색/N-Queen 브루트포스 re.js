const fs = require('fs')
// const input =fs.readFileSync('../text.txt').toString()
const input =fs.readFileSync('dev/stdin').toString()
const N = parseInt(input)
const board = Array.from({length : N}, ()=> Array(N).fill(false))

let count = 0

function isSafe(row,col) {
    //같은 열일떄
    for(let i = 0; i<row;i++)
    {
        if(board[i][col] === true)
        {
            return false
        }
    }

    //대각선에 queen이 있을때
    for(let i = 1;i<N;i++)
    {
        if (row - i >= 0 && col - i >= 0) {
            if (board[row - i][col - i] === true) {
                return false
            }
        }
        if (row - i >= 0 && col + i < N) {
            if(board[row-i][col+i] === true )
            {
                return false
            }
        }

    }

    return true
}
function backtrack(row)
{
    if(row === N)
    {
        //배치를 다 했으니까 count를 더해준다
        count++
        return;
    }

    for(let col = 0;col<N;col++)
    {
        //대각선, 행, 열 일직선상에 queen이 없을때
        if(isSafe(row,col))
        {
            board[row][col] = true
            backtrack(row+1)
            //백트래킹을 위한 이전 노드 false로 만들기
            board[row][col] = false

        }
    }
}

backtrack(0)
console.log(count)
