import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a3-referencias.js";
import "./b3-app.js";
import "./c3-campos.js";
import "./d3-interruptores.js";
import "./e3-botones.js";
import "./f3-navegacion.js";
import "./g3-gps.js";
import "./h3-archivos.js";
import "./vistas-index.js";

export class VistasPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <vistas-index></vistas-index>
    </section>
    <section>
     <a3-referencias></a3-referencias>
    </section>
    <section>
     <b3-app></b3-app>
    </section>
    <section>
    <c3-campos></c3-campos>
    </section>
    <section>
     <d3-interruptores></d3-interruptores>
    </section>
    <section>
     <e3-botones></e3-botones>
    </section>
    <section>
     <f3-navegacion></f3-navegacion>
    </section>
    <section>
     <g3-gps></g3-gps>
    </section>
    <section>
     <h3-archivos></h3-archivos>
    </section>`;
 }
}

customElements.define("vistas-print", VistasPrint);