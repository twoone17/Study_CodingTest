//Not in Place 퀵 정렬 구현 ) 실제로는 이 방식을 잘 사용하진 않는다

/**
fuction quickSort(array){

    if(array.length < 2)
    {
        return array;
    }

    let left = [];
    let right = [];
    //기준점을 맨 왼쪽으로 잡았다
    let pivot = [array[0]]

    for(let i = 1; i<array.length; i++)
    {
        if(pivot>array[i])
        {
            left.push(array[i])
        }
        else if(pivot<array[i])
        {
            right.push(array[i])
        }
        else{ //pivot과 같을시에 pivot 배열에 추가
            pivot.push(array[i])
        }
    }

    // return left.concat(pivot,right); -> 이렇게 구현하면 한번만 정렬이 된다, 재귀를 구현할때는 맨 앞에 함수가 끝나는 return문을 작성해주고, 최종 return을 함수를 이용해서 작성하는걸 생각하자
    console.log(`left : ${left}, pivot : ${pivot}, right : ${right}      concat : ${left.concat(pivot,right)}`)
    return quickSort(left).concat(pivot,quickSort(right));

}

let sortedArray = quickSort([5,3,7,1,9]);
console.log(sortedArray);
 */

//inplace 퀵정렬은 필요할때 다시 꺼내보기 https://im-developer.tistory.com/135
