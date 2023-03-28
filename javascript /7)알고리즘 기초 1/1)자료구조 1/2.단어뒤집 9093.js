const fs = require('fs');
// const input =fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.split(' '))
const input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' '))
const n = parseInt(input.shift());
let result = '';
let array = [];
for(let i = 0; i<n;i++)
{
    let sentence = input.shift();
    for(let i = 0; i<sentence.length;i++)
    {
        for(let z = sentence[i].length-1; z>=0;z--)
        {
            array.push(sentence[i][z])

        }
        result+= array.join('')
        result+= ' '
        array = [];
    }
    result += '\n'


}
console.log(result)