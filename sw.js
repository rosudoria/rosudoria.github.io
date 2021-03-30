let name = 'v1';
let files = [
    './index.html',
    './index.js',
    './index.css',
    './artist.html',
    './artist.js',
    './artist.css',
    './artist_data.js',
    './'
];

self.addEventListener('install', function(event) {

    caches.open(name).
        then(function(cache) {
            cache.addAll(files)
        })
})

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).
        then(function(match){
            if(match) {
                return match;
            } else {
                console.log('to be filled')
                return fetch(event.request).
                then(function(response) {
                    return caches.open(name).
                    then(function(cache) {
                        cache.put(event.request, response.clone())
                        return response;
                    })
                })
            }
        })
    );
});