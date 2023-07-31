let fs = require('fs')
// let input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let [[n,m],array] = input
//이분탐색 진행할거기때문에 sort
array.sort((a,b)=>{
    return a-b
})

//이분탐색의 기준(mid) : 나무의 길이 (array)
let head = 0
let tail = Math.max(...array)
let mid

console.log(solution(array,m))
function solution(array,m)
{
    let total = 0
    let answer = 0

    while(head <= tail)
    {

        total = 0
        mid = Math.floor((head + tail) /2)
        //남은 나무의 길이(결과값)계산
        array.forEach(item =>{
            if(item > mid)
            {
                total = total +  item - mid
            }

        })

        // console.log(mid)
        //m이 찾는 지점이라면
        if(total >= m)
        {
            //최대값을 구하는 코드 추가해주기
            if(mid > answer) answer = mid

            head = mid +1
        }
        else
        {
                //기준(mid)를 내리기
                tail = mid -1

        }
    }

    return answer

}
