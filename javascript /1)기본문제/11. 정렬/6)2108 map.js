const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => + item);
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => + item);
const n = input.shift()
let originalInput = [...input];
input.sort(function(a,b){
    return a-b;
})
//산술 평균 계산
let sum = input.reduce((prev,cur)=>{
    return prev +cur;
},0)

if(Math.round(sum/input.length) === -0)
{
    console.log(0)
}
else
{
    console.log(Math.round(sum/input.length));
}

//중앙값 계산
console.log(input[Math.floor(input.length/2)])
//최빈값 : map을 사용해보자
let count;
let array = []
let map = new Map();
let max = 1;
input.forEach(item=>{

    if(map.has(item))
    {
        max = Math.max(max,map.get(item)+1)
        map.set(item,map.get(item)+1);
    }else
    {
        map.set(item,1)
    }

})

const maxArr = [];
for(let [key,value] of map){
    if(max === value)
    {
        maxArr.push(key);
    }
}
if(maxArr.length >1)
{
    console.log(maxArr[1])
}
else
{
    console.log(maxArr[0])
}


//범위
console.log(input[input.length-1] - input[0])


