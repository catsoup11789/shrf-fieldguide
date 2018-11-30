const filesToCache = [
'/',
'assets/script.js',
'assets/css/normalize.css',
'assets/css/style.css',
'assets/images/sponsors-1.png',
'/index.html'
];

const staticCacheName = 'pages-cache-v1';

self.addEventListener('install', event => {
console.log('Attempting to install service worker and cache static assets');

event.waitUntil(
caches.open(staticCacheName)
.then(cache => {
return cache.addAll(filesToCache);
})
);
});