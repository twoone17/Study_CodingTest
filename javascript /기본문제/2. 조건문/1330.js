const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ');
a = parseInt(input[0])
b = parseInt(input[1])

if(a > b){
    console.log(">")
}
else if(a < b){
    console.log("<")
}
else{
    console.log("==")
}

