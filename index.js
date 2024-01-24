import { playlistArr } from '/playlist.js'

const playlistHtml = playlistArr.map(function(track){
    return `
    <section class="card">
        <div class="card-start">
            <img src="/images/${track.albumArt}">
        </div>
            <div class="card-mid">
                <h4 class="card-title">${track.title}</h4>
                <p class="card-artist">${track.artist}</p>
            </div>
        <div class="card-end">
            <p class="card-menu">...</p>
        </div>
    </section>
    `
}).join('')

document.getElementById('container').innerHTML = playlistHtml


// Use .map() if you need to make use of the new array it returns.

// Use .forEach() if you don't need to create a new array.