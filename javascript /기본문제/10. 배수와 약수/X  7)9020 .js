/**
 * 시간초과를 해결해야함
 */
const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().split('\n').map(item => +item);
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(item => +item);
input.shift();
let n;
let array;
let array2;
let difference_min;
let result;
let difference
while(n = input.shift())
{
    array = [];
    if(n === 4)
    {
        console.log("2" +" " +"2")
    }
    else
    {

        for(let i =3;i<=n;i++)
        {
            if(isPrime(i))
            {
                array.push(i);
            }
        }
        array2 = [];
        difference_min = array.at(-1);
        result;
        array.forEach((item1)=>{
            array.forEach((item2)=>{
                if(item1 + item2 === n)
                {
                    difference = Math.abs(item1 - item2);
                    if(difference_min > difference)
                    {
                        result = [item1,item2];
                        difference_min = difference;
                    }
                }
            })
        })

        console.log(result.join(' '))
    }
}

function isPrime(x){
    let flag = true;
    if(x ===1)
    {
        return false;
    }
    if(x === 2 || x ===3)
    {
        return flag;
    }
    for(let i = 2;i<=Math.sqrt(x);i++)
    {
        if(x%i === 0)
        {
            flag = false;
            break;
        }
    }
    return flag;
}
