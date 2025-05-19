self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mirshad-portfolio-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/favicon-16x16.png',
        '/favicon-32x32.png',
        '/apple-touch-icon.png',
        '/android-chrome-192x192.png',
        '/android-chrome-512x512.png',
        // Add more assets as needed
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
