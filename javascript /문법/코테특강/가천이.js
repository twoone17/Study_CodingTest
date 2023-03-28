const fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => item.split(' ').map(item => +item));
const t = input.shift()
const b1 = input.shift()
const realBook = input.shift().sort(function (a, b) {
    return a - b;
})
const b2 = input.shift()
const compareBook = input.shift();


for (let i = 0; i < compareBook.length; i++) {
    let head = 0;
    let tail = realBook.length - 1;
    let middle = Math.floor((head + tail) / 2)
    while (true) {

        if (head > tail) {
            console.log(0)
            break;
        }

        if (compareBook[i] < realBook[middle]) {
            tail = middle - 1;
            middle = Math.floor((head + tail) / 2)
        } else if (compareBook[i] > realBook[middle]) {
            head = middle + 1;
            middle = Math.floor((head + tail) / 2)
        } else {
            console.log(1)
            break;
        }

    }

}
