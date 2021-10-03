import  "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class VistasContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li><p><a href="/3_vistas/a_referencias.html">Referencias</a></p></li>
     <li><p><a href="/3_vistas/b_app.html">Una app básica</a></p></li>
     <li><p><a href="/3_vistas/c_campos.html">Campos</a></p></li>
     <li><p><a href="/3_vistas/d_interruptores.html">Interruptores</a></p></li>
     <li><p><a href="/3_vistas/e_botones.html">Botones</a></p></li>
     <li><p><a href="/3_vistas/f_navegacion.html">Navegación</a></p></li>
     <li><p><a href="/3_vistas/g_gps.html">GPS</a></p></li>
     <li><p><a href="/3_vistas/h_archivos.html">Archivos y cámara</a></p></li>
    </ol>`;
 }
}

customElements.define("vistas-contenido", VistasContenido);