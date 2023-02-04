"""
import sys

stack = []
def push(x):
    stack.append(x)

def pop():
    if(len(stack)!=0):
        top = stack[-1]
        stack.remove(top)
        print(top)
        return top
    else:
        print(-1)
        return -1

def size():
    print(len(stack))
    return len(stack)

def empty():
    if(len(stack)== 0):
        print(1)
        return 1
    else:
        print(0)
        return 0

def top():
    if(len(stack) ==0):
        print(-1)
        return -1
    else:
        print(stack[-1])
        return stack[-1]


N = int(sys.stdin.readline())
for i in range(N):
    string = sys.stdin.readline().rstrip()
    idx = string.find(" ")
    if(idx != -1):
        command = string[0:idx]
        inputA = int(string[idx+1:])
        if(command == 'push'):
            push(inputA)
        # command(input)
    else:
        command = string[0:]
        if(command == 'top'):
            top()
        elif(command =='size'):
            size()
        elif(command =='pop'):
            pop()
        elif(command=='empty'):
            empty()


"""
"""

def pop():
    if(len(stack)!=0):
        top = stack[-1]
        stack.remove(top)
        print(top)
        return top
    else:
        print(-1)
        return -1
에서 stack.remove(top)을 해줄때 remove는 숫자를 찾아서 지워주는것이므로 중복된 값이 있을때 맨 위에 있는 값의 index를 찾아서 지워주는 것을 보장하지 않는다
반례)
5
push 1
push 2
push 1
pop
1
top
1 : 2가 나와야함

stack.pop을 사용하자 ! 

그리고 string으로 받은것을 바로 함수로 사용하고싶을땐 exec를 사용하자
push(4) 이렇게 매개변수가 주어지는 것은 어쩔수 없는 것 같은데 
pop()나 top() 같은건 exec를 통해 사용할수있다


"""

"""
import sys

stack = []
def push(x):
    stack.append(x)

def pop():
    if(len(stack)!=0):
        top = stack[-1]
        stack.pop()
        print(top)
        return top
    else:
        print(-1)
        return -1

def size():
    print(len(stack))
    return len(stack)

def empty():
    if(len(stack)== 0):
        print(1)
        return 1
    else:
        print(0)
        return 0

def top():
    if(len(stack) ==0):
        print(-1)
        return -1
    else:
        print(stack[-1])
        return stack[-1]


N = int(sys.stdin.readline())
for i in range(N):
    string = sys.stdin.readline().rstrip()
    idx = string.find(" ")
    if(idx != -1):
        command = string[0:idx]
        inputA = int(string[idx+1:])
        if(command == 'push'):
            push(inputA)
        # command(input)
    else:
        command = string[0:]
        if(command == 'top'):
            top()
        elif(command =='size'):
            size()
        elif(command =='pop'):
            pop()
        elif(command=='empty'):
            empty()

"""
"""
그리고 string으로 받은것을 바로 함수로 사용하고싶을땐 exec를 사용하자
push(4) 이렇게 매개변수가 주어지는 것은 어쩔수 없는 것 같은데 
pop()나 top() 같은건 exec를 통해 사용할수있다
"""

import sys

stack = []
def push(x):
    stack.append(x)

def pop():
    if(len(stack)!=0):
        top = stack[-1]
        stack.pop()
        print(top)
        return top
    else:
        print(-1)
        return -1

def size():
    print(len(stack))
    return len(stack)

def empty():
    if(len(stack)== 0):
        print(1)
        return 1
    else:
        print(0)
        return 0

def top():
    if(len(stack) ==0):
        print(-1)
        return -1
    else:
        print(stack[-1])
        return stack[-1]


N = int(sys.stdin.readline())
for i in range(N):
    string = sys.stdin.readline().rstrip()
    idx = string.find(" ")
    if(idx != -1):
        command = string[0:idx]
        inputA = int(string[idx+1:])
        if(command == 'push'):
            push(inputA)
        # command(input)
    else:
        command = string[0:]
        exec(command + '()')
