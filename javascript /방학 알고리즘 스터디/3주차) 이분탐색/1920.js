const fs =require('fs')
// let input = fs.readFileSync('../text.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item))
let [N,A,M,B] = input
//B item 하나하나씩 A배열에 그 요소가 있는지 확인하기 -> includes 쓸 생각하지말고 input이 많으니 이분탐색을 활용
A.sort((a,b)=>{
    return a-b
})
let result = ''
// console.log(A)
B.forEach(item =>{

    let targetIndex = binarySearch(A,item)
    // console.log(targetIndex)
    //이분탐색해서 값이 존재한다면
    if(targetIndex >= 0)
    {
        result+=1
    }
    //이분탐색해서 값이 존재하지 않는다면
    else if(targetIndex <0)
    {
        result +=0
    }

    result += '\n'
})
function binarySearch(array,target)
{
    //index 들 초기화
    let start = 0
    let end = array.length-1
    let mid

    while(start <=end)
    {
        mid = Math.floor((start+end)/2)

        //찾는 요소가 mid index의 요소일때
        if(target === array[mid])
        {
            return mid
        }
        else
        {
            if(target < array[mid])
            {
                end = mid -1
            }
            else
            {
                start = mid + 1
            }
        }
    }

    return -1;
}

console.log(result)
