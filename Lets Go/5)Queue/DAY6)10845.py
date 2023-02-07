import sys

data = []
def push(x):
    data.append(x)

def pop():
    if(len(data)!=0):
        a = data.pop(0)
        print(a)
    else:
        print("-1")
def size():
    print(len(data))

def empty():
    if(len(data)==0):
        print("1")
    else:
        print("0")

def front():
    if(len(data)==0):
        print("-1")
    else:
        print(data[0])

def back():
    if(len(data)==0):
        print("-1")
    else:
        print(data[-1])

N = int(sys.stdin.readline())

for i in range(N):
    stringList = sys.stdin.readline().rstrip().split(" ")

    if(len(stringList) == 1):
        exec(stringList[0] + "()")
    else:
        push(stringList[1])



