const VERSION = "v1";
const CACHE_NAME = `PWA-CLOCK-${VERSION}`

// Install
self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed')
});


// Activate
self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    e.waitUntil(
        (async () => {
            const names = await caches.keys();
            await Promise.all(
                names.map((name) => {
                    if (name !== CACHE_NAME) {
                        console.log('Service Worker: Clearing old cache');
                        return caches.delete(name);
                    }
                }),
            );
            await clients.claim();
        })(),
    );
});


// Fetch
self.addEventListener('fetch', (e) => {
    console.log('Service worker: Fetching...');
    e.respondWith(
        fetch(e.request)
            .then(succcessFunction).catch((err) => )