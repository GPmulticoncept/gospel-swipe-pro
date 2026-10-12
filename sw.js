// ==========================================
// GospelSwipe Pro v2.2.3 — Service Worker
// Offline-first · Always-sync on update
// ==========================================

const APP_VERSION = '2.2.3';
const CACHE_NAME = 'gospel-swipe-v2.2.3';
const CONTENT_CACHE = 'gospel-swipe-content-v2.2.3';

const PRECACHE_URLS = [
  './',
  './style.css',
  './index.html',
  './app.js',
  './devotionals.js',
  './devotionals_i18n.js',
  './livingfaith.js',
  './livingfaith_i18n.js',
  './voice_engine.js',
  './ai_i18n.js',
  './ai_engine.js',
  './thread.js',
  './thread_i18n.js',
  './icon.png',
  './icon-192.png',
  './icon-512.png',
  './tracts.js',
  './tracts_ext.js',
  './prayers.js',
  './prayers_i18n.js',
  './translations.js',
  './training_i18n.js',
  './nb_i18n.js',
  './tracts_i18n_core.js',
  './tracts_i18n_struggle_p1.js',
  './tracts_i18n_struggle_p2.js',
  './tracts_i18n_struggle_p3.js',
  './content.json',
  './manifest.json',
  './og.png',
  './robots.txt',
  './sitemap.xml',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Outfit:wght@400;500;600;700&display=swap'
];

function isCacheableResponse(res) {
  return res && res.status === 200 && res.type !== 'opaque';
}

function putInCache(cacheName, request, response) {
  const clone = response.clone();
  caches.open(cacheName).then(c => c.put(request, clone)).catch(() => {});
}

// ===== Install: pre-cache core assets, then activate immediately =====
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.allSettled(
        PRECACHE_URLS.map(url => cache.add(url).catch(err => console.warn('Precache miss:', url, err)))
      ))
      .then(() => self.skipWaiting())
  );
});

// ===== Activate: drop old caches, take control, tell pages to refresh =====
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== CONTENT_CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
      .then(clients => {
        clients.forEach(client => {
          client.postMessage({ type: 'GS_UPDATED', version: APP_VERSION });
        });
      })
  );
});

self.addEventListener('message', event => {
  const data = event.data || {};
  if (data === 'SKIP_WAITING' || data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ===== Fetch =====
// Navigations: network-first so a new deploy is picked up, cache fallback when offline.
// JSON: network-first (content stays fresh).
// Everything else: stale-while-revalidate (instant + silent refresh).
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;
  if (url.origin !== self.location.origin &&
      !url.hostname.includes('cdnjs.cloudflare.com') &&
      !url.hostname.includes('fonts.googleapis.com') &&
      !url.hostname.includes('fonts.gstatic.com')) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          if (isCacheableResponse(res)) putInCache(CACHE_NAME, event.request, res);
          return res;
        })
        .catch(() => caches.match('./index.html').then(cached => cached || caches.match(event.request)))
    );
    return;
  }

  if (url.pathname.endsWith('content.json') || url.pathname.endsWith('.json')) {
    event.respondWith(
      fetch(event.request)
        .then(res => {
          if (isCacheableResponse(res)) putInCache(CONTENT_CACHE, event.request, res);
          return res;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      const fetching = fetch(event.request)
        .then(res => {
          if (isCacheableResponse(res)) putInCache(CACHE_NAME, event.request, res);
          return res;
        })
        .catch(() => cached);
      return cached || fetching;
    })
  );
});
