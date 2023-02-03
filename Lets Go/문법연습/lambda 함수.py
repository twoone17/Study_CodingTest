#원래 함수
def add(x,y):
    return x+y

print(add(10,20))

print((lambda x,y:x+y)(10,20))

list_in = [1,2,3,4,5,6,7,8]

list_out1 = list(map(lambda x: x+1,list_in))
print(list_out1)

list_out2 = list(filter(lambda x: x%2 ==0,list_in))
print(list_out2)

list_in_2 = [['orange',4],['banana',7],['kiwi',2],['Apple',5]]
a = sorted(list_in_2,key = lambda x: x[0])
print(a)