import sys

T = int(sys.stdin.readline())

first = [0 for i in range(T)]
second = [0 for i in range(T)]
result = [0 for i in range(T)]
for i in range(T):
    first[i], second[i] = map(int,sys.stdin.readline().split())
    result[i] = first[i] + second[i]

for idx,x in enumerate(result):
    print('Case #{0}: {1} + {2} = {3}'.format(idx+1,first[idx],second[idx],result[idx]))
