import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a5-arquitectura.js";
import "./b5-despliegue.js";
import "./c5-er.js";
import "./d5-instrucciones.js";
import "./e5-archivos.js";
import "./f5-index-html.js";
import "./g5-ctrl-sesion.js";
import "./h5-index-js.js";
import "./i5-valida-usuario.js";
import "./j5-license.js";
import "./sesion-index.js";

export class SesionPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <sesion-index></sesion-index>
    </section>
    <section>
     <a5-arquitectura></a5-arquitectura>
    </section>
    <section>
     <b5-despliegue></b5-despliegue>
    </section>
    <section>
    <c5-er></c5-er>
    </section>
    <section>
     <d5-instrucciones></d5-instrucciones>
    </section>
    <section>
     <e5-archivos></e5-archivos>
    </section>
    <section>
     <f5-index-html></f5-index-html>
    </section>
    <section>
     <g5-ctrl-sesion></g5-ctrl-sesion>
    </section>
    <section>
     <h5-index-js></h5-index-js>
    </section>
    <section>
     <i5-valida-usuario></i5-valida-usuario>
    </section>
    <section>
     <j5-license></j5-license>
    </section>`;
 }
}

customElements.define("sesion-print", SesionPrint);