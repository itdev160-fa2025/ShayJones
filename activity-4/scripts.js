//welcome message 

var user = "Shay";
var salutation = "Hello ";

var greeting = salutation + user + '! Ready to get your next pair of Jordans?';
var greetingEl = document.getElementById("greeting");

greetingEl.textContent = greeting; 

// Define the variables for product price and student discount percentage
var Price = 150;         // Product price in dollars
var studentDiscount = 0.2;      // 20% discount for students (as a decimal)
var studentPrice = Price - (Price * studentDiscount);

var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = "$" + productPrice.toFixed(2);  // Display price with two decimal places
studentPriceEl.textContent = "$" + studentPrice.toFixed(2);






