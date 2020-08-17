let api = "https://api.lyrics.ovh";

//adding event listener
document.querySelector(".search-btn").addEventListener("click", function () {

    let searchInput = document.getElementById("search-input").value.trim();
    searchResult(searchInput);
});





//Functions
//Function to search songs by user's given name 
function searchResult(name) {
    fetch(`${api}/suggest/${name}`)
        .then(response => response.json())
        .then(data =>
            // console.log(data));
            showResult(data))
}

function showResult(data) {
    let song = data.data;
    let output = "";
    for (let index = 0; index < 10; index++) {
        output +=
            `<div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="track-name">${song[index].title}</h3>
            <p class="author lead"><span>${song[index].artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Lyrics</button>
        </div>
    </div>`
    }
    // console.log(output);
    let result = document.querySelector(".search-result");
    result.innerHTML = `
    ${output}`;
}