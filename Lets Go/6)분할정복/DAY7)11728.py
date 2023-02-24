#투 포인터를 사용하는 문제, 시간초과를 해결하는 법 , while문 사용법(11728) 노션정리
"""
import sys

N, M = map(int,sys.stdin.readline().rstrip().split(" "))

if(N == 1):
    A = list(map(int,sys.stdin.readline().split()))
else:
    A = list(map(int,sys.stdin.readline().rstrip().split(" ")))

if(M== 1):
    B = list(map(int,sys.stdin.readline().split()))
else:
    B = list(map(int,sys.stdin.readline().rstrip().split(" ")))


merged_array = A + B
merged_array.sort()
print(*merged_array)


#배열 안을 접근하고 싶을떈 포인터 개념을 사용하면 된다
#
"""
#투 포인터로 구현해보자

import sys
read = lambda: sys.stdin.readline().rstrip()

N, M = read().split()

A = list(map(int,read().split()))
B = list(map(int,read().split()))

A_pointer = 0
B_pointer = 0
a_length, b_length = len(A), len(B)
result = []
while A_pointer != a_length or B_pointer != b_length:
    if A_pointer == a_length:
        result.append(B[B_pointer])
        B_pointer += 1
    elif B_pointer == b_length:
        result.append(A[A_pointer])
        A_pointer += 1
    elif A[A_pointer] < B[B_pointer]:
        result.append(A[A_pointer])
        A_pointer += 1
    else:
        result.append(B[B_pointer])
        B_pointer += 1


print(*result)

#투 포인터를 사용하는 문제, 시간초과를 해결하는 법 , while문 사용법(11728)