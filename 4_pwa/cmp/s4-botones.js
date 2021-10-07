import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class S4Botones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>S. lib/css/botones.css</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">.contained</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">font-family</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--fntFam</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">text-transform</span>:&nbsp;<span
        style="color: #0451a5;">uppercase</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCnt</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCntBk</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">font-size</span>:&nbsp;<span
        style="color: #098658;">0.875rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding</span>:&nbsp;<span
        style="color: #098658;">0.5rem</span>&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">border</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">border-radius</span>:&nbsp;<span
        style="color: #098658;">4px</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">.contained:hover</span>,</div>
     <div><span style="color: #800000;">.contained:focus</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #098658;">0</span>&nbsp;<span
        style="color: #098658;">3px</span>&nbsp;<span
        style="color: #098658;">6px</span>&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCntSh</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">.contained:hover</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCntBkHv</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">.contained:focus</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">outline</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCntBkFc</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">.contained:active</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #098658;">0</span>&nbsp;<span
        style="color: #098658;">6px</span>&nbsp;<span
        style="color: #098658;">12px</span>&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCntSh</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCntBkAc</span>);</div>
     <div>&nbsp;<span
        style="color: #ff0000;">background-position</span>:&nbsp;<span
        style="color: #0451a5;">center</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">background-image</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">radial-gradient</span>(<span
        style="color: #0451a5;">circle</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">transparent</span>&nbsp;<span
        style="color: #098658;">1%</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCntBkHv</span>)&nbsp;<span
        style="color: #098658;">1%</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-size</span>:&nbsp;<span
        style="color: #098658;">15000%</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">animation-name</span>:&nbsp;ripple;
     </div>
     <div>&nbsp;<span
        style="color: #ff0000;">animation-duration</span>:&nbsp;<span
        style="color: #098658;">0.5s</span>;</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("s4-botones", S4Botones);