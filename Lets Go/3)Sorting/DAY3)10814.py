import sys
N = int(sys.stdin.readline())

data = []
for i in range(N):
    age,name = (sys.stdin.readline().rstrip().split(" "))
    data.append([int(age),name])

data.sort(key=lambda x:x[0])
for x in data:
    print('{0} {1}'.format(x[0],x[1]))