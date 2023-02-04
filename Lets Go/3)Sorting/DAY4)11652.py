# import sys
#
# N = int(sys.stdin.readline())
# arr = [0]*10000
#
# for i in range(N):
#     arr[int(sys.stdin.readline())] += 1
#
# max = arr[0]
# maxidx = 0
# for idx,i in enumerate(arr):
#     if(max<=i):
#         if(max == i):
#             if(maxidx>idx):
#                 max = max
#         else:
#             max = idx-1
#             maxidx = idx
#
# print(max)

import sys

N = int(sys.stdin.readline())
dict = {}
for i in range(N):
    input = int(sys.stdin.readline())
    if(input in dict):
        dict[input] = dict[input] + 1
    else:
        dict[input] = 1

a = sorted(dict.items(),key = lambda x:(x[1],-x[0]),reverse=True)

print(a[0][0])
