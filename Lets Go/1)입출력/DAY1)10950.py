
import sys

T = int(sys.stdin.readline())
data = []
for i in range(T):
    data.append(sum(map(int,sys.stdin.readline().split())))

for x in data:
    print(x)




