// Hide / show inputs as needed
let show = true;

document.getElementById('toggleShowAdd').addEventListener('click', function(event) {
    if(show) {
        document.getElementsByTagName('div')[1].style.display = 'none';
        show = false;
    } else {
        document.getElementsByTagName('div')[1].style.display = 'block';
        show = true;
    }
});
// js code for taking input data and creating new elements
document.getElementById('add').addEventListener('click', function(event) {
    let main = document.getElementsByTagName('main')[0];
    let artistNumber = document.getElementById('artistNumber').value;
    let artistName = document.getElementById('artistName').value;
    let artistAbout = document.getElementById('aboutArtist').value;

    let image = document.createElement('img');
    image.className = 'image';
    image.src = 'https://randomuser.me/api/portraits/thumb/men/' + artistNumber + '.jpg';

    let anchorName = document.createElement('a');
    anchorName.innerText = artistName;
    anchorName.className = 'name';
    anchorName.href = 'http://127.0.0.1:5500/artist.html?num=' + artistNumber + '&name=' + artistName;

    let anchorAbout = document.createElement('a');
    anchorAbout.innerText = artistAbout;
    anchorAbout.className = 'about';
    anchorAbout.href = 'http://127.0.0.1:5500/artist.html?num=' + artistNumber + '&name=' + artistName;

    let paraName = document.createElement('p');
    paraName.appendChild(anchorName);
    let paraAbout = document.createElement('p');
    paraAbout.appendChild(anchorAbout);

    let imgDiv = document.createElement('div');
    imgDiv.className = 'img-container';
    imgDiv.appendChild(image);

    let paraDiv = document.createElement('div');
    paraDiv.className = 'p-container';
    paraDiv.appendChild(paraName);
    paraDiv.appendChild(paraAbout);

    let artistDiv = document.createElement('div');
    artistDiv.className = 'artist cf';
    artistDiv.appendChild(imgDiv);
    artistDiv.appendChild(paraDiv);

    main.appendChild(artistDiv);
})



// register the service worker (sw.js)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').
    then(function(response) {
        console.log('SW was registered');
    }).
    catch(function(err) {
        console.log('SW wasn"t registered');
    })
}
