/**********************************************
 * 				jQuery Intro
 *********************************************/

// jQuery is the most widely used JavaScript library on the internet today.
// jQuery Docs -->  https://api.jquery.com/
// working with uncompressed version of jquery
// jquery version 2 will be used for class
// What is JQuery?
//	- Javascript library that simplifies DOM minipulation
//	- Place local copy of JQuery above all other js script so the library loads first
//	- Either download a local copy or use a CDN to use JQuery
//	- $ -  is how we reference JQuery

/**********************************************
 * 			Adding jQuery to HTML
 *********************************************/

// Download a local copy and save to your js directory
// You can download a copy of jQuery locally by going to the jquery download page, right clicking the "uncompressed" link, and choosing "Save Link As...".
// jQuery download page --> https://code.jquery.com/jquery/


// Use a CDN
//<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

// TODO: Add jQuery to the html file by downloading and saving a local copy

// TODO: Add jQuery to the html file using the CDN

/**********************************************
 * 				jQuery Object
 *********************************************/
// jQuery object returns a collection of matched elements either found in the DOM based on passed argument(s) or created by passing an HTML string.
// We commonly use the dollar sign $ as an alias for 'jQuery'

/**********************************************
 * 				Document Ready
 *********************************************/

// Javascript version: This will wait until all images are loaded on page

//	-
window.onload = function() {
	alert( 'The page has finished loading!' );
}

// jQuery version: This will fire before the images are loaded
// We use jQuery to select the document
// we add the event listener 'ready'
// the event listener will fire before the images are loaded
// allows us to manipulate the DOM before images are loaded
$(document).ready(function() {
	alert( 'The DOM has finished loading!' );
});



/**********************************************
 * 				** Note **
 *********************************************/
// Our JS files will still contain 'use strict' at the top of the file
// we will also include a wrapper $(document).ready function.
// see example below

"use strict";

$(document).ready(function() {

	// INSERT JAVASCRIPT CODE HERE
	var headings = $('.main-headings');
	console.log(headings);

});