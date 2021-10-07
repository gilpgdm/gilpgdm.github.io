import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a6-casos.js";
import "./b6-despliegue.js";
import "./c6-er.js";
import "./d6-no-rel.js";
import "./e6-instrucciones.js";
import "./f6-archivos.js";
import "./g6-tipos.js";
import "./h6-cliente.js";
import "./i6-get-valor.js";
import "./iot-index.js";
import "./j6-set-valor.js";
import "./k6-index.js";
import "./l6-index-html.js";

export class IoTPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <iot-index></iot-index>
    </section>
    <section>
     <a6-casos></a6-casos>
    </section>
    <section>
     <b6-despliegue></b6-despliegue>
    </section>
    <section>
    <c6-er></c6-er>
    </section>
    <section>
     <d6-no-rel></d6-no-rel>
    </section>
    <section>
     <e6-instrucciones></e6-instrucciones>
    </section>
    <section>
     <f6-archivos></f6-archivos>
    </section>
    <section>
     <g6-tipos></g6-tipos>
    </section>
    <section>
     <h6-cliente></h6-cliente>
    </section>
    <section>
     <i6-get-valor></i6-get-valor>
    </section>
    <section>
     <j6-set-valor></j6-set-valor>
    </section>
    <section>
     <k6-index></k6-index>
    </section>
    <section>
     <l4-icono1024></l4-icono1024>
    </section>
    <section>
     <l6-index-html></l6-index-html>
    </section>
    <section>
     <n4-webmanifest></n4-webmanifest>
    </section>
    <section>
     <o4-sw></o4-sw>
    </section>
    <section>
     <p4-estilos></p4-estilos>
    </section>
    <section>
     <q4-principal></q4-principal>
    </section>
    <section>
     <r4-ripple></r4-ripple>
    </section>
    <section>
     <s4-botones></s4-botones>
    </section>
    <section>
     <t4_cmp-din-js></t4_cmp-din-js>
    </section>
    <section>
     <u4-cmp-din-css></u4-cmp-din-css>
    </section>
    <section>
     <v4-material-icons></v4-material-icons>
    </section>
    <section>
     <w4-material-codepoints></w4-material-codepoints>
    </section>
    <section>
     <x4-material-regular></x4-material-regular>
    </section>
    <section>
     <y4-license></y4-license>
    </section>`;
 }
}

customElements.define("iot-print", IoTPrint);