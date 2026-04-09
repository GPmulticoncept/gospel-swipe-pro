// ==========================================
// GospelSwipe Pro v1.1 — Service Worker
// Offline-first · Cache-then-network
// ==========================================

const CACHE_NAME = 'gospel-swipe-v1.1.3';
const CONTENT_CACHE = 'gospel-swipe-content-v1.1.3';

const PRECACHE_URLS = [
  './',
  './style.css',
  './index.html',
  './app.js',
  './prayers.js',
  './translations.js',
  './content.json',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
];

// ===== Install: pre-cache core assets =====
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // Add individually so one failure doesn't block the rest
        return Promise.allSettled(
          PRECACHE_URLS.map(url => cache.add(url).catch(err => console.warn('Precache miss:', url, err)))
        );
      })
      .then(() => self.skipWaiting())
  );
});

// ===== Activate: delete old caches =====
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== CONTENT_CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// ===== Fetch: offline-first for app, network-first for content =====
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET and cross-origin except CDN fonts/icons
  if (event.request.method !== 'GET') return;
  if (url.origin !== self.location.origin &&
      !url.hostname.includes('cdnjs.cloudflare.com') &&
      !url.hostname.includes('fonts.googleapis.com') &&
      !url.hostname.includes('fonts.gstatic.com')) return;

  // Network-first for JSON content (keeps data fresh when online)
  if (url.pathname.endsWith('content.json') || url.pathname.endsWith('.json')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CONTENT_CACHE).then(c => c.put(event.request, clone));
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Cache-first for everything else (app shell)
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) return cached;
        return fetch(event.request)
          .then(res => {
            if (!res || res.status !== 200 || res.type === 'opaque') return res;
            const clone = res.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
            return res;
          })
          .catch(() => {
            // Offline fallback for navigation
            if (event.request.mode === 'navigate') {
              return caches.match('./index.html');
            }
          });
      })
  );
});
