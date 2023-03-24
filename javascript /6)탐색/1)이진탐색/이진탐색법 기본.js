const array = [3,4,5,1,2,7,6,9,8,10]
array.sort(function(a,b){
    return a-b;
})

let head = 0;
let tail = array.length-1;
let centerIndex = Math.floor((head+tail)/2)
function findIndexBinary(array,condition)
{
    while(array[centerIndex]!=condition)
    {
        if(head > tail)
        {
            return;
        }

        if(array[centerIndex] < condition)
        {
            head = centerIndex + 1;
            centerIndex = Math.floor((head + tail)/2)
        }
        else if(array[centerIndex] > condition)
        {
            tail = centerIndex -1;
            centerIndex = Math.floor((head + tail)/2)
        }

    }
    return centerIndex;
}

console.log(array)

const conditionIndex = findIndexBinary(array,4);
console.log(conditionIndex);