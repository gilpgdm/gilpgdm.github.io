import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class P4Estilos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>P. css/estilos.css</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">@import</span>&nbsp;<span
        style="color: #a31515;">"../lib/css/principal.css"</span>;</div>
     <div><span style="color: #af00db;">@import</span>&nbsp;<span
        style="color: #a31515;">"../lib/css/ripple.css"</span>;</div>
     <div><span style="color: #af00db;">@import</span>&nbsp;<span
        style="color: #a31515;">"../lib/css/botones.css"</span>;</div>
     <div><span style="color: #af00db;">@import</span>&nbsp;<span
        style="color: #a31515;">"../lib/css/cm-din.css"</span>;</div>
     <div><span style="color: #af00db;">@import</span>&nbsp;<span
        style="color: #a31515;">"../lib/css/mi-nav.css"</span>;</div><br>
     <div><span style="color: #800000;">html</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">--colTxt</span>:&nbsp;<span
        style="color: #0451a5;">black</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colBk</span>:&nbsp;<span
        style="color: #0451a5;">white</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colPrim</span>:&nbsp;<span
        style="color: #0451a5;">white</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colPrimBk</span>:&nbsp;<span
        style="color: #0451a5;">#9c27b0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCnt</span>:&nbsp;<span
        style="color: #0451a5;">white</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCntBk</span>:&nbsp;<span
        style="color: #0451a5;">#6a0080</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCntBkHv</span>:&nbsp;<span
        style="color: #0451a5;">#6a0080dd</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCntBkFc</span>:&nbsp;<span
        style="color: #0451a5;">#6a0080bb</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCntBkAc</span>:&nbsp;<span
        style="color: #0451a5;">#d05ce3</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCntSh</span>:&nbsp;<span
        style="color: #0451a5;">#00000055</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colNv</span>:&nbsp;<span
        style="color: #0451a5;">white</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colNvBk</span>:&nbsp;<span
        style="color: #0451a5;">#9c27b0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colNvBkAc</span>:&nbsp;<span
        style="color: #0451a5;">#d05ce3</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colTxt</span>:&nbsp;<span
        style="color: #0451a5;">black</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colBk</span>:&nbsp;<span
        style="color: #0451a5;">white</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCm</span>:&nbsp;<span
        style="color: #0451a5;">gray</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCmFc</span>:&nbsp;<span
        style="color: #0451a5;">#6a0080</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCmEr</span>:&nbsp;<span
        style="color: #0451a5;">#b00020</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCmBk</span>:&nbsp;<span
        style="color: #0451a5;">#F5F5F5</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCmBkHv</span>:&nbsp;<span
        style="color: #0451a5;">#EEEEEE</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCmBkFc</span>:&nbsp;<span
        style="color: #0451a5;">#E0E0E0</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCmOp</span>:&nbsp;<span
        style="color: #0451a5;">white</span>;</div>
     <div>&nbsp;<span style="color: #ff0000;">--colCmOpBk</span>:&nbsp;<span
        style="color: #0451a5;">#9c27b0</span>;</div>
     <div>}</div><br>
     <div><span style="color: #800000;">body</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #ff0000;">margin</span>:&nbsp;<span
        style="color: #098658;">0</span>&nbsp;<span
        style="color: #098658;">0</span>&nbsp;<span
        style="color: #098658;">5rem</span>&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;<span
        style="color: #ff0000;">scroll-padding-top</span>:&nbsp;<span
        style="color: #098658;">3rem</span>;</div>
     <div>&nbsp;<span
        style="color: #ff0000;">scroll-padding-bottom</span>:&nbsp;<span
        style="color: #098658;">5rem</span>;</div>
     <div>}</div>
    </div>`;
 }
}

customElements.define("p4-estilos", P4Estilos);