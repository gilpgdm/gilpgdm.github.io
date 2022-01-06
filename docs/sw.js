/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.2"

const ARCHIVOS = [
  "/favicon.ico",
   "/img/icono/160x30.png",
   "/img/icono/160x30.webp",
   "/img/icono/80x15.png",
   "/img/icono/icono1024.png",
   "/img/icono/icono2048.png",
   "/img/icono/icono256.png",
   "/img/icono/maskable_icon.png",
   "/img/icono/maskable_icon_x128.png",
   "/img/icono/maskable_icon_x192.png",
   "/img/icono/maskable_icon_x384.png",
   "/img/icono/maskable_icon_x48.png",
   "/img/icono/maskable_icon_x512.png",
   "/img/icono/maskable_icon_x72.png",
   "/img/icono/maskable_icon_x96.png",
   "/img/m03vistas/switch_android.png",
   "/img/m03vistas/switch_ios.png",
   "/img/m04sesion/aut_componentes.svg",
   "/img/m04sesion/aut_despliegue.svg",
   "/img/m04sesion/aut_entidades.svg",
   "/img/m05iot/casos_iot.svg",
   "/img/m05iot/despliegue_iot.svg",
   "/img/m05iot/entidades_iot.svg",
   "/img/m05iot/nosql_iot.svg",
   "/img/m06esp8266/dispositivo.gif",
   "/img/m06esp8266/Video-Blink.gif",
   "/img/m06esp8266/Video-Button.gif",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01software.html",
   "/m02multiplataforma/index.html",
   "/m02multiplataforma/mAnativa.html",
   "/m02multiplataforma/mBmultiplataforma.html",
   "/m02multiplataforma/mCdiferencias.html",
   "/m02multiplataforma/mDventajasNativas.html",
   "/m02multiplataforma/mEdesventajasNativas.html",
   "/m02multiplataforma/mFventajasMultiplataforma.html",
   "/m02multiplataforma/mGdesventajasMultiplataforma.html",
   "/m02multiplataforma/mHresumen.html",
   "/m02multiplataforma/print.html",
   "/m03vistas/index.html",
   "/m03vistas/mAreferencias.html",
   "/m03vistas/mBformulario.html",
   "/m03vistas/mCapp.html",
   "/m03vistas/mDcampos.html",
   "/m03vistas/mEbotones.html",
   "/m03vistas/mFinterruptores.html",
   "/m03vistas/mGgps.html",
   "/m03vistas/mHarchivos.html",
   "/m03vistas/mIresumen.html",
   "/m03vistas/print.html",
   "/m04sesion/index.html",
   "/m04sesion/mAarquitectura.html",
   "/m04sesion/mBdespliegue.html",
   "/m04sesion/mCer.html",
   "/m04sesion/mDinstrucciones.html",
   "/m04sesion/mEarchivos.html",
   "/m04sesion/mFindexHtml.html",
   "/m04sesion/mGctrlSesion.html",
   "/m04sesion/mHindexJs.html",
   "/m04sesion/mIvalidaUsuario.html",
   "/m04sesion/mJresumen.html",
   "/m04sesion/print.html",
   "/m05iot/index.html",
   "/m05iot/mAcasos.html",
   "/m05iot/mBdespliegue.html",
   "/m05iot/mCer.html",
   "/m05iot/mDnoRel.html",
   "/m05iot/mEinstrucciones.html",
   "/m05iot/mFarchivos.html",
   "/m05iot/mGtipos.html",
   "/m05iot/mHcliente.html",
   "/m05iot/mIgetValor.html",
   "/m05iot/mJsetValor.html",
   "/m05iot/mKindexJs.html",
   "/m05iot/mLindexHtml.html",
   "/m05iot/mMresumen.html",
   "/m05iot/print.html",
   "/m06esp8266/index.html",
   "/m06esp8266/mAblink.html",
   "/m06esp8266/mBbutton.html",
   "/m06esp8266/mCdispositivo.html",
   "/m06esp8266/mDresumen.html",
   "/m06esp8266/print.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m03vistas/Aformulario.html",
   "/src/m03vistas/Bapp.html",
   "/src/m03vistas/Ccampos.html",
   "/src/m03vistas/Dbotones.html",
   "/src/m03vistas/Einterruptor.html",
   "/src/m03vistas/Fgps.html",
   "/src/m03vistas/Garchivos.html",
    "/"]

if (self instanceof ServiceWorkerGlobalScope) {
 self.addEventListener("install", installListener)
 self.addEventListener("fetch", fetchListener)
 self.addEventListener("activate", () => console.log("Service Worker activo."))
}

/**
 * @param {ExtendableEvent} evt
 */
function installListener(evt) {
 console.log("Service Worker instalando.")
 evt.waitUntil(cargaCache());
}

/**
 * @param {FetchEvent} evt
 */
function fetchListener(evt) {
 if (evt.request.method === "GET") {
  evt.respondWith(usaCache(evt))
 }
}

async function cargaCache() {
 console.log("Intentando cargar cache:", CACHE)
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
 console.log("Versión:", VERSION)
}

/**
 * @param {FetchEvent} evt
 */
async function usaCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 if (response) {
  return response
 } else {
  return fetch(evt.request)
 }
}