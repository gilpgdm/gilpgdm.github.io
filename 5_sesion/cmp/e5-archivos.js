import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E5Archivos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Archivos</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>www</p>
      <ul>
       <li>
        <p><a href="10_CtrlSesion.html">CtrlSesion.js</a></p>
       </li>
       <li>
        <p><a href="9_index_html.html">index.html</a></p>
       </li>
       <li>
        <p><a href="15_LICENSE.html">LICENSE</a></p>
       </li>
      </ul>
     </li>
     <li>
      <p><a href="12_index_js.html">index.js</a></p>
     </li>
     <li>
      <p><a href="14_validaUsuario.html">validaUsuario.js</a></p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("e5-archivos", E5Archivos);