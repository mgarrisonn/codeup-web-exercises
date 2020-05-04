(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Michael",
        lastName: "Garrison"
    };

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function() {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };
    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    // shoppers.forEach(function(shopper) {
    //    var discountedPrice = shopper.amount;
    //    var discount = 0;
    //    if(shopper.amount > 200) {
    //        discount = 12;
    //        discountedPrice = 0.88 * shopper.amount;
    //    }
    //    console.log("Shopper: " + shopper.name + " amount: $" + shopper.amount + " discount: " + discount + "% $" + discountedPrice);
    // });
    function discountChecker(shoppers) {
        shoppers.forEach(function(shopper) {
            if (shopper.amount >= 200) {
                console.log(shopper.name + " has spent $" + shopper.amount.toFixed(2) + " today. They qualify for a 12% discount, and therefore a final total of $" + (shopper.amount - (shopper.amount * .12)).toFixed(2) + "." )
            } else {
                console.log(shopper.name + ", thank you for shopping with us today. your final total today is: $" + shopper.amount.toFixed(2) + ". If you added $" * (200 - shopper.amount).toFixed(2) + ", you could save 12% on your purchase today. :)");
            }
        })
    }

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "The Old Man and the Sea",
            author: {
                firstName: "Ernest",
                lastName: "Hemingway"
            }
        },
        {
            title: "Harry Potter and the Sorcerers Stone",
            author: {
                firstName: "J.K.",
                lastName: "Rowling"
            }
        },
        {
            title: "The Lord of The Rings",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien"
            }
        },
        {
            title: "The Hobbit",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien"
            }
        },
        {
            title: "The Cat in the Hat",
            author: {
                firstName: "Dr.",
                lastName: "Seuss"
            }
        }
    ];



    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    function loggingBooks(books) {
        for (var x = 0; x < books.length; x++) {
            console.log("Book #" + (x + 1) + "\n" + "Book title: " + books[x].title + "\n" + "Book Author: " + books[x].author.firstName + " " + books[x].author.lastName);
        }
        // books.forEach(function(books, index) {
        //         console.log("Book # " + (index + 1));
        //         showBookInfo(book);
        //         console.log('---');
        //     });
    }

    loggingBooks(books);


    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // books.push( createBook("The Old Man and The Sea", "Ernest Hemingway"));
    // books.push( createBook("Harry Potter and the Sorcerers Stone", "J.K. Rowling"));
    // books.push( createbook("The Lord of the Rings", "J.R.R. Tolkien"));
    // books.push( createbook("The Hobbit", "J.R.R. Tolkien"));
    // books.push( createbook("TheCat in the Hat", "Dr. Seuss"));
    //

    function createBook(title,fName, lName, arr) {
        var newBook = {
            title: title,
            author: {
                firsName: fName,
                lastName: lName
            }
        };
        arr.push(newBook);
        return arr;
    }

    createBook("Harry Potter", "John", "Jacob", books);
    loggingBooks(books);
})();
