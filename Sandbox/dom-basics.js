const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://placeimg.com/200/200/animals");
newImage.setAttribute("alt", "animal image");
document.body.appendChild(newImage);
