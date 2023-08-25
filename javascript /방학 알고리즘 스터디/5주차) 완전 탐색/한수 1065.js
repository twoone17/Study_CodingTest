const fs= require('fs')
// const input =fs.readFileSync('../text.txt').toString()
const input =fs.readFileSync('dev/stdin').toString()
const N = parseInt(input)
let count = 0;
//두자리 숫자라면
if(N < 100)
{
    //주어진 값만큼 한수 존재
    count = N
}
else
{
    //count를 99부터 시작 (두자리 숫자 모두 포함)
    count = 99
    for(let i = 100; i <=N;i++)
    {
        //각 자리수 array에 추가
        let arr = i.toString().split('').map(item=>+item)
        let temp
        //세자리 수일때
        if(arr.length === 3)
        {
            if((arr[0]-arr[1]) === (arr[1] - arr[2]))
            {
                count++
            }
        }
        else if(arr.length === 4)
        {
            if(((arr[0]- arr[1]) === (arr[1] - arr[2])) && ((arr[1]-arr[2]) === (arr[2] -arr[3])))
            {
                count++
            }
        }
    }

}
console.log(count)