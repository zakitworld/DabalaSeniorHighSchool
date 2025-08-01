const CACHE_NAME = 'dabala-shs-cache-v1';
const urlsToCache = [
    '/',
    '/app.css',
    '/favicon.png',
    '/lib/bootstrap/dist/css/bootstrap.min.css',
    '/images/school-gate.jpg',
    '/images/60th-anniversary.jpg',
    '/images/health-center.jpg',
    '/images/inauguration.jpg',
    '/images/senior-prefect.jpg',
    '/images/brass-band.jpg',
    '/images/computers.jpg',
    '/images/celebration.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});