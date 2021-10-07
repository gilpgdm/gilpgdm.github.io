import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class J6SetValor extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>J. setValor.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #795e26;">cliente</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"./cliente"</span>)</div><br>
     <div><span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@param</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{string}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">valor</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">async</span>&nbsp;<span
        style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">setValor</span>(<span
        style="color: #001080;">valor</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">client</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">cliente</span>()</div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">await</span>&nbsp;<span
        style="color: #0070c1;">client</span>.<span
        style="color: #795e26;">connect</span>()</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">iot</span>&nbsp;=&nbsp;<span
        style="color: #0070c1;">client</span>.<span
        style="color: #795e26;">db</span>(<span
        style="color: #a31515;">"iot"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">dispositivo</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">iot</span>.<span
        style="color: #795e26;">collection</span>(<span
        style="color: #a31515;">"dispositivo"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">historico</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">iot</span>.<span
        style="color: #795e26;">collection</span>(<span
        style="color: #a31515;">"historico"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"Envía"</span>,&nbsp;<span
        style="color: #a31515;">"bd"</span>,&nbsp;<span
        style="color: #001080;">valor</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">await</span>&nbsp;<span
        style="color: #0070c1;">dispositivo</span>.<span
        style="color: #795e26;">updateOne</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;{&nbsp;<span style="color: #001080;">_id</span><span
        style="color: #001080;">:</span>&nbsp;<span
        style="color: #a31515;">"1"</span>&nbsp;},</div>
     <div>&nbsp;&nbsp;&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #001080;">$set</span><span
        style="color: #001080;">:</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">valor</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;&nbsp;})</div>
     <div>&nbsp;&nbsp;<span
        style="color: #008000;">/**&nbsp;@type&nbsp;{import("./tipos").</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;historico}&nbsp;*/</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">modelo</span>&nbsp;=&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">dispositivoId</span><span
        style="color: #001080;">:</span>&nbsp;<span
        style="color: #a31515;">"1"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">valor</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">timestamp</span><span
        style="color: #001080;">:</span>&nbsp;<span
        style="color: #267f99;">Date</span>.<span
        style="color: #795e26;">now</span>()</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">await</span>&nbsp;<span
        style="color: #0070c1;">historico</span>.<span
        style="color: #795e26;">insertOne</span>(<span
        style="color: #0070c1;">modelo</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #001080;">e</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">finally</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">client</span>.<span
        style="color: #795e26;">close</span>()</div>
     <div>&nbsp;}</div>
     <div>}</div><br>
     <div><span style="color: #795e26;">module</span>.<span
        style="color: #795e26;">exports</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">setValor</span>;</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("j6-set-valor", J6SetValor);