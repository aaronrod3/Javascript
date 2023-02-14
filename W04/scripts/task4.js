/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myInfo = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
myInfo['name'] = 'Aaron';
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myInfo.photo = '../W02/week02/images/myPhoto.jpg';
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myInfo.favoriteFoods = ['pizza','burgers','wings'];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myInfo.hobbies = ['hiking','fitness','video games'];
// Step 6: Add another property named placesLived with a value of an empty array
myInfo.placesLived = [];

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myInfo.placesLived.location = {place:'', length:''};
// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived
myInfo.placesLived.location = {place:'new york', length:'5 years'};
myInfo.placesLived.location = {place:'north carolina', length:'6 years'};



/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector("#name").innerHTML = myInfo.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector("#photo").setAttribute('src', myInfo.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').alt = 'photo';
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
function makeLi(favoriteFoods) {
    const html = favoriteFoods.map(
        (favoriteFoods) => `
        <li>${favoriteFoods}</li>`
    );
        document.querySelector("#favorite-foods").innerHTML = html.join("");
}
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
makeLi(myInfo.favoriteFoods);
// Step 6: Repeat Step 4 for each hobby in the hobbies property
function makehobbiesLi(hobbies) {
    const html = hobbies.map(
        (hobbies) => `
        <li>${hobbies}</li>`
    );
        document.querySelector("#hobbies").innerHTML = html.join("");
}
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

makehobbiesLi(myInfo.hobbies);

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element

myInfo.placesLived.forEach((location) => {
    let placesLivedPlace = document.createElement('dt');
    placesLivedPlace.textContent = location.place;

    let placesLivedLength = document.createElement('dd');
    placesLivedLength.textContent = location.length;

    document.querySelector("#places-lived").appendChild(placesLivedPlace);
    document.querySelector("#places-lived").appendChild(placesLivedLength);
})

// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
