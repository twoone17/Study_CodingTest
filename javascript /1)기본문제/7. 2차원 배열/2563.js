/**
 * 배열을 100,100을 만들어서 0으로 집어넣고, 색종이의 면적을 1로 채운 후 다 더해야지.
 */

const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.trim().split(" ").map(item=>+item));
n = input.shift();
const array = Array.from(Array(100),()=>Array(100).fill(0));
let x, y;
for(let i = 0; i<n;i++)
{

      x = parseInt(input[i][0]);
      y = parseInt(input[i][1]);

      for(let z = 0;z<10;z++)
      {
          for(let q= 0;q<10;q++)
          {
              array[x+q][y+z] = 1.0
          }
      }

}

array.map(item => parseInt(item))


let sum = 0;
const result = array.flat().forEach(item => sum = sum + item)
console.log(sum)
















// const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.trim().split(' ').map(item=>+item));
// const n = input.shift();
// let compare = 0;
// let total = 0;
// let array = [];
// for(let i = 0; i<n; i++)
// {
//     compare = input[i]
//     for(let j = i+1; j<n; j++)
//     {
//         if(Math.abs(input[j][0] - compare[0]) < 10)
//         {
//             if(Math.abs(input[j][1]-compare[1])<10)
//             {
//                 total = total + (10-Math.abs(input[j][0]-compare[0]))*(10-Math.abs(input[j][1]-compare[1]))
//             }
//         }
//     }
// }
// console.log(array)
// console.log(100*n - total)

//만약 여러 부분이 겹치는 경우엔 이걸 해결해주지 못함, 이차원 배열을 만들어서 1로 채워보자