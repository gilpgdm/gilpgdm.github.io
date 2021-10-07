import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a4-pwa.js";
import "./b4-archivos.js";
import "./c4-ayuda.js";
import "./d4-index.js";
import "./e4-ctrl-recomienda.js";
import "./f4-config.js";
import "./g4-movil.js";
import "./h4-mi-nav-js.js";
import "./i4-mi-nav-css.js";
import "./j4-favicon.js";
import "./k4-icono256.js";
import "./l4-icono1024.js";
import "./m4-icono2048.js";
import "./n4-webmanifest.js";
import "./o4-sw.js";
import "./p4-estilos.js";
import "./q4-principal.js";
import "./r4-ripple.js";
import "./s4-botones.js";
import "./t4_cmp-din-js.js";
import "./u4-cmp-din-css.js";
import "./v4-material-icons.js";
import "./w4-material-codepoints.js";
import "./x4-material-regular.js";
import "./y4-license.js";
import "./pwa-index.js";

export class PWAPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <pwa-index></pwa-index>
    </section>
    <section>
     <a4-pwa></a4-pwa>
    </section>
    <section>
     <b4-archivos></b4-archivos>
    </section>
    <section>
    <c4-ayuda></c4-ayuda>
    </section>
    <section>
     <d4-index></d4-index>
    </section>
    <section>
     <e4-ctrl-recomienda></e4-ctrl-recomienda>
    </section>
    <section>
     <f4-config></f4-config>
    </section>
    <section>
     <g4-movil></g4-movil>
    </section>
    <section>
     <h4-mi-nav-js></h4-mi-nav-js>
    </section>
    <section>
     <i4-mi-nav-css></i4-mi-nav-css>
    </section>
    <section>
     <j4-favicon></j4-favicon>
    </section>
    <section>
     <k4-icono256></k4-icono256>
    </section>
    <section>
     <l4-icono1024></l4-icono1024>
    </section>
    <section>
     <m4-icono2048></m4-icono2048>
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

customElements.define("pwa-print", PWAPrint);