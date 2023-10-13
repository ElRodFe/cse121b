// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}

function doStuff(data) {
    const outPut = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}"></img>`;
    outPut.innerHTML = html;
    console.log("first", results);
    
}

function doStuffList(data) {
  console.log(data);
  const outPutList = document.querySelector("#outputlist");
  const pokeList = data.results;
  pokeList.forEach((pokemon) => {
    const html = `<li>${pokemon.name}</li>`;
    outPutList.innerHTML += html;
  })
}

getPokemon(url, doStuff);
console.log("second: ", results);
getPokemon(urlList, doStuffList);