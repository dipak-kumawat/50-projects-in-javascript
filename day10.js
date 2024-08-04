// add a click listener to a button that changes the text content of a paragraph.
const button = document.getElementsByClassName('button')[0]
const container = document.getElementsByClassName('container')[0]

button.addEventListener('click', () =>{
    container.textContent = "content has been changed";
})


 //add a double click event listener to an image that toggles its visibility.

const image = document.getElementById('myImage')


image.addEventListener('dblclick', () =>{
    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }
})


// add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.getElementById('myInput')
input.addEventListener('keydown', (e) =>{
    console.log('e.key')
    })


// add a keyup event listener to an input field that sidplays the current value in a paragraph.


//  add a submit event listener to a form that prevents tha default submission and logs the form data to the console.


// Select the form element
const form = document.getElementById('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Create a FormData object from the form element
    const formData = new FormData(form);

    // Create an object to hold the form data
    const data = [];

    // Iterate through the form data and add it to the data object
    formData.forEach((value, key) => {
        data[key] = value;
    });
    console.log(data);

    // Log the form data to the console
});
