import sys

data = []
while True:
    try:
        string = sys.stdin.readline()
        if(len(string)<=1):
            break
        elif(string[0]==" " or string[-1]==" "):
            print("공백이 있어선 안됨")
            break
        else:
            data.append(string)
            print(string.strip())
    except:
        break

