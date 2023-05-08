/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.48"

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
   "/img/m04sesion/sesiondistribucion.drawio.svg",
   "/img/m04sesion/sesionentity.drawio.svg",
   "/img/m05iot/entidades_iot.drawio.svg",
   "/img/m05iot/iotdistribucion.drawio.svg",
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
   "/img/m10push/pushdistribucion.drawio.svg",
   "/img/m10push/pushentity.drawio.svg",
   "/img/m11sincro/sincrodistribucion.drawio.svg",
   "/img/m11sincro/sincroentity.drawio.svg",
   "/",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01software.html",
   "/m02vistas/",
   "/m02vistas/index.html",
   "/m02vistas/mAreferencias.html",
   "/m02vistas/mBformulario.html",
   "/m02vistas/mCaamaterial.html",
   "/m02vistas/mCapp.html",
   "/m02vistas/mDcampos.html",
   "/m02vistas/mDselect.html",
   "/m02vistas/mEbotones.html",
   "/m02vistas/mFinterruptores.html",
   "/m02vistas/mGiconos.html",
   "/m02vistas/mHANav.html",
   "/m02vistas/mHnavegacion.html",
   "/m02vistas/mIAacceso.html",
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
   "/m04pwaBasica/mFmuestraErrorJs.html",
   "/m04pwaBasica/mGregSwJs.html",
   "/m04pwaBasica/mHconfigJs.html",
   "/m04pwaBasica/mIindexHtml.html",
   "/m04pwaBasica/mJestilosCss.html",
   "/m04pwaBasica/mKicono2048png.html",
   "/m04pwaBasica/mLfaviconIco.html",
   "/m04pwaBasica/mMmaskable_iconPng.html",
   "/m04pwaBasica/mNmaskable_icon_x48png.html",
   "/m04pwaBasica/mOmaskable_icon_x72png.html",
   "/m04pwaBasica/mPmaskable_icon_x96png.html",
   "/m04pwaBasica/mQmaskable_icon_x128png.html",
   "/m04pwaBasica/mRmaskable_icon_x192png.html",
   "/m04pwaBasica/mSmaskable_icon_x384png.html",
   "/m04pwaBasica/mTmaskable_icon_x512png.html",
   "/m04pwaBasica/mUresumen.html",
   "/m04pwaBasica/print.html",
   "/m05pwaMaterial/",
   "/m05pwaMaterial/index.html",
   "/m05pwaMaterial/m01instrucciones.html",
   "/m05pwaMaterial/m02archivos.html",
   "/m05pwaMaterial/m03indexHtml.html",
   "/m05pwaMaterial/m04recomiendaJs.html",
   "/m05pwaMaterial/m05mi-navJs.html",
   "/m05pwaMaterial/m06configJs.html",
   "/m05pwaMaterial/m07ayudaHtml.html",
   "/m05pwaMaterial/m08siteWebmanifest.html",
   "/m05pwaMaterial/m09swJs.html",
   "/m05pwaMaterial/m10estilosCss.html",
   "/m05pwaMaterial/m11iconos.html",
   "/m05pwaMaterial/m12icono2048png.html",
   "/m05pwaMaterial/m13faviconIco.html",
   "/m05pwaMaterial/m14maskable_iconPng.html",
   "/m05pwaMaterial/m15maskable_icon_x48png.html",
   "/m05pwaMaterial/m16maskable_icon_x72png.html",
   "/m05pwaMaterial/m17maskable_icon_x96png.html",
   "/m05pwaMaterial/m18maskable_icon_x128png.html",
   "/m05pwaMaterial/m19maskable_icon_x192png.html",
   "/m05pwaMaterial/m20maskable_icon_x384png.html",
   "/m05pwaMaterial/m21maskable_icon_x512png.html",
   "/m05pwaMaterial/m22frecuentes.html",
   "/m05pwaMaterial/m23jsconfigJson.html",
   "/m05pwaMaterial/m24cardsCss.html",
   "/m05pwaMaterial/m24filledCss.html",
   "/m05pwaMaterial/m24iconCss.html",
   "/m05pwaMaterial/m24listCss.html",
   "/m05pwaMaterial/m24outlineCss.html",
   "/m05pwaMaterial/m24segmentedCss.html",
   "/m05pwaMaterial/m25md3Css.html",
   "/m05pwaMaterial/m26navBarCss.html",
   "/m05pwaMaterial/m26navDrwCss.html",
   "/m05pwaMaterial/m27material-symbols-outlinedCss.html",
   "/m05pwaMaterial/m28navTabCss.html",
   "/m05pwaMaterial/m29robotoCss.html",
   "/m05pwaMaterial/m30MaterialSymbolsOutlinedCodepoints.html",
   "/m05pwaMaterial/m31MaterialSymbolsOutlinedTtf.html",
   "/m05pwaMaterial/m31MaterialSymbolsOutlinedWoff2.html",
   "/m05pwaMaterial/m32robotoV30LatinRegularWoff.html",
   "/m05pwaMaterial/m33robotoV30LatinRegularWoff2.html",
   "/m05pwaMaterial/m34center-aligned-top-app-barJs.html",
   "/m05pwaMaterial/m34menu-optionJs.html",
   "/m05pwaMaterial/m34overflow-menuJs.html",
   "/m05pwaMaterial/m34select-menuJs.html",
   "/m05pwaMaterial/m34text-fieldJs.html",
   "/m05pwaMaterial/m35top-app-barJs.html",
   "/m05pwaMaterial/m35txtObligatorioJs.html",
   "/m05pwaMaterial/m37constantesJs.html",
   "/m05pwaMaterial/m37getAttributeJs.html",
   "/m05pwaMaterial/m37md3Js.html",
   "/m05pwaMaterial/m37msgJs.html",
   "/m05pwaMaterial/m37setBooleanAttributeJs.html",
   "/m05pwaMaterial/m38muestraErrorJs.html",
   "/m05pwaMaterial/m39regSwJs.html",
   "/m05pwaMaterial/m40resumen.html",
   "/m05pwaMaterial/print.html",
   "/m06sesion/",
   "/m06sesion/index.html",
   "/m06sesion/mAbd.html",
   "/m06sesion/mAdeployment.html",
   "/m06sesion/mAinstrucciones.html",
   "/m06sesion/mBarchivos.html",
   "/m06sesion/mCatxtPruebaHumanoJs.html",
   "/m06sesion/mCtextos.html",
   "/m06sesion/mDtxtDatosIncorrectosPhp.html",
   "/m06sesion/mEtxtFaltaElCuePhp.html",
   "/m06sesion/mFtxtFaltaElMatchPhp.html",
   "/m06sesion/mGbd.html",
   "/m06sesion/mHUsuarioPhp.html",
   "/m06sesion/mIbdCreaPhp.html",
   "/m06sesion/mJAccesoBdPhp.html",
   "/m06sesion/mKusuarioBuscaPhp.html",
   "/m06sesion/mLusuarioAgregaPhp.html",
   "/m06sesion/mMfuncionalidad.html",
   "/m06sesion/mNusuarioVerificaPhp.html",
   "/m06sesion/mOSrvLoginPhp.html",
   "/m06sesion/mPSrvSesionPhp.html",
   "/m06sesion/mQSrvLogoutPhp.html",
   "/m06sesion/mRindexHtml.html",
   "/m06sesion/mTfrecuentes.html",
   "/m06sesion/mUjsconfigJson.html",
   "/m06sesion/mVejecutaJs.html",
   "/m06sesion/mWmuestraErrorJs.html",
   "/m06sesion/mXMethodJs.html",
   "/m06sesion/mXsubmitJs.html",
   "/m06sesion/mYleeValorPhp.html",
   "/m06sesion/mZaServicioPhp.html",
   "/m06sesion/mZbresumen.html",
   "/m06sesion/print.html",
   "/m07iot/",
   "/m07iot/index.html",
   "/m07iot/mCer.html",
   "/m07iot/mDrel.html",
   "/m07iot/mEdeploy.html",
   "/m07iot/mEinstrucciones.html",
   "/m07iot/mFphpws.html",
   "/m07iot/mGarchivos.html",
   "/m07iot/mHtextos.html",
   "/m07iot/mItxtFaltaElIdPhp.html",
   "/m07iot/mJtxtFaltaElValorPhp.html",
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
   "/m09notificaciones.html",
   "/m10push/",
   "/m10push/index.html",
   "/m10push/m01aer.html",
   "/m10push/m01bdeploy.html",
   "/m10push/m01instrucciones.html",
   "/m10push/m02archivos.html",
   "/m10push/m02btextos.html",
   "/m10push/m02ctxtNoNotsJs.html",
   "/m10push/m02dtxtNoPushJs.html",
   "/m10push/m02etxtNoSwJs.html",
   "/m10push/m02ftxtNotsBloqsJs.html",
   "/m10push/m02gtxtRegistradoJs.html",
   "/m10push/m03bd.html",
   "/m10push/m04SuscripcionPhp.html",
   "/m10push/m05bdCreaPhp.html",
   "/m10push/m06AccesoBdPhp.html",
   "/m10push/m07suscripcionAgregaPhp.html",
   "/m10push/m08suscripcionBuscaPhp.html",
   "/m10push/m09suscripcionConsultaPhp.html",
   "/m10push/m10suscripcionEliminaPhp.html",
   "/m10push/m11suscripcionModificaPhp.html",
   "/m10push/m12funcionalidad.html",
   "/m10push/m13SrvSuscripcionPhp.html",
   "/m10push/m14generallavesPhp.html",
   "/m10push/m14SrvNotificaPhp.html",
   "/m10push/m15indexHtml.html",
   "/m10push/m19swJs.html",
   "/m10push/m20frecuentes.html",
   "/m10push/m21jsconfigJson.html",
   "/m10push/m22activaNotificacionesJs.html",
   "/m10push/m23detectaJs.html",
   "/m10push/m24ejecutaJs.html",
   "/m10push/m24enviaJsonJs.html",
   "/m10push/m25getSuscripcionDtoJs.html",
   "/m10push/m25getSuscripcionJs.html",
   "/m10push/m26Method.html",
   "/m10push/m27muestraErrorJs.html",
   "/m10push/m28submitJs.html",
   "/m10push/m29urlBase64ToUint8ArrayJs.html",
   "/m10push/m30copiaCamposPhp.html",
   "/m10push/m31leeJsonPhp.html",
   "/m10push/m32ServicioPhp.html",
   "/m10push/print.html",
   "/m11sincronizacion/",
   "/m11sincronizacion/index.html",
   "/m11sincronizacion/m01aer.html",
   "/m11sincronizacion/m01bdeploy.html",
   "/m11sincronizacion/m01instrucciones.html",
   "/m11sincronizacion/m02archivos.html",
   "/m11sincronizacion/m03Atextos.html",
   "/m11sincronizacion/m03BtxtConfirmaEliminacionJs.html",
   "/m11sincronizacion/m03servidor.html",
   "/m11sincronizacion/m04PasatiempoPhp.html",
   "/m11sincronizacion/m05SrvSincroPhp.html",
   "/m11sincronizacion/m06bdCreaPhp.html",
   "/m11sincronizacion/m07AccesoBdPhp.html",
   "/m11sincronizacion/m08pasatiempoAgregaPhp.html",
   "/m11sincronizacion/m09pasatiempoBuscaPhp.html",
   "/m11sincronizacion/m10pasatiempoConsultaPhp.html",
   "/m11sincronizacion/m11pasatiempoModificaPhp.html",
   "/m11sincronizacion/m12bdCli.html",
   "/m11sincronizacion/m13connJs.html",
   "/m11sincronizacion/m14pasatiempoAgregaJs.html",
   "/m11sincronizacion/m15pasatiempoBuscaJs.html",
   "/m11sincronizacion/m16pasatiempoConsultaJs.html",
   "/m11sincronizacion/m17pasatiempoConsultaTodosJs.html",
   "/m11sincronizacion/m18pasatiempoEliminaJs.html",
   "/m11sincronizacion/m19pasatiempoModificaJs.html",
   "/m11sincronizacion/m20reemplazaJs.html",
   "/m11sincronizacion/m21funcionalidad.html",
   "/m11sincronizacion/m22indexHtml.html",
   "/m11sincronizacion/m24agregaHtml.html",
   "/m11sincronizacion/m26modificaHtml.html",
   "/m11sincronizacion/m28frecuentes.html",
   "/m11sincronizacion/m29jsconfigJson.html",
   "/m11sincronizacion/m30codJs.html",
   "/m11sincronizacion/m31ejecutaJs.html",
   "/m11sincronizacion/m31enviaJsonJs.html",
   "/m11sincronizacion/m32idbExecuteJs.html",
   "/m11sincronizacion/m33Method.html",
   "/m11sincronizacion/m34muestraErrorJs.html",
   "/m11sincronizacion/m35idbQueryJs.html",
   "/m11sincronizacion/m36leeJsonPhp.html",
   "/m11sincronizacion/m37ServicioPhp.html",
   "/m11sincronizacion/m38configJs.html",
   "/m11sincronizacion/m39regSwJs.html",
   "/m11sincronizacion/m41swJs.html",
   "/m11sincronizacion/m53listaCss.html",
   "/m11sincronizacion/print.html",
   "/m12pruebas/",
   "/m12pruebas/index.html",
   "/m12pruebas/m01lighthouse.html",
   "/m12pruebas/m02phpunit/",
   "/m12pruebas/m02phpunit/index.html",
   "/m12pruebas/m02phpunit/m01instrucciones.html",
   "/m12pruebas/m02phpunit/m02archivos.html",
   "/m12pruebas/m02phpunit/m03recomiendaPhp.html",
   "/m12pruebas/m02phpunit/m04RecomiendaTestPhp.html",
   "/m12pruebas/m02phpunit/m05salida.html",
   "/m12pruebas/m02phpunit/print.html",
   "/m12pruebas/m03jest/",
   "/m12pruebas/m03jest/index.html",
   "/m12pruebas/m03jest/m01instrucciones.html",
   "/m12pruebas/m03jest/m02archivos.html",
   "/m12pruebas/m03jest/m03recomiendaJs.html",
   "/m12pruebas/m03jest/m04RecomiendaTestJs.html",
   "/m12pruebas/m03jest/m05salida.html",
   "/m12pruebas/m03jest/print.html",
   "/m12pruebas/m04selenium.html",
   "/m12pruebas/print.html",
   "/print.html",
   "/site.webmanifest",
   "/src/m01notificaciones/",
   "/src/m01notificaciones/index.html",
   "/src/m02push/composer.zip",
   "/src/m02push/push.zip",
   "/src/m03vistas/Aformulario.html",
   "/src/m03vistas/Bapp.html",
   "/src/m03vistas/Ccampos.html",
   "/src/m03vistas/Cselect.html",
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
   "/src/m04pruebas/composer.zip",
   "/src/m05pwaBasica/pwa.zip",
   "/src/m05pwaMaterial/MaterialIcons-Regular.codepoints",
   "/src/m05pwaMaterial/MaterialIcons-Regular.ttf",
   "/src/m05pwaMaterial/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].codepoints",
   "/src/m05pwaMaterial/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].ttf",
   "/src/m05pwaMaterial/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].woff2",
   "/src/m05pwaMaterial/pwamd.zip",
   "/src/m05pwaMaterial/roboto-v30-latin-regular.woff",
   "/src/m05pwaMaterial/roboto-v30-latin-regular.woff2",
   "/src/m06sesion/phpauth.zip",
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