/**
 * 1 2 4 8 9
 * 1을 처음에 잡기
 * 브루스 포스
 * arr = []
 * 개수만큼 푸쉬하기 -> 모든 경우의 수를 push 하기엔 개수가 100이 될경우 m의 n승이기 때문에 시간이 너무 많이 걸린다
 * arr 중에 arr[i+1] - arr[i] 의 길이를 set에 저장하기
 * 저장한 set에서 Math.max를 계산
 *
 *
 * 결국엔 최대 길이를 구하는것.
 * index 0번째는 처음에 무조건 고정.
 * mid를 지정하고 차이를 계산(3이라고 가정)
 * 이분탐색을 통해 head+1 부터 tail까지중 midindex를 계산해서 차이가 3 이상이면 추가
 * 3이상이 안된다면 ,..
 *
 * !!! 중요한 포인트 : 거리를 기준으로 이분탐색
 * middle = 9-1/2
 *
 */

/**
const [N, C, ...coord] = require('fs')
    .readFileSync('../../test.txt')
    .toString()
    .trim()
    .split(/\s/)
    .map(Number);
coord.sort((a, b) => a - b);

const isPossible = (distance) => {
    let count = C - 1;
    let prevCoord = coord[0];
    for (let i = 1; i < coord.length; i++) {
        if (coord[i] - prevCoord >= distance) {
            count--;
            prevCoord = coord[i];
        }
    }
    return count <= 0;
};

let low = 1;
let high = coord[coord.length - 1];
while (low <= high) {
    //왜 high - low를 하지 않고 더했지 .. 거리면 뺴야 맞는건데
    const mid = Math.floor((low + high) / 2);
    if (isPossible(mid)) {
        low = mid + 1;
    } else {
        high = mid - 1;
    }
}

console.log(high);
 */

const fs = require('fs');
let input = fs.readFileSync('../../test.txt').toString().trim().split('\n').map(item=>item.trim().split(' ').map(item=>+item));
// let input = fs.readFileSync('dev/stdin').toString().trim().split('\n').map(item=>item.split(' ').map(item=>+item));
const [N,M] = input.shift();

input = input.flat()
input.sort(function(a,b){
    return a-b;
})

//거리가 distance인데 총 개수가 m을 충족시키는지 확인하는 함수
const condition = (distance,array) =>{
    //충족시킬때
    //첫번째껀 이미 선택을 했으니 빼기
    let count = M;
    count = count -1;
    let prevNumber = array[0]
    for(let i = 1; i<array.length;i++)
    {
        //인접한 두개의 거리 차이가 distance보다 클때 충족
        if(array[i]-prevNumber >=distance)
        {
            count--;
            prevNumber = array[i]
        }

        if(count <=0)
        {
            break;
        }
    }

    if(count === 0)
    {
        return true;
    }
    //충족시키지 않을때
    else
    {
        return false;
    }
}
const solution = (array,n,m) => {
    //이분탐색 : 거리를 기준으로
    //거리의 최소는 1이다
    let head = 1;
    //거리의 최대는 가장 멀리있는 것 - 가장 가까운 곳 이다 TODO:   let tail = array[n-1]-1;로 하면 틀리고 let tail = array[n-1]로 해야한다.. 왜?
    let tail = array[n-1];
    //이분탐색을 위한 중앙값 설정
    let middle = Math.floor((head + tail)/2)

    while(true)
    {
        if(head > tail)
        {
            return middle;
            break;
        }

        //공유기의 개수가 m과 일치한다면
        if(condition(middle,array))
        {
            //middle+1을 해서 거리가 더 긴것도 충족시키는지 보기
            head = middle +1;
            middle = Math.floor((head + tail)/2)
        }
        //공유기의 개수가 m과 일치하지 않는다면 -> 최대 길이를 너무 크게 잡은것
        else
        {
            //middle-1을 해서 거리가 더 짧은것으로 충족시키는지 확인
            tail = middle-1;
            middle = Math.floor((head + tail)/2)
        }
    }

}

let result = solution(input,N,M);
console.log(result);



