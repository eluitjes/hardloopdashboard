const CACHE = 'hardloop-v5-3-1-safearea';
const ASSETS = ['./manifest.webmanifest','./icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];
const SAFE_STYLE = `<style id="ios-safe-area-fix">
:root{--safe-top:env(safe-area-inset-top,0px);--safe-bottom:env(safe-area-inset-bottom,0px)}
html,body{background:#07111f!important}
html{min-height:calc(100% + var(--safe-top))}
@media(max-width:700px){
 header{padding-top:calc(var(--safe-top) + 10px)!important;background:#07111f!important;position:relative!important;z-index:20!important}
 header .title,header h1,header .eyebrow{position:relative!important;z-index:21!important;opacity:1!important;text-shadow:none!important;filter:none!important}
 header h1{color:#f6f8fc!important}
 header .eyebrow{color:#65d1aa!important}
 main{padding-top:8px!important}
 .mobile-nav{padding-bottom:calc(6px + var(--safe-bottom))!important}
}
</style>`;
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request, {cache:'no-store'}).then(async response => {
      let html = await response.text();
      html = html.replace('</head>', SAFE_STYLE + '</head>');
      return new Response(html, {status:response.status, statusText:response.statusText, headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'}});
    }).catch(() => caches.match('./index.html')));
    return;
  }
  if (event.request.method === 'GET') event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
