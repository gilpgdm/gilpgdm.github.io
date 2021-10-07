import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class V4MaterialIcons extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>V. lib/css/material-icons.css</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">@font-face</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">font-family</span>:&nbsp;<span
        style="color: #a31515;">'Material&nbsp;Icons'</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-style</span>:&nbsp;<span
        style="color: #0451a5;">normal</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-weight</span>:&nbsp;<span
        style="color: #098658;">400</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">src</span>:&nbsp;<span
        style="color: #795e26;">local</span>(<span
        style="color: #a31515;">'Material&nbsp;Icons'</span>),</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">local</span>(<span
        style="color: #a31515;">'MaterialIcons-Regular'</span>),</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">url</span>(<span
        style="color: #001080;">../fonts/MaterialIcons-Regular.ttf</span>)&nbsp;<span
        style="color: #795e26;">format</span>(<span
        style="color: #a31515;">'truetype'</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">.material-icons</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">font-family</span>:&nbsp;<span
        style="color: #a31515;">'Material&nbsp;Icons'</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-weight</span>:&nbsp;<span
        style="color: #0451a5;">normal</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-style</span>:&nbsp;<span
        style="color: #0451a5;">normal</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-size</span>:&nbsp;<span
        style="color: #098658;">24px</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">display</span>:&nbsp;<span
        style="color: #0451a5;">inline-block</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">line-height</span>:&nbsp;<span
        style="color: #098658;">1</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">text-transform</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">letter-spacing</span>:&nbsp;<span
        style="color: #0451a5;">normal</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">word-wrap</span>:&nbsp;<span
        style="color: #0451a5;">normal</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">white-space</span>:&nbsp;<span
        style="color: #0451a5;">nowrap</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">direction</span>:&nbsp;<span
        style="color: #0451a5;">ltr</span>;</div><br>
     <div>&nbsp;<span
        style="color: #008000;">/*&nbsp;Soporte&nbsp;para&nbsp;los&nbsp;navegadores</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;*&nbsp;basados&nbsp;en&nbsp;WebKit.&nbsp;*/</span>
     </div>
     <div>&nbsp;<span style="color: #ff0000;">-webkit-font-smoothing</span>:
     </div>
     <div>&nbsp;&nbsp;<span style="color: #0451a5;">antialiased</span>;</div>
     <div>&nbsp;<span
        style="color: #008000;">/*&nbsp;Soporte&nbsp;para&nbsp;Safari&nbsp;y&nbsp;Chrome.*/</span>
     </div>
     <div>&nbsp;<span style="color: #ff0000;">text-rendering</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #0451a5;">optimizeLegibility</span>;
     </div><br>
     <div>&nbsp;<span
        style="color: #008000;">/*&nbsp;Soporte&nbsp;para&nbsp;Firefox.&nbsp;*/</span>
     </div>
     <div>&nbsp;<span style="color: #ff0000;">-moz-osx-font-smoothing</span>:
     </div>
     <div>&nbsp;&nbsp;<span style="color: #0451a5;">grayscale</span>;</div><br>
     <div>&nbsp;<span
        style="color: #008000;">/*&nbsp;Soporte&nbsp;para&nbsp;IE.&nbsp;*/</span>
     </div>
     <div>&nbsp;<span
        style="color: #ff0000;">font-feature-settings</span>:&nbsp;<span
        style="color: #a31515;">'liga'</span>;</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("v4-material-icons", V4MaterialIcons);