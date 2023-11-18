'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2795dda2c2996d9fd5c931a7edd3ff14",
".git/config": "2cd5e13ce5e335a0849179679bead9a8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "679edd9ffc63b7ccaf6467180ba36983",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f02ad142cf490acee8840ad1a24076a4",
".git/logs/refs/heads/main": "f02ad142cf490acee8840ad1a24076a4",
".git/logs/refs/remotes/origin/main": "bd674b1e80284dee3de59ada7eb32a2b",
".git/objects/00/11cfdb0583d0b2b4a5a9ce9345a94556e7fedd": "d249ddc7bdb9db246ac1a7cc9dce4e34",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/07/a9cbe4fc90a472dc628a2532203b93c93fa255": "4ced94a51a8bb1c0a062b19b31b1aa35",
".git/objects/0a/24e4353e453b0162d8556eb29bfa0f4acca16e": "e8ca6051d0af0b324801165f5df5aa71",
".git/objects/11/dc37e25a422ffc94d8e332b13e85490c71cf42": "2b9f7afbf8375e2d45a9b161dea110f0",
".git/objects/12/6c43b8820d8cc99ae75554872885d12a4ac72e": "6b0023eda893a8216a14cdf20bee6a17",
".git/objects/12/fea4985bf67ddc01ef4c654e3b38ba6bae7a2c": "34d661b01722231f7846e6208f3460cd",
".git/objects/15/32fd291ea7f665c2af10c3a7806133950fcd50": "b3b6197a7ae5b383cad93baf81e4511c",
".git/objects/18/6dd706d0e3a359bda6987b0555ec1f8b6aa0eb": "97e0536a7068a6a0636ef51cab877218",
".git/objects/1c/18833a858410ac67344084ce02a1aa3b8e9aec": "8d3df2fd9dfdfb87dec7f6d62885e06c",
".git/objects/21/40991ab6e1884cd5beda9bc7b672d36f408dc9": "4c2e90f1d1ed857b61c707e591671564",
".git/objects/21/7cdfa3608fdb730ebf7893e275de4ed0fdc0a7": "b6fa6ba1fa7d52a483101c51750c26a9",
".git/objects/24/cdbb136d74ee85b34b4ddae97c0354572fa70c": "11bcb5ffe8abdb1f677c38a1d4a5703a",
".git/objects/27/f07f20f30daa10c80eafdd633c08081f502cb8": "150c0138e9203fa5b6eca33a86dc1caa",
".git/objects/28/e2a69968f89aae4ae329cfcfcdf6fc7c68ab00": "053901148cd28ce6de78e29cce06dc15",
".git/objects/30/183f2799616422867f57180a55fd4e3a0aa406": "9885fb1e41e0d9fdc1ff3135187acc92",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3f/d2a7a6757f80fc21aafe4ec375f1e8e8961806": "2176af943d53b957c6946e9ad207b572",
".git/objects/45/473d64dbcf3dd6fcbd73f2b791c04b4921902e": "e8f728915ccf42c025d4fa2d42b063aa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/55/d271969a6c72f8853b69c611cfb604a79a8c3b": "0b2aada10248c2d03b41f0cbb728fe12",
".git/objects/57/c19c24ca3f4518dfb16c7cdb0709ac4268b943": "960e5105a6f0032e7ae7ae70dcb24fe1",
".git/objects/63/003b1d90d479a2dad4e9ec3628292ea9bb74a6": "04776ff1df39d6596f9ffe9ebbda01b1",
".git/objects/68/1ec4148b4ea6303993771a450bdd3c88a90e03": "024b9bfe1884fcd8d57a52a1dccab71b",
".git/objects/68/a7932bdeac53cb73c9a88f7f6c43889188692f": "9533b15edb45e617017f16cae58022b0",
".git/objects/75/cd5b4ca83e74b99c74780ffba1200f871b104d": "4c34b6eb55618342f00789d107d85990",
".git/objects/78/84d1ba66430f0660febb35090c5897ffc7b633": "eecba8cd0e764ae3b8b4df9c460ca486",
".git/objects/7b/5487f141111227510883fdfa5438afdd08f9d4": "a3d3b6aaa21651873f863c52ee7a83be",
".git/objects/7c/d3b89da44d10cb63bf99c572a2dd47663c596e": "b4e71673f334ae1f4be41c5a54146931",
".git/objects/7c/eb45078bab4dc5ee634b8e542e678f9e1d6466": "61a0982d429e34dbc535a79375f55272",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/b8374c6fe2eba82e9d234ea25f9fa06dced409": "2fa28c10179f4e1f8d81ffb8d06265fe",
".git/objects/8d/1e03997dfd35fc0a7c1b4efb55039fe1893bd4": "b9fc10dbe4d106cf0c6702a2b2e7d635",
".git/objects/8d/e873bb229841224e829411fe40781b4ec66043": "bf1ce50f9cb0f9695b47678e56d99612",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/aa/57196c0d1f5480491879b2189f2f69ac900c02": "587293d4efd832c76047cf933b49583c",
".git/objects/ad/ca5cfcf05aff7dcbd1320f0597c64bbf7650b3": "3ace9955464bec72035356ec18685939",
".git/objects/ba/277ad6db0aa89d76da40049276ea8368c56198": "0d538d4c990c00909b592653c43f48fa",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/2ad173fec1d256ced7471663244f86db1dd9ae": "f2d86c9846b90d68cafbef81b6edbe85",
".git/objects/c2/acc1723825e47559be961e8b662269498c0425": "cb0c066adc6e29068ca0d6155c7ef012",
".git/objects/c4/d3fca3b48072954dfaa99769affaa2e205d3a9": "c0113dc3daaaf45fc5686951b58fe647",
".git/objects/c5/54d14fed4e773a78037e8220d930448581d3b5": "2a6742dc469485b0b8435364d9a04b7a",
".git/objects/c5/56f5da7bfcf2b141601b39474ee25ac2480013": "5c6257c8f29bc0f3a7a31d8626541fb1",
".git/objects/c9/c53206239078434237ad503b41a387ddeddd5a": "f5eaa88d8e16b3aa4aff28429e0674d8",
".git/objects/d1/aeb274dd1c726ad7a164ddd2dd5912d6c3d54e": "da84760b55b39d23a7731fb376604d10",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/b8b514a8c7721992b872f4dbe60cd5d082249d": "db8937d433928dac578e958f59eda2eb",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/69e6f2e6f0b9895c8fba47cfeac441f16a6e76": "1ad2c831df1d32f7d7938ba637485085",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/757976b6c5017a4a3b6443a7db716982a26a91": "9fa5bae09482c1c3f11cc0e760e4e051",
".git/objects/eb/82f96f555cc829d740b866ccea6e4f76cfe5f7": "eca677560962b4e6c68fab4f48319a2d",
".git/objects/eb/876596ef680e9ab0c5059ece8ae249e8796430": "a547ce3815ce3a66dc5b10584cc256db",
".git/objects/ee/9727db0fd72bc0ec60a5855c09cd7c7b9171b7": "2a777e8f833a4b8bf9826d20b9159a0b",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "42db181ff97b3b8eaa8fed9fd8e01da2",
".git/refs/remotes/origin/main": "42db181ff97b3b8eaa8fed9fd8e01da2",
"assets/AssetManifest.bin": "a993d923c4a7fb8c170efee888216296",
"assets/AssetManifest.json": "3c50ddc5917a53724f1def1963963437",
"assets/assets/facebookLogo.png": "4073836f2fdb4bcd7ec76a1ff2f08886",
"assets/assets/googleLogo.png": "1e01fe36388e7453ab926c23b190827c",
"assets/assets/icon-512.png": "54f02d068a68659477a74821402c753c",
"assets/assets/MS_Dark.png": "8faea41284b91797486b2e932f710e16",
"assets/assets/MS_Light.png": "31dd3ddf23b756066dfb7432c93b4d26",
"assets/assets/SHER_logo.png": "8f03acac52621a9db169d739fc444015",
"assets/assets/SHER_ROUND.png": "c884290bedcd7b5dda8d8ecd974f80e5",
"assets/assets/socialMedia/facebook.png": "b68ce92011db542740ae37a77bdf4988",
"assets/assets/socialMedia/Instagram.png": "cfaf4397964554a5e28e4c3416e66233",
"assets/assets/socialMedia/Linkdin.png": "fa32807d6f1bfb53da3c4db62dc8e44d",
"assets/assets/socialMedia/twitter.png": "9a3a06f78cc0a8d79fce59e2de6da146",
"assets/assets/socialMedia/Youtube.png": "c411682ae9f3688a1c662f45bf9a685a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dc01ac81b49a1ca0812fa2b9ab99a085",
"assets/NOTICES": "0d40f244d88191366ae401150cb7f3da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "959c01f24bf14021127bb1948c958e01",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "54fa87745e5e474a6bc98ad9d349f26e",
"icons/Icon-512.png": "533f0b7e90a284d8acbc054252ca8729",
"icons/Icon-maskable-192.png": "54fa87745e5e474a6bc98ad9d349f26e",
"icons/Icon-maskable-512.png": "533f0b7e90a284d8acbc054252ca8729",
"index.html": "2846b17dd78c7ca1c99521e525b333d7",
"/": "2846b17dd78c7ca1c99521e525b333d7",
"main.dart.js": "0a810e6270c5c624c9d7123df81f5def",
"manifest.json": "394bf23141dbe0cda67c3581d0bb1383",
"version.json": "7e42dc36fb5aa20bad84c1954784ffee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
