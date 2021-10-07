
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./pwa-contenido.js";

export class PWAIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <pwa-contenido></pwa-contenido>
    </div>`;
 }
}

customElements.define("pwa-index", PWAIndex);