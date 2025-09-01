
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('farm-game-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        'https://i.ibb.co/C07Bf5L/farm-bg.jpg',
        'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
