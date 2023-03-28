// 1~ 30중 몇번째에 이걸 찾았는지 구현하기
const array = [1,2,3,4,5];

let head = 0;
let tail = array.length;
let count = 0;
let middle = Math.floor((head+tail)/2)
function binarySearch(array,target) {

    while (true) {

        if(head>tail)
        {
            return count;
        }

        if(array[middle] > target)
        {
            tail = middle-1;
            count++;
            middle = Math.floor((head+tail)/2)
        }
        else if(array[middle] <=target)
        {
            head = middle+1;
            count++;
            middle = Math.floor((head+tail)/2)
        }
        else
        {
            return count;
        }

    }
}

let result = binarySearch(array,4)
console.log(result)