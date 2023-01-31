import sys

##for 문에 사용할것이기 때문에 string이 아닌 int 형식으로 바꿔줘야함
# count = sys.stdin.readline()
##이렇게 하면 map object가 반환이 된다, 그냥 int로 바꿔야함
#count = map(int,sys.stdin.readline())
##이렇게 하면 split , 을 통해서 count만 출력하면 원하는 값이 나타나지만 좋은 방법은 아님
#count,count2 = map(int,sys.stdin.readline().split(","))
#!! 이게 좋은방법 -> 그냥 int로 감싸준다
count = int(sys.stdin.readline())

print(count)

data = []

for i in range(count):

    data.append(sum(map(int,sys.stdin.readline().split())))

print(data)
#int로 받아야 하니까 sys.stdin.readline()을 하면 안되고 이것도 int로 바꿔줘야하구나
# for i in range(count):
#     data.append(sum(map(int,sys.stdin.readline().split())))
#
# print(data)