/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const VERSION = "5.16"

const CACHE = "cache"

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
 "/img/m03pwaMaterial/Escultura_de_coyote.jpeg",
 "/img/m03pwaMaterial/favicon.ico",
 "/img/m03pwaMaterial/icono2048.png",
 "/img/m03pwaMaterial/maskable_icon.png",
 "/img/m03pwaMaterial/maskable_icon_x128.png",
 "/img/m03pwaMaterial/maskable_icon_x192.png",
 "/img/m03pwaMaterial/maskable_icon_x384.png",
 "/img/m03pwaMaterial/maskable_icon_x48.png",
 "/img/m03pwaMaterial/maskable_icon_x512.png",
 "/img/m03pwaMaterial/maskable_icon_x72.png",
 "/img/m03pwaMaterial/maskable_icon_x96.png",
 "/img/m03pwaMaterial/pexels-craig-dennis-3701822.jpg",
 "/img/m03pwaMaterial/pexels-creative-workshop-3978352.jpg",
 "/img/m03pwaMaterial/pexels-erik-karits-3732453.jpg",
 "/img/m03pwaMaterial/pexels-esteban-arango-10226903.jpg",
 "/img/m03pwaMaterial/pexels-moises-patrício-10961948.jpg",
 "/img/m03pwaMaterial/pexels-ralph-2270848.jpg",
 "/img/m03pwaMaterial/pexels-rasmus-svinding-35435.jpg",
 "/img/m03pwaMaterial/pexels-steve-397857.jpg",
 "/img/m03pwaMaterial/pexels-vadim-b-141496.jpg",
 "/img/m03pwaMaterial/screenshot_horizontal.png",
 "/img/m03pwaMaterial/screenshot_vertical.png",
 "/img/m03pwaMaterial/switch_android.png",
 "/img/m03pwaMaterial/switch_ios.png",
 "/img/m05iot/iotdistribucion.drawio.svg",
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
 "/img/m05pwaBasica/screenshot_horizontal.png",
 "/img/m05pwaBasica/screenshot_vertical.png",
 "/img/m06esp8266/dispositivo.gif",
 "/img/m06esp8266/Video-Blink.gif",
 "/img/m06esp8266/Video-Button.gif",
 "/img/m10push/pushdistribucion.drawio.svg",
 "/img/m10push/pushentity.drawio.svg",
 "/img/m11sincro/sincrodistribucion.drawio.svg",
 "/img/m11sincro/sincroentity.drawio.svg",
 "/",
 "/index.html",
 "/lib/js/muestra-codigo.js",
 "/m00instrucciones.html",
 "/m00previos.html",
 "/m01pwa/",
 "/m01pwa/index.html",
 "/m01pwa/mAintro.html",
 "/m01pwa/mApwa.html",
 "/m01pwa/mBrequerimientos.html",
 "/m01pwa/mCnavegadores.html",
 "/m01pwa/mDdesarrollo.html",
 "/m01pwa/mEresumen.html",
 "/m01pwa/print.html",
 "/m03pwaMaterial/",
 "/m03pwaMaterial/index.html",
 "/m03pwaMaterial/m-archivos-txt.html",
 "/m03pwaMaterial/m-ayuda-html.html",
 "/m03pwaMaterial/m-botones-html.html",
 "/m03pwaMaterial/m-campos-html.html",
 "/m03pwaMaterial/m-css/",
 "/m03pwaMaterial/m-css/index.html",
 "/m03pwaMaterial/m-css/m-estilos-css.html",
 "/m03pwaMaterial/m-css/m-tokens-css.html",
 "/m03pwaMaterial/m-css/print.html",
 "/m03pwaMaterial/m-favicon-ico.html",
 "/m03pwaMaterial/m-formulario-html.html",
 "/m03pwaMaterial/m-iconos-html.html",
 "/m03pwaMaterial/m-img/",
 "/m03pwaMaterial/m-img/index.html",
 "/m03pwaMaterial/m-img/m-Escultura_de_coyote-jpeg.html",
 "/m03pwaMaterial/m-img/m-icono2048-png.html",
 "/m03pwaMaterial/m-img/m-maskable_icon-png.html",
 "/m03pwaMaterial/m-img/m-maskable_icon_x128-png.html",
 "/m03pwaMaterial/m-img/m-maskable_icon_x192-png.html",
 "/m03pwaMaterial/m-img/m-maskable_icon_x384-png.html",
 "/m03pwaMaterial/m-img/m-maskable_icon_x48-png.html",
 "/m03pwaMaterial/m-img/m-maskable_icon_x512-png.html",
 "/m03pwaMaterial/m-img/m-maskable_icon_x72-png.html",
 "/m03pwaMaterial/m-img/m-maskable_icon_x96-png.html",
 "/m03pwaMaterial/m-img/m-pexels-craig-dennis-3701822-jpg.html",
 "/m03pwaMaterial/m-img/m-pexels-creative-workshop-3978352-jpg.html",
 "/m03pwaMaterial/m-img/m-pexels-erik-karits-3732453-jpg.html",
 "/m03pwaMaterial/m-img/m-pexels-esteban-arango-10226903-jpg.html",
 "/m03pwaMaterial/m-img/m-pexels-moises-patrício-10961948-jpg.html",
 "/m03pwaMaterial/m-img/m-pexels-ralph-2270848-jpg.html",
 "/m03pwaMaterial/m-img/m-pexels-rasmus-svinding-35435-jpg.html",
 "/m03pwaMaterial/m-img/m-pexels-steve-397857-jpg.html",
 "/m03pwaMaterial/m-img/m-pexels-vadim-b-141496-jpg.html",
 "/m03pwaMaterial/m-img/m-screenshot_horizontal-png.html",
 "/m03pwaMaterial/m-img/m-screenshot_vertical-png.html",
 "/m03pwaMaterial/m-img/print.html",
 "/m03pwaMaterial/m-index-html.html",
 "/m03pwaMaterial/m-instruccionesListadoSw-txt.html",
 "/m03pwaMaterial/m-interruptor-html.html",
 "/m03pwaMaterial/m-js/",
 "/m03pwaMaterial/m-js/index.html",
 "/m03pwaMaterial/m-js/m-configura-js.html",
 "/m03pwaMaterial/m-js/m-nav-bar-js.html",
 "/m03pwaMaterial/m-js/m-nav-drw-js.html",
 "/m03pwaMaterial/m-js/m-nav-tab-fixed-js.html",
 "/m03pwaMaterial/m-js/m-nav-tab-scrollable-js.html",
 "/m03pwaMaterial/m-js/print.html",
 "/m03pwaMaterial/m-jsconfig-json.html",
 "/m03pwaMaterial/m-lib/",
 "/m03pwaMaterial/m-lib/index.html",
 "/m03pwaMaterial/m-lib/m-css/",
 "/m03pwaMaterial/m-lib/m-css/index.html",
 "/m03pwaMaterial/m-lib/m-css/m-colors-module-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-elevation-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-material-symbols-outlined-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-cards-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-filled-button-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-list-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-menu-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-navigation-bar-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-outline-button-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-ripple-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-segmented-button-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-slider-field-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-standard-icon-button-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-switch-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-tab-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-md-top-app-bar-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-motion-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-roboto-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-shape-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-state-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-theme-dark-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-theme-light-css.html",
 "/m03pwaMaterial/m-lib/m-css/m-typography-css.html",
 "/m03pwaMaterial/m-lib/m-css/print.html",
 "/m03pwaMaterial/m-lib/m-fonts/",
 "/m03pwaMaterial/m-lib/m-fonts/index.html",
 "/m03pwaMaterial/m-lib/m-fonts/m-MaterialSymbolsOutlined[FILL,GRAD,opsz,wght]-codepoints.html",
 "/m03pwaMaterial/m-lib/m-fonts/m-MaterialSymbolsOutlined[FILL,GRAD,opsz,wght]-ttf.html",
 "/m03pwaMaterial/m-lib/m-fonts/m-MaterialSymbolsOutlined[FILL,GRAD,opsz,wght]-woff2.html",
 "/m03pwaMaterial/m-lib/m-fonts/m-roboto-v30-latin-regular-ttf.html",
 "/m03pwaMaterial/m-lib/m-fonts/m-roboto-v30-latin-regular-woff2.html",
 "/m03pwaMaterial/m-lib/m-fonts/print.html",
 "/m03pwaMaterial/m-lib/m-js/",
 "/m03pwaMaterial/m-lib/m-js/index.html",
 "/m03pwaMaterial/m-lib/m-js/m-abreElementoHtml-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-calculaClase-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-cierraElementoHtmo-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-const/",
 "/m03pwaMaterial/m-lib/m-js/m-const/index.html",
 "/m03pwaMaterial/m-lib/m-js/m-const/m-ES_APPLE-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-const/print.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/",
 "/m03pwaMaterial/m-lib/m-js/m-custom/index.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-filled-text-field-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-menu-button-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-options-menu-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-overflow-button-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-overflow-menu-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-select-menu-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-slider-field-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-switch-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-md-top-app-bar-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/m-MdNavigationDrawer-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-custom/print.html",
 "/m03pwaMaterial/m-lib/m-js/m-ejecutaMetodo-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-getAttribute-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-html-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-htmlentities-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-muestraError-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-muestraTextoDeAyuda-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-querySelector-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-querySelectorAll-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-registraServiceWorkerSiEsSoportado-js.html",
 "/m03pwaMaterial/m-lib/m-js/m-setBooleanAttribute-js.html",
 "/m03pwaMaterial/m-lib/m-js/print.html",
 "/m03pwaMaterial/m-lib/print.html",
 "/m03pwaMaterial/m-navbar-html.html",
 "/m03pwaMaterial/m-navtab-html.html",
 "/m03pwaMaterial/m-navTabFixed-html.html",
 "/m03pwaMaterial/m-one-line-html.html",
 "/m03pwaMaterial/m-secundaria-html.html",
 "/m03pwaMaterial/m-segmentado-html.html",
 "/m03pwaMaterial/m-select-html.html",
 "/m03pwaMaterial/m-site-webmanifest.html",
 "/m03pwaMaterial/m-slider-html.html",
 "/m03pwaMaterial/m-sw-js.html",
 "/m03pwaMaterial/m-tarjetas-html.html",
 "/m03pwaMaterial/m-three-line-html.html",
 "/m03pwaMaterial/m-two-line-html.html",
 "/m03pwaMaterial/m-ungap/",
 "/m03pwaMaterial/m-ungap/index.html",
 "/m03pwaMaterial/m-ungap/m-custom-elements-js.html",
 "/m03pwaMaterial/m-ungap/print.html",
 "/m03pwaMaterial/m01referencias.html",
 "/m03pwaMaterial/m02instrucciones.html",
 "/m03pwaMaterial/m40resumen.html",
 "/m03pwaMaterial/mAdrawer.html",
 "/m03pwaMaterial/mAintro.html",
 "/m03pwaMaterial/mArchivos.html",
 "/m03pwaMaterial/print.html",
 "/m04dispositivo/",
 "/m04dispositivo/index.html",
 "/m04dispositivo/mAgps.html",
 "/m04dispositivo/mAintro.html",
 "/m04dispositivo/mBarchivos.html",
 "/m04dispositivo/mCamara.html",
 "/m04dispositivo/mDresumen.html",
 "/m04dispositivo/print.html",
 "/m04pwaBasica/",
 "/m04pwaBasica/index.html",
 "/m04pwaBasica/m-archivos-txt.html",
 "/m04pwaBasica/m-css/",
 "/m04pwaBasica/m-css/index.html",
 "/m04pwaBasica/m-css/m-estilos-css.html",
 "/m04pwaBasica/m-css/print.html",
 "/m04pwaBasica/m-favicon-ico.html",
 "/m04pwaBasica/m-img/",
 "/m04pwaBasica/m-img/index.html",
 "/m04pwaBasica/m-img/m-icono2048-png.html",
 "/m04pwaBasica/m-img/m-maskable_icon-png.html",
 "/m04pwaBasica/m-img/m-maskable_icon_x128-png.html",
 "/m04pwaBasica/m-img/m-maskable_icon_x192-png.html",
 "/m04pwaBasica/m-img/m-maskable_icon_x384-png.html",
 "/m04pwaBasica/m-img/m-maskable_icon_x48-png.html",
 "/m04pwaBasica/m-img/m-maskable_icon_x512-png.html",
 "/m04pwaBasica/m-img/m-maskable_icon_x72-png.html",
 "/m04pwaBasica/m-img/m-maskable_icon_x96-png.html",
 "/m04pwaBasica/m-img/m-screenshot_horizontal-png.html",
 "/m04pwaBasica/m-img/m-screenshot_vertical-png.html",
 "/m04pwaBasica/m-img/print.html",
 "/m04pwaBasica/m-index-html.html",
 "/m04pwaBasica/m-instruccionesListadoSw-txt.html",
 "/m04pwaBasica/m-js/",
 "/m04pwaBasica/m-js/index.html",
 "/m04pwaBasica/m-js/m-configura-js.html",
 "/m04pwaBasica/m-js/print.html",
 "/m04pwaBasica/m-jsconfig-json.html",
 "/m04pwaBasica/m-lib/",
 "/m04pwaBasica/m-lib/index.html",
 "/m04pwaBasica/m-lib/m-js/",
 "/m04pwaBasica/m-lib/m-js/index.html",
 "/m04pwaBasica/m-lib/m-js/m-muestraError-js.html",
 "/m04pwaBasica/m-lib/m-js/m-registraServiceWorkerSiEsSoportado-js.html",
 "/m04pwaBasica/m-lib/m-js/print.html",
 "/m04pwaBasica/m-lib/print.html",
 "/m04pwaBasica/m-site-webmanifest.html",
 "/m04pwaBasica/m-sw-js.html",
 "/m04pwaBasica/mAinstrucciones.html",
 "/m04pwaBasica/mAintro.html",
 "/m04pwaBasica/mArchivos.html",
 "/m04pwaBasica/mXresumen.html",
 "/m04pwaBasica/print.html",
 "/m05iot/",
 "/m05iot/index.html",
 "/m05iot/m-index-html.html",
 "/m05iot/m-lib/",
 "/m05iot/m-lib/index.html",
 "/m05iot/m-lib/m-js/",
 "/m05iot/m-lib/m-js/index.html",
 "/m05iot/m-lib/m-js/m-conexionMqttPerdida-js.html",
 "/m05iot/m-lib/m-js/m-creaClientIdMqtt-js.html",
 "/m05iot/m-lib/m-js/m-falloEnLaConexionMqtt-js.html",
 "/m05iot/m-lib/m-js/m-muestraError-js.html",
 "/m05iot/m-lib/m-js/print.html",
 "/m05iot/m-lib/print.html",
 "/m05iot/mAintro.html",
 "/m05iot/mArchivos.html",
 "/m05iot/mCdeploy.html",
 "/m05iot/mDinstrucciones.html",
 "/m05iot/mGresumen.html",
 "/m05iot/print.html",
 "/m06esp8266/",
 "/m06esp8266/index.html",
 "/m06esp8266/m01software.html",
 "/m06esp8266/mAblink.html",
 "/m06esp8266/mAintro.html",
 "/m06esp8266/mBbutton.html",
 "/m06esp8266/mCdispositivo.html",
 "/m06esp8266/mDresumen.html",
 "/m06esp8266/print.html",
 "/m07notificaciones.html",
 "/m08push/",
 "/m08push/index.html",
 "/m08push/m--replit.html",
 "/m08push/m-composer-json.html",
 "/m08push/m-index-html.html",
 "/m08push/m-jsconfig-json.html",
 "/m08push/m-lib/",
 "/m08push/m-lib/index.html",
 "/m08push/m-lib/m-js/",
 "/m08push/m-lib/m-js/index.html",
 "/m08push/m-lib/m-js/m-activaNotificacionesPush-js.html",
 "/m08push/m-lib/m-js/m-buscaElementoHtml-js.html",
 "/m08push/m-lib/m-js/m-calculaDtoParaSuscripcion-js.html",
 "/m08push/m-lib/m-js/m-cancelaSuscripcionPush-js.html",
 "/m08push/m-lib/m-js/m-confirmaEliminar-js.html",
 "/m08push/m-lib/m-js/m-ejecuta-js.html",
 "/m08push/m-lib/m-js/m-enviaJson-js.html",
 "/m08push/m-lib/m-js/m-getArchivoSeleccionado-js.html",
 "/m08push/m-lib/m-js/m-getDataUrlDeSeleccion-js.html",
 "/m08push/m-lib/m-js/m-getInputParaElementoHtml-js.html",
 "/m08push/m-lib/m-js/m-getSuscripcionPush-js.html",
 "/m08push/m-lib/m-js/m-muestraArray-js.html",
 "/m08push/m-lib/m-js/m-muestraBoolean-js.html",
 "/m08push/m-lib/m-js/m-muestraError-js.html",
 "/m08push/m-lib/m-js/m-muestraImagen-js.html",
 "/m08push/m-lib/m-js/m-muestraInnerHtml-js.html",
 "/m08push/m-lib/m-js/m-muestraNumber-js.html",
 "/m08push/m-lib/m-js/m-muestraObjeto-js.html",
 "/m08push/m-lib/m-js/m-muestraString-js.html",
 "/m08push/m-lib/m-js/m-muestraTextContent-js.html",
 "/m08push/m-lib/m-js/m-muestraValor-js.html",
 "/m08push/m-lib/m-js/m-suscribeAPush-js.html",
 "/m08push/m-lib/m-js/m-urlBase64ToUint8Array-js.html",
 "/m08push/m-lib/m-js/print.html",
 "/m08push/m-lib/m-php/",
 "/m08push/m-lib/m-php/index.html",
 "/m08push/m-lib/m-php/m-ejecuta-php.html",
 "/m08push/m-lib/m-php/m-leeJson-php.html",
 "/m08push/m-lib/m-php/print.html",
 "/m08push/m-lib/print.html",
 "/m08push/m-replit-nix.html",
 "/m08push/m-srv/",
 "/m08push/m-srv/index.html",
 "/m08push/m-srv/m-dao/",
 "/m08push/m-srv/m-dao/index.html",
 "/m08push/m-srv/m-dao/m-AccesoBd-php.html",
 "/m08push/m-srv/m-dao/m-bdCrea-php.html",
 "/m08push/m-srv/m-dao/m-suscripcionAgrega-php.html",
 "/m08push/m-srv/m-dao/m-suscripcionBusca-php.html",
 "/m08push/m-srv/m-dao/m-suscripcionConsulta-php.html",
 "/m08push/m-srv/m-dao/m-suscripcionElimina-php.html",
 "/m08push/m-srv/m-dao/m-suscripcionModifica-php.html",
 "/m08push/m-srv/m-dao/print.html",
 "/m08push/m-srv/m-generallaves-php.html",
 "/m08push/m-srv/m-modelo/",
 "/m08push/m-srv/m-modelo/index.html",
 "/m08push/m-srv/m-modelo/m-leeSuscripcion-php.html",
 "/m08push/m-srv/m-modelo/m-Suscripcion-php.html",
 "/m08push/m-srv/m-modelo/print.html",
 "/m08push/m-srv/m-srvNotifica-php.html",
 "/m08push/m-srv/m-srvSuscripcion-php.html",
 "/m08push/m-srv/print.html",
 "/m08push/m-sw-js.html",
 "/m08push/m01aer.html",
 "/m08push/m01bdeploy.html",
 "/m08push/m01instrucciones.html",
 "/m08push/mAintro.html",
 "/m08push/mArchivos.html",
 "/m08push/mGresumen.html",
 "/m08push/print.html",
 "/m09sincronizacion/",
 "/m09sincronizacion/index.html",
 "/m09sincronizacion/m-agrega-html.html",
 "/m09sincronizacion/m-archivos-txt.html",
 "/m09sincronizacion/m-index-html.html",
 "/m09sincronizacion/m-instruccionesListadoSw-txt.html",
 "/m09sincronizacion/m-js/",
 "/m09sincronizacion/m-js/index.html",
 "/m09sincronizacion/m-js/m-configura-js.html",
 "/m09sincronizacion/m-js/m-dao/",
 "/m09sincronizacion/m-js/m-dao/index.html",
 "/m09sincronizacion/m-js/m-dao/m-accesoBd-js.html",
 "/m09sincronizacion/m-js/m-dao/m-pasatiempoAgrega-js.html",
 "/m09sincronizacion/m-js/m-dao/m-pasatiempoBusca-js.html",
 "/m09sincronizacion/m-js/m-dao/m-pasatiempoConsultaNoEliminados-js.html",
 "/m09sincronizacion/m-js/m-dao/m-pasatiempoConsultaTodos-js.html",
 "/m09sincronizacion/m-js/m-dao/m-pasatiempoElimina-js.html",
 "/m09sincronizacion/m-js/m-dao/m-pasatiempoModifica-js.html",
 "/m09sincronizacion/m-js/m-dao/m-pasatiemposReemplaza-js.html",
 "/m09sincronizacion/m-js/m-dao/print.html",
 "/m09sincronizacion/m-js/m-modelo/",
 "/m09sincronizacion/m-js/m-modelo/index.html",
 "/m09sincronizacion/m-js/m-modelo/m-leePasatiempo-js.html",
 "/m09sincronizacion/m-js/m-modelo/m-Pasatiempo-js.html",
 "/m09sincronizacion/m-js/m-modelo/m-validaQueTengaLasPropiedadesDePasatiempo-js.html",
 "/m09sincronizacion/m-js/m-modelo/print.html",
 "/m09sincronizacion/m-js/print.html",
 "/m09sincronizacion/m-jsconfig-json.html",
 "/m09sincronizacion/m-lib/",
 "/m09sincronizacion/m-lib/index.html",
 "/m09sincronizacion/m-lib/m-js/",
 "/m09sincronizacion/m-lib/m-js/index.html",
 "/m09sincronizacion/m-lib/m-js/m-bdConsulta-js.html",
 "/m09sincronizacion/m-lib/m-js/m-bdEjecuta-js.html",
 "/m09sincronizacion/m-lib/m-js/m-buscaElementoHtml-js.html",
 "/m09sincronizacion/m-lib/m-js/m-confirmaEliminar-js.html",
 "/m09sincronizacion/m-lib/m-js/m-ejecuta-js.html",
 "/m09sincronizacion/m-lib/m-js/m-enviaJson-js.html",
 "/m09sincronizacion/m-lib/m-js/m-getArchivoSeleccionado-js.html",
 "/m09sincronizacion/m-lib/m-js/m-getDataUrlDeSeleccion-js.html",
 "/m09sincronizacion/m-lib/m-js/m-getInputParaElementoHtml-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraArray-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraBoolean-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraError-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraImagen-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraInnerHtml-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraNumber-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraObjeto-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraString-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraTextContent-js.html",
 "/m09sincronizacion/m-lib/m-js/m-muestraValor-js.html",
 "/m09sincronizacion/m-lib/m-js/m-registraServiceWorkerSiEsSoportado-js.html",
 "/m09sincronizacion/m-lib/m-js/print.html",
 "/m09sincronizacion/m-lib/m-php/",
 "/m09sincronizacion/m-lib/m-php/index.html",
 "/m09sincronizacion/m-lib/m-php/m-ejecuta-php.html",
 "/m09sincronizacion/m-lib/m-php/m-leeJson-php.html",
 "/m09sincronizacion/m-lib/m-php/m-recibeFetchAll-php.html",
 "/m09sincronizacion/m-lib/m-php/print.html",
 "/m09sincronizacion/m-lib/print.html",
 "/m09sincronizacion/m-modifica-html.html",
 "/m09sincronizacion/m-render-js.html",
 "/m09sincronizacion/m-srv/",
 "/m09sincronizacion/m-srv/index.html",
 "/m09sincronizacion/m-srv/m-dao/",
 "/m09sincronizacion/m-srv/m-dao/index.html",
 "/m09sincronizacion/m-srv/m-dao/m-AccesoBd-php.html",
 "/m09sincronizacion/m-srv/m-dao/m-bdCrea-php.html",
 "/m09sincronizacion/m-srv/m-dao/m-pasatiempoAgrega-php.html",
 "/m09sincronizacion/m-srv/m-dao/m-pasatiempoBusca-php.html",
 "/m09sincronizacion/m-srv/m-dao/m-pasatiempoConsultaNoEliminados-php.html",
 "/m09sincronizacion/m-srv/m-dao/m-pasatiempoModifica-php.html",
 "/m09sincronizacion/m-srv/m-dao/print.html",
 "/m09sincronizacion/m-srv/m-modelo/",
 "/m09sincronizacion/m-srv/m-modelo/index.html",
 "/m09sincronizacion/m-srv/m-modelo/m-leePasatiempo-php.html",
 "/m09sincronizacion/m-srv/m-modelo/m-Pasatiempo-php.html",
 "/m09sincronizacion/m-srv/m-modelo/print.html",
 "/m09sincronizacion/m-srv/m-srvSincro-php.html",
 "/m09sincronizacion/m-srv/print.html",
 "/m09sincronizacion/m-sw-js.html",
 "/m09sincronizacion/mAintro.html",
 "/m09sincronizacion/mArchivos.html",
 "/m09sincronizacion/mBder.html",
 "/m09sincronizacion/mCbdeploy.html",
 "/m09sincronizacion/mDinstrucciones.html",
 "/m09sincronizacion/mKresumen.html",
 "/m09sincronizacion/print.html",
 "/print.html",
 "/site.webmanifest",
 "/src/m01notificaciones/",
 "/src/m01notificaciones/index.html",
 "/src/m02push/notificacionespush.zip",
 "/src/m03pwaMaterial/custom-elements.js",
 "/src/m03pwaMaterial/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].codepoints",
 "/src/m03pwaMaterial/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].ttf",
 "/src/m03pwaMaterial/MaterialSymbolsOutlined[FILL,GRAD,opsz,wght].woff2",
 "/src/m03pwaMaterial/pwamd.zip",
 "/src/m03pwaMaterial/roboto-v30-latin-regular.ttf",
 "/src/m03pwaMaterial/roboto-v30-latin-regular.woff2",
 "/src/m04dispositivos/archivos.html",
 "/src/m04dispositivos/camara.html",
 "/src/m04dispositivos/gps.html",
 "/src/m05pwaBasica/pwa.zip",
 "/src/m07iot/iothtml.zip",
 "/src/m09sincronizacion/sincronizacion.zip"
]

