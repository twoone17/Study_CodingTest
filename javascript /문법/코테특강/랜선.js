const fs =require('fs');
let input = fs.readFileSync('../../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
const [n,m] = input.shift()
input = input.flat()
input.sort(function(a,b)
{
    return a-b
})
let max = Math.max(...input)
let head = 0;
let tail = max;
let middle = Math.floor((head+tail)/2)
let count = 0;

function binarySearch(input,m)
{
    while(true)
    {
        for(let i =0;i<input.length;i++)
        {
            count += Math.floor(input[i]/middle)
        }

        if(head>tail)
        {
            return middle;
            break;
        }
        //count가 더 크다면 middle보다 오른쪽, 크기를 작게잡은것
        if(count >= m)
        {
            head = middle +1;
            middle = Math.floor((head+tail)/2)
        }
        else if(count < m)
        {
            tail = middle-1;
            middle = Math.floor((head+tail)/2)
        }

        count = 0;

    }
}

let result = binarySearch(input,m);
console.log(result)


