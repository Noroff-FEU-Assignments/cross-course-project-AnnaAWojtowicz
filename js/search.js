const resultsSearch = document.getElementById("search");



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

async function run() {
    const moviesSearch = await getResults("bear");
    console.log(moviesSearch);
}

run();

addEventListener()





async function getSearchResults() {
    const searchResults = await getResults(getSearch);
    return searchResults;
}


