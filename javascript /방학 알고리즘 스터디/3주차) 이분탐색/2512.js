/**
 * 배열중 min부터 max까지 탐색을 진행
 * 1. sort
 * [110,120,140,150]
 *
 * 2.모든 요소마다 target 값보다 작으면 그대로 더하고, target 값보다 크면 target 값을 더해준다
 *
 * 3.이 값을 기준으로 mid를 변화시키며 이분탐색을 진행한다
 *
 */

let fs = require('fs')
// let input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let [n,array,m] = input
array.sort((a,b)=>
{
    return a-b
})

//target에 따라 전체 합을 구하는 함수
function getSum(arr,target)
{
    let result = arr.reduce((prev,cur)=>{
        if(cur<=target)
        {
            prev = prev + cur
        }
        else
        {
            prev = prev + target
        }

        return prev
    },0)

    return result
}

let result;

function binarySearch(arr)
{
    let start = 0
    let end = arr[arr.length-1]
    let mid

    //합이 m일때 중단..
    while(start <=end)
    {
        mid = Math.floor((start + end)/2)
        let totalBudget = getSum(arr, mid);
        if(totalBudget <=m)
        {
            result = mid
            start = mid + 1
        }
        else
        {
            end = mid -1
        }

    }

    return result
}

let answer = ''
 result = binarySearch(array)
// //모든 수를 다 더해도 m보다 작을때는 그냥 배열의 최대값 출력
// if(getSum(array,array[array.length-1]) <= m)
// {
//     answer += array[array.length-1]
// }
// else
// {
//     answer += result
// }
console.log(result)