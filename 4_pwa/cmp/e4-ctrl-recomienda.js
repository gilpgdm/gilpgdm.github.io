import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E4CtrlRecomienda extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. js/CtrlRecomienda.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">import</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">msg</span></div>
     <div>}&nbsp;<span style="color: #af00db;">from</span>&nbsp;<span
        style="color: #a31515;">"../lib/movil.js"</span></div>
     <div><span style="color: #af00db;">import</span>&nbsp;<span
        style="color: #a31515;">"./config.js"</span></div><br>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">REQUERIDO</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"*Requerido"</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">form</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #795e26;">querySelector</span>(<span
        style="color: #a31515;">"form"</span>)</div><br>
     <div><span style="color: #008000;">/**</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@type</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{HTMLInputElement|null}</span></div>
     <div><span style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">inGenero</span>&nbsp;=&nbsp;<span
        style="color: #001080;">document</span>.</div>
     <div>&nbsp;<span style="color: #795e26;">querySelector</span>(<span
        style="color: #a31515;">"#inGenero"</span>)</div><br>
     <div><span style="color: #008000;">/**</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@type</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{HTMLOutputElement|null}</span></div>
     <div><span style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">msgGenero</span>&nbsp;=&nbsp;<span
        style="color: #001080;">document</span>.</div>
     <div>&nbsp;<span style="color: #795e26;">querySelector</span>(<span
        style="color: #a31515;">"#msgGenero"</span>)</div><br>
     <div><span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">inGenero</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span></div>
     <div>&nbsp;&amp;&amp;&nbsp;<span
        style="color: #001080;">form</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">inGenero</span>.<span
        style="color: #795e26;">addEventListener</span>(<span
        style="color: #a31515;">"input"</span>,</div>
     <div>&nbsp;&nbsp;()&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #795e26;">msg</span>(<span
        style="color: #001080;">inGenero</span>,&nbsp;<span
        style="color: #001080;">msgGenero</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">REQUERIDO</span>))
     </div>
     <div>&nbsp;<span style="color: #001080;">form</span>.<span
        style="color: #795e26;">addEventListener</span>(<span
        style="color: #a31515;">"submit"</span>,</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">recomienda</span>)</div>
     <div>}</div><br>
     <div><span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@param</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{Event}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">evt</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">recomienda</span>(<span
        style="color: #001080;">evt</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">evt</span>.<span
        style="color: #795e26;">preventDefault</span>()</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">inGenero</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span></div>
     <div>&nbsp;&nbsp;&amp;&amp;&nbsp;<span
        style="color: #001080;">form</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">outSalida</span>&nbsp;=&nbsp;<span
        style="color: #001080;">form</span>.<span
        style="color: #001080;">outSalida</span></div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">inGenero</span>.<span
        style="color: #001080;">validity</span>.<span
        style="color: #001080;">valid</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">genero</span>&nbsp;=&nbsp;<span
        style="color: #001080;">inGenero</span>.<span
        style="color: #001080;">value</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">genero</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"pop"</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">outSalida</span>.<span
        style="color: #001080;">value</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">&grave;Te&nbsp;recomiendo&nbsp;a</span></div>
     <div><span
        style="color: #a31515;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ariana&nbsp;Grande.&grave;</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span
        style="color: #af00db;">else</span>&nbsp;<span
        style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">genero</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;===&nbsp;<span
        style="color: #a31515;">"regueton"</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">outSalida</span>.<span
        style="color: #001080;">value</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"Te&nbsp;recomiendo&nbsp;a&nbsp;Bad&nbsp;Bunny."</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span
        style="color: #af00db;">else</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">outSalida</span>.<span
        style="color: #001080;">value</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"De&nbsp;ese&nbsp;género&nbsp;no&nbsp;conozco."</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;&nbsp;}&nbsp;<span
        style="color: #af00db;">else</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">outSalida</span>.<span
        style="color: #001080;">value</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">""</span></div>
     <div>&nbsp;&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;}&nbsp;<span
        style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">error</span>(<span
        style="color: #001080;">e</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">outSalida</span>.<span
        style="color: #001080;">value</span>&nbsp;=&nbsp;<span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("e4-ctrl-recomienda", E4CtrlRecomienda);