importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js') // Load WorkBox

console.log('Hello Service Worker!');

workbox.routing.registerRoute( // Cache the app shell
  /\//, // RegExp checks fetch requests 
  new workbox.strategies.CacheFirst({ // Pick a caching strategy
    cacheName: 'progressive-web-app' // Give a unique name to the cache
  })
);

workbox.routing.registerRoute( // Cache google fonts
  /^https:\/\/fonts\.googleapis\.com/, 
  new workbox.strategies.CacheFirst({ 
    cacheName: 'google-fonts-stylesheets',
    plugins: [
      new workbox.expiration.Plugin({ // Manage cache expiration
        maxEntries: 10, // Only allow 10 responses in the cache
        maxAgeSeconds: 60 * 60 * 24 * 30 // Cache for 30 days
      })
    ]
  })
);
