const fs = require('fs')
// const input = fs.readFileSync('../text.txt').toString()
const input = fs.readFileSync('dev/stdin').toString()
const N = parseInt(input)
console.log(countNQueensSolutions(N))

function countNQueensSolutions(n) {
    const board = new Array(n).fill().map(() => new Array(n).fill('X'));
    let count = 0;

    function isSafe(row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }

        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }

        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }

        return true;
    }

    function backtrack(row) {
        if (row === n) {
            count++; // 가능한 배치를 찾았으므로 카운트를 증가
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = 'X';
            }
        }
    }

    backtrack(0); // 첫 번째 행부터 시작
    return count;
}

