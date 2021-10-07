import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F4Config extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. js/config.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">import</span>&nbsp;<span
        style="color: #a31515;">"../lib/cm-din.js"</span></div>
     <div><span style="color: #af00db;">import</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">regSw</span></div>
     <div>}&nbsp;<span style="color: #af00db;">from</span>&nbsp;<span
        style="color: #a31515;">"../lib/movil.js"</span></div>
     <div><span style="color: #af00db;">import</span>&nbsp;<span
        style="color: #a31515;">"./mi-nav.js"</span></div><br>
     <div><span style="color: #795e26;">regSw</span>(<span
        style="color: #a31515;">"sw.js"</span>)</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("f4-config", F4Config);