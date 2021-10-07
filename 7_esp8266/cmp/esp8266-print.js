import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a7-blink.js";
import "./b7-button.js";
import "./c7-dispositivo.js";
import "./esp8266-index.js";

export class Esp8266Print extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <esp8266-index></esp8266-index>
    </section>
    <section>
     <a7-blink></a7-blink>
    </section>
    <section>
     <b7-button></b7-button>
    </section>
    <section>
    <c7-dispositivo></c7-dispositivo>
    </section>`;
 }
}

customElements.define("esp8266-print", Esp8266Print);