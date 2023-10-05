/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Elias Rodríguez",
    photo: "images/myself.jpg",
    favoriteFoods: ["Pizza", "Spaghettis", "Hamburguer", "Canelones"],
    hobbies: ["Play Videogames", "Watch TV Series", "Videocall my girlfriend"],
    placesLived:[],

};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Soriano, Uruguay.",
        length: "23 years."
    },
    {
        place: "Bahia Blanca, Argentina",
        length: "2 years"
    }
);



/* DOM Manipulation - Output */
document.querySelector("#name").textContent = myProfile.name;
const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute("alt", myProfile.name)

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
});

myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement("dd");
    dd.textContent = place.length;
    document.querySelector("#places-lived"). appendChild(dd);
});



/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


