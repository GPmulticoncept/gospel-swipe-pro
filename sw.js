// ==========================================
// GOSPELSWIPE PRO v1.0 - SERVICE WORKER
// 100% Offline-First Evangelism Platform
// Made in Nigeria 🇳🇬 | Production-Ready
// ==========================================

const CACHE_VERSION = 'v1.0';
const STATIC_CACHE = `gospel-swipe-pro-${CACHE_VERSION}`;
const FONT_CACHE = `gospel-swipe-fonts-${CACHE_VERSION}`;

// Critical assets - cached during install
const CRITICAL_ASSETS = [
  './',
  './index.html'
];

// External assets - Font Awesome only
const FONT_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// ==========================================
// INSTALL EVENT - Precache critical assets
// ==========================================
self.addEventListener('install', event => {
  console.log('🔧 GospelSwipe Pro v1.0: Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('📦 Caching app shell...');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => {
        console.log('✅ All critical assets cached');
        return self.skipWaiting();
      })
      .catch(err => {
        console.error('❌ Install failed:', err);
      })
  );
});

// ==========================================
// ACTIVATE EVENT - Clean old caches
// ==========================================
self.addEventListener('activate', event => {
  console.log('🔄 GospelSwipe Pro v1.0: Activating service worker...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => 
            cacheName.startsWith('gospel-swipe-') && 
            !cacheName.includes(CACHE_VERSION)
          )
          .map(cacheName => {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    })
    .then(() => {
      console.log('✅ Old caches cleaned up');
      return self.clients.claim();
    })
  );
});

// ==========================================
// FETCH EVENT - Cache-first strategy
// ==========================================
self.addEventListener('fetch', event => {
  const { request } = event;

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Handle navigation requests - serve index.html for SPA
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html').then(response => {
        if (response) return response;
        return fetch(request).catch(() => caches.match('./index.html'));
      })
    );
    return;
  }

  // Handle Font Awesome requests (network-first)
  if (FONT_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(
      fetch(request).then(networkResponse => {
        if (networkResponse.ok) {
          const cacheCopy = networkResponse.clone();
          caches.open(FONT_CACHE).then(cache => {
            cache.put(request, cacheCopy);
          });
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(request);
      })
    );
    return;
  }

  // All other requests - cache-first
  event.respondWith(
    caches.match(request).then(cachedResponse => {
      if (cachedResponse) return cachedResponse;
      
      return fetch(request).then(networkResponse => {
        // Cache successful responses
        if (networkResponse.ok) {
          const cacheCopy = networkResponse.clone();
          caches.open(STATIC_CACHE).then(cache => {
            cache.put(request, cacheCopy);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Return offline fallback for HTML
        if (request.headers.get('Accept').includes('text/html')) {
          return caches.match('./index.html');
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});

// ==========================================
// MESSAGE HANDLER
// ==========================================
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('✨ GospelSwipe Pro v1.0 Service Worker loaded - 100% Offline Ready');
