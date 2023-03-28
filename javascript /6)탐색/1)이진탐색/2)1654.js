const fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
// let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const [k,n] = input.shift();
input = input.flat()

function solution(array,count)
{
    // let minNumber = Math.min(...array);
    //최소를 생각하면 100, 1일떄 1만 나오고 끝이 난다. 적당한 큰수를 구하는 min을 하지말고, max를 해야한다
    let maxNumber = Math.max(...array);
    let head = 0;
    let tail = maxNumber;
    let middleNumber = Math.floor((head+tail)/2);
    let result=0;
    //랜선이 최대 개수가 될떄까지
    while(true)
    {
        for(let i = 0;i<k;i++)
        {
            result+= Math.floor(array[i]/middleNumber)
        }

        if(head > tail)
        {
            return middleNumber
            break;
        }

        //최대 개수보다 작다면 나누는 값을 너무 많이 잡았기 때문에 중앙에서 왼쪽에 있다
        if(result < count) {
            tail = middleNumber - 1;
            middleNumber = Math.floor((head + tail) / 2);
        }
        //최대 개수보다 값이 크다면 나누는 값을 너무 작게 잡았기 때문에 길이가 최대가 아닐것이다. 중앙에서 오른쪽에 있다
        else if(result >= count)
        {
            head = middleNumber + 1;
            middleNumber = Math.floor((head + tail) / 2);
        }

        result = 0;


    }

}

console.log(solution(input,n))

