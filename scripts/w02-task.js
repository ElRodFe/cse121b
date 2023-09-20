/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Elias Rodríguez";
let currentYear = "2023"
let profilePicture = "images/myself.jpg"





/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile Image of ${profilePicture}`);





/* Step 5 - Array */
const favFood = ["Pizza", "Spaghettis", "Hamburger"]
const foodParagraph = document.createElement("p")
foodParagraph.textContent = favFood;
foodElement.appendChild(foodParagraph);

const otherFavFood = "Ice Cream";
favFood.push(otherFavFood);
foodElement.innerHTML += `<br>${favFood}`;

favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;





