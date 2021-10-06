import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E3Botones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Botones</h1>
   <div class="lectura">
    <p>
     Los botones en Material Design están definidos en
     <a href="https://material.io/components/buttons"
       target="_blank">https://material.io/components/buttons</a>.
    </p>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/3_vistas/src/3e_botones.html"></iframe>
     <p class="noPrint">
      <a href="/3_vistas/src/3e_botones.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EBotones%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20html%20%7B%0A%20%20%20--colTxt%3A%20black%3B%0A%20%20%20--colBk%3A%20white%3B%0A%20%20%20--colCnt%3A%20white%3B%0A%20%20%20--colCntBk%3A%20%236a0080%3B%0A%20%20%20--colCntBkHv%3A%20%236a0080dd%3B%0A%20%20%20--colCntBkFc%3A%20%236a0080bb%3B%0A%20%20%20--colCntBkAc%3A%20%23d05ce3%3B%0A%20%20%20--colCntSh%3A%20%2300000055%3B%0A%20%20%20--fntFam%3A%20-apple-system%2C%0A%20%20%20%20BlinkMacSystemFont%2C%20Roboto%2C%0A%20%20%20%20sans-serif%3B%0A%20%20%20color%3A%20var(--colTxt)%3B%0A%20%20%20font-family%3A%20var(--fntFam)%3B%0A%20%20%20background-color%3A%20var(--colBk)%3B%0A%20%20%7D%0A%0A%20%20.contained%20%7B%0A%20%20%20font-family%3A%20var(--fntFam)%3B%0A%20%20%20text-transform%3A%20uppercase%3B%0A%20%20%20color%3A%20var(--colCnt)%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colCntBk)%3B%0A%20%20%20font-size%3A%200.875rem%3B%0A%20%20%20padding%3A%200.5rem%201rem%3B%0A%20%20%20border%3A%20none%3B%0A%20%20%20border-radius%3A%204px%3B%0A%20%20%7D%0A%0A%20%20.contained%3Ahover%2C%0A%20%20.contained%3Afocus%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%203px%206px%20var(--colCntSh)%3B%0A%20%20%7D%0A%0A%20%20.contained%3Ahover%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colCntBkHv)%3B%0A%20%20%7D%0A%0A%20%20.contained%3Afocus%20%7B%0A%20%20%20outline%3A%20none%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colCntBkFc)%3B%0A%20%20%7D%0A%0A%20%20.contained%3Aactive%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%206px%2012px%20var(--colCntSh)%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colCntBkAc)%3B%0A%20%20%20background-position%3A%20center%3B%0A%20%20%20background-image%3A%0A%20%20%20%20radial-gradient(circle%2C%0A%20%20%20%20%20transparent%201%25%2C%0A%20%20%20%20%20var(--colCntBkHv)%201%25)%3B%0A%20%20%20background-size%3A%2015000%25%3B%0A%20%20%20animation-name%3A%20ripple%3B%0A%20%20%20animation-duration%3A%200.5s%3B%0A%20%20%7D%0A%0A%20%20%40keyframes%20ripple%20%7B%0A%20%20%20from%20%7B%0A%20%20%20%20background-size%3A%20100%25%3B%0A%20%20%20%7D%0A%0A%20%20%20to%20%7B%0A%20%20%20%20background-size%3A%2015000%25%3B%0A%20%20%20%7D%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EBotones%3C%2Fh1%3E%0A%20%3Cp%3E%0A%20%20%3Cbutton%20class%3D%22contained%22%3E%0A%20%20%20Haz%20Clic%0A%20%20%3C%2Fbutton%3E%0A%20%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
       Revísalo en gilpgedit.</a>
     </p>
    </div>
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
    <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Botones<span
       style="color: #800000;">&lt;/title&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">html</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colTxt</span>:&nbsp;<span
       style="color: #0451a5;">black</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colBk</span>:&nbsp;<span
       style="color: #0451a5;">white</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colCnt</span>:&nbsp;<span
       style="color: #0451a5;">white</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colCntBk</span>:&nbsp;<span
       style="color: #0451a5;">#6a0080</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colCntBkHv</span>:&nbsp;<span
       style="color: #0451a5;">#6a0080dd</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colCntBkFc</span>:&nbsp;<span
       style="color: #0451a5;">#6a0080bb</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colCntBkAc</span>:&nbsp;<span
       style="color: #0451a5;">#d05ce3</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colCntSh</span>:&nbsp;<span
       style="color: #0451a5;">#00000055</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--fntFam</span>:&nbsp;-apple-system,</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;BlinkMacSystemFont,&nbsp;Roboto,</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0451a5;">sans-serif</span>;
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colTxt</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">font-family</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--fntFam</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colBk</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">.contained</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">font-family</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--fntFam</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">text-transform</span>:&nbsp;<span
       style="color: #0451a5;">uppercase</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colCnt</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colCntBk</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">font-size</span>:&nbsp;<span
       style="color: #098658;">0.875rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">padding</span>:&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #098658;">1rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">4px</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">.contained:hover</span>,</div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">.contained:focus</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">3px</span>&nbsp;<span
       style="color: #098658;">6px</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colCntSh</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">.contained:hover</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colCntBkHv</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">.contained:focus</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">outline</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colCntBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span
       style="color: #800000;">.contained:active</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">6px</span>&nbsp;<span
       style="color: #098658;">12px</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colCntSh</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colCntBkAc</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-position</span>:&nbsp;<span
       style="color: #0451a5;">center</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-image</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #795e26;">radial-gradient</span>(<span
       style="color: #0451a5;">circle</span>,</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0451a5;">transparent</span>&nbsp;<span
       style="color: #098658;">1%</span>,</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colCntBkHv</span>)&nbsp;<span
       style="color: #098658;">1%</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-size</span>:&nbsp;<span
       style="color: #098658;">15000%</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">animation-name</span>:&nbsp;ripple;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">animation-duration</span>:&nbsp;<span
       style="color: #098658;">0.5s</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">@keyframes</span>&nbsp;<span
       style="color: #001080;">ripple</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;from&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-size</span>:&nbsp;<span
       style="color: #098658;">100%</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;&nbsp;to&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-size</span>:&nbsp;<span
       style="color: #098658;">15000%</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
    <div><span style="color: #800000;">&lt;/head&gt;</span></div>
    <div><span style="color: #800000;">&lt;body&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Botones<span
       style="color: #800000;">&lt;/h1&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;button</span>&nbsp;<span
       style="color: #ff0000;">class</span>=<span
       style="color: #0000ff;">"contained"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;Haz&nbsp;Clic</div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/button&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
    <div><span style="color: #800000;">&lt;/body&gt;</span></div>
    <div><span style="color: #800000;">&lt;/html&gt;</span></div>
   </div>
     </muestra-codigo>
   </div>`;
 }
}

customElements.define("e3-botones", E3Botones);