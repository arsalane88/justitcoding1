# Python Day 1 - AM - Introduction

# ! 'print()' - Is the equivalent to console.log in JavaScript
# * This will print the string "Hello World" to the console

#
print("Hello World")
print('Goodbye')
#

# ? How do we run the file to see our output? 
# ! We have 2 options
# * Press the play button in the top right of our VS Code workspace
#  or
# * Open our terminal in the CORRECT DIRECTORY and run: "python filename.py"

# ! Similar to console.log(), print() will evaluate the argument and print the result
# * For Example: We can complete mathematical operations

# 
print(2+2)
print("2+2")

# 

# * We can also seperate arguments with a comma

# 
'print(first argument, second argument)'
"print(first argument, second argument)"

"""
print(first argument, second argument)
print(first argument, second argument)
"""

'''
works
ggagag
'''
print("The answer to 2 + 2 =",2+2)
# 

# ? What happens if we try to add quote marks to a string in our print function? 
# * For example if you wanted to write "My name is "name""

# 
# print("My name is "name"")
# print('My name is 'name'')
# 
print("My name is 'name'")
print('My name is "name"')

# * Notice we encounter an error - Python tries to help but isn't correct
# ! In order to write "illegal" characters we need to use an "escape character"
# * Backslash + Quote '\"' allows us to escape our string and use our quote marks

# 
print("My name is \"name\"")
# 

# ? Thinking back to JavaScript do we remember what a variable is?
# * Aside from syntax there is no difference - Just a label / box for our data

# ! Python Varaiables are delcared without a keyword - no 'let'/'const' equivalent

#
greeting = "Good Morning!"
num1 = 10

#

# * Meaning we can now access our string by referencing our variable

#

print(greeting,num1)
print(greeting, "agent", num1)
print(greeting, "\nagent", num1)
print(greeting, "agent","\n",num1)

#
"""Python Day 1AM - Tasks:
1: Create a variable "name" and assign a string containing your first name
as its value, then print the variable to the console."""


# ? How do you think we would assign a new value to the variable? 
# * Similar to JavaScript, in Python we simply refence the variable and reassign
"declaration and initialisation "
name = "abdul" 

"assignment/reassignment"
name = "josh"


#

# ? As there is no keyword you may be wondering how we declare constants? 
# ! In Python constants are delcared by a practice and are not a seperate type of variable
# * To indicate a constant we would declare a variable in capital letters


# Constant don not change
NAME = "James"
print(NAME)
AGE = 21
print(AGE)
#

# ! NOTE the value can still be reassigned
# * However the rule is if the variable is capitalised DO NOT reassign value

#
NAME= "Hello"
AGE= "Goodbye"
print(NAME)
print(AGE)
#

# ! snake_case - Previously when working with JavaScript we have used camelCase
# ! to differentiate between the languages we will be using snake_case instead
# * Seperate variables with more than 1 word in their name with underscore
# * This follows python convention and also helps you not confuse PY with JS

#
mutlti_word_variable = "somevalue"
print(mutlti_word_variable)
#

# Ther is also camelCase
userName = "james001"
print(userName)

# ! We will introduce Python specific data types later this week
# * For now lets look at ones we are familiar with

# * String - Series of characters contained in quote marks - single '' or double ""
#
my_string = "Characters between quotation/speech marks"
#

# * Integer - A whole number
#
my_integer_value = 5
#

# * Float - Decimal place number
# ! Text changes colour as a float is technically a class (advanced topic)
#
floatValue = 2.5
#

# * Boolean - True or False
# ! Must start with a capital T or F
#
boolValue1 = True
boolValue2 = False
#

# ! By using 'type()' we can check the data type and in JS is typeof

#
print(type(mutlti_word_variable))
print(type(my_integer_value))
print(type(floatValue))
print(type(boolValue1))
#

# ! fSTRING - Think of Template Literals/Strings in JavaScript
# * By passing 'f' before our string we are able to inject variable values
# * Simply wrap the variable in curlys '{}' and the value will take its place

#
day = "Monday"
time_slot = 18.23
slot_number = 4

print(f"Your appointment is on {day} at {time_slot} and your slot is {slot_number}")
#


# ! STUDENT TASKS ! 
"""

Python - Day 1 (AM) - Tasks:

1: Create a variable "name" and assign a string containing your first name as its value, then print the variable to the console.

2: Update the value of your "name" variable to contain your full name. Create 2 more variables named "age" and "city" and assign them your age as a number and your city of residence as a string. Finally, print an f{string} to the console of a sentence containing the name, age and city information. eg: "My name is Dave, I'm 25 and live in London"

3: Research the 'input()' function and utilise it to store a users name in a "user_name" variable.

4: Utilise 'input()' to obtain a users age and city, then print an f{string} containing the user data, similar to Task 2.

Stretch Tasks: 

1: Use input to obtain 2 numbers from a user, once obtained add the 2 numbers provided together and print the result to the console. 

(TIP: Think about data types and type conversion...)

2: Research Python's built in methods and string methods. Experiment with them to familiarise yourself with what Python can do natively.

Built-In Methods (Functions): 
https://www.programiz.com/python-programming/methods/built-in

String Methods (Functions): 
https://www.programiz.com/python-programming/methods/string


"""