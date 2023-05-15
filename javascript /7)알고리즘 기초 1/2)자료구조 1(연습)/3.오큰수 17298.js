// const fs = require('fs')
// // let input = fs.readFileSync('../../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item))
// let input = fs.readFileSync('dev/stdin').toString().split('\n').map(item=>item.split(' ').map(item=>+item))
// const N = input.shift()
// let arr = []
// let num;
// input = input.flat()
// let result =''
// for(let i = 0;i<N;i++)
// {
//     num = input[i]
//     if(Math.max(...input.slice(i+1,N)) > num)
//     {
//         for(let j = i+1;j<N;j++)
//         {
//             if(num < input[j])
//             {
//                 arr.push(input[j])
//                 break;
//             }
//
//         }
//     }
//     else
//     {
//         arr.push(-1)
//     }
//
//     result +=arr.pop()
//     result += " "
// }
// console.log(result)

//새로운 코드
const fs = require('fs')
let input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
// let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const N = Number(input.shift())
//아 이렇게하면 N이 배열안에 [N]이 들어가있네... 이것때문에 틀렸습니다가 나오는거였음
const N = input.shift()
console.log(N)
let stack= []
let num;
input = input.flat()
//이거 배열 채우는거 기억하기 !!!
let result = Array.from({length : N}, () => -1)

for(let i = N-1;i>=0;i--) {


    while(stack.length)
    {
        // if(input[i] < stack.at(-1))
        if(input[i] <= stack[stack.length-1])
        {
            result[i] = stack[stack.length-1]
            stack.push(input[i])
            break;
        }
        else
        {
            stack.pop()
        }
    }

    if(i === N-1)
    {
        stack.push(input[i])
    }

}

console.log(result.join(' '))

