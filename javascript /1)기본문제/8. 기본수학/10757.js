/**
 * 기본으로 제공하는 자료형에는 큰수를 연산하는데 제한이 있다
 * 큰수의 연산은 BigInt()로 변환 후에 꼭 toString()로 다시 변환해줘야한다
 */

const fs = require('fs');
// const input = fs.readFileSync("../../test.txt").toString().trim().split(' ');
const input = fs.readFileSync("dev/stdin").toString().trim().split(' ');
const a = BigInt(input[0]);
const b =BigInt(input[1]);
const result = a+ b;

console.log(result.toString())