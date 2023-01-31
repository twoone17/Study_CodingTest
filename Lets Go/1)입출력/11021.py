import sys

T = int(sys.stdin.readline())

data = []
for i in range(T):
    data.append(sum(map(int,sys.stdin.readline().split())))

for idx,x in enumerate(data):
    print('Case #{0}: {1}'.format(idx+1,x))