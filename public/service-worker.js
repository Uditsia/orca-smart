
self.addEventListener('install', event => {
    console.log('Service worker installing...');
    // Add a call to skipWaiting here
    console.log('Attempting to install service worker and cache static assets');
    event.waitUntil(
        caches.open('orca-cache').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/home.html',
                '/styles/index.css',
                '/styles/home.css'
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
});
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});