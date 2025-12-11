# for i in range(10):
#     print(i)

for i in range(2, 10, 2):
    print(i)

fruits = ["apple", "pear", "tomato"]

print("Fruits")
for i in range(len(fruits)):
    print(i, fruits[i])

for index, value in enumerate(fruits):
    print(index, value)

counter = 10
while counter > 0:
    print(counter)
    counter -= 1