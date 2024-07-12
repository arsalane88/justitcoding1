let no = "no";
switch (no) {
      case 1:
            console.log("one")
            break;
      case 2:
            console.log("two")
            break;
      case 3:
            console.log("three")
            break;
      default:
            console.log("Number not recognised. Please try again")
            break;
}

console.log("Hello World");

let firstName = "John";
let surName = "Smith";
let string1 = ("Greetings" + firstName + surName);
alert(string1);
console.log(string1);

let favColour = "Green";
let favTvSeries = "The Goat";
let string2 = ("My Favourite TV Show and Colour" + favColour + favTvSeries);
console.log(string2)

let breakfast = "Coffee and Banana";
let lunch = "Steak and Veg";
let dinner = "Chicken Thighs and Lettuce";
let string3 = ("Some of yesterdays food intake" + breakfast + lunch + dinner);
console.log(string3)

let breakfast2 = "Coffee and Banana";
let lunch2 = "Tuna and Cheese rolls"
let dinner2 = "Burgers"
let string4 = ("Some of todays planned food intake" + breakfast2 + lunch2 + dinner2)
console.log(string4)

let greeting = "Hello";
greeting = "New Value";
console.log(greeting);

var sky = "Blue";
sky = "blue";
console.log(sky);

const name1 = "jscript trial";
console.log(name1);

let usersName = prompt ("What is your name?");
console.log("Greetings" + usersName);

let number = prompt ("What is your number?");
alert(number * 10);

let rnumber = 46.59
console.log(Math.round(rnumber));
 
 
 
let rnumber2 = 35.75
console.log(Math.floor(rnumber2));
 
let rnumber3 =
    Math.floor(Math.random()*10)+1;
console.log(rnumber3);

let Age = "18";
if (Age >= "18") {
    console.log("Are you 18 or over?");
  } else if (Age < "18")
    alert("INTRUDER") {
    console.log("No Alcohol");
  } else if (Age >= "18")
    prompt("What drink would you like") {
    console.log("Age Approved");
  } 

//?1) num not equal to (num plus num)
console.log(a != (b+c));  
//?2) num equal to (num divided num)
      console.log(a == (a/b));  
//?3) num equal [value and type] to num
      console.log(a === c);
//?4) num greater than num
      console.log(b > c);
//?5) (num subtract num) less than or equal to (num plus num)
      console.log((b-c)<=(b+a));
//?6) (num times num) greater than num
      console.log((a*b)> c);

      ! Switch Statement
* Grade example
*/
 
// * Declare our "testScore" variable to check the value of
let testScore = 65;
 
switch (testScore) {
    case testScore >= 70:
        console.log("Distinction");
        break;
    case testScore >= 60:
        console.log("Merit");
        break;
    case testScore >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}