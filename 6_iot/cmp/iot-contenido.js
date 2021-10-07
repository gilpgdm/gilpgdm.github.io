import  "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class IoTContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
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
    </ol>`;
 }
}

customElements.define("iot-contenido", IoTContenido);