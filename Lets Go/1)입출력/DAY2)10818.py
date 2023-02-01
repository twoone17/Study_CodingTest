import sys

N = int(sys.stdin.readline())
target = list(sys.stdin.readline().rstrip().split(" "))

max = int(target[0])
min = int(target[0])
# max = -1000000000
# min = 100000000000
for num in target:
    intNum = int(num)
    if(intNum>=max):
        max = intNum
    elif(intNum<=min):
        min = intNum

print("{0} {1}".format(min,max))