// Verifica si el código corre dentro de un service worker.
if (self instanceof ServiceWorkerGlobalScope) {
 // Evento al empezar a instalar el servide worker,
 self.addEventListener("install",
  (/** @type {ExtendableEvent} */ evt) => {
   console.log("El service worker se está instalando.")
   evt.waitUntil(llenaElCache())
  })

 // Evento al solicitar información a la red.
 self.addEventListener("fetch", (/** @type {FetchEvent} */ evt) => {
  if (evt.request.method === "GET") {
   evt.respondWith(buscaLaRespuestaEnElCache(evt))
  }
 })

 // Evento cuando el service worker se vuelve activo.
 self.addEventListener("activate",
  () => console.log("El service worker está activo."))
}

async function llenaElCache() {
 console.log("Intentando cargar caché:", CACHE, ".")
 // Borra todos los cachés.
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 // Abre el caché de este service worker.
 const cache = await caches.open(CACHE)
 // Carga el listado de ARCHIVOS.
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE, ".")
 console.log("Versión:", VERSION, ".")
}

/** @param {FetchEvent} evt */
async function buscaLaRespuestaEnElCache(evt) {
 // Abre el caché.
 const cache = await caches.open(CACHE)
 const request = evt.request
 /* Busca la respuesta a la solicitud en el contenido del caché, sin
  * tomar en cuenta la parte después del símbolo "?" en la URL. */
 const response = await cache.match(request, { ignoreSearch: true })
 if (response === undefined) {
  /* Si no la encuentra, empieza a descargar de la red y devuelve
   * la promesa. */
  return fetch(request)
 } else {
  // Si la encuentra, devuelve la respuesta encontrada en el caché.
  return response
 }
}