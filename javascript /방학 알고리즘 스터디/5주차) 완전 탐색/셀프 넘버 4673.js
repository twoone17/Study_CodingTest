let array = []
function selfNumber()
{
    let dn;
    for(let i = 0 ;i<10000;i++)
    {
        if(i<10)
        {
            dn = i*2
        }
        else if(i >= 10)
        {
            dn = i + i.toString().split('').map(item=>parseInt(item)).reduce((prev,cur)=>{
                cur = parseInt(prev) + cur
                return cur;
            },0)
        }
        array.push(dn)
    }

}

selfNumber()


for(let i = 1;i<=10000;i++)
{
    if(!array.includes(i))
    {
        console.log(i)
    }

}
