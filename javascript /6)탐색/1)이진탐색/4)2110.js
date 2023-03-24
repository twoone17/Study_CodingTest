/**
 * 입력값이 많다면 이분탐색을 사용할 확률이 높다
 *
 * 기준을 명확히 잡는게 중요
 *
 */

const fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
// let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const [N,M] = input.shift();
input = input.flat()
input.sort(function(a,b){
    return a-b;
})

function solution(array,n,m)
{
    //길이 초기화
    let distance = array[n-1]- array[0]
    let count = 0;

    //공유기가 두개라면 처음과 끝
    if(m === 2)
    {
        return array[n-1]-array[0]
    }

    let head = 0;
    let tail = array.length-1;
    let middleIndex = Math.floor((head+tail)/2)
    let maxDistance = 0;

    while(count !=m-2)
    {
        count++;
        //
        if(array[middleIndex]-array[head] < array[tail] - array[middleIndex])
        {
            if(distance >  array[middleIndex] - array[head])
            {
                distance = array[middleIndex] - array[head]
            }
            head = middleIndex +1;
            middleIndex = Math.floor((head+tail)/2)
        }
        else if(array[middleIndex]-array[head] >= array[tail] - array[middleIndex])
        {
            if(distance >  array[tail] - array[middleIndex])
            {
                distance = array[tail] - array[middleIndex]
            }

            tail = middleIndex -1;
            middleIndex = Math.floor((head+tail)/2)
        }


    }
    return distance;
}

result = solution(input,N,M);
console.log(result)