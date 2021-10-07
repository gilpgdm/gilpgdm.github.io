import  "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class Esp8266Contenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li><p><a href="/7_esp8266/a_blink.html">Blink.ino</a></p></li>
     <li><p><a href="/7_esp8266/b_button.html">Button.ino</a></p></li>
     <li><p><a href="/7_esp8266/c_Dispositivo.html">Dispositivo.ino</a></p></li>
    </ol>`;
 }
}

customElements.define("esp8266-contenido", Esp8266Contenido);