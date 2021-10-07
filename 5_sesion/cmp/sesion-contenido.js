import  "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class SesionContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
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
    </ol>`;
 }
}

customElements.define("sesion-contenido", SesionContenido);