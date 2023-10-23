/*Declaring and initializing global variables */
const resultsTemplate = document.querySelector("#results");
const scripturesDataList= [];

const volumeDropDown = document.querySelector("#volume");
const bookDropDown = document.querySelector("#book");
const chapterDropDown = document.querySelector("#chapter");
const versicleDropDown = document.querySelector("#versicle");

/*Creating async function to get data from external link*/
const getData = async() => {
    const response = await fetch("https://raw.githubusercontent.com/beandog/lds-scriptures/master/json/lds-scriptures-json.txt")
    if (response.ok) {
        const data = await response.json();
        scripturesDataList.push(...data);

        populateVolumeCategory();

    }
}

//Creating functions to populate the filter's options
function populateVolumeCategory() {
    const uniqueVolumesTitles = new Set();

    for (let i = 0; i < scripturesDataList.length; i++) {
        const volumeTitle = scripturesDataList[i].volume_title;
        uniqueVolumesTitles.add(volumeTitle);
    }

    uniqueVolumesTitles.forEach((volumeTitle) => {
        const option = document.createElement("option");
        option.value = volumeTitle;
        option.textContent = volumeTitle;
        volumeDropDown.appendChild(option);
    });
    
}

function populateBookCategory() {
    const uniqueBooksTitles = new Set();
    const selectedVolume = volumeDropDown.value;

    if (selectedVolume !== "all") {
        for (let i = 0; i < scripturesDataList.length; i++) {
            const volumeTitle = scripturesDataList[i].volume_title;
            const bookTitle = scripturesDataList[i].book_title;

            if (selectedVolume == volumeTitle){
            uniqueBooksTitles.add(bookTitle);
            }}

        uniqueBooksTitles.forEach((bookTitle) => {
            const option = document.createElement("option");
            option.value = bookTitle;
            option.textContent = bookTitle;
            bookDropDown.appendChild(option)
        })

    }

    else {
        bookDropDown.innerHTML = "";
    }
}

function populateChapterCategory() {
    const uniqueChapters = new Set();
    const selectedBook = bookDropDown.value;

    if (selectedBook !== "all") {
        for (let i = 0; i < scripturesDataList.length; i++) {
            const bookTitle = scripturesDataList[i].book_title;
            const chapter = scripturesDataList[i].chapter_number;

            if (selectedBook == bookTitle){
            uniqueChapters.add(chapter);
            }}

        uniqueChapters.forEach((chapter) => {
            const option = document.createElement("option");
            option.value = chapter;
            option.textContent = chapter;
            chapterDropDown.appendChild(option)
        })

    }

    else {
        chapterDropDown.innerHTML = "";
    }
}

function populateVersicleCategory() {
    const uniqueVersicles = new Set();
    const selectedChapter = chapterDropDown.value;

    if (selectedChapter !== "all") {
        for (let i = 0; i < scripturesDataList.length; i++) {
            const chapter = scripturesDataList[i].chapter_number;
            const versicle = scripturesDataList[i].verse_number;

            if (selectedChapter == chapter){
            uniqueVersicles.add(versicle);
            }}

        uniqueVersicles.forEach((versicle) => {
            const option = document.createElement("option");
            option.value = versicle;
            option.textContent = versicle;
            versicleDropDown.appendChild(option)
        })

    }

    else {
        versicleDropDown.innerHTML = "";
    }
}

//Creating a function to display the results of the selected filters

function displayResults() {
    resultsTemplate.innerHTML = "";
    const selectedVolume = volumeDropDown.value;
    const selectedBook = bookDropDown.value;
    const selectedChapter = chapterDropDown.value;
    const selectedVersicle = versicleDropDown.value;

    for (let i = 0; i < scripturesDataList.length; i++) {
        const volumeTitle = scripturesDataList[i].volume_title;
        const bookTitle = scripturesDataList[i].book_title;
        const chapter = scripturesDataList[i].chapter_number;
        const versicle = scripturesDataList[i].verse_number;
        const scripture = scripturesDataList[i].scripture_text;

        if (
            (selectedVolume === "all" || selectedVolume === volumeTitle) &&
            (selectedBook === "all" || selectedBook === bookTitle) &&
            (selectedChapter === "all" || selectedChapter == chapter) &&
            (selectedVersicle === "all" || selectedVersicle == versicle)
        ) {
            const article = document.createElement("article");
            const h3 = document.createElement("h3");
            const h4 = document.createElement("h4");
            const p = document.createElement("p");

            h3.textContent = volumeTitle;
            h4.textContent = `${bookTitle} ${chapter}:${versicle}.`;
            p.textContent = scripture;

            article.appendChild(h3);
            article.appendChild(h4);
            article.appendChild(p);

            resultsTemplate.appendChild(article);
        }
    }
}

//Adding event listeners to handle the changes in the filters
volumeDropDown.addEventListener("change", populateBookCategory)
bookDropDown.addEventListener("change", populateChapterCategory)
chapterDropDown.addEventListener("change", populateVersicleCategory)
versicleDropDown.addEventListener("change", displayResults)

getData();

