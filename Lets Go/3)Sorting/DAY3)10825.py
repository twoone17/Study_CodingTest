import sys

N = int(sys.stdin.readline())
data = []
for i in range(N):
    name,korean,english,math = sys.stdin.readline().rstrip().split(" ")
    data.append([name,int(korean),int(english),int(math)])

data.sort(key = lambda x:[-x[1],x[2],-x[3],x[0]])

for x in data:
    print(x[0])