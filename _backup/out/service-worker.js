/**
 * Legacy service-worker removal.
 *
 * The previous create-react-app build shipped a Workbox worker that precached
 * the entire app shell. Visitors who loaded that site still have it registered
 * at `/service-worker.js` with scope `/`, so the browser keeps answering
 * navigations with the *old* HTML out of its precache — long after this
 * Next.js build replaced it. That is why the current site only appears in a
 * private window (no worker installed there) while a normal window still shows
 * the old version.
 *
 * This file is deliberately NOT a worker for this site. It exists only so the
 * browser's next update check of `/service-worker.js` finds something valid and
 * immediately undoes the damage: drop every cache, unregister, reload open tabs.
 *
 * Deleting `/service-worker.js` is not enough on its own — a 404 only unregisters
 * the worker on the *following* navigation and never reloads the current tab, so
 * the visitor keeps staring at the stale page. This path is fetched on every
 * navigation in scope, so replacing the file flips the switch on the next view.
 *
 * Nothing in this app registers a worker, so browsers that never visited the old
 * site never request this file.
 *
 * Ref: https://developer.chrome.com/docs/workbox/remove-buggy-service-workers
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));

      await self.registration.unregister();

      const clients = await self.clients.matchAll({ type: 'window' });
      for (const client of clients) {
        void client.navigate(client.url);
      }
    })(),
  );
});
