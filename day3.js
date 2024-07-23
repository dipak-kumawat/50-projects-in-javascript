// write a program to check if a number is positive, negative, or zero and log the result to the console.

let number = -10;

// if(number > 0)return console.log("number is positive")
//     else if(number < 0)return console.log("number is negative")

// write a program to check if a person is eligible to vote (age>= 18) and lot the result to the cosole.

let age = 54;

const message1 = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message1);
// write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 20;
let num3 = 30;
console.log(num1, num2, num3);

// write a program that uses a switch casse to determine the day of the week based on a number (1 -7 ) and log the day name to the console..

let day = 0;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
    default: console.log("enter valid day")
}

// write a program that uses a switch case to assign a grade ("a", b , c, d) based on a score and log the grade to the console.

let score = 85; // You can change this value to test different scores
let grade;

switch (true) {
    case (score >= 90 && score <= 100):
        grade = "A";
        break;
    case (score >= 80 && score < 90):
        grade = "B";
        break;
    case (score >= 70 && score < 80):
        grade = "C";
        break;
    case (score >= 60 && score < 70):
        grade = "D";
        break;
    case (score < 60):
        grade = "F";
        break;
    default:
        grade = "Invalid score";
}

console.log(`The grade is: ${grade}`);


// write a prgoram that uses the ternary operator to check if a number is even or odd and log the result ot the console. 

let year = 2035

let leapYear = ( year % 2 === 0)? "this number is even": "this number is odd"

console.log(leapYear)