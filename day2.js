//Arrithmatic Operators
let number1 = 34;
let number2 = 45;
console.log("Addition of two number is : ", number1 + number2);
console.log("substraction of Two number is : ", number1 - number2);
console.log("Multiplication of Two number is : ", number1 * number2);
console.log("division of Two number is : ", number1 / number2);
console.log("remainder of Two number is : ", number1 % number2);

//Assignment Operators
console.log("use of =+ operator : ", (number1 = +1));
console.log("use of =- operator : ", (number1 = -1));

//Comparision Operator
let n1 = 10;
let n2 = 20;
if (n1 > n2)  console.log("n1 is greater than n2 ");
if (n1 < n2)  console.log("n1 is less than n2 ");

//Logically Operator
console.log("use of && operator : ", n1 && n2);
if (n1 && n2 == 10) {
  console.log("n1 and n2 are same ");
} else {
  console.log("n1 and n2 are not same ");
}
console.log("use of || operator : ", n1 || n2);

if (n1 || n2) {
  console.log("n1 or n2 are same ");
} else {
  console.log("n1 or n2 are not same ");
}

//ternary Operator


// check the number where number is positive or negative
let positive = 40 
let negative = -40
if(positive>0){
    console.log("positive number is : ",positive)
}
else{
    console.log("Negative  number is : ",positive)
}
