let fiboArr = [100];
let fiboWithMemoization = (n) =>{
   fiboArr[0] = 0;
   fiboArr[1] = 1;

    for(let i = 2;i<=n;i++)
    {
        fiboArr[i] = fiboArr[i-1] +  fiboArr[i-2]
    }

    return fiboArr[n]
}

console.log(fiboWithMemoization(50))