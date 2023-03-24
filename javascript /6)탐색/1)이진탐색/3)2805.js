/**
 * 브루스 포스를 사용해서 max부터 -1하며 가져가는 나무의 길이가 m이 되면 값을 출력하면 되지만 시간 복잡도 때문에 이분탐색을 사용한다
 */

const fs = require('fs');
// let input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const [N,M] = input.shift();
input = input.flat()

function solution(array,n,m)
{
    const max = Math.max(...array)
    let head = 0;
    let tail = max;
    let middleNumber = Math.floor((head+tail)/2);
    let result = 0;

    while(true)
    {
        for(let i= 0; i<n;i++)
        {
            if(input[i] > middleNumber)
            {
                result += input[i]-middleNumber
            }
        }

        if(head > tail)
        {
            break;
        }

        if(result > m)
        {
            head = middleNumber +1;
            middleNumber = Math.floor((head+tail)/2);
        }
        else if(result <m)
        {
            tail = middleNumber -1;
            middleNumber = Math.floor((head+tail)/2);
        }
        else
        {
            break;
        }

        result = 0;
    }

    return middleNumber;
}

console.log(solution(input,N,M))