
const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.trim().split(' ').map(item=>+item));
const n = input.shift();
let compare = 0;
let total = 0;
let array = [];
for(let i = 0; i<n; i++)
{
    compare = input[i]
    for(let j = i+1; j<n; j++)
    {
        if(Math.abs(input[j][0] - compare[0]) < 10)
        {
            if(Math.abs(input[j][1]-compare[1])<10)
            {
                total = total + (10-Math.abs(input[j][0]-compare[0]))*(10-Math.abs(input[j][1]-compare[1]))
            }
        }
    }
}
console.log(array)
console.log(100*n - total)

//만약 여러 부분이 겹치는 경우엔 이걸 해결해주지 못함, 이차원 배열을 만들어서 1로 채워보자