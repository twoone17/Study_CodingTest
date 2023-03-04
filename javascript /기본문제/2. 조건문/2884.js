const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().split(" ");
h = parseInt(input[0]);
m = parseInt(input[1]);
let newHour = h
let newMinute = m

if(m>=45){
    newMinute = m - 45;
}else if (m<45){
    if(h != 0)
    {
    newMinute = m + 15;
    newHour = h - 1;
    }
    else{
        newMinute = m + 15;
        newHour = 23;
    }
}

console.log(newHour , newMinute);