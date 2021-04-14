// @ts-nocheck
/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */
const CACHE = "gilpgdm-1.03";

/**  Archivos requeridos para que la aplicación funcione fuera de línea. */
const ARCHIVOS = [
  "b_sw.html",
  "favicon.ico",
  "index.html",
  "LICENSE",
  "site.webmanifest",
  "sw.js",
  "cmp/mi-nav.js",
  "css/estilos.css",
  "c_multiplataforma/3_nativa.html",
  "c_multiplataforma/4_multiplataforma.html",
  "c_multiplataforma/5_diferencias.html",
  "c_multiplataforma/6_ventajas_nativas.html",
  "c_multiplataforma/7_ventajas_multiplataforma.html",
  "c_multiplataforma/index.html",
  "d_multimedia/10_ejemplo_video.html",
  "d_multimedia/3_a.html",
  "d_multimedia/4_imagenes.html",
  "d_multimedia/5_ejemplo_imagenes.html",
  "d_multimedia/6_audio_y_video.html",
  "d_multimedia/7_audio.html",
  "d_multimedia/8_ejemplo_audio.html",
  "d_multimedia/9_video.html",
  "d_multimedia/index.html",
  "d_multimedia/src/1_imagenes.html",
  "d_multimedia/src/2_audio.html",
  "d_multimedia/src/3_video.html",
  "d_multimedia/src/bensound-summer.mp3",
  "d_multimedia/src/clouds_poster.jpg",
  "e_pwa/10_webmanifest.html",
  "e_pwa/11_estilos.html",
  "e_pwa/12_campo.html",
  "e_pwa/13_nav.html",
  "e_pwa/14_nav_css.html",
  "e_pwa/15_favicon.html",
  "e_pwa/16_icono256.html",
  "e_pwa/17_icono1024.html",
  "e_pwa/18_icono2048.html",
  "e_pwa/19_ayuda.html",
  "e_pwa/20_gps.html",
  "e_pwa/21_archivos.html",
  "e_pwa/22_README.html",
  "e_pwa/23_LICENSE.html",
  "e_pwa/3_instrucciones.html",
  "e_pwa/4_archivos.html",
  "e_pwa/5_index.html",
  "e_pwa/6_CtrlDivide.html",
  "e_pwa/7_agent.html",
  "e_pwa/8_regSw.html",
  "e_pwa/9_sw.html",
  "e_pwa/index.html",
  "e_pwa/img/favicon.ico",
  "e_pwa/img/icono1024.png",
  "e_pwa/img/icono2048.png",
  "e_pwa/img/icono256.png",
  "f_iot/10_init.html",
  "f_iot/11_index.html",
  "f_iot/12_CtrlMovil.html",
  "f_iot/13_fabrica.html",
  "f_iot/14_tiposFire.html",
  "f_iot/15_util.html",
  "f_iot/16_footer.html",
  "f_iot/17_estilos.html",
  "f_iot/18_dispositivo.html",
  "f_iot/19_ResInt.html",
  "f_iot/20_utilIoT.html",
  "f_iot/21_CtrlDispositivo.html",
  "f_iot/22_ProxySalida.html",
  "f_iot/23_ProxyEntrada.html",
  "f_iot/24_ProxyHistorial.html",
  "f_iot/25_historial.html",
  "f_iot/26_CtrlHistorial.html",
  "f_iot/27_README.html",
  "f_iot/28_LICENSE.html",
  "f_iot/3_casos.html",
  "f_iot/4_despliegue.html",
  "f_iot/5_er.html",
  "f_iot/6_no_rel.html",
  "f_iot/7_instrucciones.html",
  "f_iot/8_archivos.html",
  "f_iot/9_tipos.html",
  "f_iot/index.html",
  "f_iot/img/casos_iot.svg",
  "f_iot/img/despliegue_iot.svg",
  "f_iot/img/entidades_iot.svg",
  "f_iot/img/nosql_iot.svg",
  "g_esp8266/10_MiPost.html",
  "g_esp8266/3_blink.html",
  "g_esp8266/4_button.html",
  "g_esp8266/5_descarga.html",
  "g_esp8266/6_MiGet.html",
  "g_esp8266/7_modifica.html",
  "g_esp8266/8_MiPatch.html",
  "g_esp8266/9_publica.html",
  "g_esp8266/index.html",
  "g_esp8266/img/MiGet.png",
  "g_esp8266/img/MiPatch.png",
  "g_esp8266/img/MiPost.png",
  "h_dispositivo/10_ProxySalida_c.html",
  "h_dispositivo/11_ProxyEntrada_h.html",
  "h_dispositivo/12_ProxyEntrada_c.html",
  "h_dispositivo/13_ProxyHistorial_h.html",
  "h_dispositivo/14_ProxyHistorial_c.html",
  "h_dispositivo/3_archivos.html",
  "h_dispositivo/4_Dispositivo.html",
  "h_dispositivo/5_ResInt_h.html",
  "h_dispositivo/6_ResInt_c.html",
  "h_dispositivo/7_utilIoT_h.html",
  "h_dispositivo/8_utilIoT_c.html",
  "h_dispositivo/9_ProxySalida_h.html",
  "h_dispositivo/index.html",
  "img/icono1024.png",
  "img/icono2048.png",
  "img/icono256.png",
  "js/config.js",
  "lib/layout-cajon.js",
  "lib/layout-cajon_shadow.js",
  "lib/mi-footer.js",
  "lib/muestra-codigo.js",
  "lib/muestra-codigo_shadow.js",
  "lib/utilHtml.js",
  "lib/css/estilos.css",
  "lib/css/gentium-book-basic-v11-latin-700.woff",
  "lib/css/gentium-book-basic-v11-latin-700.woff2",
  "lib/css/gentium-book-basic-v11-latin-700italic.woff",
  "lib/css/gentium-book-basic-v11-latin-700italic.woff2",
  "lib/css/gentium-book-basic-v11-latin-italic.woff",
  "lib/css/gentium-book-basic-v11-latin-italic.woff2",
  "lib/css/gentium-book-basic-v11-latin-regular.woff",
  "lib/css/gentium-book-basic-v11-latin-regular.woff2",
  "lib/css/gentium-book-basic.css",
  "lib/css/material-icons.css",
  "lib/css/MaterialIcons-Regular.codepoints",
  "lib/css/MaterialIcons-Regular.ttf",
  "lib/css/mi-footer.css",
  "lib/css/prueba.css",
  "lib/css/ubuntu-mono-v10-latin-700.woff",
  "lib/css/ubuntu-mono-v10-latin-700.woff2",
  "lib/css/ubuntu-mono-v10-latin-700italic.woff",
  "lib/css/ubuntu-mono-v10-latin-700italic.woff2",
  "lib/css/ubuntu-mono-v10-latin-italic.woff",
  "lib/css/ubuntu-mono-v10-latin-italic.woff2",
  "lib/css/ubuntu-mono-v10-latin-regular.woff",
  "lib/css/ubuntu-mono-v10-latin-regular.woff2",
  "lib/css/ubuntu-mono.css",
  "lib/css/ubuntu-v15-latin-700.woff",
  "lib/css/ubuntu-v15-latin-700.woff2",
  "lib/css/ubuntu-v15-latin-700italic.woff",
  "lib/css/ubuntu-v15-latin-700italic.woff2",
  "lib/css/ubuntu-v15-latin-italic.woff",
  "lib/css/ubuntu-v15-latin-italic.woff2",
  "lib/css/ubuntu-v15-latin-regular.woff",
  "lib/css/ubuntu-v15-latin-regular.woff2",
  "lib/css/ubuntu.css",
  '/'
];

self.addEventListener("install", evt => {
  console.log("Service Worker instalado.");
  evt.waitUntil(cargaCache());
});

self.addEventListener("fetch", evt => {
  if (evt.request.method === "GET") {
    evt.respondWith(usaCache(evt));
  }
});

self.addEventListener("activate", () => console.log("Service Worker activo."));

async function cargaCache() {
  console.log("Intentando cargar cache: " + CACHE);
  const cache = await caches.open(CACHE);
  await cache.addAll(ARCHIVOS);
  console.log("Cache cargado: " + CACHE);
}

async function usaCache(evt) {
  const cache = await caches.open(CACHE);
  const response = await cache.match(evt.request, { ignoreSearch: true });
  if (response) {
    return response;
  } else {
    return fetch(evt.request);
  }
}