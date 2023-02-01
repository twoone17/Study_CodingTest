import sys

string = sys.stdin.readline().rstrip()
newString = ""
for idx,val in enumerate(string):
    if(idx!=0 and idx % 10 == 0):
        newString = newString + "\n"
    newString = newString + val

print(newString)

# newString = string[0:10] + "\n" + string[10:]
# print(newString)