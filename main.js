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
    test.innerText = `${data.data[0].title} by ${data.data[0].artist.name} `
}