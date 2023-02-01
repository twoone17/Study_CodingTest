import sys

x,y = map(int,sys.stdin.readline().split(" "))

dic = {}

a = [1,3,5,7,8,10,12]
b = [4,6,9,11]

for i in range(1,13):
    if(i in a):
        dic[i] = 31
    elif(i in b):
        dic[i] = 30
    else:
        dic[i] = 28

dateSum = 0
for i in range(1,x+1):
    if(i <x):
        dateSum = dateSum + dic[i]

calcDate = (dateSum + y) % 7
if(calcDate == 1):
    print("MON")
elif(calcDate ==2):
    print("TUE")
elif(calcDate ==3):
    print("WED")
elif(calcDate ==4):
    print("THU")
elif(calcDate ==5):
    print("FRI")
elif(calcDate ==6):
    print("SAT")
elif(calcDate ==0):
    print("SUN")
