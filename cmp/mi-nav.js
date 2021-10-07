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
          <ol type="A">
           <li><p><a href="/5_sesion/a_arquitectura.html">Arquitectura</a></p></li>
           <li><p><a href="/5_sesion/b_despliegue.html">Despliegue</a></p></li>
           <li><p><a href="/5_sesion/c_er.html">Diagrama Entidad Relación</a></p></li>
           <li><p><a href="/5_sesion/d_instrucciones.html">Instrucciones</a></p></li>
           <li><p><a href="/5_sesion/e_archivos.html">Archivos</a></p></li>
           <li><p><a href="/5_sesion/f_index_html.html">www/index.html</a></p></li>
           <li><p><a href="/5_sesion/g_CtrlSesion.html">www/js/CtrlSesion.js</a></p></li>
           <li><p><a href="/5_sesion/h_index_js.html">index.js</a></p></li>
           <li><p><a href="/5_sesion/i_validaUsuario.html">validaUsuario.js</a></p></li>
           <li><p><a href="/5_sesion/j_LICENSE.html">LICENSE</a></p></li>
          </ol>
         </details>
        </li>
        <li>
         <details>
          <summary>
            <h4><a href="/6_iot/index.html">IoT</a></h4>
          </summary>
          <ol type="A">
           <li><p><a href="/6_iot/a_casos.html">Casos de Uso</a></p></li>
           <li><p><a href="/6_iot/b_despliegue.html">Despliegue</a></p></li>
           <li><p><a href="/6_iot/c_er.html">Diagrama Entidad Relación</a></p></li>
           <li><p><a href="/6_iot/d_no_rel.html">Diseño no Relacional</a></p></li>
           <li><p><a href="/6_iot/e_instrucciones.html">Instrucciones</a></p></li>
           <li><p><a href="/6_iot/f_archivos.html">Archivos</a></p></li>
           <li><p><a href="/6_iot/g_tipos.html">tipos.js</a></p></li>
           <li><p><a href="/6_iot/h_cliente.html">cliente.js</a></p></li>
           <li><p><a href="/6_iot/i_getValor.html">getValor.js</a></p></li>
           <li><p><a href="/6_iot/j_setValor.html">setValor.js</a></p></li>
           <li><p><a href="/6_iot/k_index_js.html">index.js</a></p></li>
           <li><p><a href="/6_iot/l_index_html.html">www/index.html</a></p></li>
          </ol>
         </details>
        </li>
        <li>
         <details>
          <summary>
           <h4><a href="/7_esp8266/index.html">ESP8266</a></h4>
          </summary>
          <ol type="A">
           <li><p><a href="/7_esp8266/3_blink.html">Blink.ino</a></p></li>
           <li><p><a href="/7_esp8266/4_button.html">Button.ino</a></p></li>
           <li><p><a href="/7_esp8266/6_MiGet.html">Dispositivo.ino</a></p></li>
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