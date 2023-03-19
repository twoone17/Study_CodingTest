const fs =require('fs');
// let input =fs.readFileSync('../test.txt').toString().split('\n').map(item=>item.split(' ').map(item=>+item));
let input =fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const [n,m] = input.shift();
input = input.flat(1)
let sum = 0;
for(let a = 0;a<input.length;a++)
{
    for(let b=a+1;b<input.length;b++)
    {
        for(let c = b+1;c<input.length;c++)
        {
            if((input[a] + input[b] + input[c]) <=m)
            {
                if(sum <= input[a] + input[b] + input[c])
                {
                    sum = input[a] + input[b] + input[c];
                    if(sum === m)
                    {
                        break;
                    }
                }
            }
        }
    }
}
console.log(sum)