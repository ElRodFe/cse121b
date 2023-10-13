/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templesList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const html = `<article>
        <h3>${temple.templeName}</h3>
        <img src="${temple.imageUrl}" alt="${temple.location}"></img>
        </article>`;

        templesElement.innerHTML += html;
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templesList.push(data);
    }
    displayTemples(templesList)
}

/* reset Function */
function reset(list) {
    return list.lenght = 0
}

/* sortBy Function */
function sortBy(temples) {
    reset(templesList);
    const filter = document.querySelector("#sortBy").value;

    switch(filter) {
        case "utah":
            const utahTemples = temples.filter((temple) => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        
        case "nonutah":
            const noUtahTemples = temples.filter((temple) =>! temple.location.includes("Utah"));
            displayTemples(noUtahTemples);
            break;
        case "older":
            const olderTemples = temples.filter((temple) => new Date(temple.dedicated < new Date(1950, 0, 1)));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
    sortBy(templesList)
});


getTemples();