let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");

let turn = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let num = 30;
let userInput = prompt("enter your number");

while(num != userInput){
    userInput = prompt("Wrong Number ! enter again.");
    console.log(userInput);
}

console.log("Congratulation! U entered a right number   ");