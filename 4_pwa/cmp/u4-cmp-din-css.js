import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class U4CmpDinCss extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>U. lib/css/cm-din.css</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #800000;">cm-din</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">display</span>:&nbsp;<span
        style="color: #0451a5;">block</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">position</span>:&nbsp;<span
        style="color: #0451a5;">relative</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCm</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmBk</span>);</div>
     <div>&nbsp;<span
        style="color: #ff0000;">border-top-left-radius</span>:&nbsp;<span
        style="color: #098658;">4px</span>;</div>
     <div>&nbsp;<span
        style="color: #ff0000;">border-top-right-radius</span>:&nbsp;<span
        style="color: #098658;">4px</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">margin</span>:&nbsp;<span
        style="color: #098658;">1rem</span>&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding</span>:&nbsp;<span
        style="color: #098658;">1.25rem</span>&nbsp;<span
        style="color: #098658;">0</span>&nbsp;<span
        style="color: #098658;">0</span>&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din:hover</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmBkHv</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din:focus-within</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmBkFc</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">label</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">position</span>:&nbsp;<span
        style="color: #0451a5;">absolute</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">top</span>:&nbsp;<span
        style="color: #098658;">1.75rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">left</span>:&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-size</span>:&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCm</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">transition</span>:&nbsp;<span
        style="color: #098658;">0.3s</span>&nbsp;<span
        style="color: #0451a5;">ease-in</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">.valor</span>+<span
        style="color: #800000;">label</span>,</div>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">:focus</span>+<span
        style="color: #800000;">label</span>,</div>
     <div><span style="color: #800000;">cm-din</span>&nbsp;[<span
        style="color: #ff0000;">type</span>=<span
        style="color: #a31515;">file</span>]+<span
        style="color: #800000;">label</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">top</span>:&nbsp;<span
        style="color: #098658;">0.5rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-size</span>:&nbsp;<span
        style="color: #098658;">0.75rem</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&gt;<span
        style="color: #800000;">output</span>,</div>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">select</span>,</div>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">input</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">display</span>:&nbsp;<span
        style="color: #0451a5;">block</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">box-sizing</span>:&nbsp;<span
        style="color: #0451a5;">border-box</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-size</span>:&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding</span>:&nbsp;<span
        style="color: #098658;">0.5rem</span>&nbsp;<span
        style="color: #098658;">1rem</span>&nbsp;<span
        style="color: #098658;">0.5rem</span>&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">select</span>,</div>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">input</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:&nbsp;<span
        style="color: #0451a5;">transparent</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-family</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--fntFam</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">border-top</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">border-left</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">border-right</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span
        style="color: #ff0000;">border-bottom-width</span>:&nbsp;<span
        style="color: #098658;">1px</span>;</div>
     <div>&nbsp;<span
        style="color: #ff0000;">border-bottom-style</span>:&nbsp;<span
        style="color: #0451a5;">solid</span>;</div>
     <div>&nbsp;<span
        style="color: #ff0000;">border-bottom-color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCm</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">resize</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">outline</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
        style="color: #098658;">100%</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">transition</span>:&nbsp;<span
        style="color: #098658;">0.3s</span>&nbsp;<span
        style="color: #0451a5;">ease-in</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">:focus</span>&nbsp;{</div>
     <div>&nbsp;<span
        style="color: #ff0000;">border-bottom-width</span>:&nbsp;<span
        style="color: #098658;">2px</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">small</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">display</span>:&nbsp;<span
        style="color: #0451a5;">block</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">height</span>:&nbsp;<span
        style="color: #098658;">1em</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">font-size</span>:&nbsp;<span
        style="color: #098658;">0.75rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">padding-left</span>:&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colBk</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">transition</span>:&nbsp;<span
        style="color: #098658;">0.3s</span>&nbsp;<span
        style="color: #0451a5;">ease-in</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">:focus</span>+<span
        style="color: #800000;">label</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmFc</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">:focus</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">border-bottom-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmFc</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">:invalid</span>,</div>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">:focus:invalid</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">border-bottom-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmEr</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">outline</span>:&nbsp;<span
        style="color: #0451a5;">none</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">:invalid</span>+<span
        style="color: #800000;">label</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmEr</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">:invalid</span>~<span
        style="color: #800000;">small</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmEr</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">option</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">padding</span>:&nbsp;<span
        style="color: #098658;">0.3rem</span>&nbsp;<span
        style="color: #098658;">1rem</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colBk</span>);</div>
     <div>}</div><br>
     <div><span style="color: #800000;">cm-din</span>&nbsp;<span
        style="color: #800000;">option:checked</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
        style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmOp</span>);</div>
     <div>&nbsp;<span style="color: #ff0000;">background-color</span>:</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
        style="color: #001080;">--colCmOpBk</span>);</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("u4-cmp-din-css", U4CmpDinCss);