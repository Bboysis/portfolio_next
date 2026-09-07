 const CACHE_NAME = "sisay-portfolio-v2";

const STATIC_ASSETS = [
  "/",
  "/offline",
  "/manifest.webmanifest",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const asset of STATIC_ASSETS) {
        try {
          await cache.add(asset);
        } catch (error) {
          console.warn("Could not cache:", asset, error);
        }
      }
    })
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  // Only handle GET requests
  if (request.method !== "GET") {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((response) => {
        // Don't cache bad responses
        if (!response || response.status !== 200) {
          return response;
        }

        // Cache successful requests
        const responseClone = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(request, responseClone);
        });

        return response;
      })
      .catch(async () => {
        // Try cached request
        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
          return cachedResponse;
        }

        // If it's a page navigation, show offline page
        if (request.mode === "navigate") {
          const offlinePage = await caches.match("/offline");

          if (offlinePage) {
            return offlinePage;
          }
        }

        // Nothing available
        return new Response("Offline", {
          status: 503,
          headers: {
            "Content-Type": "text/plain",
          },
        });
      })
  );
});