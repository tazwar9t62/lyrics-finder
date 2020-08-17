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
    let test = document.getElementById("test");
    // test.innerText = `${data.data[0].title} by ${data.data[0].artist.name} `
    test.innerHTML =
        `<div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="track-name">${data.data[0].title}</h3>
            <p class="author lead"><span>${data.data[0].artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Lyrics</button>
        </div>
    </div>`;
    let test2 = document.getElementById("test2");
    // test.innerText = `${data.data[0].title} by ${data.data[0].artist.name} `
    test2.innerHTML = `<div class="single-result row align-items-center my-3 p-3">
    <div class="col-md-9">
        <h3 class="track-name">${data.data[1].title}</h3>
        <p class="author lead"><span>${data.data[1].artist.name}</span></p>
    </div>
    <div class="col-md-3 text-md-right text-center">
        <button class="btn btn-success">Lyrics</button>
    </div>
</div>`;
}