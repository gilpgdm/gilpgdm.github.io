import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./b3-app.js";
import "./c3-campos.js";
import "./d3-interruptores.js";
import "./vistas-contenido.js";

export class VistasPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <vistas-index></vistas-index>
    </section>
    <section>
     <a3-app></a3-app>
    </section>
    <section>
     <b2-campo></b2-campo>
    </section>
    <section>
    <c2-audio></c2-audio>
    </section>
    <section>
     <d2-video></d2-video>
    </section>`;
 }
}

customElements.define("vistas-print", VistasPrint);