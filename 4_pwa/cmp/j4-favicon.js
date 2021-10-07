import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class J4Favicon extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>J. favicon.ico</h1>
   <figure>
     <img src="img/favicon.ico" alt="fivicon.ico">
   </figure>`;
 }
}

customElements.define("j4-favicon", J4Favicon);