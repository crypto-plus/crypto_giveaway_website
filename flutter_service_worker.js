'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4e29f8df78389d3d7cd8173221918218",
"splash/img/light-2x.png": "74d2282457b64a627e542d14b1711970",
"splash/img/dark-4x.png": "52c84bf6f098bba0738d1af8abb35afc",
"splash/img/light-3x.png": "85208957d344669a5f92c99e388998f6",
"splash/img/dark-3x.png": "85208957d344669a5f92c99e388998f6",
"splash/img/light-4x.png": "52c84bf6f098bba0738d1af8abb35afc",
"splash/img/dark-2x.png": "74d2282457b64a627e542d14b1711970",
"splash/img/dark-1x.png": "6608ab9c573a7455e911f8a748383108",
"splash/img/light-1x.png": "6608ab9c573a7455e911f8a748383108",
"splash/style.css": "d5dc63e449d2b88b03fa09d39bf9c27c",
"favicon.ico": "543c6e2a741f7cefe4527ac37a1299b4",
"index.html": "0c75fc3fa82ada53ce07ef44c076f931",
"/": "0c75fc3fa82ada53ce07ef44c076f931",
"main.dart.js": "94135b95af0e9282d1bb5a8a252a7da9",
"manifest.json": "c44890441ba931eeea31ffda9d7b787f",
"assets/AssetManifest.json": "78c68e5595b4bc4a69d94b1b114785ef",
"assets/NOTICES": "34d94f1deeeb5d8776890129e93b62cf",
"assets/FontManifest.json": "9cdbaadf4951918fb1d820bf6c5e17e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/shib.png": "570db8310832b88c50ab986a819a0764",
"assets/assets/images/dash.png": "9814f9cd54c2de97f77a783c2d297a53",
"assets/assets/images/uni.png": "24c244a9b134b0b20dc773ff3205ceff",
"assets/assets/images/busd.png": "14baed95bed1d4a24dc256844db15244",
"assets/assets/images/ftm.png": "c462688bbd3fd23585dc73f743e6e17c",
"assets/assets/images/sol.png": "8ad0af4ddf259b615bac688a40800283",
"assets/assets/images/doge.png": "ae64499c8825452f6262177ee6dd525b",
"assets/assets/images/matic.png": "8c66ba12c10b66550f5a380f7a0126a8",
"assets/assets/images/bnb.png": "3740239d74858504f5345365a1e3eb33",
"assets/assets/images/ltc.png": "bab4974cee01b6ba8c921afbdfdcbbed",
"assets/assets/images/ada.png": "2b4047ef139810f5403fe2987bd2dc9e",
"assets/assets/images/link.png": "2e3d1cb92bfb8542be1afb8679c4d994",
"assets/assets/images/wbtc.png": "4d2129edcab36eef56472fc0719f060d",
"assets/assets/images/dot.png": "d3b3d0feb8183130c50f9c6afb13fbff",
"assets/assets/images/algo.png": "449c61cf1229c4ce63486482b5ed3f57",
"assets/assets/images/avax.png": "6e2d9073c586a251de2ccbc3f32d2aed",
"assets/assets/images/xlm.png": "51cec93b9021a4e88470ef0ff6a4ff76",
"assets/assets/images/eth.png": "2e9fbf27f35c422ed3616e2731916f5c",
"assets/assets/images/usdc.png": "76efe7238aa214f962cb207a1e828d3e",
"assets/assets/images/atom.png": "3ccf0e68aca6fa3844258c438f4b45bd",
"assets/assets/images/fil.png": "c3e6b8f468c6038ccfc1a68b99b65a7c",
"assets/assets/images/luna.png": "2943f019593615299e83d014fb8b407e",
"assets/assets/images/logo.png": "43174456234a34301a6319975001e01f",
"assets/assets/images/icp.png": "e906697de32eb7e1420f46bd4da7cd67",
"assets/assets/images/axs.png": "2d3405aeec61450d894f0e07a24de2a8",
"assets/assets/images/trx.png": "739797800c1ad83ba9a3cdddb9824693",
"assets/assets/images/btc.png": "a14ed1933016698d1c012ad5ab4d0159",
"assets/assets/images/metal_bg.jpeg": "72865463a5afc60b7dd9302757a0d4e6",
"assets/assets/images/bch.png": "6ad5509616a5fca9f389801052bea3fe",
"assets/assets/images/tht.png": "d16e0436cf48a9b072c6051a60d36816",
"assets/assets/images/vet.png": "ba7a1cc77fdb5899d3c743d30f80f2b6",
"assets/assets/images/ftt.png": "c6f7554c35cd430ff52cacd4fa5430e6",
"assets/assets/images/xrp.png": "39edd8e5c80256300562f68afb1ab525",
"assets/assets/fonts/AbstractGroovy.ttf": "d544cb18637364bb19e232bba8c2fc51",
"assets/assets/fonts/RobotoMono-Regular.ttf": "e5ca8c0ac474df46fe45840707a0c483",
"assets/assets/fonts/AzeretMono_extra.ttf": "8d112b6845df43c54006598a73c2ef32",
"assets/assets/fonts/AzeretMono.ttf": "8d112b6845df43c54006598a73c2ef32"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
