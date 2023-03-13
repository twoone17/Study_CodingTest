const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' '));
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' '));
const newInput = input.slice(1);
newInput.sort(function(a,b){
    if(a[0] - b[0] != 0)
    {
        return a[0] - b[0];
    }
})


let result = '';
newInput.forEach(item =>{
    result+= item.join(' ');
    result+= '\n'
})

console.log(result)