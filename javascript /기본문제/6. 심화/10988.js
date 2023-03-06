const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().trim().split("");
let count =0;
for(let i = 0; i< parseInt(input.length/2); i++)
{
    if(i!=input.length/2)
    {
        if(input[i] === input[input.length-i-1] )
        {
            count++;
        }
    }

}
if(count === parseInt(input.length/2))
{
    console.log(1);
}
else{
    console.log(0)
}