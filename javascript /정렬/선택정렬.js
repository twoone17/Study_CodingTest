// 정렬할 배열
const unsortedArray = [64, 25, 12, 22, 11];

function selectionSort(arr)
{
    for(let i = 0; i<arr.length-1;i++)
    {
        let minIndex = i
        for(let j = i+1 ; j<arr.length;j++)
        {
            //현재 인덱스 다음부터 배열 순회하며 최소값을 결정
            if(arr[j] < arr[minIndex])
            {
                minIndex = j
            }
        }
        //바뀌었다면
        if(minIndex != i)
        {
            const temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp

ㅍ    }
    return arr
}

// 선택 정렬을 사용하여 배열 정렬
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray)
