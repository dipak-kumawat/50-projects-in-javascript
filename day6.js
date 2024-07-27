// Create an array of numbers from 1 to 5 and log the arrat to the console

let arrat = [1,  2,3,  4, 5]
let length = arrat.length
console.log(arrat)

// access the first and last elements of the arrat and log them to the console.

let last = arrat[length -1]

console.log(last)


// Use the push method to add number to the end of the array and log the updated array.

arrat.push(6)
console.log(arrat)


// use the pop method to remove the last elements from the array and log the updated array.

arrat.pop(6)
console.log(arrat)

// use the shift method to remove the frist elemtns from the array and log the updated array.

const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);


console.log(firstElement);

// use the unshift mehtod to add a new number to the beginning of the array and log the updated

const array2 = [1, 2, 3];


const lastElement = array2.unshift(4, 5);

console.log(array2);


console.log(lastElement);

// use the map method to create a new array where each number is doubled and log the new array.

let double = array1.map((i) =>{
    return i * 2
})

console.log(double)


// use the filter method to create a new arrya with only even numbers and log the new array.


let even = array2.filter((i) => i%2 == 0)

console.log(even)

// Use the reduce method to calculate the sum of the numbers in the array and log the result.

let sum = array1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); 

console.log(sum);


// Use a for loop to iterate over the array and log each element to the console .


// Use the forEach method to iterate over the array and log each elements to the console.
array2.forEach((element) => {
    console.log(element);
    });

// create a two-dimentsional array matrix and log the entire array to the console.

let dimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
console.log(dimensional);


dimensional.forEach((i) =>{
    i.forEach((j) =>{
        console.log(j);
        })
})