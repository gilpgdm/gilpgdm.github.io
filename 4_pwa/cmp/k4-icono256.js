import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class K4Icono256 extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>K. img/icono256.png</h1>
   <figure>
     <img src="img/icono256.png" alt="fivicon.ico">
   </figure>`;
 }
}

customElements.define("k4-icono256", K4Icono256);