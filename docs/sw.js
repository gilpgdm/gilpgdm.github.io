/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.7"

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
   "/m02vistas/mGiconos.html",
   "/m02vistas/mHnavegacion.html",
   "/m02vistas/mIgps.html",
   "/m02vistas/mJarchivos.html",
   "/m02vistas/mKresumen.html",
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
   "/m05pwaMaterial/index.html",
   "/m05pwaMaterial/mAinstrucciones.html",
   "/m05pwaMaterial/mBarchivos.html",
   "/m05pwaMaterial/mCjsconfigJson.html",
   "/m05pwaMaterial/mDsiteWebmanifest.html",
   "/m05pwaMaterial/mEswJs.html",
   "/m05pwaMaterial/mFregSwJs.html",
   "/m05pwaMaterial/mGconfigJs.html",
   "/m05pwaMaterial/mHindexHtml.html",
   "/m05pwaMaterial/mIestilosCss.html",
   "/m05pwaMaterial/mJfaviconIco.html",
   "/m05pwaMaterial/mKicono2048png.html",
   "/m05pwaMaterial/mLmaskable_icon_x48png.html",
   "/m05pwaMaterial/mMmaskable_icon_x72png.html",
   "/m05pwaMaterial/mNmaskable_icon_x96png.html",
   "/m05pwaMaterial/mOmaskable_icon_x128png.html",
   "/m05pwaMaterial/mPmaskable_icon_x192png.html",
   "/m05pwaMaterial/mQmaskable_icon_x384png.html",
   "/m05pwaMaterial/mRmaskable_icon_x512png.html",
   "/m05pwaMaterial/mSmaskable_iconPng.html",
   "/m05pwaMaterial/mTresumen.html",
   "/m05pwaMaterial/print.html",
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
   "/src/m03vistas/13-1-lista-simple.html",
   "/src/m03vistas/13-2-lista.html",
   "/src/m03vistas/14-lista-imagen.html",
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
   "/src/m03vistas/Jiconos.html",
   "/src/m05pwaBasica/pwa.zip",
   "/src/m05pwaMaterial/pwamd.zip",
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