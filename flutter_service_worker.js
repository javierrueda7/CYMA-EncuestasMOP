'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "ec211835b5685778d5b35fcbde004fb0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b8240975f6b4c17d271fa6d45a125907",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "200ec4b35122684e69d84b99f7eb32c1",
".git/logs/refs/heads/main": "2068a123a3579297a343c49549c4fd90",
".git/logs/refs/remotes/web/main": "74ee81e81dd5d8082fba5375c5e66975",
".git/objects/01/345832df157c4d4f84dbcf8ac6b8256596de5e": "5d74e1da93f1b6da7c7df0d1478f1f0e",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/c258b4b5860e2bde30a02d4203cb20b9d263d4": "babf9830315ffaf02b839aa779f9d1ef",
".git/objects/29/96e60d27bd1a741901417d604f98f49230062b": "d570140b796f359a24fada1462c66716",
".git/objects/2e/2618d6187c2c0bb871612c764034af54c83d28": "eda6426e95b279b838bf1003f9e57477",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4d/53245fa7a96f073ec395a37c5b6af7ef1a4084": "88bf7fb4aaccde72d22a72eaf57f9210",
".git/objects/4d/d16935d447dd6a098dd0b08cae439360a81be6": "5f2d1b9ebec3e7b3216a3c7415afb984",
".git/objects/53/6f070db6dbd07668f5182297a4ba535e36d773": "84cfa1a0e2a63dd0c94168ac56776e1d",
".git/objects/53/ff4fc1e26856ad0dcc5b072f2c511d58b30a57": "377823093ff1d3236401eb6f67ef280e",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/e2d21d95103c766b7ba246379fd0c2f0e452b4": "8b09d1b7c2ddfcad75c8be13cdec6b70",
".git/objects/5e/423c65c201d93de962e6cdf9c3af7b40c89a1d": "b1ff51a25d75f894e1509e7dbe762c82",
".git/objects/64/806968019dae1c64a18ce27f50f0e2569e13a6": "c4c9b2d0891a97714f0ec207a24646e5",
".git/objects/66/e28706ccdff61dcd240df5486ec24954b8bc24": "c08ccc35096a696f122339a4c20cd8d9",
".git/objects/6a/d23c7c97d62ad792da31b427828cc4a7cee5a1": "63d0db652338825dfc7d26fe8d674d66",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/71/feb23aa191a5ba683baf1329f55e793ac2e5ef": "ac20414a2ba540a24a4f49c77faac897",
".git/objects/74/9a7da641a14c41b2a10163ffbbb7bb1030c19e": "a0bcf4fc39acb1f863a50af960381821",
".git/objects/7f/be4f4384e58c3aabaca0cabfa51de16a20f53c": "db60ca0412358a562b27c1add5e07c55",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/f09a0473db517fc1592843cf4a22f13df06437": "89230e82cd8ea0e6b09036d5cb50c374",
".git/objects/8f/ae6c29042e2f7fac9f338997d151f46a1e153f": "8f28bfcfbfd90b0a118b14fdf44589de",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/95/45a89d8968ec05cc6eeca3d4cd298af022f76d": "90c23c3ebf2475333baa899e49e7f4e4",
".git/objects/95/b85601b7e0ee98db785c00ad56327fa63f8570": "7712b349f76ed82d25c46ef0a4e90876",
".git/objects/99/bd6f72900149d0125f87eb310e45867d4f4909": "528d99fe2450a9da6dcfd31d11664896",
".git/objects/9e/6d61bf7e96d985f347e0c692664e1d43021e82": "c236e9e0c1a7c7fab6af7fff5e1c4b33",
".git/objects/ae/b73c0056a79a6331931b53f970e34bbf3ba796": "46e951731dd7e39a56f1acb78797eb20",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b1/27e7a489f8f0c94ebd90da9fff9af43aa3d4ba": "488a80c450a6856f52b4ccc16c31d3ce",
".git/objects/b1/2dcdb774137720533087f788f8e99b1d7ec519": "3b9d1c28650ae9d6a68c8c42d052b9d6",
".git/objects/b2/1a64dd66afe07207e8bd633a70659c3f8a44dd": "aa4d36126aa97424da7b4f685cfcca3b",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b6/d76515b3a068290b86db9682a9c4b1801ce7dc": "b1b6c3688d1bf57ce08ca50c7c25d8a6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/7e73cba778c3a7b35c068daa670611b2ac018d": "f97751b4ffee0cecc1eeae4e5b90dcbf",
".git/objects/b8/e7987b5ffebbb1f76e9f534d67ef507c53f14f": "4e11477a447eab0a2203131bbd46bc71",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/d7cd93bd1f6e7ef0a76859fb3935547f2859b9": "530a0981c1a10b8ad5c0295b041b7e22",
".git/objects/c3/de5a7dd7970f05b9c7e7796b9fbd863080ae59": "8a6bf0406689da4825a5c8ad0ae4de21",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/72b24a26e60e14d92c6936134d688d3ee7445a": "4f8bcca8ce5a7607e524f5b5099ff22f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c0eb64aa4d2b5a60e085881dd90915bdd0fec1": "d2f33d4548a5f3d6f16912dd2e60b695",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/a1d977ea95698b094402ef71f03890ba6f16af": "dd1ba01b68427d8fdb445f0b061dd049",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/9df90b9618239f041537139b022910780bff06": "8b18878b0d5886aff9e64263561dcf92",
".git/objects/fe/fdd667d9c99edd877676865173d7c2f3e5fadf": "31062a2a5bf9643a0527e26ec24707bc",
".git/refs/heads/main": "b2d23d2e22f29cb93cc17f762019db82",
".git/refs/remotes/web/main": "b2d23d2e22f29cb93cc17f762019db82",
"assets/AssetManifest.bin": "bda37115f2adbe8b9bd2fee8ddd7a818",
"assets/AssetManifest.bin.json": "b1cfca28e37b561acec68e5e6057d32d",
"assets/AssetManifest.json": "64d8015c826aaa62ed131e8fb99d5c55",
"assets/assets/cargos.xlsx": "0b33fb2043786b23f691d73eee0b9781",
"assets/assets/parametros.xlsx": "a231ccc2951e6917253cb3ada7a21c92",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "c89d9bf33622a44334c16aded0c3f75f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e29a557fcb7b1e28055ec233a879c743",
"/": "e29a557fcb7b1e28055ec233a879c743",
"main.dart.js": "188fbd17cc677a1f39e4c485c45f33e2",
"manifest.json": "4ec450d09bf400b815161bbba43670c8",
"README.md": "702a4eca386b008366f83ab9e16770b1",
"version.json": "816d3d59e4c330071fdde0507ec1791d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
