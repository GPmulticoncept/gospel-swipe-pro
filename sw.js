// ==========================================
// GOSPELSWIPE PRO v1.0 - SERVICE WORKER
// 100% Offline-First Evangelism Platform
// Made in Nigeria 🇳🇬 | Production-Ready
// ==========================================

const CACHE_VERSION = 'v1.0.0';
const STATIC_CACHE = `gospel-swipe-static-${CACHE_VERSION}`;
const FONT_CACHE = `gospel-swipe-fonts-${CACHE_VERSION}`;

// Critical assets - cached during install
const CRITICAL_ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// External assets (Font Awesome) - cache with network-first strategy
const EXTERNAL_ASSETS = [
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// ==========================================
// INSTALL EVENT - Precache critical assets
// ==========================================
self.addEventListener('install', event => {
  console.log('🔧 GospelSwipe Pro: Installing service worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('📦 Caching app shell...');
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => {
        console.log('✅ All critical assets cached');
        return self.skipWaiting(); // Activate immediately
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
  console.log('🔄 GospelSwipe Pro: Activating service worker...');
  
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
      return self.clients.claim(); // Take control immediately
    })
  );
});

// ==========================================
// FETCH EVENT - Main routing logic
// ==========================================
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Handle navigation requests - serve index.html for SPA
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('./index.html')
        .then(response => response || fetch(request))
    );
    return;
  }

  // Handle same-origin requests
  if (url.origin === self.location.origin) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // Handle Font Awesome requests
  if (EXTERNAL_ASSETS.some(asset => request.url.includes(asset))) {
    event.respondWith(networkFirst(request, FONT_CACHE));
    return;
  }

  // Default: try cache, then network
  event.respondWith(
    caches.match(request)
      .then(response => response || fetch(request))
  );
});

// ==========================================
// CACHING STRATEGIES
// ==========================================

// Cache First strategy
async function cacheFirst(request, cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache First failed:', error);
    // Return offline fallback for HTML
    if (request.headers.get('Accept').includes('text/html')) {
      return caches.match('./index.html');
    }
    return new Response('Offline', { status: 503 });
  }
}

// Network First strategy (for external assets)
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', request.url);
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Offline', { status: 503 });
  }
}

// ==========================================
// MESSAGE HANDLER
// ==========================================
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('✨ GospelSwipe Pro Service Worker loaded - 100% Offline Ready');