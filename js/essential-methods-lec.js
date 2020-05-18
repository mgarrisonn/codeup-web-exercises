"use strict";

$(document).ready(function() {

    //name input goes through random sorting here
    $('#sort-wizard').click(function(e){
        let house = Math.floor(Math.random() * 4);
        let newWizard = $('#new-wizard');
        let newMember = $('<li></li>').text(newWizard.val());
        switch(house){
            case 0:
                $('#gryffindor').append(newMember);
                break;
            case 1:
                $('#slytherin').append(newMember);
                break;
            case 2:
                $('#ravenclaw').append(newMember);
                break;
            default:
                $('#hufflepuff').append(newMember);
                break;
        }
        newWizard.val('');
    });

    // .append adds onto the end of the list
    // .prepend adds to the start
    // https://www.tutorialrepublic.com/jquery-tutorial/jquery-insert-content.php
    /**********************************************
     * 			Attributes and CSS
     *********************************************/

    // TODO TOGETHER:  Using an event listener and css method, increase the font-size of 'Sorting Hat' when clicked.
    //    How can font size be changed using .html()?

    $('main-heading').click(function(){
        // done with css
        // $(this).css('font-size', '4em');
        // done with html
        $(this).html('<h4>My Sorting Hat</h4>');
        // console.log($(this).html());
    });

    // $('ul').click(function(){
    //     $(this).html('<li>Test</li>')
    // });

    // TODO TOGETHER: store the inner text of #main-heading in a variable
    var mainHeading = $('main-heading').text();
    alert(mainHeading);

    // TODO: Using a css method, change the banner background-color to black
    //  Hint: make sure you use the right selector
    $('.banner').css('background-color', '#000');



    // TODO TOGETHER: When the 'Houses' button is clicked, add the class 'house' to anything with a class of 'house-name'

    // Click on button with this
    $('#highlight-houses').click(function(){
        // target all elements with class .house-name
        // add class 'house' to html
        $('.house-name').addClass('house');
        // $('.house-name').removeClass('house');
        $('.house-name').toggleClass('house');
    });


    // TODO: Comment out the code above. Add the class of 'house' to all the 'house-names'
    //  Write the event listener to remove the class instead


    // TODO TOGETHER: Refactor your addClass and removeClass methods to toggle the 'house' class instead

    $('#lock-g').click(function(){
        $('#gryffindor-house').toggleClass('gryffindor');
        if($('#gryffindor-house').hasClass('gryffindor')){
            // refers to element that triggers the event listener
            $(this).text('unlock');
        } else {
            $(this).test('lock in');
        }
    });
    /**********************************************
     * 			       Traversing
     *********************************************/

    $('gryffindor').children();

    console.log($('#josh').next());;
    // TODO TOGETHER: console log each list element's text
    // var numbers = [1,2,3,4,5];
    // numbers.forEach(function(number){
    //     console.log(number);
    // });

    console.log($('l1').first().html());

    $('li').each(function(){
        console.log($(this).html());
    });

    // TODO TOGETHER: select all list elements and console log the first match
    console.log($('li').first().html());



    // TODO TOGETHER: select all list elements and console log the last match
    console.log($('li').last().html());

    // TODO TOGETHER: When I click on a list element, highlight its parent
    // highlights the parent ul for any list elements clicked
    $('li').click(function(){
        $(this).parent().css('background-color', 'yellow');
    });

    // TODO TOGETHER: When I click into a <ul>, console log last child in that group
    $('ul').click(function(){
        console.log($(this).children().last().html());
    });

    // TODO TOGETHER: When I click on Ravenvlaw heading, change the background color to
    $('#r-heading').click(function(){
        $(this).next().css('background-color', 'blue');
    });



});
