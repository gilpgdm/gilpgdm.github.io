import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B3App extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Una app básica</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Las barras de aplicación en Material Design están definidas en
       <a href="https://material.io/components/app-bars-top"
         target="_blank">https://material.io/components/app-bars-top</a>.
      </p>
     </li>
     <li>
      <p>
       La distribución básica de las aplicaciónes móviles incluye una barra de
       aplicación.
      </p>
     </li>
     <li>
      <p>En iOS el título se muestra centrado.</p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <iframe src="/3_vistas/src/3b_app.html"></iframe>
     <p class="noPrint">
      <a href="/3_vistas/src/3b_app.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EApp%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20html%20%7B%0A%20%20%20--colTxt%3A%20black%3B%0A%20%20%20--colBk%3A%20white%3B%0A%20%20%20--colPrim%3A%20white%3B%0A%20%20%20--colPrimBk%3A%20%239c27b0%3B%0A%20%20%20%2F*%20Los%202%20primeros%20fonts%20son%0A%20%20%20%20%20%20%20*%20para%20apple.%20*%2F%0A%20%20%20--fntFam%3A%20-apple-system%2C%0A%20%20%20%20BlinkMacSystemFont%2C%20sans-serif%3B%0A%20%20%20color%3A%20var(--colTxt)%3B%0A%20%20%20font-family%3A%20var(--fntFam)%3B%0A%20%20%20background-color%3A%20var(--colBk)%3B%0A%20%20%7D%0A%0A%20%20body%20%7B%0A%20%20%20margin%3A%200%3B%0A%20%20%20scroll-padding-top%3A%203rem%3B%0A%20%20%7D%0A%0A%20%20h1%20%7B%0A%20%20%20position%3A%20sticky%3B%0A%20%20%20top%3A%200%3B%0A%20%20%20margin%3A%200%3B%0A%20%20%20padding%3A%201rem%3B%0A%20%20%20font-size%3A%201.25rem%3B%0A%20%20%20color%3A%20var(--colPrim)%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colPrimBk)%3B%0A%20%20%7D%0A%0A%20%20.ios%20h1%20%7B%0A%20%20%20text-align%3A%20center%3B%0A%20%20%7D%0A%0A%20%20p%20%7B%0A%20%20%20margin%3A%201rem%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EApp%3C%2Fh1%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cp%3Ex%3C%2Fp%3E%0A%20%3Cscript%3E%0A%20%20if%20(%2F.*android.*%2Fi.%0A%20%20%20test(navigator.userAgent))%20%7B%0A%20%20%20document.body.classList%0A%20%20%20%20.add(%22android%22)%3B%0A%20%20%7D%0A%20%20if%20(%0A%20%20%20%2F.*(iPad%7CiPhone%7CiPod%7CMac).*%2F.%0A%20%20%20%20test(navigator.userAgent))%20%7B%0A%20%20%20document.body.classList.%0A%20%20%20%20add('ios')%3B%0A%20%20%7D%0A%20%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
    <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>App<span
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
       style="color: #ff0000;">--colPrim</span>:&nbsp;<span
       style="color: #0451a5;">white</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colPrimBk</span>:&nbsp;<span
       style="color: #0451a5;">#9c27b0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;Los&nbsp;2&nbsp;primeros&nbsp;fonts&nbsp;son</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;para&nbsp;apple.&nbsp;*/</span>
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--fntFam</span>:&nbsp;-apple-system,</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;BlinkMacSystemFont,&nbsp;<span
       style="color: #0451a5;">sans-serif</span>;</div>
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
    <div>&nbsp;&nbsp;<span style="color: #800000;">body</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin</span>:&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">scroll-padding-top</span>:&nbsp;<span
       style="color: #098658;">3rem</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">h1</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">position</span>:&nbsp;<span
       style="color: #0451a5;">sticky</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">top</span>:&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin</span>:&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">padding</span>:&nbsp;<span
       style="color: #098658;">1rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">font-size</span>:&nbsp;<span
       style="color: #098658;">1.25rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colPrim</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colPrimBk</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">.ios</span>&nbsp;<span
       style="color: #800000;">h1</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">text-align</span>:&nbsp;<span
       style="color: #0451a5;">center</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin</span>:&nbsp;<span
       style="color: #098658;">1rem</span>;</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
    <div><span style="color: #800000;">&lt;/head&gt;</span></div>
    <div><span style="color: #800000;">&lt;body&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>App<span
       style="color: #800000;">&lt;/h1&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>x<span
       style="color: #800000;">&lt;/p&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #811f3f;">/.</span>*<span
       style="color: #811f3f;">android.</span>*<span
       style="color: #811f3f;">/</span><span style="color: #0000ff;">i</span>.
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">test</span>(<span
       style="color: #001080;">navigator</span>.<span
       style="color: #0070c1;">userAgent</span>))&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #001080;">body</span>.<span
       style="color: #0070c1;">classList</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;.<span style="color: #795e26;">add</span>(<span
       style="color: #a31515;">"android"</span>);</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #811f3f;">/.</span>*<span
       style="color: #d16969;">(</span><span
       style="color: #811f3f;">iPad</span><span
       style="color: #ee0000;">|</span><span
       style="color: #811f3f;">iPhone</span><span
       style="color: #ee0000;">|</span><span
       style="color: #811f3f;">iPod</span><span
       style="color: #ee0000;">|</span><span
       style="color: #811f3f;">Mac</span><span
       style="color: #d16969;">)</span><span
       style="color: #811f3f;">.</span>*<span style="color: #811f3f;">/</span>.
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">test</span>(<span
       style="color: #001080;">navigator</span>.<span
       style="color: #0070c1;">userAgent</span>))&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #001080;">body</span>.<span
       style="color: #0070c1;">classList</span>.</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">add</span>(<span
       style="color: #a31515;">'ios'</span>);</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;<span style="color: #800000;">&lt;/script&gt;</span></div>
    <div><span style="color: #800000;">&lt;/body&gt;</span></div>
    <div><span style="color: #800000;">&lt;/html&gt;</span></div>
   </div>
 </muestra-codigo>
   </div>`;
 }
}

customElements.define("b3-app", B3App);