// write a function to check if a number is even or odd and log the result to the console.

let number = 54;

function checkNumber(number) {
  if (number % 2 == 0) {
    console.log("The number is even");
  } else {
    console.log("The number is odd");
  }
}

checkNumber(56);

// write a function to calculate the square of a number and return the result.

function calculateSquare(number) {
  return number * number;
}

console.log("The number is 4 and square is : ", calculateSquare(4));

// write a function expression to find the maximun of two numbers and log the result to the console.

function maxNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log("The number is 45 and 69 : greater number is : ", maxNumber(45, 69));

// write a function expression to concatenate two strings and return the result.

function concat(text1, text2){
  return text1.concat(text2);
}

console.log(concat("dipak", "kumawat"))


// write an arrow function to calculate the sum of two numbers and return the result.

sum = (number1 , number2) =>{
  console.log("The sum of numbers is : ", number1 + number2);
}

sum(23, 56)


// write a arrow function to check if a string contains a specific character and return a boolean value.


const containsCharacter = (str, char) => str.includes(char);

// Example usage:
console.log(containsCharacter("hello", "e")); // true
console.log(containsCharacter("world", "a")); // false


// write a higher order function that takes a function and a number and calls the function that manu times.

const callFunctionMultipleTimes = (func, times) => {
  for (let i = 0; i < times; i++) {
    func();
  }
};

const sayHello = () => console.log("Hello!");

callFunctionMultipleTimes(sayHello, 3);


// write a higher order function that takes two functions and a value applies the first function to the value and then applies the second function to the result.

const applyFunctions = (func1, func2, value) => func2(func1(value));

const addTwo = (num) => num + 2;
const multiplyByThree = (num) => num * 3;

const result = applyFunctions(addTwo, multiplyByThree, 5);
console.log(result); 



