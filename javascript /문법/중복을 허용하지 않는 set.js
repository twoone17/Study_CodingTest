const arr = [1,2,3,3,3,4,4,5]
const set = new Set(arr);
console.log(arr);
console.log(set);
console.log(arr.length)
console.log(set.size)
console.log(set.has(1))

const arr2 = Array.from(set); //로 set를 array로 변환할수있다