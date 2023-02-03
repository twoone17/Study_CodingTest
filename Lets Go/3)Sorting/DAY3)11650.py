import sys

N = int(sys.stdin.readline())
data =  []
for i in range(N):
    x = list(map(int,sys.stdin.readline().split(" ")))
    data.append(x)

data.sort(key=lambda x:(x[0],x[1]))
for x in data:
    print("{0} {1}".format(x[0],x[1]))

