const fs = require('fs');
const input = fs.readFileSync('../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
// const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
const n = input.shift();
//회의 끝나는 시간 - 회의 시작 시간 차이 작은것으로 소팅
input.sort(function(a,b){
    return a[0]-b[0];
})

// function sortByDifference(array){
//     input.sort(function(a,b){
//         let differenceA = a[1]-a[0];
//         let differenceB = b[1]-b[0];
//         if(differenceA - differenceB !=0)
//         {
//             return differenceA - differenceB;
//         }
//         else
//         {
//             return a[0] - b[0]
//         }
//     })
// }


let array = [];
let temp;
let max = 0;

for(let i = 0;i<n-1;i++)
{
    for(let j = i+1;j<n;j++)
    {
        if(array.length <1)

        {
            array.push(input[i]);
            temp =array[0][1]
        }
        else
        {
            if(temp <= input[j][0])
            {
                array.push(input[j])
                temp = array.at(-1)[1];
            }
        }
    }
    if(max < array.length)
    {
        max = array.length;
    }
    array = [];
}

console.log(max)