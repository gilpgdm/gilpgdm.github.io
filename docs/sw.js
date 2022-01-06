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
   "/img/m05pwaBasica/favicon.ico",
   "/img/m05pwaBasica/icono2048.png",
   "/img/m05pwaBasica/maskable_icon.png",
   "/img/m05pwaBasica/maskable_icon_x128.png",
   "/img/m05pwaBasica/maskable_icon_x192.png",
   "/img/m05pwaBasica/maskable_icon_x384.png",
   "/img/m05pwaBasica/maskable_icon_x48.png",
   "/img/m05pwaBasica/maskable_icon_x512.png",
   "/img/m05pwaBasica/maskable_icon_x72.png",
   "/img/m05pwaBasica/maskable_icon_x96.png",
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
   "/m04pwa/index.html",
   "/m04pwa/mApwa.html",
   "/m04pwa/mBrequerimientos.html",
   "/m04pwa/mCnavegadores.html",
   "/m04pwa/mDdesarrollo.html",
   "/m04pwa/mEresumen.html",
   "/m04pwa/print.html",
   "/m05pwaBasica/index.html",
   "/m05pwaBasica/mAinstrucciones.html",
   "/m05pwaBasica/mBarchivos.html",
   "/m05pwaBasica/mCjsconfigJson.html",
   "/m05pwaBasica/mDsiteWebmanifest.html",
   "/m05pwaBasica/mEswJs.html",
   "/m05pwaBasica/mFregSwJs.html",
   "/m05pwaBasica/mGconfigJs.html",
   "/m05pwaBasica/mHindexHtml.html",
   "/m05pwaBasica/mIestilosCss.html",
   "/m05pwaBasica/mJfaviconIco.html",
   "/m05pwaBasica/mKicono2048png.html",
   "/m05pwaBasica/mLmaskable_icon_x48png.html",
   "/m05pwaBasica/mMmaskable_icon_x72png.html",
   "/m05pwaBasica/mNmaskable_icon_x96png.html",
   "/m05pwaBasica/mOmaskable_icon_x128png.html",
   "/m05pwaBasica/mPmaskable_icon_x192png.html",
   "/m05pwaBasica/mQmaskable_icon_x384png.html",
   "/m05pwaBasica/mRmaskable_icon_x512png.html",
   "/m05pwaBasica/mSmaskable_iconPng.html",
   "/m05pwaBasica/mTresumen.html",
   "/m05pwaBasica/print.html",
   "/m06sesion/index.html",
   "/m06sesion/mAarquitectura.html",
   "/m06sesion/mBdespliegue.html",
   "/m06sesion/mCer.html",
   "/m06sesion/mDinstrucciones.html",
   "/m06sesion/mEarchivos.html",
   "/m06sesion/mFindexHtml.html",
   "/m06sesion/mGctrlSesion.html",
   "/m06sesion/mHindexJs.html",
   "/m06sesion/mIvalidaUsuario.html",
   "/m06sesion/mJresumen.html",
   "/m06sesion/print.html",
   "/m07iot/index.html",
   "/m07iot/mAcasos.html",
   "/m07iot/mBdespliegue.html",
   "/m07iot/mCer.html",
   "/m07iot/mDnoRel.html",
   "/m07iot/mEinstrucciones.html",
   "/m07iot/mFarchivos.html",
   "/m07iot/mGtipos.html",
   "/m07iot/mHcliente.html",
   "/m07iot/mIgetValor.html",
   "/m07iot/mJsetValor.html",
   "/m07iot/mKindexJs.html",
   "/m07iot/mLindexHtml.html",
   "/m07iot/mMresumen.html",
   "/m07iot/print.html",
   "/m08esp8266/index.html",
   "/m08esp8266/mAblink.html",
   "/m08esp8266/mBbutton.html",
   "/m08esp8266/mCdispositivo.html",
   "/m08esp8266/mDresumen.html",
   "/m08esp8266/print.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m03vistas/Aformulario.html",
   "/src/m03vistas/Bapp.html",
   "/src/m03vistas/Ccampos.html",
   "/src/m03vistas/Dbotones.html",
   "/src/m03vistas/Einterruptor.html",
   "/src/m03vistas/Fgps.html",
   "/src/m03vistas/Garchivos.html",
   "/src/m05pwaBasica/pwa.zip",
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