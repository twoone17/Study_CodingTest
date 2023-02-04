import sys

K,N = map(int,sys.stdin.readline().split(" "))

data = list(map(int,sys.stdin.readline().split(" ")))

data.sort()

print(data[N-1])

#list를 받을떄 map함수를 이용해서 빠르게 data에 넣는 방법을 선택했다
#data.append 보다 조금 더 메모리 효율이 좋을것 같다고 생각함
#TODO:메모리 제한이 엄청나게 작다면 다른 방법을 써야할까? 그 문제때문에 data.append를 잘 못쓰겠네