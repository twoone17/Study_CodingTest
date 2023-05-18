const fs = require('fs')
// let input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
const N = Number(input.shift())
input = input.shift().flat()

let keyval = {}
for(let i = 0; i<N;i++)
{
    //객체에 숫자에 해당하는 값이 없다면
    if(!keyval[input[i]])
    {
        //숫자 추가
        keyval[input[i]] = 1
    }
    //객체에 값이 있다면
    else if(keyval[input[i]])
    {
        //카운트하기
        keyval[input[i]] += 1
    }
}

let stack = []
//default로 -1 결과값에 다 채우기
let result = Array.from({length : N},() => -1)
//뒤에서부터 (오른쪽을 바라보며 비교하는것이기때문에 오른쪽부터 살핌)
for(let i = N-1;i>=0;i--)
{
    //스택이 비어있지 않으면
    while(stack.length)
    {
        //비교 대상의 F값이 stack top 값의 F보다 클때
        if(keyval[input[i]] < keyval[stack[stack.length-1]])
        {
            //result[i]에 그 값을 넣는다
            result[i] = stack[stack.length-1]
            //stack에 추가해서 다음왼쪽이랑 비교하게 만든다
            stack.push(input[i])
            break;
        }
        else
        {
            stack.pop()
        }

    }

    if(stack.length <1)
    {
        stack.push(input[i])
    }

    // if(i === N-1)
    // {
    //     stack.push(input[i])
    // }

}

console.log(result.join(' '))