const fs = require('fs');
// let inputs = fs.readFileSync('../../test.txt').toString().split('\n')
const inputs = fs.readFileSync('dev/stdin').toString().split('\n')
input = inputs.shift().split('')
input.push('')


function L(arr){
    let cursur = arr.indexOf('')
    if(cursur!=0)
    {
        let temp = arr[cursur]
        arr[cursur] = arr[cursur-1]
        arr[cursur-1] = temp
    }
    return arr;
}

function D(arr){
    let cursur = arr.indexOf('')
    if(cursur!=arr.length-1)
    {
        let temp = arr[cursur]
        arr[cursur] = arr[cursur+1]
        arr[cursur+1] = temp
    }
    return arr;
}

function B(arr){
    let cursur = arr.indexOf('')
    if(cursur!=0)
    {
        const oldArr = arr;
        const arr1 = arr.slice(0,cursur)
        arr1.pop()
        arr =  arr1.concat(oldArr.slice(cursur,oldArr.length))
        input = [...arr]
    }
}

function P(arr,x){
    let cursur = arr.indexOf('')
    if(cursur!=0)
    {
        const oldArr = arr;
        const arr1 = arr.slice(0,cursur)
        arr1.push(x)
        arr =  arr1.concat(oldArr.slice(cursur,oldArr.length))
        input = [...arr]
    }
}

const n = inputs.shift()
for(let i = 0 ; i<n;i++)
{
    let command = inputs.shift().split(' ')
    if(command[0] === 'L')
    {
        L(input)
    }
    else if(command[0] === 'D')
    {
        D(input)
    }
    else if(command[0] ==='B')
    {
        B(input)
    }
    else if(command[0] ==='P')
    {
        P(input,command[1])
    }

}

console.log(input.join(''))