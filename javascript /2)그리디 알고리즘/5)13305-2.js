/**
 * 다음 주유소까지 대소 비교를 해서
 * 다음 주유소보다 현재 주유소의 가격이 작다면 일반적으로 거리만큼 곱해준다
 현재 주유소보다 다음 주유소의 가격이 작다면 그 다음 작은 가격이 나올때까지 곱해준다

 index를 확인해서 더해주고, 다 더해줬으면 for문을 계산해준 index부터 다시 시작하는 방법을 선택했는데 이는 너무 어렵고 복잡하다

 전체적으로 통용될수있는 코드를 작성하자

 일반적으로 해주는 코드
 일반적이지 않을떄 해주는 코드

 여기서 핵심은 브루스포스를 사용하는게 아닌 한단계한단계 for문에서 처리해줄수 있는 코드를 작성해주는 것이다 ..
 */

const fs = require('fs');
// const input = fs.readFileSync('../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
const n = input.shift()
const length =input[0].map(item=>BigInt(item))
const price = input[1].map(item=>BigInt(item))
let curPrice = BigInt(price[0]);
let result = 0n;
for(let i = 0;i<price.length-1;i++) {
    //result = result + price[i]*length[i] -> price[i]가 아닌 변경될 curPrice를 곱해준다 , 이렇게 해야 index를 생각하지 않고 for문을 잘 활용하는것
    //length를 일일이 저장하지 않고 자연스럽게 더해줌
    result += curPrice * length[i]
    if (curPrice > price[i + 1])
    {
        curPrice = price[i+1];
    }
}
console.log(result.toString())