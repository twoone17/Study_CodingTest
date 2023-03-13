const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));

const n = input.shift();
input.sort(function(a,b){
    if(a[1]!=b[1])
    {
        return a[1]-b[1];
    }
    else
    {
        return a[0]-b[0]
    }
})
result ='';
input.forEach(item=>{
    result+=item.join(' ');
    result += '\n'
})
console.log(result)