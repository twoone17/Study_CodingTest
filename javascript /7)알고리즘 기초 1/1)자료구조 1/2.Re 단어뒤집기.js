const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
// const inputs = require("fs").readFileSync("../../test.txt").toString().split("\n");
const count = Number(inputs[0]);

let result = "";

let input;

for (let i = 1; i <= count; i++) {
    input = inputs[i];
    let a = input.split('').reverse().join('').split(' ').reverse().join(' ')
    console.log(a)
}
