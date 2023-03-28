const fs = require('fs');
// const input =fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' '))
const input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' '))

const array = [];
function push(arr,x)
{
    arr.push(x);
}

function pop(arr)
{
    if(arr.length >=1)
    {
        return arr.pop();
    }
    else{
        return -1;
    }
}

function size(arr)
{
    return arr.length
}

function empty(arr)
{
    if(arr.length <1)
    {
        return 1
    }
    else
    {
        return 0
    }
}

function top(arr)
{
    if(arr.length >=1)
    {
        return arr.at(-1)
    }else
    {
        return -1;
    }
}

let n = parseInt(input.shift());
let command;
let result = ''
for(let i = 0; i<n;i++)
{
     command = input.shift()
     if(command[0] === 'push')
     {
         push(array,command[1])
     }
     else if(command[0] === 'pop')
     {
         result += pop(array)
         result+= '\n'
     }
     else if(command[0] === 'size')
     {
         result+= size(array);
         result+= '\n'
     }
     else if(command[0] ==='empty')
     {
         result+= empty(array)
         result+= '\n'

     }
     else if(command[0] === 'top')
     {
         result += top(array);
         result+= '\n'
     }


}
console.log(result)