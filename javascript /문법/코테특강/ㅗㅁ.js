let input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let x = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let dp = [arr[0]];

//이분탐색
for (let i = 0; i < x; i++) {
    if (arr[i] > dp[dp.length-1]) {
        dp.push(arr[i]);
    } else {
        let idx = dp.findIndex((elem) => arr[i] <= elem);
        dp[idx] = arr[i];
    }
}

console.log(x-dp.length);