// eg:  http://127.0.0.1:5500/artist.html?num=1&name=Kevin
let params = (new URL(document.location)).searchParams;
let artist_num = params.get("num");
let artist_name = params.get("name");
// artist_num = 1
let artistImg = document.getElementById('profileImg');
artistImg.src = 'https://randomuser.me/api/portraits/men/' + artist_num + '.jpg';
// artist_name = Kevin
let artistHeader = document.getElementById('artistName');
artistHeader.innerText = artist_name;

let artistTitle = document.getElementById('artistTitle');
artistTitle.innerText = artist_data[artist_num]["title"];

let aboutArtist = document.getElementById('aboutArtist');
aboutArtist.innerText = artist_data[artist_num]["about"];

// console.log(artist_data)

