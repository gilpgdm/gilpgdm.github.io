/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */
import "../1_multiplataforma/cmp/nativas-contenido.js";
import "../2_multimedia/cmp/multimedia-contenido.js";
import "../3_vistas/cmp/vistas-contenido.js";
import "../4_pwa/cmp/pwa-contenido.js";
import "../5_sesion/cmp/sesion-contenido.js";
import "../6_iot/cmp/iot-contenido.js";
import "../7_esp8266/cmp/esp8266-contenido.js";

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
          <sesion-contenido></sesion-contenido>
         </details>
        </li>
        <li>
         <details>
          <summary>
            <h4><a href="/6_iot/index.html">IoT</a></h4>
          </summary>
          <iot-contenido></iot-contenido>
         </details>
        </li>
        <li>
         <details>
          <summary>
           <h4><a href="/7_esp8266/index.html">ESP8266</a></h4>
          </summary>
          <esp8266-contenido></esp8266-contenido>
         </details>
        </li>
       </ol>
      </li>
     </ul>
    </nav>`;
 }
}

customElements.define("mi-nav", MiNav);