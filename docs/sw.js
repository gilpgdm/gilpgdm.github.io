/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.18"

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
   "/img/m03vistas/pexels-pixabay-208745.jpg",
   "/img/m03vistas/switch_android.png",
   "/img/m03vistas/switch_ios.png",
   "/img/m04sesion/aut_componentes.svg",
   "/img/m04sesion/aut_despliegue.svg",
   "/img/m04sesion/aut_entidades.svg",
   "/img/m05iot/casos_iot.svg",
   "/img/m05iot/despliegue_iot.svg",
   "/img/m05iot/entidades_iot.drawio.svg",
   "/img/m05iot/entidades_iot.svg",
   "/img/m05iot/nosql_iot.svg",
   "/img/m05iot/sql_iot.drawio.svg",
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
   "/img/m05pwaMaterial/favicon.ico",
   "/img/m05pwaMaterial/icono2048.png",
   "/img/m05pwaMaterial/maskable_icon.png",
   "/img/m05pwaMaterial/maskable_icon_x128.png",
   "/img/m05pwaMaterial/maskable_icon_x192.png",
   "/img/m05pwaMaterial/maskable_icon_x384.png",
   "/img/m05pwaMaterial/maskable_icon_x48.png",
   "/img/m05pwaMaterial/maskable_icon_x512.png",
   "/img/m05pwaMaterial/maskable_icon_x72.png",
   "/img/m05pwaMaterial/maskable_icon_x96.png",
   "/img/m06esp8266/dispositivo.gif",
   "/img/m06esp8266/Video-Blink.gif",
   "/img/m06esp8266/Video-Button.gif",
   "/",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01software.html",
   "/m02vistas/",
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
   "/m02vistas/mKlistas.html",
   "/m02vistas/mLcards.html",
   "/m02vistas/mMhamburguesa.html",
   "/m02vistas/mNnavTab.html",
   "/m02vistas/mOextension.html",
   "/m02vistas/mPresumen.html",
   "/m02vistas/print.html",
   "/m03pwa/",
   "/m03pwa/index.html",
   "/m03pwa/mApwa.html",
   "/m03pwa/mBrequerimientos.html",
   "/m03pwa/mCnavegadores.html",
   "/m03pwa/mDdesarrollo.html",
   "/m03pwa/mEresumen.html",
   "/m03pwa/print.html",
   "/m04pwaBasica/",
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
   "/m05pwaMaterial/",
   "/m05pwaMaterial/index.html",
   "/m05pwaMaterial/m01instrucciones.html",
   "/m05pwaMaterial/m02archivos.html",
   "/m05pwaMaterial/m03indexHtml.html",
   "/m05pwaMaterial/m04recomiendaJs.html",
   "/m05pwaMaterial/m05nav-tabsJs.html",
   "/m05pwaMaterial/m06configJs.html",
   "/m05pwaMaterial/m07ayudaHtml.html",
   "/m05pwaMaterial/m08siteWebmanifest.html",
   "/m05pwaMaterial/m09swJs.html",
   "/m05pwaMaterial/m10estilosCss.html",
   "/m05pwaMaterial/m11iconos.html",
   "/m05pwaMaterial/m12faviconIco.html",
   "/m05pwaMaterial/m13icono2048png.html",
   "/m05pwaMaterial/m14maskable_icon_x48png.html",
   "/m05pwaMaterial/m15maskable_icon_x72png.html",
   "/m05pwaMaterial/m16maskable_icon_x96png.html",
   "/m05pwaMaterial/m17maskable_icon_x128png.html",
   "/m05pwaMaterial/m18maskable_icon_x192png.html",
   "/m05pwaMaterial/m19maskable_icon_x384png.html",
   "/m05pwaMaterial/m20maskable_icon_x512png.html",
   "/m05pwaMaterial/m21maskable_iconPng.html",
   "/m05pwaMaterial/m22frecuentes.html",
   "/m05pwaMaterial/m23jsconfigJson.html",
   "/m05pwaMaterial/m24botonesCss.html",
   "/m05pwaMaterial/m25cm-dinCss.html",
   "/m05pwaMaterial/m26cn-app-barCss.html",
   "/m05pwaMaterial/m27material-iconsCss.html",
   "/m05pwaMaterial/m28nav-tabsCss.html",
   "/m05pwaMaterial/m29robotoCss.html",
   "/m05pwaMaterial/m30MaterialIcons-RegularCodepoints.html",
   "/m05pwaMaterial/m31MaterialIconsRegularTtf.html",
   "/m05pwaMaterial/m32robotoV29LatinRegularWoff.html",
   "/m05pwaMaterial/m33robotoV29LatinRegularWoff2.html",
   "/m05pwaMaterial/m34cm-dinJs.html",
   "/m05pwaMaterial/m35cn-app-bar.html",
   "/m05pwaMaterial/m36detectaJs.html",
   "/m05pwaMaterial/m37msgJs.html",
   "/m05pwaMaterial/m38regSwJs.html",
   "/m05pwaMaterial/m39resumen.html",
   "/m05pwaMaterial/print.html",
   "/m06sesion/",
   "/m06sesion/index.html",
   "/m06sesion/mAinstrucciones.html",
   "/m06sesion/mBarchivos.html",
   "/m06sesion/mCmensajes.html",
   "/m06sesion/mDmsgFaltaElCuePhp.html",
   "/m06sesion/mEmsgFaltaElMatchPhp.html",
   "/m06sesion/mFbd.html",
   "/m06sesion/mGUsuarioPhp.html",
   "/m06sesion/mHbdCreaPhp.html",
   "/m06sesion/mIAccesoBdPhp.html",
   "/m06sesion/mJusuarioBuscaPhp.html",
   "/m06sesion/mKusuarioAgregaPhp.html",
   "/m06sesion/mLfuncionalidad.html",
   "/m06sesion/mMusuarioVerificaPhp.html",
   "/m06sesion/mNSrvLoginPhp.html",
   "/m06sesion/mOSrvSesionPhp.html",
   "/m06sesion/mPSrvLogoutPhp.html",
   "/m06sesion/mQindexHtml.html",
   "/m06sesion/mRsesionJs.html",
   "/m06sesion/mSfrecuentes.html",
   "/m06sesion/mTjsconfigJson.html",
   "/m06sesion/mUejecutaJs.html",
   "/m06sesion/mVmuestraErrorJs.html",
   "/m06sesion/mWsubmitJs.html",
   "/m06sesion/mXleeValorPhp.html",
   "/m06sesion/mYServicioPhp.html",
   "/m06sesion/mZresumen.html",
   "/m06sesion/print.html",
   "/m07iot/",
   "/m07iot/index.html",
   "/m07iot/mCer.html",
   "/m07iot/mDrel.html",
   "/m07iot/mEinstrucciones.html",
   "/m07iot/mFphpws.html",
   "/m07iot/mGarchivos.html",
   "/m07iot/mHmensajes.html",
   "/m07iot/mImsgFaltaElIdPhp.html",
   "/m07iot/mJmsgFaltaElValorPhp.html",
   "/m07iot/mKbd.html",
   "/m07iot/mLDispositivoPhp.html",
   "/m07iot/mMbdCreaPhp.html",
   "/m07iot/mNAccesoBdPhp.html",
   "/m07iot/mOdispositivoAgregaPhp.html",
   "/m07iot/mPdispositivoBuscaPhp.html",
   "/m07iot/mQdispositivoModificaPhp.html",
   "/m07iot/mRhistoricoAgregaPhp.html",
   "/m07iot/mSfuncionalidad.html",
   "/m07iot/mTguardaPhp.html",
   "/m07iot/mUEventosPhp.html",
   "/m07iot/mVmainPhp.html",
   "/m07iot/mWiot.html",
   "/m07iot/mXindexHtml.html",
   "/m07iot/mYresumen.html",
   "/m07iot/print.html",
   "/m08esp8266/",
   "/m08esp8266/index.html",
   "/m08esp8266/mAblink.html",
   "/m08esp8266/mBbutton.html",
   "/m08esp8266/mCdispositivo.html",
   "/m08esp8266/mDresumen.html",
   "/m08esp8266/print.html",
   "/print.html",
   "/site.webmanifest",
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
   "/src/m03vistas/Klista.html",
   "/src/m03vistas/Lcards.html",
   "/src/m03vistas/Mhamburguesa.html",
   "/src/m03vistas/NnavTab.html",
   "/src/m03vistas/Oextension.html",
   "/src/m05pwaBasica/pwa.zip",
   "/src/m05pwaMaterial/MaterialIcons-Regular.codepoints",
   "/src/m05pwaMaterial/MaterialIcons-Regular.ttf",
   "/src/m05pwaMaterial/pwamd.zip",
   "/src/m05pwaMaterial/roboto-v29-latin-regular.woff",
   "/src/m05pwaMaterial/roboto-v29-latin-regular.woff2",
   "/src/m07iot/composer.zip" ]

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