
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./multimedia-contenido.js";

export class MultimediaIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <multimedia-contenido></multimedia-contenido>
    </div>`;
 }
}

customElements.define("multimedia-index", MultimediaIndex);