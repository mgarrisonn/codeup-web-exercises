"use strict";

// (function($){
//     $(document).ready(function() {
//         alert( 'The DOM has finished loading!' );
//     });
// })(jQuery);

// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
// $(document).ready(function () {
//     var myHeading = $('h1').html();
//     alert(myHeading);
//
//     $('.codeup').css('border', '2px solid red');
//
//     $('li').css('font-size', '20px');
//
//     $('h1,p,li').css('background-color', 'grey');
//
//     // $('#container').css('color','white');
//     //
//     // $('#container').css('background-color', 'black');
//
//     $('#container').css( {
//         'color': 'white',
//         'background-color': 'black'
//     });
// });

// change background color of h1 with .click
$('h1').click(function(){
    $(this).css({
       'background-color': 'grey',
    });
});

// change font size of p to 18px with .dblclick
$('p').dblclick(function () {
    $(this).css({
       'font-size': '18px',
    });
});

// change text color to red when hover and back to black with .hover
$('li').hover(function () {
    $(this).css('color', 'red');
    },
    function () {
    $(this).css('color', 'black');
    }
);