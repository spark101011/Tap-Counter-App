self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  // Pass-through fetch so the app still works if offline caching isn't set up
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
