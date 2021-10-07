import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C4Ayuda extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. ayuda.html</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
        style="color: #ff0000;">html</span><span
        style="color: #800000;">&gt;</span></div>
     <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
        style="color: #ff0000;">lang</span>=<span
        style="color: #0000ff;">"es"</span><span
        style="color: #800000;">&gt;</span></div>
     <div><span style="color: #800000;">&lt;head&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
        style="color: #ff0000;">charset</span>=<span
        style="color: #0000ff;">"UTF-8"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
        style="color: #ff0000;">name</span>=<span
        style="color: #0000ff;">"viewport"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
        style="color: #0000ff;">"width=device-width"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span></div>
     <div>&nbsp;&nbsp;Ayuda&nbsp;-&nbsp;Ejemplo&nbsp;de&nbsp;PWA</div>
     <div>&nbsp;<span style="color: #800000;">&lt;/title&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
        style="color: #ff0000;">name</span>=<span
        style="color: #0000ff;">"theme-color"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
        style="color: #0000ff;">"#6a0080"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"icon"</span>&nbsp;<span
        style="color: #ff0000;">sizes</span>=<span
        style="color: #0000ff;">"32x32"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"favicon.ico"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"manifest"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"site.webmanifest"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"stylesheet"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"css/estilos.css"</span><span
        style="color: #800000;">&gt;</span></div>
     <div><span style="color: #800000;">&lt;body&gt;</span></div>
     <div>&nbsp;<span
        style="color: #800000;">&lt;h1&gt;</span>Ayuda&nbsp;de&nbsp;App<span
        style="color: #800000;">&lt;/h1&gt;</span></div>
     <div>&nbsp;<span
        style="color: #800000;">&lt;p&gt;</span>Ejemplo&nbsp;de&nbsp;PWA<span
        style="color: #800000;">&lt;/p&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;cm-din&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;output</span>&nbsp;<span
        style="color: #ff0000;">id</span>=<span
        style="color: #0000ff;">"agent"</span><span
        style="color: #800000;">&gt;&lt;/output&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label</span>&nbsp;<span
        style="color: #ff0000;">for</span>=<span
        style="color: #0000ff;">"agent"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;User&nbsp;Agent</div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;/cm-din&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">&amp;copy;</span>&nbsp;2021
     </div>
     <div>&nbsp;&nbsp;Gilberto&nbsp;Pacheco&nbsp;Gallegos</div>
     <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
     <div>&nbsp;<span
        style="color: #800000;">&lt;mi-nav&gt;&lt;/mi-nav&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;script</span>&nbsp;<span
        style="color: #ff0000;">type</span>=<span
        style="color: #0000ff;">"module"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">import</span>&nbsp;<span
        style="color: #a31515;">"./js/config.js"</span></div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">agent</span>.<span
        style="color: #001080;">value</span>&nbsp;=&nbsp;<span
        style="color: #001080;">navigator</span>.<span
        style="color: #0070c1;">userAgent</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;/script&gt;</span></div>
     <div><span style="color: #800000;">&lt;/body</span></div>
     <div>&nbsp;&nbsp;<span style="color: #cd3131;">&lt;/html</span><span
        style="color: #800000;">&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("c4-ayuda", C4Ayuda);