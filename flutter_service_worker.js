'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4344315874e40a0c65960ea9342439da",
"index.html": "e720966df6a682299dcff593f442cdc2",
"/": "e720966df6a682299dcff593f442cdc2",
"main.dart.js": "591b7f11c1e94e9bc4a48aeab9ac4e2a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "293580f761775945d8cbc82be9542e00",
"assets/AssetManifest.json": "df0e83cdab996abfc4305d7565a3ad5b",
"assets/NOTICES": "69e9f6a73f9aeb0f3e37963f4bada7ee",
"assets/env/prod.env": "3569c706a3b5be95e224f6aeaacc179c",
"assets/env/preprod.env": "551935f8b2db15f782349a223614059e",
"assets/FontManifest.json": "f5f00d6a347f4fefdc2cc686ae42615a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/SuzukiPROBold.otf": "308e31ff87de9e37b012ce225aa8b4de",
"assets/fonts/SuzukiPROHeadline.otf": "a8588e8cc711bbf44215a0885d570632",
"assets/fonts/SuzukiPRORegular.otf": "d1c99da2b33f5002c84d8e36c0626cca",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/launcher/logoS&M.png": "dd90182e25bd66ac682c92cbeab03ba5",
"assets/assets/images/suzuki_placeholder.png": "4fbac66f191384f2a8bde7c50fc4a8e4",
"assets/assets/images/suzuki_placeholder_transparent.png": "e8a6824f54dc8d3cfa2e82142605a0b3",
"assets/assets/images/mobiles.png": "2417773f9910ae7be9a29a9df4701c9b",
"assets/assets/images/szk_error.png": "a123131bba815bd3ca8838cd5ad4a93a",
"assets/assets/images/cata.png": "0d546a76ccb2e5d0d192d6d9fc7f698c",
"assets/assets/images/perf_button_image.png": "553dd1130c64a94fbe83feef0ca20f51",
"assets/assets/images/communique.png": "c600fcaf824e6fec3f8040763afc6162",
"assets/assets/images/revue.png": "539efbba2f029314c424cd0d31a5a891",
"assets/assets/images/fiche.png": "53aafa2aa1aba0f08c99b052f06a247d",
"assets/assets/images/plan.png": "560c188aebb47527a0f6d912707d74c3",
"assets/assets/logo/logoS&M.svg": "a5b05427ab12e6327f4cc9fb5ccdbbe3",
"assets/assets/logo/logoS&M-blanc.svg": "54f5009ad0b7264109b492975ebab6ad",
"assets/assets/logo/suzuki_named_logo_on_dark.svg": "34124f51d9c10080ff7d9e0708c6daf7",
"assets/assets/loader/suzuk-loader-circles.svg": "24adc12ea2ab33daaed6af4c49b18a56",
"assets/assets/loader/suzuk-loader-cache-circle.svg": "069e8395ca346278862039372fdfdf39",
"assets/assets/loader/suzuk-loader-s.svg": "d8c4fa8d5fcd9bfb1fc3cbbe70680927",
"assets/assets/icons/car-light.svg": "af57b2cb6b642db3695a16ebcabfbcbe",
"assets/assets/icons/file-pdf-light.svg": "1a3d689ed77f8f1b902bc28311c32ad3",
"assets/assets/icons/times-hexagon-light.svg": "0e196110b61d63bbdba45b851baeb177",
"assets/assets/icons/fal-gift.svg": "78baebe9bd77c980f66639b39155c91e",
"assets/assets/icons/fal-mobile-android.svg": "0d4684f3167004e6696c330bcc158ded",
"assets/assets/icons/online-shop.svg": "92e4fd3a3e0c7ee38db72f5406e24e2d",
"assets/assets/icons/fal-video.svg": "6b29e7d21f9eb130135c23d2de4bf6d9",
"assets/assets/icons/car_configurator_pro.svg": "7d385e0d650f2560e89a741b4464b000",
"assets/assets/icons/user-pen.svg": "587181321cd225c3ccf90613317ce39f",
"assets/assets/icons/sync-light.svg": "33209dd4a6fa553dad8b1ed4d109ff6f",
"assets/assets/icons/envelope-light.svg": "57fc0f6f7d714f14fc1bcc1d00d491f8",
"assets/assets/icons/fal-book.svg": "54bbfceb464ead3ef7bb0879661c33b8",
"assets/assets/icons/form.svg": "b5d9923d1f45d278b046417366e7b590",
"assets/assets/icons/suzuki.svg": "780cc25e3101a5816d7414558b383243",
"assets/assets/icons/sign-out-light.svg": "a376129f6293c7a1813f857f552b6ac2",
"assets/assets/icons/fal-tachometer-alt.svg": "cc07c28171cb36e11f32c743c666cab3",
"assets/assets/icons/check-circle-light.svg": "3df504ace0ff9a7623fb0bf5e95cdbb5",
"assets/assets/icons/fal-file-certificate.svg": "0fe4785ee85381c98fff790950fd0f4f",
"assets/assets/icons/suzukipro.svg": "51255653dfc7094dd1f5640b5eca62a7",
"assets/assets/icons/times-circle-light.svg": "458f77ac66c57bab55d883de556cb3a6",
"assets/assets/icons/annuaire_reseau.svg": "1540b91ccb365c027a7f5a43286a7a5b",
"assets/assets/icons/inform.svg": "09be59818be5989e090b86688584d1bf",
"assets/assets/icons/releve-compte.svg": "b20e1dcbdb3c4e38c26e2ca4cb046906",
"assets/assets/icons/suzukimail.svg": "236a16abaed897dfee4c763e46049bae",
"assets/assets/icons/perform.svg": "9c85b6f91a26562a1643d82c279d2322",
"assets/assets/icons/fal-home.svg": "3ad91cf1792719d8b388a9d034c73bb5",
"assets/assets/icons/file-chart-line-light.svg": "ee7dfa3b30fd6d17dfbc921971444099",
"assets/assets/icons/fal-user.svg": "d0f7d337d7ed1eb2d69a51a1d0a5a554",
"assets/assets/icons/wallet-light.svg": "89051cec840085cf7ecec82142fefdb4",
"assets/assets/icons/suzuki_relance.svg": "fb27dcc975feab7f581444875c64f5b7",
"assets/assets/icons/video-slash-light.svg": "b56cbe4ae2aa61562487fa73ae8fec0f"
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
