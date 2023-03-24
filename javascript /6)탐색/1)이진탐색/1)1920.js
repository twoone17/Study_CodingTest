const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
// const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
const n = input.shift();
const A = input.shift();
const m = input.shift();

A.sort(function(a,b){
    return a-b;
})
function binarySearch(array,condition)
{
    let head = 0;
    let tail = A.length -1;
    let middleIndex = Math.floor((head+tail)/2)


    while(array[middleIndex] != condition)
    {
        if(head > tail)
        {
            return 0;
        }

        if(array[middleIndex] < condition)
        {
            head = middleIndex +1;
            middleIndex = Math.floor((head+tail)/2)
        }
        else
        {
            tail = middleIndex -1;
            middleIndex = Math.floor((head+tail)/2)
        }
    }

    return 1;
}
let result;
let answer = ''
for(let i = 0; i<m;i++)
{
    result = binarySearch(A,input[0][i])
    answer += result
    answer += '\n'
}
console.log(answer)