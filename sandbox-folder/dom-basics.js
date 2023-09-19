const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "I don't know");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to JavaScript Languaje</p>";
document.body.appendChild(newSection);