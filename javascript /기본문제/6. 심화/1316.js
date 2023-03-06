/**
 * set에 그 값이 없다면 그 값을 추가
 * 그 값이 있다면 이전 index와 비교, 같다면 통과, 같지 않다면 그룹 문자가 아니다
 */

const fs = require('fs');
const input = fs.readFileSync("../../test.txt").toString().trim().split("\n");
const N = parseInt(input[0]);
let array = [];
let set = new Set(array)
let result = 0;

for(let i = 1; i<=N;i++) {
    array = input[i].split('');
    set = new Set([]);
    for(let j = 0; j<array.length;j++)
    {
        if(!set.has(array[j]))
        {
            set.add(array[j]);
        }
        else{
            if(array[j-1] != array[j])
            {
                break;
            }
        }
        if(j===array.length-1)
        {
            result++;
        }
    }
}

console.log(result)