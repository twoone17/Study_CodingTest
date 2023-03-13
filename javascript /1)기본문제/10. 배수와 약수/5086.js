const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item => item.trim().split(' ').map(item=>+item));
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item => item.trim().split(' ').map(item=>+item));
let i = 0;

while(input[i++][0])
{
    const [a,b] = [input[i-1][0],input[i-1][1]]
    if(a>b)
    {
        if(a%b === 0)
        {
            console.log("multiple")
        }
        else
        {
            console.log('neither')
        }
    }
    else{
        if(b%a === 0)
        {
            console.log("factor")
        }
        else{
            console.log('neither')
        }
    }
}

/**
 * 이렇게 a>b a<b 로 구분하지 않고 바로 a%b ===0 , b%a ===0 , else 로 모든 경우를 나눌수있다
 * 조금 더 생각해서 if문을 덜 사용해보자
 */