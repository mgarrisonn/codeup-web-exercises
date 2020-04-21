"use strict";

console.log('Hello from external JavaScript!');

alert ('Welcome to my Website!');

var userInput = prompt('What is your favorite color?');
alert ('Great ' + userInput + ' is my favorite color too!');


var rentalForMermaid = Number(prompt('Days rented for Mermaid?'));
var rentalForBear = Number(prompt('Days rented for Bear?'));
var rentalForHercules = Number(prompt('Days rented for Hercules?'));
var priceForMovieDaily = prompt('What is the price for a movie rental per day?');
var movieRentalPrice = (rentalForHercules + rentalForMermaid + rentalForBear) * priceForMovieDaily;
alert("The total will be $" + movieRentalPrice.toFixed(2));


var rateForGoogle = Number(prompt('What is Googles pay per hour?'));
var rateForAmazon = Number(prompt('What is Amazons pay per hour?'));
var rateForFacebook = Number(prompt('What is Facebooks pay per hour?'));
var hoursWorkedFacebook = Number(prompt('How man hours did you work for Facebok?'));
var hoursWorkedGoogle= Number(prompt('How many hours did your work for Google?'));
var hoursWorkedAmazon = Number(prompt('How many hours did you work for Amazon?'));

var paymentForWeek = rateForGoogle * hoursWorkedGoogle;
paymentForWeek += rateForAmazon * hoursWorkedAmazon;
paymentForWeek += rateForFacebook * hoursWorkedFacebook;
alert("Total payment is $" + paymentForWeek.toFixed(2));


var seatsAvailable = confirm("Confirm that the class is not full");
var noScheduleConflict = confirm("Confrim that the schedules check");
var enrolledInClass = (seatsAvailable && noScheduleConflict);
alert("Students enrollment status: " + enrolledInClass);


var discountAppliedIf = 2;
var itemsPurchased = prompt('How many items were bought?');
var offerNotExpired = confirm("Confirm offer  has not expired.");
var isPremiumMember = confirm("Customer is a premium member");
var productOffer = offerNotExpired && (isPremiumMember || itemsPurchased >= discountAppliedIf);

alert("Product discount applied: " + productOffer);