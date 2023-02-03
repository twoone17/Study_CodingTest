dict = {'c': 3, 'a': 1, 'b': 2, 'e':1,'d':2}

print(dict.items())
print(dict.keys())
print(dict.values())

sort_dict = sorted(dict.items())
print(sort_dict)

sorted_dict = sorted(dict.items(),key = lambda item: item[0],reverse=True)
print(sorted_dict)

sorted_dict = sorted(dict.items(),key= lambda item: item[1])
print(sorted_dict)