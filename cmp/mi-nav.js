/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
import "../1_multiplataforma/cmp/nativas-contenido.js";
import "../2_multimedia/cmp/multimedia-contenido.js";
import "../3_vistas/cmp/vistas-contenido.js";

class MiNav extends HTMLElement {
 connectedCallback() {
  this.innerHTML = /* html */
   `<nav>
     <h2>Contenido</h2>
     <ul>
      <li><p><a href="/index.html">Inicio</a></p></li>
      <li><p><a href="/sw.html">Software a Instalar</a></p></li>
      <li>
       <h3>Lecciones</h3>
       <ol>
        <li>
         <details>
          <summary>
           <h4><a href="/1_multiplataforma/index.html">Las App Multiplataforma</a></h4>
          </summary>
          <nativas-contenido></nativas-contenido>
         </details>
        </li>
         <li>
          <details>
           <summary>
            <h4><a href="/2_multimedia/index.html">Elementos multimedia de HTML5</a></h4>
           </summary>
           <multimedia-contenido></multimedia-contenido>
           </details>
         </li>
         <li>
          <details>
           <summary>
            <h4><a href="/3_vistas/index.html">Vistas móviles</a></h4>
           </summary>
           <vistas-contenido></vistas-contenido>
           </details>
         </li>
         <li>
           <details>
             <summary>
               <h4><a href="/4_pwa/index.html">PWA</a></h4>
             </summary>
             <ol>
               <li><p><a href="/4_pwa/2_instrucciones.html">Instrucciones</a></p></li>
               <li><p><a href="/4_pwa/3_archivos.html">Archivos</a></p></li>
               <li><p><a href="/4_pwa/4_ayuda.html">ayuda.html</a></p></li>
               <li><p><a href="/4_pwa/5_index.html">index.html</a></p></li>
               <li><p><a href="/4_pwa/6_CtrlDivide.html">js/CtrlDivide.js</a></p></li>
               <li><p><a href="/4_pwa/7_config.html">js/config.js</a></p></li>
               <li><p><a href="/4_pwa/22_movil.html">lib/movil.js</a></p></li>
               <li><p><a href="/4_pwa/8_mi-nav_js.html">js/mi-nav.js</a></p></li>
               <li><p><a href="/4_pwa/9_mi-nav_css.html">lib/css/mi-nav.css</a></p></li>
               <li><p><a href="/4_pwa/10_favicon.html">favicon.ico</a></p></li>
               <li><p><a href="/4_pwa/11_icono256.html">img/icono256.png</a></p></li>
               <li><p><a href="/4_pwa/12_icono1024.html">img/icono1024.png</a></p></li>
               <li><p><a href="/4_pwa/13_icono2048.html">img/icono2048.png</a></p></li>
               <li><p><a href="/4_pwa/14_webmanifest.html">site.webmanifest</a></p></li>
               <li><p><a href="/4_pwa/15_sw.html">sw.js</a></p></li>
               <li><p><a href="/4_pwa/16_estilos.html">css/estilos.css</a></p></li>
               <li><p><a href="/4_pwa/17_principal.html">lib/css/principal.css</a></p></li>
               <li><p><a href="/4_pwa/18_ripple.html">lib/css/ripple.css</a></p></li>
               <li><p><a href="/4_pwa/19_botones.html">lib/css/botones.css</a></p></li>
               <li><p><a href="/4_pwa/20_cmp-din_js.html">lib/cm-din.js</a></p></li>
               <li><p><a href="/4_pwa/21_cmp-din_css.html">lib/css/cm-din.css</a></p></li>
               <li><p><a href="/4_pwa/23_material-icons.html">lib/css/material-icons.css</a></p></li>
               <li><p><a href="/4_pwa/24_MaterialIcons-Regular_codepoints.html">lib/fonts/MaterialIcons-Regular.codepoints</a></p></li>
               <li><p><a href="/4_pwa/25_MaterialIcons-Regular.html">lib/fonts/MaterialIcons-Regular.ttf</a></p></li>
               <li><p><a href="/4_pwa/26_roboto.html">lib/css/roboto.css</a></p></li>
               <li><p><a href="/4_pwa/27_roboto-v27-latin-regular_woff.html">lib/fonts/roboto-v27-latin-regular.woff</a></p></li>
               <li><p><a href="/4_pwa/28_roboto-v27-latin-regular_woff2.html">lib/fonts/roboto-v27-latin-regular.woff2</a></p></li>
               <li><p><a href="29_LICENSE.html">LICENSE</a></p></li>
             </ol>
           </details>
         </li>
         <li>
           <details>
             <summary>
               <h4><a href="/5_sesion/index.html">Control de sesión</a></h4>
             </summary>
             <ol>
               <li><p><a href="/5_sesion/3_arquitectura.html">Arquitectura</a></p></li>
               <li><p><a href="/5_sesion/4_despliegue.html">Despliegue</a></p></li>
               <li><p><a href="/5_sesion/5_er.html">Diagrama Entidad Relación</a></p></li>
               <li><p><a href="/5_sesion/7_instrucciones.html">Instrucciones</a></p></li>
               <li><p><a href="/5_sesion/8_archivos.html">Archivos</a></p></li>
               <li><p><a href="/5_sesion/9_index_html.html">www/index.html</a></p></li>
               <li><p><a href="/5_sesion/10_CtrlSesion.html">www/js/CtrlSesion.js</a></p></li>
               <li><p><a href="/5_sesion/12_index_js.html">index.js</a></p></li>
               <li><p><a href="/5_sesion/14_validaUsuario.html">servicios/validaUsuario.js</a></p></li>
               <li><p><a href="/5_sesion/15_LICENSE.html">LICENSE</a></p></li>
             </ol>
           </details>
         </li>
         <li>
           <details>
             <summary>
               <h4><a href="/6_iot/index.html">IoT</a></h4>
             </summary>
             <ol>
               <li><p><a href="/6_iot/3_casos.html">Casos de Uso</a></p></li>
               <li><p><a href="/6_iot/4_despliegue.html">Despliegue</a></p></li>
               <li><p><a href="/6_iot/5_er.html">Diagrama Entidad Relación</a></p></li>
               <li><p><a href="/6_iot/6_no_rel.html">Diseño no Relacional</a></p></li>
               <li><p><a href="/6_iot/7_instrucciones.html">Instrucciones</a></p></li>
               <li><p><a href="/6_iot/8_archivos.html">Archivos</a></p></li>
               <li><p><a href="/6_iot/10_index_html.html">www/index.html</a></p></li>
               <li><p><a href="/6_iot/11_CtrlMovil.html">www/js/CtrlMovil.js</a></p></li>
               <li><p><a href="/6_iot/12_dispositivo.html">www/dispositivo.html</a></p></li>
               <li><p><a href="/6_iot/13_CtrlDispositivo.html">www/js/CtrlDispositivo.js</a></p></li>
               <li><p><a href="/6_iot/18_ResInt.html">www/js/ResInt.js</a></p></li>
               <li><p><a href="/6_iot/19_util.html">www/js/util.js</a></p></li>
               <li><p><a href="/6_iot/14_proxyAgregaEntrada.html">www/js/proxyAgregaEntrada.js</a></p></li>
               <li><p><a href="/6_iot/15_proxyAgregaSalida.html">www/js/proxyAgregaSalida.js</a></p></li>
               <li><p><a href="/6_iot/16_proxyRecuperaEntrada.html">www/js/proxyRecuperaEntrada.js</a></p></li>
               <li><p><a href="/6_iot/17_proxyRecuperaSalida.html">www/js/proxyRecuperaSalida.js</a></p></li>
               <li><p><a href="/6_iot/20_estilos.html">www/css/estilos.css</a></p></li>
               <li><p><a href="/6_iot/21_footer.html">www/js/mi-footer.js</a></p></li>
               <li><p><a href="/6_iot/23_index_js.html">index.js</a></p></li>
               <li><p><a href="/6_iot/9_tipos.html">servicios/tipos.js</a></p></li>
               <li><p><a href="/6_iot/22_utilsrv.html">servicios/utilsrv.js</a></p></li>
               <li><p><a href="/6_iot/24_agregaEntrada.html">servicios/agregaEntrada.js</a></p></li>
               <li><p><a href="/6_iot/25_agregaSalida.html">servicios/agregaSalida.js</a></p></li>
               <li><p><a href="/6_iot/27_recuperaEntrada.html">servicios/recuperaEntrada.js</a></p></li>
               <li><p><a href="/6_iot/28_recuperaSalida.html">servicios/recuperaSalida.js</a></p></li>
               <li><p><a href="/6_iot/29_LICENSE.html">LICENSE</a></p></li>
             </ol>
           </details>
         </li>
         <li>
           <details>
             <summary>
               <h4><a href="/7_esp8266/index.html">ESP8266</a></h4>
             </summary>
             <ol>
               <li><p><a href="/7_esp8266/3_blink.html">Blink.ino</a></p></li>
               <li><p><a href="/7_esp8266/4_button.html">Button.ino</a></p></li>
               <li><p><a href="/7_esp8266/6_MiGet.html">MiGet.ino</a></p></li>
               <li><p><a href="/7_esp8266/10_MiPost.html">MiPost.ino</a></p></li>
             </ol>
           </details>
         </li>
          </ol>
         </li>
        </ul>
       </nav>`;
 }
}

customElements.define("mi-nav", MiNav);