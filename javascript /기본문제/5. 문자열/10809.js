const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString();
const str = input;
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let result = '';
alphabet.forEach(item=>{
    if(str.includes(item))
    {
        result = result + str.indexOf(item);
    }
    else
    {
        result = result + '-1';
    }
    result += ' '
})

console.log(result)