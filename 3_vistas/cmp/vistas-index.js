
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./vistas-contenido.js";

export class VistasIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <p>
      En las páginas que siguen se muestran algunas vistas para móvil
      desarrolladas con HTML, CSS y JavaScript.
     </p>
     <h2>Contenido</h2>
     <vistas-contenido></vistas-contenido>
    </div>`;
 }
}

customElements.define("vistas-index", VistasIndex);