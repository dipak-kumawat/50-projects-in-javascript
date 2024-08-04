// create a promise that resolves with a message after a 2 second timeout and log the message to the console.
const promist = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, world!");
  }, 2000);
});
promist.then((message) => {
  console.log(message);
});

// create a promise that reject with an error message after a 2 second timeout and handle the error using catch()

const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject("Something went wrong");
    }, 3000)
})

promise.catch((err) =>{
    console.log(err);
})


// create a sequence of promises that simulate fetching data from a server . chain the promises to log message in s specific order.




// use the fetch api to get data from a public api and log the rsponse data to the console using promises.




//use the fetch api to get data from a public api and log the response data to the console using async/await




// use promis.all to wait for multiple promises to resolve and then log all their vlaues.





// use promise.race to log the value of the firse promise that resolves among multiple promises.