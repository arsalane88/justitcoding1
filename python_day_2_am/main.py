fruits = ["Apple", "Mango", "Banana", "Peach"]
for each in fruits:
    print(each)

string = "Python"
for char in string:
    print(char)

for num in range(1, 11):
    print(num)

number = 1
while number <= 10:
    print(number)
    number += 1

i = 1
while i <= 10:
    print(i)
    if i == 5:
        break
    i += 1

n = 0
while n < 10:
    n += 1
    if n == 5:  # Skip printing 5
        continue
    print(n)

num_list = [27, 85, 37, 197, 26, 11, 56, 143]
num_list.reverse()
print('Reversed List:', num_list)

list_nums = [111, 33, 33, 111, 33, 33, 111, 111]
count = list_nums.count(111)
print('Count of 111:', count)

nos_list = [46, 276, 23, 987, 56, 43, 543, 865]
nos_list.sort()
print(nos_list)

import random

def numberGuess():
    print("I'm thinking of a number between 1 and 10")
    randNum = random.randrange(1, 11)  # Generate a random number

    while True:
        guess = int(input("Guess the number:"))  # Ask user for a number

        if guess == randNum:
            print("Correct!")
            break
        elif guess > randNum:
            print("Incorrect! You guessed too high")
        else:
            print("Incorrect! You guessed too low")

numberGuess()