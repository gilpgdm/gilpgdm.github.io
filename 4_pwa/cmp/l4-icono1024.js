import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class L4Icono1024 extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>L. img/icono1024.png</h1>
   <figure>
     <img src="img/icono1024.png" alt="fivicon.ico">
   </figure>`;
 }
}

customElements.define("l4-icono1024", L4Icono1024);