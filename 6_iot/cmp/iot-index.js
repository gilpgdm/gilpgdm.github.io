
import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./iot-contenido.js";

export class IoTIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
     <h2>Contenido</h2>
     <iot-contenido></iot-contenido>
    </div>`;
 }
}

customElements.define("iot-index", IoTIndex);