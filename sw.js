importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js') // Load WorkBox

console.log('Hello Service Worker!');

workbox.routing.registerRoute( // Cache a route
  /^https:\/\/fonts\.googleapis\.com/, // RegExp checks fetch requests 
  new workbox.strategies.StaleWhileRevalidate({ // Pick a caching strategy
    cacheName: 'google-fonts-stylesheets', // Give a unique name to the cache
    plugins: [
      new workbox.expiration.Plugin({ // Manage cache expiration
        maxEntries: 10, // Only allow 10 responses in the cache
        maxAgeSeconds: 60 * 60 * 24 * 14 // Cache for 14 days
      })
    ]
  })
);
