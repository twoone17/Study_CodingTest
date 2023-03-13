const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split());
// const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split());


const n = input.shift();
const flatInput = input.flat();

flatInput.sort(function(a,b)
{
    //이건 int형이니까 a-b로 해도된다
    if(a.length != b.length)
    {
        return a.length - b.length
    }
    else
    {
        if(a>b)
        {
            return 1;
        }
        else if(a<b)
        {
            return -1;
        }
        else
        {
            return 0;
        }
    }
})

const set = new Set();
flatInput.forEach(item=>{
    set.add(item)
})
const changedArray = Array.from(set);
console.log(changedArray.join('\n'))
console.log(changedArray.slice(1)) //slice 1로 하면 모든 array를 index부터 다 받을수있다 !!

// console.log(flatInput.join('\n'))
