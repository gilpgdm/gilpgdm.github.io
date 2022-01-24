/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.5"

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
   "/m02vistas/index.html",
   "/m02vistas/mAreferencias.html",
   "/m02vistas/mBformulario.html",
   "/m02vistas/mCapp.html",
   "/m02vistas/mDcampos.html",
   "/m02vistas/mEbotones.html",
   "/m02vistas/mFinterruptores.html",
   "/m02vistas/mGgps.html",
   "/m02vistas/mGnavegacion.html",
   "/m02vistas/mHarchivos.html",
   "/m02vistas/mIresumen.html",
   "/m02vistas/print.html",
   "/m03pwa/index.html",
   "/m03pwa/mApwa.html",
   "/m03pwa/mBrequerimientos.html",
   "/m03pwa/mCnavegadores.html",
   "/m03pwa/mDdesarrollo.html",
   "/m03pwa/mEresumen.html",
   "/m03pwa/print.html",
   "/m04pwaBasica/index.html",
   "/m04pwaBasica/mAinstrucciones.html",
   "/m04pwaBasica/mBarchivos.html",
   "/m04pwaBasica/mCjsconfigJson.html",
   "/m04pwaBasica/mDsiteWebmanifest.html",
   "/m04pwaBasica/mEswJs.html",
   "/m04pwaBasica/mFregSwJs.html",
   "/m04pwaBasica/mGconfigJs.html",
   "/m04pwaBasica/mHindexHtml.html",
   "/m04pwaBasica/mIestilosCss.html",
   "/m04pwaBasica/mJfaviconIco.html",
   "/m04pwaBasica/mKicono2048png.html",
   "/m04pwaBasica/mLmaskable_icon_x48png.html",
   "/m04pwaBasica/mMmaskable_icon_x72png.html",
   "/m04pwaBasica/mNmaskable_icon_x96png.html",
   "/m04pwaBasica/mOmaskable_icon_x128png.html",
   "/m04pwaBasica/mPmaskable_icon_x192png.html",
   "/m04pwaBasica/mQmaskable_icon_x384png.html",
   "/m04pwaBasica/mRmaskable_icon_x512png.html",
   "/m04pwaBasica/mSmaskable_iconPng.html",
   "/m04pwaBasica/mTresumen.html",
   "/m04pwaBasica/print.html",
   "/m05sesion/index.html",
   "/m05sesion/mAarquitectura.html",
   "/m05sesion/mBdespliegue.html",
   "/m05sesion/mCer.html",
   "/m05sesion/mDinstrucciones.html",
   "/m05sesion/mEarchivos.html",
   "/m05sesion/mFindexHtml.html",
   "/m05sesion/mGctrlSesion.html",
   "/m05sesion/mHindexJs.html",
   "/m05sesion/mIvalidaUsuario.html",
   "/m05sesion/mJresumen.html",
   "/m05sesion/print.html",
   "/m06iot/index.html",
   "/m06iot/mAcasos.html",
   "/m06iot/mBdespliegue.html",
   "/m06iot/mCer.html",
   "/m06iot/mDnoRel.html",
   "/m06iot/mEinstrucciones.html",
   "/m06iot/mFarchivos.html",
   "/m06iot/mGtipos.html",
   "/m06iot/mHcliente.html",
   "/m06iot/mIgetValor.html",
   "/m06iot/mJsetValor.html",
   "/m06iot/mKindexJs.html",
   "/m06iot/mLindexHtml.html",
   "/m06iot/mMresumen.html",
   "/m06iot/print.html",
   "/m07esp8266/index.html",
   "/m07esp8266/mAblink.html",
   "/m07esp8266/mBbutton.html",
   "/m07esp8266/mCdispositivo.html",
   "/m07esp8266/mDresumen.html",
   "/m07esp8266/print.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m03vistas/13-1-lista-simple.html",
   "/src/m03vistas/13-2-lista.html",
   "/src/m03vistas/14-lista-imagen.html",
   "/src/m03vistas/15-icon-set.html",
   "/src/m03vistas/17-extension.html",
   "/src/m03vistas/18-1-nav-tab.html",
   "/src/m03vistas/19-hamburguesa.html",
   "/src/m03vistas/24-formulario-2-botones.html",
   "/src/m03vistas/Aformulario.html",
   "/src/m03vistas/Bapp.html",
   "/src/m03vistas/Ccampos.html",
   "/src/m03vistas/Dbotones.html",
   "/src/m03vistas/Einterruptor.html",
   "/src/m03vistas/Fgps.html",
   "/src/m03vistas/Garchivos.html",
   "/src/m03vistas/Hnavegacion.html",
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