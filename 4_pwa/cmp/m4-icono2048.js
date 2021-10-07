import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class M4Icono2048 extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>M. img/icono2048.png</h1>
   <figure>
     <img src="img/icono2048.png" alt="fivicon.ico">
   </figure>`;
 }
}

customElements.define("m4-icono2048", M4Icono2048);