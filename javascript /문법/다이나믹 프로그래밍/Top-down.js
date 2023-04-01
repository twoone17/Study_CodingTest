let fiboArr = [0];
let fiboWithMemoization = (n) =>{
    if(n<3)
    {
        fiboArr[n] = 1;
    }

    if(!fiboArr[n]){// 내가 저장한 값중에 없다면
        //재귀를 이용해 구하고 저장
        fiboArr[n] = fiboWithMemoization(n-1) + fiboWithMemoization(n-2)
    }

    return fiboArr[n]
}

console.log(fiboWithMemoization(50))