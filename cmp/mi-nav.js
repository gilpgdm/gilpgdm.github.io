/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
import "../1_multiplataforma/cmp/nativas-contenido.js";
import "../2_multimedia/cmp/multimedia-contenido.js";
import "../3_vistas/cmp/vistas-contenido.js";
import "../4_pwa/cmp/pwa-contenido.js";

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
           <pwa-contenido></pwa-contenido>
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