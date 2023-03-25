const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>+item);
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>+item);
const N = input.shift()
const index = input.shift();

function solution(n,idx){
    let head = 1;
    let tail = n*n;
    let middle = Math.floor((head+tail)/2);
    let count;
    let temp = 0;
    while(true)
    {
        count = 0;
        //middle보다 작은 수를 계산
        for(let i = 1; i<=n;i++)
        {
            //n보다 값이 크다면 row의 최대범위인 n을 더한다
            if(Math.floor(middle/i) >=n)
            {
                count +=n;
            }
            //n보다 값이 작으면 row가 모두 작은게 아니므로 성실하게 더하기
            else if(Math.floor(middle/i) < n)
            {
                //값/row를 하면 이보다 작은 수가 얼마나 있는지 count할수있다
                count += Math.floor(middle/i)
            }
        }
        //TODO: 왜 head>=tail이 아닐까,
        if(head>tail)
        {
            return temp;
        }

        //계산한 count가 실제 idx보다 크다면: middle보다 작은 수가 idx만큼보다 더 많다면 값을 너무 크게 잡았다는 뜻이니까 줄이기 :  middle 값을 왼쪽으로 잡아야함
        if(count >= idx)
        {
            //TODO: 그냥 middle을 head>tail일때 return하면 middle값이 변경이 되기 때문에 temp에 저장을 해서 middle값이 바뀌기 전의 값을 전닳해야함
            temp = middle
            tail = middle-1;
            middle = Math.floor((head+tail)/2);
        }
        //middle 값을 오른쪽으로 잡아야함
        else if(count < idx)
        {
            head = middle+1;
            middle = Math.floor((head+tail)/2);
        }
    }
}

result = solution(N,index);
console.log(result);
