const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim();
const croString = ["c=","c-","dz=","d-","lj","nj","s=","z="]
let count = 0;
let result = input;
for(let i = 0 ; i<croString.length;i++)
{
    while(result.includes(croString[i]))
    {
        result = result.replace(croString[i],"Q")
    }
}
console.log(result.length)
