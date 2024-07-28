// create and object representing a book with properties like title, autor, and year, and log the object to the console.
let object = {
    title: "Harry Potter",
    autor: "J.K. Rowling",
    year: 1997,
    getInfo : function() {
        return "Title: " + this.title + ", Author: " + this.author;
    }, 
    updateYear: function(newYear){
        return this.year = newYear
    }, 
    getTitleAndYear: function() {
        return "Title: " + this.title + ", Year: " + this.year;
    }
    };

console.log(object)

// access and log the title and uathor properties of the book 
console.log("autor of book: ",object.autor)

//Add a method to the book object that returns a string with the books title and author, and log the result of calling this method.

console.log(object.getInfo())


// add method to the book object that takes a parameter (year) and updates the books year property, then log the updated object.
object.updateYear(2024)
console.log(object.year)

//create a nested object representing a libary with properties like name and books (an array of book objects) and log the library object to the console.

let library = {
    name: "City Library",
    books: [
        {
            title: "Harry Potter",
            author: "J.K. Rowling",
            year: 1997
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    ]
};

//Access and log the name of the library and the title of all the books in the library.



console.log(library.books[1].title);


// Add a method to the book object that uses the this keywoed to return a string with the books title and year, and log the result of calling this method.

console.log(object.getTitleAndYear());

// Use a for... in loop to iterate over the properties of the book object and log each property of the book object and log each property and its value.

for (let property in object) {
    if (typeof object[property] !== 'function') {
        console.log(property + ": " + object[property]);
    }
}

// use object.keys and object.values methods to log all the keys and values of the book bojects.

let keys = Object.keys(object);
console.log("Keys:", keys);
let values = Object.values(object);
console.log("Values:", values);