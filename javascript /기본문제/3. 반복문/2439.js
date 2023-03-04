const fs = require('fs');
const input = fs.readFileSync('../../test.txt').toString().split(" ")
const n = parseInt(input[0]);
let space = ' '
let spaceString = space.toString();
let star = "*"
let newStar = ''
for(let i = 1; i<= n; i++){
    let newString = ''
    newStar = newStar + star;
    for(let space = n-1; space >=0;space--)
    {
        newString = spaceString + newString
    }
    console.log(newString.substring(n,i) + newStar)
}
