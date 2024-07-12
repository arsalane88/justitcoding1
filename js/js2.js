let no1 = prompt("insert number1")
 
if (no1 % 2 === 0) {
  console.log('even')
} else {
  console.log('odd')
}

let no2 = prompt("insert number2")

if (no2 / 3) {
    console.log("correct")
} else {
    console.log("incorrect")
}

let no3 = prompt("insert number3")

if (no3 / 5) {
    console.log("correct")
} else {
    console.log("incorrect")
}

let no4 = prompt("insert number4")
switch (no4) {
    case "/3": (no4 / 3)
       console.log("fizz")
        break;
    case "/5": (no4 / 5)
       console.log("buzz")
    case "/3&&/5": (no4 / 3 && 5)
       console.log("fizzbuzz")
    default:
       console.log(no4)
        break;
}

let arrayList = ["array1", 3, true, [4,5,6], "array2"]
console.table(arrayList);

for (let i = 0; i < arrayList.length; i++) {
    console.log(arrayList[i]);
}

let FavFilms = ["Pulp Fiction", "The Hateful 8", "The Town"];

FavFilms.push("Jackie Brown", "Gone Baby Gone");

for (let i = 0; i < FavFilms.length; i++) {
    console.log(FavFilms[i]);
}

var numbers = [];
for (var i = 0; i < 10; ++i) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(numbers);

for (let i = 20; i >= 0; i--) {
    console.log(i);
}

for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 50) + 1;
    const isDivisibleBy5 = randomNumber % 5 === 0;
    console.log(`Number ${randomNumber} is divisible by 5: ${isDivisibleBy5}`);
}

function greeting(firstName, surname) {
    return `Hello, ${firstName} ${surname}!`;
}

function sortAlph(text) {
    return text.split('').sort().join('');
}

console.log(sortAlph('lkhgfnie'));

function atmExchange(pin, withdrawalAmount) {
    const storedPin = "9999";
    const Balance = 2685;

    if (pin === storedPin) {
        if (withdrawalAmount <= Balance) {
            return "Transaction approved. You can withdraw £" + withdrawalAmount;
        } else {
            return "Insufficient funds. Your account balance is £" + Balance;
        }
    } else {
        return "Incorrect PIN. Please try again.";
    }
}

function palindromeCheck(string) {
    const reverseString = string.split('').reverse().join('');
    if (string === reverseString) {
        console.log('Is a palindrome');
    } else {
        console.log('Not a palindrome');
    }
}

const inputString = prompt('Enter possible palindrome: ');
palindromeCheck(inputString);

function possibleCombinations(str) {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}

console.log(possibleCombinations('Cat'));

function isPerfectNumber(inputNumber) {
    let sum = 0;
    for (let i = 1; i < inputNumber; i++) {
        if (inputNumber % i === 0) {
            sum += i;
        }
    }
    return sum === inputNumber;
}

console.log("8128 is" + (isPerfectNumber(8128) ? " a perfect number" : " not a perfect number"));
console.log("4 is" + (isPerfectNumber(4) ? " a perfect number" : " not a perfect number"));

const sortAlph2 = text => text.split('').sort().join('');
console.log(sortAlph2("lkhgfnie"));

const firstNonRepeatingCharacter = (str) => {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return null;
};

const inputString2 = "11223344567";
const result = firstNonRepeatingCharacter(inputString2);
console.log("First non-repeating character:", result);

function Profile(name, age, height) {
    return {
      name: name,
      age: age,
      height: height,
      greet: function() {
        return `Hello, I'm ${this.name}! Nice to meet you.`;
      }
    };
  }

  const euro24 = {
    group1: {
        team1: "Germany",
        team2: "Scotland",
        team3: "Hungary",
        team4: "Estonia"
    },
    group2: {
        team1: "France"
    },
    group3: {
        
    }
  }