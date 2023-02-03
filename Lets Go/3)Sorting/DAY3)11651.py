import sys

N = int(sys.stdin.readline())

data = []
for i in range(N):
    data.append(list(map(int,sys.stdin.readline().split(" "))))

data.sort(key=lambda x:[x[1],x[0]])

for x in data:
    print('{0} {1}'.format(x[0],x[1]))