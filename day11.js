// create a promise that resolves with a message after a 2 second timeout and log the message to the console.
// const promist = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello, world!");
//   }, 2000);
// });
// promist.then((message) => {
//   console.log(message);
// });

// create a promise that reject with an error message after a 2 second timeout and handle the error using catch()

// const promise = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         reject("Something went wrong");
//     }, 3000)
// })

// promise.catch((err) =>{
//     console.log(err);
// })


// create a sequence of promises that simulate fetching data from a server . chain the promises to log message in s specific order.



// use the fetch api to get data from a public api and log the rsponse data to the console using promises.

// URL of a public API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Fetch data from the API
fetch(apiUrl)
  .then((response) => {
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Parse the JSON from the response
    return response.json();
  })
  .then((data) => {
    // Log the response data to the console
    console.log(data);
  })
  .catch((error) => {
    // Log any errors to the console
    console.error('There has been a problem with your fetch operation:', error);
  });



//use the fetch api to get data from a public api and log the response data to the console using async/await

// URL of a public API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Function to fetch data using async/await
async function fetchData() {
  try {
    // Await the fetch call
    const response = await fetch(apiUrl);
    
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    
    // Await the parsing of JSON data from the response
    const data = await response.json();
    
    // Log the response data to the console
    console.log(data);
  } catch (error) {
    // Log any errors to the console
    console.error('There has been a problem with your fetch operation:', error);
  }
}

// Call the fetchData function
fetchData();


// use promis.all to wait for multiple promises to resolve and then log all their vlaues.





// use promise.race to log the value of the firse promise that resolves among multiple promises.