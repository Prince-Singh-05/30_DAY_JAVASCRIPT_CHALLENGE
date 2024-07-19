// Activity 1: Object Creation and Access

// Task 1

const book = {
    title: "Six gates of hell",
    author: "Jugadu Fauji",
    year: 2023
};

console.log(book);

/* Output: { title: 'Six gates of hell', 
            author: 'Jugadu Fauji', 
            year: 2023 } 
*/

// Task 2

console.log(`Title of the book is`, book.title);
console.log(`Author the book is`, book.author);

/* Output: 

Title of the book is Six gates of hell
Author the book is Jugadu Fauji

*/

// Activity 2: Object Methods

// Task 3

// Can use the Object defineProperty method also

// Object.defineProperty(book, "titleAndAuthor", {
//     get: function() {return this.title + " - " + this.author;}
// });

book.details = function() {
    const detail = (this.title + " - " + this.author);
    return detail;
}

console.log(book.details());

/* Output: Six gates of hell - Jugadu Fauji */

// Task 4

book.changeYear = function(newYear) {
    this.year = newYear;
    return this.year;
}

console.log("Year changed to", book.changeYear(2024));

/* Output: Year changed to 2024 */

// Activity 3: Nested Objects

// Task 5

const library = {
    name: "Our Library",
    books: [
        {
            title: "Six gates of hell",
            author: "Jugadu Fauji",
            year: 2023
        },
        {
            title: "Kargil - Untold stories from the war",
            author: "Rachna Bisht",
            year: 2018
        },
        {
            title: "The Brave: Param Vir Chakra Stories",
            author: "Rachna Bisht",
            year: 2019
        },    
    ]
};

console.log(library);

/* Output: 

{
  name: 'Our Library',
  books: [
    { title: 'Six gates of hell', author: 'Jugadu Fauji' },
    {
      title: 'Kargil - Untold stories from the war',
      author: 'Rachna Bisht'
    },
    {
      title: 'The Brave: Param Vir Chakra Stories',
      author: 'Rachna Bisht'
    }
  ]
}

*/

// Task 6

console.log(library.name);
library.books.forEach((book) => {
    console.log("Book Title -", book.title);
});

/* Output: 

Our Library
Book Title - Six gates of hell
Book Title - Kargil - Untold stories from the war
Book Title - The Brave: Param Vir Chakra Stories

*/

// Activity 4: The this keyword

// Task 7

book.bookData = function() {
    const data = (`${this.title} is published in ${this.year}`);
    return data;
};

console.log(book.bookData());

/* Output: Six gates of hell is published in 2024 */

function getBookTitlesAndYears(library) {
    const bookInfo = library.books.map(book => `${book.title} (${book.year})`);
    return bookInfo;
};

console.log(getBookTitlesAndYears(library));

/* Output: 

[
  'Six gates of hell (2023)',
  'Kargil - Untold stories from the war (2018)',
  'The Brave: Param Vir Chakra Stories (2019)'
]

*/

// Activity 5: Object Iteration

// Task 8

for(let property in book) {
    console.log(`${property} : ${book[property]}`);
}

/* Output:

title : Six gates of hell
author : Jugadu Fauji
year : 2024
details : function() {
    const detail = (this.title + " - " + this.author);
    return detail;
}
changeYear : function(newYear) {
    this.year = newYear;
    return this.year;
}
bookData : function() {
    const data = (`${this.title} is published in ${this.year}`);
    return data;
}

*/

// Task 9

console.log(Object.keys(book));
console.log(Object.values(book));

/* Output: 

[ 'title', 'author', 'year', 'details', 'changeYear', 'bookData' ]
[
  'Six gates of hell',
  'Jugadu Fauji',
  2024,
  [Function (anonymous)],
  [Function (anonymous)],
  [Function (anonymous)]
]

*/

console.log(Object.keys(library));
console.log(Object.values(library));

/* Output: 

[ 'name', 'books' ]
[
  'Our Library',
  [
    { title: 'Six gates of hell', author: 'Jugadu Fauji', year: 2023 },
    {
      title: 'Kargil - Untold stories from the war',
      author: 'Rachna Bisht',
      year: 2018
    },
    {
      title: 'The Brave: Param Vir Chakra Stories',
      author: 'Rachna Bisht',
      year: 2019
    }
  ]
]

*/
