score = 50
if score > 40:
    print("Score greater than 40")

change = 2.36
if change < 2.10:
    print("Change received was less than 2.10")
else:
    print("Change received was more than 2.10")

price = 10.99
if price > 13.99:
    print("Price is greater than 13.99")
elif price > 8.50:
    print("Price is between 8.50 and 13.99")
else:
    print("Price is not between 8.50 and 13.99")

month = "April"
match month:
    case "January":
        print("Happy New Year!")
    case "April":
        print("April Fools!")
    case "September":
        print("Back to work")
    case _:
        print("Who Knows What Time It Is")

team = "Liverpool"
match team:
    case "Chelsea" | "Arsenal" | "Tottenham":
        print("Cockneys")
    case "Everton" | "Liverpool":
        print("Scousers")
    case "Manchester United" | "Manchester City":
        print("Mancunians")
    case _:
        print("Probably Jordies")

age = 44

if age < 30:
    print('age is less than 30')
elif age > 30 and age < 50:
    print('age is between 30 & 50')
elif age > 50 and age < 70:
    print('age is between 50 & 70')
else:
    print("age is over 70")

number = -1.56

if number >= 0:
    if number == 0:
        print("The number is 0.")
    else:
        print("The number is positive.")
else:
    print("The number is negative.")  