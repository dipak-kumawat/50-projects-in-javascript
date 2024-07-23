// write a prgram to print numbers from  1 to 10 using a for loop.

for (i = 0; i <= 10; i++) {
  console.log(i);
}

// write a program to print the multiplication table of 5 using a for loop.
console.log("Table of 5 :");
for (i = 0; i < 11; i++) {
  console.log(i * 5);
}

// write a program to calculate the sum of the numbers from 1 to 10 using a while loop..
console.log("sum from 1 to 10 :");
let sum = 0;
let j = 0;
while (j < 11) {
  sum = sum + j;
  j++;
}
console.log(`The sum of number from 1 to 10 :  ${sum} `);

// write a program to print numbers from 1 to 5 using do ... while loop

let ik = 1;

do {
  console.log(ik);
  ik++;
} while (ik <= 5);

//  write a program to calculate the factorial of a number using a do ... while loop
let number = 5; // You can change this value to calculate the factorial of a different number
let factorial = 1;
let k = number;

do {
  factorial *= k; // equivalent to factorial = factorial * i
  k--;
} while (k > 0);

console.log(`The factorial of ${number} is ${factorial}`);
