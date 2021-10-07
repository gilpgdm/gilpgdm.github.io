
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./sesion-contenido.js";

export class SesionIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <sesion-contenido></sesion-contenido>
    </div>`;
 }
}

customElements.define("sesion-index", SesionIndex);