import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class I4MiNavCss extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. lib/css/mi-nav.css</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">mi-nav</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">position</span>:&nbsp;<span
        style="color: #0451a5;">fixed</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">left</span>:&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">right</span>:&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">bottom</span>:&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">display</span>:&nbsp;<span
        style="color: #0451a5;">flex</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">list-style-type</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">justify-content</span>:&nbsp;<span
        style="color: #0451a5;">center</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">align-items</span>:&nbsp;<span
        style="color: #0451a5;">stretch</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">margin</span>:&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding</span>:&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colNv</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colNvBk</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">mi-nav</span>&nbsp;<span
        style="color: #800000;">a</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">display</span>:&nbsp;<span
        style="color: #0451a5;">block</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colNv</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">font-size</span>:&nbsp;<span
        style="color: #098658;">0.75rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">text-decoration</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding-top</span>:&nbsp;<span
        style="color: #098658;">0.5rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding-bottom</span>:&nbsp;<span
        style="color: #098658;">0.75rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding-left</span>:&nbsp;<span
        style="color: #098658;">0.75rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding-right</span>:&nbsp;<span
        style="color: #098658;">0.75rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">text-align</span>:&nbsp;<span
        style="color: #0451a5;">center</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">mi-nav</span>&nbsp;<span
        style="color: #800000;">a:active</span>&nbsp;{</div>
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
        style="color: #001080;">--colNvBk</span>)&nbsp;<span
        style="color: #098658;">1%</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-size</span>:&nbsp;<span
        style="color: #098658;">15000%</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">animation-name</span>:&nbsp;ripple;
     </div>
     <div>&nbsp;<span
        style="color: #ff0000;">animation-duration</span>:&nbsp;<span
        style="color: #098658;">0.5s</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colNvBkAc</span>)</div>
     <div>}</div><br>
     <div><span style="color: #800000;">mi-nav</span>&nbsp;<span
        style="color: #800000;">.material-icons</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">display</span>:&nbsp;<span
        style="color: #0451a5;">block</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">margin-left</span>:&nbsp;<span
        style="color: #0451a5;">auto</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">margin-right</span>:&nbsp;<span
        style="color: #0451a5;">auto</span>;</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("i4-mi-nav-css", I4MiNavCss);