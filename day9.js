//Dom Manipulation

//select an html element by its id and change its text content.
let id = document.getElementById("hello");
id.innerHTML = "Hello, !";

// Select the first element with the class 'container' and change its background color
document.querySelector(".container").style.backgroundColor = "lightblue";

// create a new div element with some text content and append it to the body
let contentDiv = document.getElementById("content");

let newDiv = document.createElement("div");
newDiv.innerHTML = "this is new div";

document.body.appendChild(newDiv);

// create a new li element and add it to an existing ul list.

let list = document.getElementsByClassName("list")[0];
let newLi = document.createElement("li");
newLi.textContent = "four";
list.appendChild(newLi);

// select an html element and remove it from the Dom

contentDiv.remove();

// Remove the last child of a specific HTML element.

// Add a click event listener to a button that changes the text content of a paragraph.

function change() {
  let newlist = document.createElement("li");
  newlist.textContent = "five";
  list.appendChild(newlist);
}

// Add a click event listener to a button that changes the background color of a div.
function changeColor() {
    document.querySelector(".container").style.backgroundColor = "lightgreen";
    }
    
//Add a mouseover event listener to an element that changes its border color.

contentDiv.addEventListener('mouseover', function() {
    contentDiv.style.border = "2px solid red";
})