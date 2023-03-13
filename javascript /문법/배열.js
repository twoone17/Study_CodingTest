let fruits = ['사과,','바나나']
fruits.push('하잉');
console.log(fruits)
/**
 * pop은 맨 뒤에 있는 요소를 제거한다
 */
fruits.pop()
console.log(fruits)
/**
 * shift는 맨 앞에 있는 요소를 제거한다
 */

fruits.shift()
console.log(fruits)
/**
 * unshift는 맨 처음에 요소를 추가한다
 */
fruits.unshift("처음 추가");
console.log(fruits)
fruits = ['사과','바나나','딸기'];
/**
 * indexOf는 찾는 배열의 index를 찾는다
 */
let index = fruits.indexOf('바나나');
console.log(index)

/**
 * splice는 제거한 아이템을 반환하고, 기존의 배열의 인덱스 위치에 있는 항목을 제거한다
 * splice는 여러개의 항목을 제거하고 추가할수도 있다 (3번째 파라미터에)
 * index부터 삭제할 개를 지정
 */
let removedItem = fruits.splice('사과',2,);
console.log(removedItem)
console.log(fruits)
console.log('-------------------------')

/**
 * slice : 일부를 추출한 새 배열을 반환, 이때 마지막 index는 생략 (end는 미포함)
 */

console.log("Slice-------------------------")
let arrs = [1,2,3,4,5];
let arrSlice = arrs.slice(0,3);
console.log(arrSlice)

/**
 * 나머지 매개변수를 통해 복사 할 수 있다
 */
fruits = ['사과','바나나','딸기'];
let shallowCopySpread = [...fruits];
console.log(shallowCopySpread)
console.log('-------------------------')
/**
 * fruits.length를 통해 길이 반환
 * fruits.length를 감소시켜면 요소가 지워진다
 */

console.log(fruits.length)

fruits.length = 2;
console.log(fruits)

/**
 * 그냥 array1 = array로 복사하면 array1의 값을 변화할때 array도 같이 변화하게 된다
 */

/**
 * concat을 사용하면 배열을 합친다
 */
console.log('------------concat-----------------')
let array1 = ['a','b','c'];
let array2 = ['d','e','f'];
let concatArray = array1.concat(['1'],array2);
console.log(concatArray)

/**
 * entries() 메서드는 인덱스/ 요소 값을 쌍으로 가지는 Array Iterator 객체를 반환한다
 */

let iterator = array1.entries();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

/**
 * array.filter : 조건을 통과하는 모든 요소를 반환하여 새로운 배열을 만든다
 */

let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(item =>
//     item.length > 6
// )

let result = words.filter(item =>{
    return item.length > 6
})
console.log(result)

/**
 * array.find는 조건을 만족하는 첫번째 요소의 값을 반환한다
 * array.findIndex는 조건을 만족하는 첫번째 인덱스를 반환한다
 */

let array = [5, 12, 8, 130, 44];

let found = array.find(item => item>10);
console.log(found)
let foundIndex = array.findIndex(item => item>10);
console.log(foundIndex)

/**
 * array.flat()은 중첩 배열을 평탄화 해준다
 */

let arr1 = [1, 2, [3, 4]];
let flatArr = arr1.flat();
console.log(flatArr)

let arr3 = [1, 2, [3, 4, [5, 6]]];
flatArr = arr3.flat(1);
console.log(flatArr)
flatArr = arr3.flat(2)
console.log(flatArr)

/**
 * 이렇게 빈 배열, 구멍이 있으면 flat으로 제거 할 수 있다
 */
let arr5 = [1, 2, , 4, 5];
flatArr = arr5.flat();
console.log(flatArr)
console.log('-------------------------')

/**
 * array.forEach : 주어진 함수를 배열 요소 각각에 대해 실행한다
 */

let arr = ['a', 'b', 'c'];
arr.forEach(item => {
    console.log(item)
})

/**
 * 두번째 매개변수 index까지 잘 활용할 수 있을듯
 */

arr.forEach((item,index) => {
    console.log(item)
    console.log(index)
})

/**
 * arr.includes : 특정 요소가 들어있는지 확인, true or false를 반환
 */

arr = [1,2,3];
console.log(arr.includes(2));

/**
 * arr.join(" ") : 배열의 모든 요소를 하나의 문자열로 이어서 만든다
 */

arr= [1,2,3,4,5];
console.log(arr.join('  --  '))

/**
 * arr.map : 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 반환
 */

arr = [1,2,3,4,5];
const map1 = arr.map(item => item  + 5);
console.log(map1)

/**
 * arr.reduce : 누적하여 계산할때 유용
 */

arr = [1,2,3,4,5];
//prev는 dependency같이 있는 곳에 처음 값, 계속 누적되어서 계산
//cur는 배열에 접근
//index는 배열의 index에 접근
result = arr.reduce((prev,cur,index)=>{
    console.log(prev)
    console.log(cur)
    console.log(index)
    return prev + cur
},100)

let userList = [
    {name: "Mike", age: 30},
    {name: "Tom", age: 10},
    {name: "Jane", age: 27},
    {name: "Sue", age: 26},
    {name: "Harry", age: 3},
    {name: "Steve", age: 60},
]
result = userList.reduce((prev,cur) =>{
    prev.push(cur.name);
    return prev;
},[])

console.log(result)

//나이를 다 더하고 싶을때
result = userList.reduce((prev,cur)=>{
    prev = cur.age + prev;
    return prev;
},0)
console.log(result)
console.log('-------------------------')

/**
 * array.sort() : 소팅
 * 와 javascript는 알아서 정렬 안해주네 ㅅㅂㅋㅋㅋㅋㅋㅋ
 */

array1 = [1, 30, 4, 21, 100000];
array1.sort(function compare(a,b){
    return a-b;
});
console.log(array1)

/**
 * 내림차순 정렬
 */

array1.sort(function compare(a,b){
    return b-a;
});
console.log(array1)

let items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
];

//value로 정렬
items.sort(function (a,b){
    if(a.value > b.value){
        return 1;
    }
    else if(a.value < b.value)
    {
        return -1;
    }

    return 0;
})

console.log(items)

//name 기준으로 정렬

items.sort(function(a,b){
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if(nameA > nameB)
    {
        return 1;
    }
    else if(nameA < nameB)
    {
        return -1;
    }
    return 0;
})

console.log(items)

/**
 * array.fill : 3개의 매개변수를 사용할수 있다 1. 채울 value값 2. 시작하는 index값 3. 끝나는 index값 (end뺴고)
 */

array = [1,2,3,4,5];
console.log(array.fill(999,3,4));
console.log(array.fill(999,2))


//문자열 정렬은 return a-b를 하는게 아닌 1, -1 , 0을 반환하는 식으로 구현을 해야한다

let input2 = ['a','c','c','d','b','c','a','a']
input2.sort(function(a,b)
{
    if(a > b)
    {
        return 1
    }
    else if(a < b)
    {
        return -1
    }
    else {
        return 0;
    }
})

console.log(input2)


//slice 1로 하면 모든 array를 index부터 다 받을수있다 !!
