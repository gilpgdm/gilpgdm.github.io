import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F3Navegacion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Navegación</h1>
   <div class="lectura">
    <p>
     La bottom navigation en Material Design está definida en
     <a href="https://material.io/components/bottom-navigation"
       target="_blank">https://material.io/components/bottom-navigation</a>.
    </p>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/3_vistas/src/3f_navegacion.html"></iframe>
     <p class="noPrint">
      <a href="/3_vistas/src/3f_navegacion.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3ENavegaci%C3%B3n%3C%2Ftitle%3E%0A%20%3C!--%0A%20%20Carga%20los%20%C3%ADconos%20oficiales%20de%0A%20%20Material%20Design.%0A%20--%3E%0A%20%3Clink%20rel%3D%22stylesheet%22%0A%20%20%20href%3D%22https%3A%2F%2Ffonts.googleapis.com%2Fcss2%3Ffamily%3DMaterial%2BIcons%22%3E%0A%20%3Cstyle%3E%0A%20%20html%20%7B%0A%20%20%20--colTxt%3A%20black%3B%0A%20%20%20--colBk%3A%20white%3B%0A%20%20%20--colNv%3A%20white%3B%0A%20%20%20--colNvBk%3A%20%239c27b0%3B%0A%20%20%20--colNvBkAc%3A%20%23d05ce3%3B%0A%20%20%20--fntFam%3A%20-apple-system%2C%0A%20%20%20%20BlinkMacSystemFont%2C%20Roboto%2C%0A%20%20%20%20sans-serif%3B%0A%20%20%20color%3A%20var(--colTxt)%3B%0A%20%20%20font-family%3A%20var(--fntFam)%3B%0A%20%20%20background-color%3A%20var(--colBk)%3B%0A%20%20%7D%0A%0A%20%20%2F*%20El%20margin-bottom%20es%20m%C3%A1s%20grande%0A%20%20%20*%20para%20que%20no%20lo%20tape%20la%20barra%0A%20%20%20*%20de%20navegaci%C3%B3n.%20*%2F%0A%20%20body%20%7B%0A%20%20%20margin%3A%200%200%205rem%200%3B%0A%20%20%20scroll-padding-top%3A%203rem%3B%0A%20%20%20scroll-padding-bottom%3A%205rem%3B%0A%20%20%7D%0A%0A%20%20mi-nav%20%7B%0A%20%20%20position%3A%20fixed%3B%0A%20%20%20left%3A%200%3B%0A%20%20%20right%3A%200%3B%0A%20%20%20bottom%3A%200%3B%0A%20%20%20display%3A%20flex%3B%0A%20%20%20list-style-type%3A%20none%3B%0A%20%20%20justify-content%3A%20center%3B%0A%20%20%20align-items%3A%20stretch%3B%0A%20%20%20margin%3A%200%3B%0A%20%20%20padding%3A%200%3B%0A%20%20%20color%3A%20var(--colNv)%3B%0A%20%20%20background-color%3A%20var(--colNvBk)%0A%20%20%7D%0A%0A%20%20mi-nav%20a%20%7B%0A%20%20%20display%3A%20block%3B%0A%20%20%20color%3A%20var(--colNv)%3B%0A%20%20%20font-size%3A%200.75rem%3B%0A%20%20%20text-decoration%3A%20none%3B%0A%20%20%20padding-top%3A%200.5rem%3B%0A%20%20%20padding-bottom%3A%200.75rem%3B%0A%20%20%20padding-left%3A%200.75rem%3B%0A%20%20%20padding-right%3A%200.75rem%3B%0A%20%20%20text-align%3A%20center%3B%0A%20%20%7D%0A%0A%20%20mi-nav%20a%3Aactive%20%7B%0A%20%20%20background-position%3A%20center%3B%0A%20%20%20background-image%3A%0A%20%20%20%20radial-gradient(circle%2C%0A%20%20%20%20%20transparent%201%25%2C%0A%20%20%20%20%20var(--colNvBk)%201%25)%3B%0A%20%20%20background-size%3A%2015000%25%3B%0A%20%20%20animation-name%3A%20ripple%3B%0A%20%20%20animation-duration%3A%200.5s%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colNvBkAc)%3B%0A%20%20%7D%0A%0A%20%20mi-nav%20.material-icons%20%7B%0A%20%20%20display%3A%20block%3B%0A%20%20%20margin-left%3A%20auto%3B%0A%20%20%20margin-right%3A%20auto%3B%0A%20%20%7D%0A%0A%20%20%40keyframes%20ripple%20%7B%0A%20%20%20from%20%7B%0A%20%20%20%20background-size%3A%20100%25%3B%0A%20%20%20%7D%0A%0A%20%20%20to%20%7B%0A%20%20%20%20background-size%3A%2015000%25%3B%0A%20%20%20%7D%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Cmi-nav%3E%3C%2Fmi-nav%3E%0A%20%3Cscript%3E%0A%20%20class%20MiNav%20extends%20HTMLElement%20%7B%0A%20%20%20connectedCallback()%20%7B%0A%20%20%20%20this.innerHTML%20%3D%20%2F*%20html%20*%2F%0A%20%20%20%20%20%60%3Ca%20href%3D%22index.html%22%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22material-icons%22%3E%0A%20%20%20%20%20%20%20home%0A%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20Inicio%0A%20%20%20%20%20%3C%2Fa%3E%0A%20%20%20%20%20%3Ca%20href%3D%22ayuda.html%22%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22material-icons%22%3E%0A%20%20%20%20%20%20%20help%0A%20%20%20%20%20%20%3C%2Fspan%3E%0A%20%20%20%20%20%20Ayuda%0A%20%20%20%20%20%3C%2Fa%3E%60%3B%0A%20%20%20%7D%0A%20%20%7D%0A%20%20customElements.%0A%20%20%20define(%22mi-nav%22%2C%20MiNav)%3B%0A%20%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
    <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Navegación<span
       style="color: #800000;">&lt;/title&gt;</span></div>
    <div>&nbsp;<span style="color: #008000;">&lt;!--</span></div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;Carga&nbsp;los&nbsp;íconos&nbsp;oficiales&nbsp;de</span>
    </div>
    <div><span style="color: #008000;">&nbsp;&nbsp;Material&nbsp;Design.</span>
    </div>
    <div><span style="color: #008000;">&nbsp;--&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
       style="color: #ff0000;">rel</span>=<span
       style="color: #0000ff;">"stylesheet"</span></div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
       style="color: #0000ff;">"https://fonts.googleapis.com/css2?family=Material+Icons"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">html</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colTxt</span>:&nbsp;<span
       style="color: #0451a5;">black</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colBk</span>:&nbsp;<span
       style="color: #0451a5;">white</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colNv</span>:&nbsp;<span
       style="color: #0451a5;">white</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colNvBk</span>:&nbsp;<span
       style="color: #0451a5;">#9c27b0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colNvBkAc</span>:&nbsp;<span
       style="color: #0451a5;">#d05ce3</span>;</div>
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
    <div>&nbsp;&nbsp;<span
       style="color: #008000;">/*&nbsp;El&nbsp;margin-bottom&nbsp;es&nbsp;más&nbsp;grande</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;para&nbsp;que&nbsp;no&nbsp;lo&nbsp;tape&nbsp;la&nbsp;barra</span>
    </div>
    <div><span
       style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;de&nbsp;navegación.&nbsp;*/</span>
    </div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin</span>:&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">5rem</span>&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">scroll-padding-top</span>:&nbsp;<span
       style="color: #098658;">3rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">scroll-padding-bottom</span>:&nbsp;<span
       style="color: #098658;">5rem</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">mi-nav</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">position</span>:&nbsp;<span
       style="color: #0451a5;">fixed</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">left</span>:&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">right</span>:&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">bottom</span>:&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">display</span>:&nbsp;<span
       style="color: #0451a5;">flex</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">list-style-type</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">justify-content</span>:&nbsp;<span
       style="color: #0451a5;">center</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">align-items</span>:&nbsp;<span
       style="color: #0451a5;">stretch</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin</span>:&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">padding</span>:&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colNv</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colNvBk</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">mi-nav</span>&nbsp;<span
       style="color: #800000;">a</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">display</span>:&nbsp;<span
       style="color: #0451a5;">block</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colNv</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">font-size</span>:&nbsp;<span
       style="color: #098658;">0.75rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">text-decoration</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">padding-top</span>:&nbsp;<span
       style="color: #098658;">0.5rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">padding-bottom</span>:&nbsp;<span
       style="color: #098658;">0.75rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">padding-left</span>:&nbsp;<span
       style="color: #098658;">0.75rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">padding-right</span>:&nbsp;<span
       style="color: #098658;">0.75rem</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">text-align</span>:&nbsp;<span
       style="color: #0451a5;">center</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">mi-nav</span>&nbsp;<span
       style="color: #800000;">a:active</span>&nbsp;{</div>
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
       style="color: #001080;">--colNvBk</span>)&nbsp;<span
       style="color: #098658;">1%</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-size</span>:&nbsp;<span
       style="color: #098658;">15000%</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">animation-name</span>:&nbsp;ripple;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">animation-duration</span>:&nbsp;<span
       style="color: #098658;">0.5s</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colNvBkAc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">mi-nav</span>&nbsp;<span
       style="color: #800000;">.material-icons</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">display</span>:&nbsp;<span
       style="color: #0451a5;">block</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin-left</span>:&nbsp;<span
       style="color: #0451a5;">auto</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin-right</span>:&nbsp;<span
       style="color: #0451a5;">auto</span>;</div>
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
    <div>&nbsp;<span style="color: #800000;">&lt;mi-nav&gt;&lt;/mi-nav&gt;</span>
    </div>
    <div>&nbsp;<span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
       style="color: #267f99;">MiNav</span>&nbsp;<span
       style="color: #0000ff;">extends</span>&nbsp;<span
       style="color: #267f99;">HTMLElement</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #795e26;">connectedCallback</span>()&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
       style="color: #001080;">innerHTML</span>&nbsp;=&nbsp;<span
       style="color: #008000;">/*&nbsp;html&nbsp;*/</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&grave;<span
       style="color: #800000;">&lt;a</span>&nbsp;<span
       style="color: #ff0000;">href</span>=<span
       style="color: #0000ff;">"index.html"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #800000;">&lt;span</span>&nbsp;<span
       style="color: #ff0000;">class</span>=<span
       style="color: #0000ff;">"material-icons"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;home</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #800000;">&lt;/span&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inicio</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #800000;">&lt;/a&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #800000;">&lt;a</span>&nbsp;<span
       style="color: #ff0000;">href</span>=<span
       style="color: #0000ff;">"ayuda.html"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #800000;">&lt;span</span>&nbsp;<span
       style="color: #ff0000;">class</span>=<span
       style="color: #0000ff;">"material-icons"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;help</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #800000;">&lt;/span&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ayuda</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #800000;">&lt;/a&gt;</span>&grave;;</div>
    <div>&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;<span style="color: #001080;">customElements</span>.</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">define</span>(<span
       style="color: #a31515;">"mi-nav"</span>,&nbsp;<span
       style="color: #267f99;">MiNav</span>);</div>
    <div>&nbsp;<span style="color: #800000;">&lt;/script&gt;</span></div>
    <div><span style="color: #800000;">&lt;/body&gt;</span></div>
    <div><span style="color: #800000;">&lt;/html&gt;</span></div>
   </div>
     </muestra-codigo>
   </div>`;
 }
}

customElements.define("f3-navegacion", F3Navegacion);