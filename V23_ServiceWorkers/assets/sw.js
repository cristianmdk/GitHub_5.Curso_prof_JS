const VERSION = 'v1';

self.addEventListener('install', event =>{ //self = this but for the serviceWorkers
    event.waitUntil(preCache()); //espera a que el precache se complete
})

self.addEventListener('fetch', event => {
    const request = event.request;

    // get
    if (request.method != 'GET'){
        return;
    }

    //buscar en cache
    event.respondWith(cacheResponse())

    // update cache
    event.waitUntil(updateCache(request));
})

async function preCache (){
    const cache = await caches.open("v1") //hay que abrir un cache en especifico, await because it will return a promise
    return cache.addAll([ //lista de pre recursos
        '/', //las páginas tambien se solicitan como diagonal
        '/index.html',
        '/assets/index.js',
        '/assets/MediaPlayer.js',
        '/assets/plugins/AutoPlay.js',
        '/assets/plugins/AutoPause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4'
    ])
}

//el proximo paso es cuando ocurra una peticion podremos ir a cache y ver si ocurre una respuesta

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}

