/* 
hente ref til input-search-felt gjennom id 
hente ref til knappen i html gjennom id - legge til addlistener 
flytte fra input til query
kjøre funksjon (aktivert av knappen) til å søke reultater
- jeg må sende query til den funksjonen fra input-search-felt
sette js resultater av search i html
*/
const resultsSearch = document.getElementById("search");
const button = document.getElementById("searchButton");


const resultSearchContainer = document.getElementById("searchResults");


async function getResults(query) {
    try {
        const response = await fetch(getSearch(query));
        const responseBody = await response.json();
        return responseBody.results; // <-- I am not sure if return should be inside or outside try
    }
    catch (error) {
        console.log("This does not work", error);
        alert("An error has occured! Please try again later. Bye.");
    }
}

function createSearchResultHtml(movies) {
    resultSearchContainer.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].backdrop_path === null) {
            continue;
        }
        resultSearchContainer.innerHTML += `
    <div class="film-window">
          <h1 class="h1-in-the-film">${movies[i].title}</h1>
          <div class="film__carousel__general all-pic-carousel" id="searchId${i}"></div>
          <section class="icons-in-the-film">
            <div class="material-symbols-rounded info">
                <a href="/details.html?id=${movies[i].id}">info</a>
            </div>
            <div class="material-symbols-rounded shoping-basket" id="basket${movies[i].id}" onClick="basketButtonClicked(${movies[i].id})">
                <a href="javascript:void(0)">shopping_basket</a>
            </div>
            <div class="material-symbols-rounded favorite" id="fav${movies[i].id}" onClick="favButtonClicked(${movies[i].id})">
                <a href="javascript:void(0)">favorite</a>
            </div>
          </section>
    </div>
    `;
        let uniqueId = document.getElementById(`searchId${i}`);

        uniqueId.style.backgroundImage =
            `linear-gradient(var(--grad1)), linear-gradient(var(--grad2)), url(${imageUrl}/${movies[i].backdrop_path})`;
    }
}

/*
Kilder
https://www.w3schools.com/jsref/event_onclick.asp
https://stackoverflow.com/questions/9643311/pass-a-string-parameter-in-an-onclick-function
*/
function favButtonClicked(buttonId){
    const button = document.getElementById(`fav${buttonId}`);
    if(button.style.color === "white"){
        //Sett original farve
        button.style.color = "black";
        button.style.background = "white";
    } else {
        //Favoritt valg
        button.style.color = "white";
        button.style.background = favoriteActiveColor;
    }
}

function basketButtonClicked(buttonId){
    const button = document.getElementById(`basket${buttonId}`);
    if(button.style.color === "white"){
        //Sett original farve
        button.style.color = "black";
        button.style.background = "white";
    } else {
        //Favoritt valg
        button.style.color = "white";
        button.style.background = addedToBasketColor;
    }
}


async function run() {
    const moviesSearch = await getResults(resultsSearch.value);
    console.log(moviesSearch);
    createSearchResultHtml(moviesSearch);

}



button.addEventListener("click", run);





