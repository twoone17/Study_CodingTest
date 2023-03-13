const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split("\n");
const [N,M] = input[0].split(" ").map(item => parseInt(item));


// mid, mid+1, ..., end-1, end, begin, begin+1, ..., mid-1
let basket = []

for(let i =1;i<=N;i++)
{
    basket.push(i);
}


for(let q = 1 ;q<=M;q++)
{
    let [i,j,k] = input[q].split(' ').map(item=>parseInt(item));
    i--, j--, k--;
    basket.splice(i,j-i+1,...basket.slice(k,j+1),...basket.slice(i,k));
}
console.log(basket.join(' '));


/**
 * 원래 코드 :
 for(let q = 1 ;q<=M;q++)
 {
    let [i,j,k] = input[q].split(' ').map(item=>parseInt(item));
    i--, j--, k--;
    const newBasket = basket.slice(i,j+1);
    let temp = [];
    temp = [...newBasket.slice(k,j+1),...newBasket.slice(i,k)];
    basket.splice(i,j-i+1,...basket.slice(k,j+1),...basket.slice(i,k));
    console.log(basket)
}

 slice를 해서 따로 배열을 만든후, 그 배열을 조작해서 splice로 넣어주려고 했으나
 slice를 하게 되는 순간 index가 기존 배열과 다르게 되어 원래있던 배열의 index값을 활용하지 못한다.
 원래 있던 배열에서 다 끝낼 생각을 해줘야함 !

 !! slice를 쓸때는 배열의 index가 바뀌니 이를 유의하자
 */