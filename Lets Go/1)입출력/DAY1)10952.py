import sys

while True:
    try:
        a,b = map(int,sys.stdin.readline().split())
        result = a+b
        if(result!=0):
            print(result)
        else:
            break
    except:
        break
