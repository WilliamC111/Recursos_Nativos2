self.addEventListener('install',event=>{

    event.waitUntil(
        caches.open('pwa-cache')
        .then(cache=>{
            return cache.addAll([
                '/',
                '/css/styles.css'
            ]);
        })
    );

});