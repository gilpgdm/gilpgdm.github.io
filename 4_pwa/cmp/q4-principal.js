import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class Q4Principal extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>Q. lib/css/principal.css</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">@import</span>&nbsp;<span
        style="color: #a31515;">"./material-icons.css"</span>;</div><br>
     <div><span style="color: #800000;">html</span>&nbsp;{</div>
     <div>&nbsp;<span
        style="color: #ff0000;">--fntFam</span>:&nbsp;-apple-system,</div>
     <div>&nbsp;&nbsp;BlinkMacSystemFont,&nbsp;<span
        style="color: #0451a5;">sans-serif</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colTxt</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">font-family</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--fntFam</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colBk</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">:-moz-ui-invalid</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">box-shadow</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">h1</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">position</span>:&nbsp;<span
        style="color: #0451a5;">sticky</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">top</span>:&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">margin</span>:&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding</span>:&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-size</span>:&nbsp;<span
        style="color: #098658;">1.25rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colPrim</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colPrimBk</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">.ios</span>&nbsp;<span
        style="color: #800000;">h1</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">text-align</span>:&nbsp;<span
        style="color: #0451a5;">center</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">p</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">margin</span>:&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>}</div>
    </div>`;
 }
}

customElements.define("q4-principal", Q4Principal);