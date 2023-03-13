/**
 * k층 n호에는 몇명이 살고 있냐?
 * 1, 3
 * 1층 3호
 * 1 + 2 + 3 = 6명
 *
 * 0층
 * 1호 1
 * 2호 2
 * 3호 3
 *
 * 1층 1호 : 1 명
 * 1층 2호 : 1 + 2 = 3명
 * 1층 3호 : 1+ 2 + 3 = 6명
 * 1층 4호 : 1 + 2 + 3 + 4 = 10명
 * 2층 1호 : 1명
 * 2층 2호 : 1 + 3 = 4명
 * 2층 3호 : 1 + 3 + 6 = 10명
 * 2층 4호 : 1 + 3 + 6 + 10 = 20명
 * 3층 1호 : 1명
 * 3층 2호 : 1 + 4 = 5명
 * 3층 3호 : 1 + 4 + 10 = 15명
 * 3층 4호 : 1 + 4 + 10 + 20 = 35명
 *
 * 층 = k, 호 = n
 * 2차원 배열로 a[0][n] = 1,2,3,4..
 * a[1][3] = a[0][1] + a[0][2] +a[0][3];
 * for i 는 n까지
 * a[k][n] = a[k-1][i]
 * k는 1부터 계산을 해나가야한다
 *
 * 일단 이렇게 하고 답을 맞추고 효율적인 방식을 찾아보자
 *
 *
 *
 * ->
 * !!
 * 직접 그림을 그려서 이해하자
 * shift()를 써서 입력의 for문을 사용하는 것을 간단하게 만들자
 * 2차원 array를 선언할때는 Array.from(Array(n), () => new Array(m)) 같이 사용하지말고 array.push([]), array[index].push([x])를 사용하자
 * 앞으로 먼저 구현해보고, 다른 사람들의 좋은 코드를 보며 가독성과 코드 짜는 실력을 향상시켜보자
 */

const fs = require('fs');
// const input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item => +item);
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item => +item);
const t = input.shift();
for(let i = 0; i<t;i++)
{
    //여기서 shift를 써서 원본배열에서 꺼내고 지우자. for문에 i < 2*t 이런 지저분한거 사용하는거 다 줄여보기
    const k = input.shift(); //층
    const n = input.shift(); //호

    const array = [];
    for(let a = 0; a<=k;a++)
    {
        array.push([1])

        for(let b = 1; b<n;b++)
        {
            if(a === 0)
            {
                array[a].push(b+1);
            }
            else
            {
                array[a][b] = array[a-1][b] + array[a][b-1]
            }
        }
    }
    console.log(array[k][n-1])

}






