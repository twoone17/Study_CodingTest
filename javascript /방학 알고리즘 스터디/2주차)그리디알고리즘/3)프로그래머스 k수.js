let number = "4177252841"
let k = 4
console.log(solution("4177252841",4))

function solution(number, k) {
    var answer = '';
    number = number.split('').map(item =>+item) //숫자 하나씩으로 배열
    let idx = 0
    let storeIdx = []
    let result =0
    while(k>0)
    {
        //idx부터 k+1만큼 연속된 수 중 max 계산
        let max = Math.max(...number.slice(idx,k+1))
        console.log(max)


        for(let i=idx;i<=idx+k;i++)
        {
            //앞에 자리수가 max보다 작다면
            if(number[i]<max)
            {
                //해당 수 제거
                k= k-1
                console.log("i"+ i)
                if(k===0)
                {
                    break;
                }
                //index를 바꾸니까 splice를 하면 안된다, 지울 idx를 저장하자
                storeIdx.push(idx+i)
                console.log(storeIdx)

            }
            //비교대상이 max라면
            else if(number[i] === max)
            {
                //max 다음 수부터 다시 비교하기 위해 i +1
                console.log("else if ")
                idx = i+1
                console.log(idx)
                break;
            }
        }
    }


    return answer;
}