const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>+item);
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>+item);
let n;

while((n = input.shift()) != -1)
{
    let result = "";
    let array = [];
    for(let i = 1;i<n;i++)
    {
        if(n%i === 0)
        {
            array.push(i);
        }
    }
    let sum = array.reduce((prev,cur) => {
      return prev + cur;
    },0)

    if(sum === n)
    {
        result += n;
        result += " = "
        //이렇게 하지말고 join을 통해 빠르게 구하자.. ㅎ
        array.forEach((item,idx)=>{
            result+= item
            if(item !=array.at(-1))
            {
                result+= " + "
            }

        })
    }
    else
    {
        result += n
        result += " is NOT perfect."
    }
    console.log(result)

}