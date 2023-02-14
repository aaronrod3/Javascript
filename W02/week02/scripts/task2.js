/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let userName = "Aaron";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = userName;

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = 2023;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = currentYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
const myPhoto = 'images/myPhoto.jpg';

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myPhoto);



/* ARRAYS */


// Step 1: declare and instantiate an array variable to hold your favorite foods
let foodsArray = ["Pizza", " Wings", " Burgers", " Hot Dog"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = foodsArray;

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFood = ' Ice Cream';

// Step 4: add the variable holding another favorite food to the favorite food array
foodsArray[4] = anotherFood;

// Step 5: repeat Step 2
document.querySelector('#food').textContent = foodsArray;

// Step 6: remove the first element in the favorite foods array
foodsArray.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = foodsArray;

// Step 8: remove the last element in the favorite foods array
foodsArray.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = foodsArray;


