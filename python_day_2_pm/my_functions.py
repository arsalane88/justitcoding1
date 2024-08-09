def greet_user():
    name = input("What is your name? ")
    return f"Hi, {name}! What a pleasure."

def user_info(name, age='unknown'):
    return f"{name} is {age} years old."

def check_user_age():
    try:
        name = input("Enter your name: ")
        birth_year = int(input("Enter your birth year: "))
        current_year = 2024
        age = current_year - birth_year

        if age >= 18:
            return f"Hello, {name}! Your sign-up has been successful."
        else:
            return f"Sorry, {name}, you are {age} years old and are unable to register, as a result."
    except ValueError:
        return "Invalid input. Please refresh and try again."