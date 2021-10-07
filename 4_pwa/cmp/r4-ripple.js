import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class R4Ripple extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>R. lib/css/ripple.css</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">@keyframes</span>&nbsp;<span
        style="color: #001080;">ripple</span>&nbsp;{</div>
     <div>&nbsp;from&nbsp;{</div>
     <div>&nbsp;&nbsp;<span
        style="color: #ff0000;">background-size</span>:&nbsp;<span
        style="color: #098658;">100%</span>;</div>
     <div>&nbsp;}</div><br>
     <div>&nbsp;to&nbsp;{</div>
     <div>&nbsp;&nbsp;<span
        style="color: #ff0000;">background-size</span>:&nbsp;<span
        style="color: #098658;">15000%</span>;</div>
     <div>&nbsp;}</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("r4-ripple", R4Ripple);