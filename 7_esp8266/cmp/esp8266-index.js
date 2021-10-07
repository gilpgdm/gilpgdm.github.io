
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./esp8266-contenido.js";

export class Esp8266Index extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <p>En las páginas que siguen se introduce el desarrollo con ESP8266.</p>
     <h2>Contenido</h2>
     <esp8266-contenido></esp8266-contenido>
    </div>`;
 }
}

customElements.define("esp8266-index", Esp8266Index);