const staticCacheName = 'juanchan-static-v1';
const assets = [
    '/',
    '/index.html',
    '/style.css',
    '/assets/js/app.js',
    '/assets/img/logo2.png',
    '/assets/img/FotoJuan.jpg'
];

// install: precache del "shell" (si algún recurso falla, no abortamos la instalación)
self.addEventListener('install', evt => {
    self.skipWaiting();
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => cache.addAll(assets).catch(() => {}))
    );
});

// activate: borra cachés antiguas y toma el control de inmediato
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.filter(key => key !== staticCacheName).map(key => caches.delete(key))
        )).then(() => self.clients.claim())
    );
});

// fetch: network-first para páginas (evita HTML obsoleto) y cache-first para estáticos
self.addEventListener('fetch', evt => {
    const req = evt.request;
    if (req.method !== 'GET') return;
    if (req.mode === 'navigate') {
        evt.respondWith(
            fetch(req).catch(() => caches.match(req).then(r => r || caches.match('/index.html')))
        );
        return;
    }
    evt.respondWith(
        caches.match(req).then(cacheRes => cacheRes || fetch(req).then(netRes => {
            return caches.open(staticCacheName).then(cache => {
                try { cache.put(req, netRes.clone()); } catch (e) {}
                return netRes;
            });
        }).catch(() => cacheRes))
    );
});
