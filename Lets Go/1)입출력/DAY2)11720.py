# import sys
#
# N = int(sys.stdin.readline())
#
# number = sys.stdin.readline().rstrip()
# if(len(number)==N):
#     numberList = list(map(int,number))
#     print(sum(numberList))
#

N = input()
a = list(input())
sum = 0
for x in a:
    sum = sum + int(x)

print(sum)
