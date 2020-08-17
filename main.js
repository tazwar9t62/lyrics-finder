let api = "https://api.lyrics.ovh";

//adding event listener
document.querySelector(".search-btn").addEventListener("click", function () {

    let searchInput = document.getElementById("search-input").value.trim();
    searchResult(searchInput);
    document.querySelector(".search-result").style.display = "block";

});

let lyricsBtn = document.getElementById("result");
lyricsBtn.addEventListener("click", e => {
        let clickedBtn = e.target;
        if (clickedBtn.tagName === "BUTTON") {
            let artist_name = clickedBtn.getAttribute("artist-name");
            let track_name = clickedBtn.getAttribute("track-name");
            getLyrics(artist_name, track_name);


        }
    }

);



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
            `<div class="single-result row align-items-center my-3 p-3 justify-content-between">
        <div class="col-md-3">
          
        </div>

       <div class="col-md-6">
            <h3 class="track-name"> <span> ${song[index].title} </span> - <span id="artist">${song[index].artist.name}</span></h3>
        </div> 
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-outline-success" id="lyrics-btn" track-name="${song[index].title}" artist-name="${song[index].artist.name}">Lyrics</button>
        </div>
    </div>`

        // console.log(output);
        let result = document.querySelector(".search-result");
        result.innerHTML = `
    ${output}`;
    }
}

function getLyrics(artist_name, track_name) {
    fetch(`${api}/v1/${artist_name}/${track_name}`)
        .then(response => response.json())
        .then(data => {
            let lyrics = data.lyrics;
            if (lyrics == undefined) {
                document.querySelector(".titleName").innerText = track_name;
                document.querySelector(".lyric").innerText = "Sorry lyrics not found for this song!";
            } else {
                document.querySelector(".lyric").innerText = lyrics;
                document.querySelector(".titleName").innerText = `${track_name} (${artist_name})`;

            }
            document.querySelector(".search-result").style.display = "none";

        })
}

// <img src="${song[index].picture_small}" />