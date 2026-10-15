self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  // Leave requests to other websites (like Binance) alone
  if (new URL(e.request.url).origin !== self.location.origin) return;
  // Pass-through fetch so the app still works if offline caching isn't set up
  e.respondWith(fetch(e.request).catch(() => new Response('Offline')));
});
