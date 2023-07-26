/**
 * 처음에 length[0]만큼은 주유를 해야한다. (2x5)
 * price의 min을 확인후에 ..
 * 5x2
 * for price
 * compare = price[i]
 *
 * if(min < compare)
 * sum+=length.shift()
 * else
 * min = compare
 *
 *
 */

const fs = require('fs')
// let input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let [n,length,price] = input
length = length.map(item=>BigInt(item))
price = price.map(item => BigInt(item))
let result = BigInt(0)
let min = price[0]
price.forEach((item,idx)=> {


    //이전 price보다 작다면, 당장 비교하는게 이전것보다 작다면
    if(item < min)
    {
        //min으로 설정
        min = item
    }

    if(idx < length.length)
    {
        //shift를 쓰면 시간이 엄청 오래걸리니 idx로 접근 권장
        result += min*length[idx]
    }


})
console.log(result.toString())