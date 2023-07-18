//
// let array = [1, 3, 5, 7, 100, 30, 50]
// //기본 정렬
// let array2 = array.sort(function(a,b){
//     return a-b
// })
// console.log(array2)
//
// let array3 = array.sort(function(a,b){
//     return b-a
// })
// console.log(array3)
//
// let array4 =["f", "e", "a", "b", "c", "d", "apple", "banana",4,3,1,2];
// let sortArray = array4.sort(function(a,b){
//     if(a>b)
//     {
//         return 1
//     }
//     else if(a<b)
//     {
//         return -1
//     }
//     else{
//         return 0
//     }
//
// })
//
// console.log(sortArray)
//
// let items = [
//     { name: 'Edward', value: 21 },
//     { name: 'Sharpe', value: 37 },
//     { name: 'And', value: 45 },
//     { name: 'The', value: -12 },
//     { name: 'Magnetic', value: 13 },
//     { name: 'Zeros', value: 37 }
// ];

// items.sort(function(a,b){
//     if(a.value>b.value)
//     {
//         return 1;
//     }
//     else if(a.value < b.value)
//     {
//         return -1;
//     }
//     else
//     {
//         return 0;
//     }
// })
//
// console.log(items)
//

// items.sort((a,b) =>{
//     if(a.value === b.value)
//     {
//        return b.name.localeCompare(a.name)
//     }
//     else
//     {
//         return a.value - b.value
//     }
// })
//
// console.log(items)


let array4 =["f", "e", "a", "b", "c", "d", "apple", "banana"];
let sortArray = array4.sort(function(a,b){
    return a.localeCompare(b)
})

console.log(sortArray)

// 이 방식과 localeCompare방식을 사용하는 방식, 가독성은 a>b로 비교하는것도 좋음
