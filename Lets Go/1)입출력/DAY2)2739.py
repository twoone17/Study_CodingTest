import sys

N = int(sys.stdin.readline())
if(1<=N<=9):
    for num in range(9):
        print('{0} * {1} = {2}'.format(N,num+1,N*(num+1)))
else:
    print("1~9까지 입력하셈")

