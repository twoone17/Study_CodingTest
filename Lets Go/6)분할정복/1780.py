import sys
N = int(sys.stdin.readline())
arr = []
minus_cnt, zero_cnt, plus_cnt = 0, 0, 0

for i in range(N):
    a = list(map(int,sys.stdin.readline().split(" ")))
    arr.append(a)

def divide(row,col,N):
    curr = arr[row][col]



    for i in range(row,row + N):
        for j in range(col,col + N):
            if arr[i][j] != curr:
                next_n = N/3

                divide(row,col,next_n)
                divide(row,col+next_n,next_n)
                divide(row,col+2*next_n,next_n)
                divide(row+next_n,col,next_n)
                divide(row+next_n,col+next_n,next_n)
                divide(row+next_n,col+2*next_n,next_n)
                divide(row+2*next_n,col,next_n)
                divide(row+2*next_n,col+next_n,next_n)
                divide(row+2*next_n,col+2*next_n,next_n)
                return




