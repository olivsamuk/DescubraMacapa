var cacheName = 'descubramacapa';
var filesToCache = ['https://www.descubramacapa.com.br/', 
'https://www.descubramacapa.com.br/index.html',
'https://www.descubramacapa.com.br/about.html', 
'https://www.descubramacapa.com.br/css/styles.css', 
'https://www.descubramacapa.com.br/js/scripts.js'];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});