"use strict";

$(document).ready(function() {
	//jQuery Docs ==> https://api.jquery.com/

	/**********************************************
	 * 		** General Selector Syntax **
	 *********************************************/
	// $('selector')

	// var welcomeHeading = $('#book-welcome').html();



	/**********************************************
	 * 			** jQuery Methods **
	 *********************************************/

	// .html: returns the HTML contents of selected element or the first element in a collection. Similar to the innerHTML property we previously covered.
	// .css: allows us to change CSS properties for a given element or elements. Similar to the style property previously discussed.


	/**********************************************
	 * 			** ID Selector **
	 *********************************************/
	// $('#some-id');

	// TODO TOGETHER: Select the contents/html of the id 'book-welcome' and set equal to the variable 'contents'. Console.log the contents

	var contents = $('#book-welcome').html();
	console.log(contents);


	// TODO TOGETHER: Change the background color of the id 'book-welcome'

	$('#book-welcome').css('background-color', 'purple');


	// TODO: Select the contents/html of the id 'book-bundle-one' and set equal to the variable 'bookBundle'. Console.log the contents

	var bookBundle = $('#book-bundle-one').html();


	// TODO: Change one css property of the id 'container'

	// $('#container').css('color', 'blue');

	$('#container').css( {
		'background-color': '#000',
		'color': '#fff',
	});


	/**********************************************
	 * 			** CLASS Selector **
	 *********************************************/
	// $('.some-class');

	// TODO TOGETHER: Change the font size of all the .main-headings

	$('.main-headings').css('font-size', '4em');


	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/topupe/1/edit?js,output



	// TODO BONUS: Add additional class names to the page, and practice changing the css or viewing the contents





	/**********************************************
	 * 			** ELEMENT Selector **
	 *********************************************/
	//	$('tag_name')

	// TODO TOGETHER: Change the background color of all paragraph tags

	$('p').css('background-color', 'green');

	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/gayir/1/edit?js,output


	// TODO BONUS: Add additional elements to the page, and practice changing the css or viewing the contents



	/**********************************************
	 * 			** MULTIPLE Selector **
	 *********************************************/
	// $("selector1, selector2, ...")


	// TODO TOGETHER: Change the background color of id 'mystery-genre' and 'book-bundle-three' to red

	$('#mystery-genre,#book-bundle-one').css('background-color', 'red');


	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/qejeli/1/edit?output


	// TODO BONUS: Add additional elements to the page with ids and classes, and practice changing the css or viewing the contents


	/**********************************************
	 * 			** THE ALL Selector **
	 *********************************************/
	// $('*')
	// A common use is to put a border around every element to help see the layout of a page.

	// TODO TOGETHER: Create a border around all elements

	//selects each separate node in the DOM
	//
	$('*').css('border','1px solid grey');


	// TODO: Explore the following JS Bin example:
	//  https://jsbin.com/fivucu/1/edit?js,output


});