const fs = require('fs')
const input = fs.readFileSync('../text.txt').toString()
const N = parseInt(input)

let check = Array.from({length : N}, ()=> Array(N).fill(false))
let chess = []

function checkTrue(x,y)
{
        check[x][y] = true
        //열 check true로 바꾸기
        check[x].forEach(item => {
            item = true
        })
        //행 check true 로 바꾸기
        for (let i = 1; i < N - y; i++) {
            if (y + i <= N) {
                check[x][y + i] = true
            }

        }
        //대각선 check true로 바꾸기
        for (let i = 1; i < N - y; i++) {
            if (x + i <= N && x - i >= 0 && y + i <= N)
                check[x + i][y + i] = true
        }

}

for(let x = 0; x<N;x++)
{
    for(let y = 0;y<N;y++)
    {
          checkTrue(x,y)
    }
}