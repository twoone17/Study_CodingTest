const array = [1,5,3,2,3,7,8,9,10]
array.sort((a,b)=>{
    return a-b
})

console.log(array)
let targetIndex = binarySearch(array,5)
function binarySearch(arr,target)
{
    //이분탐색을 할 start, end, mid 설정
    let start = 0;
    let end = arr.length-1
    let mid

    //end가 start와 같아질때까지
    while(start<=end)
    {
        //mid 설정 : math.floor 사용하기
        mid = Math.floor((start + end)/2)

        //찾는 target이 중간 지점에 있는 값이라면
        if(target === arr[mid])
        {
            //mid 반환
            return mid;
        }
        else {
            //찾는 target이 mid보다 작다면
            if (target < arr[mid])
            {
                //end를 mid 왼쪽으로 옮긴다
                end = mid - 1
            }
            else
            {
                start = mid + 1
            }
        }

    }

    return -1
}

console.log(targetIndex)
