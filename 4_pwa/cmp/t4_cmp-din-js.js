import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class T4CmpDinJs extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>T. lib/cm-din.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">export</span>&nbsp;<span
        style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">CmDin</span></div>
     <div>&nbsp;<span style="color: #0000ff;">extends</span>&nbsp;<span
        style="color: #267f99;">HTMLElement</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #795e26;">connectedCallback</span>()&nbsp;{
     </div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">setTimeout</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;()&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #0000ff;">this</span>.<span
        style="color: #795e26;">prepara</span>(),</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #098658;">100</span>)</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #795e26;">prepara</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">/**</span></div>
     <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@type</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{HTMLInputElement|</span></div>
     <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*</span><span
        style="color: #267f99;">&nbsp;&nbsp;HTMLSelectElement|</span></div>
     <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*</span><span
        style="color: #267f99;">&nbsp;&nbsp;HTMLOutputElement|</span></div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;null}&nbsp;*/</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #001080;">_elem</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">this</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">querySelector</span>(
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"input,&nbsp;select,&nbsp;output"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0000ff;">this</span>.<span
        style="color: #001080;">_elem</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #795e26;">addEventListener</span>(<span
        style="color: #a31515;">"input"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #0000ff;">this</span>.<span
        style="color: #795e26;">analiza</span>())</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #795e26;">analiza</span>();</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #795e26;">analiza</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">e</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">this</span>.<span
        style="color: #001080;">_elem</span></div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(!<span
        style="color: #0070c1;">e</span>.<span
        style="color: #001080;">validity</span>.<span
        style="color: #0070c1;">badInput</span>&nbsp;&amp;&amp;</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">e</span>.<span
        style="color: #001080;">value</span>.<span
        style="color: #0070c1;">length</span>&nbsp;===&nbsp;<span
        style="color: #098658;">0</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">e</span>.<span
        style="color: #0070c1;">classList</span>.<span
        style="color: #795e26;">remove</span>(<span
        style="color: #a31515;">"valor"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;}&nbsp;<span
        style="color: #af00db;">else</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">e</span>.<span
        style="color: #0070c1;">classList</span>.<span
        style="color: #795e26;">add</span>(<span
        style="color: #a31515;">"valor"</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>}</div>
     <div><span style="color: #001080;">customElements</span>.</div>
     <div>&nbsp;<span style="color: #795e26;">define</span>(<span
        style="color: #a31515;">"cm-din"</span>,&nbsp;<span
        style="color: #267f99;">CmDin</span>)</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("t4_cmp-din-js", T4CmpDinJs);