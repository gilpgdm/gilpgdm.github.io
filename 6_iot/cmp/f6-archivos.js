import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class F6Archivos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Archivos</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>www</p>
      <ul>
       <li>
        <p><a href="l_index_html.html">index.html</a></p>
       </li>
      </ul>
     </li>
     <li>
      <p><a href="h_cliente.html">cliente.js</a></p>
     </li>
     <li>
      <p><a href="i_getValor.html">getValor.js</a></p>
     </li>
     <li>
      <p><a href="k_index_js.html">index.js</a></p>
     </li>
     <li>
      <p><a href="j_setValor.html">setValor.js</a></p>
     </li>
     <li>
      <p><a href="g_tipos.html">tipos.js</a></p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("f6-archivos", F6Archivos);