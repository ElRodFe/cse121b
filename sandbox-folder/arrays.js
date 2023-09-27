let stringNumbers = ["one", "two", "three"];

const strings = stringNumbers.map((string) => `<li>${string}</li>`)

document.getElementById("myList").innerHTML = strings;