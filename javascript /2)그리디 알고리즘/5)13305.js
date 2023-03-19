/**
 * 도로의 길이만큼만 주유를 하면 된다
 */
const fs = require('fs');
const input = fs.readFileSync('../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
const n = input.shift()

const length = input[0]
const price = input[1]
const array = [];
let result = 0;
let j;
let temp;
for(let i = 0;i<price.length-1;i++)
{
    if(price[i]>price[i+1])
    {
        result = result + price[i]*length[i]
    }
    else
    {
        j = 1;
        while(price[i]<price[i+j])
        {
            temp = j;
            j++;
            i++;
        }
        result = result + price[i]*(length)
    }
}