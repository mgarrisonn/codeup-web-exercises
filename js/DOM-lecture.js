
"use strict";

// ========== Retrieve elements by id, class, tag name

// id
// var header = document.getElementById('main-title');
// console.log(header);

// changes the title on the html page
// console.log(header.innerHTML = "Hello Ganymede");
// console.log(header.innerHTML);

// var smallHeading = document.getElementById('small-heading')
// console.log(smallHeading);

// class - will return an HTMLCollection
// var cards = document.getElementsByClassName('card');

// cards[0].innerHTML --- targets the first card
//for (var i = 0; i < cards.length; i += 1) {
// cards[i].innerHTML = "Howdy";
// } --- targets all cards

// console.log(cards);
// console.log(cards[0]);
// cards.pop(); // ERROR: Array specific method/Only works with an Array
// var cardsArr = Array.from(cards); // convert HTMLCollection and NodeList to Array --- turning into an array to be able to do more with it
// cardsArr.pop();

// tag
//     var sections = document.getElementsByTagName('section');
//     console.log(sections);

// .getElementById() -- single element node
// .getElementsByClassName() --- collection of nodes --- targeting classes
// .getElementsByTagName() --- collection of nodes


// ========== Query Selector and Query Selector All

// querySelector()

// var headerTitle = document.querySelector('header h1');
// var headerTitle = document.querySelector('#main-title');
// console.log(headerTitle);
//
// var li = document.querySelector('li'); // only returns first matching
// console.log(li);
//
// var secondLi = document.querySelector('li:nth-child(2)');
// console.log(secondLi);


// querySelectorAll()

// var lis = document.querySelectorAll("li");
// console.log(lis);




// ========== Direct access to form inputs

// var forms = document.forms;
// console.log(forms['feedback-form'].feedback.value);


// ========== Accessing and modifying elements and properties

// get value of innerHTML
//     var title = document.getElementById("main-title");
//     console.log(title);
//
//     console.log(title.innerHTML);
//     console.log(title.innerText);

// set value of innerHTML
//     title.innerHTML = "<em>Hi MOM!</em>";

// set value of innerText
//     title.innerText = "<em>Hi MOM!</em>";

// append value to innerText (works the same with innerHTML)
//     title.innerHTML += " ...and hi Mom!";


// ========== Accessing and modifying attributes

// check if attribute exists
//     var cowboy = document.getElementById('cowboy');
//     console.log(cowboy.hasAttribute('data-1'));

// get an attribute value
//     console.log(cowboy.getAttribute('data-1'));

// create a new attribute or change a value of an existing attribute
//     cowboy.setAttribute('data-1', 'hello');
//     cowboy.setAttribute('data-test', 'testing');
//     console.log(cowboy.getAttribute('data-1'));

// remove attribute
//     cowboy.removeAttribute("data-test");
//     console.log(cowboy);


// ========== Accessing and modifying styles

// single style
//     var jumbotron = document.querySelector('.jumbotron');
//     jumbotron.style.display = "none";
//     jumbotron.style['font-family'] = "times";


// ========== Add / Remove Elements

// see curriculum links