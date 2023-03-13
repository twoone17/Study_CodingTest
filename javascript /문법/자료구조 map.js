let map = new Map();
map.set('1',"a");
console.log(map)
console.log(map.get('1'))
console.log(map.size)

//key의 중복을 허용하지 않는다
let mapA = new Map([
    [1,1],
    [2,'b'],
    [3,'c'],
    [1,1]
]);

for(let i of mapA)
{
    if(i[0] ===1)
    {
        i[0]++;
    }

}
console.log(mapA)