import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G4Movil extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. lib/movil.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #811f3f;">/.</span>*<span
        style="color: #811f3f;">android.</span>*<span
        style="color: #811f3f;">/</span><span style="color: #0000ff;">i</span>.
     </div>
     <div>&nbsp;<span style="color: #795e26;">test</span>(<span
        style="color: #001080;">navigator</span>.<span
        style="color: #0070c1;">userAgent</span>))&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #001080;">body</span>.<span
        style="color: #0070c1;">classList</span></div>
     <div>&nbsp;&nbsp;.<span style="color: #795e26;">add</span>(<span
        style="color: #a31515;">"android"</span>)</div>
     <div>}</div>
     <div><span style="color: #af00db;">if</span>&nbsp;(</div>
     <div>&nbsp;<span style="color: #811f3f;">/.</span>*<span
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
     <div>&nbsp;&nbsp;<span style="color: #795e26;">test</span>(<span
        style="color: #001080;">navigator</span>.<span
        style="color: #0070c1;">userAgent</span>))&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">document</span>.<span
        style="color: #001080;">body</span>.<span
        style="color: #0070c1;">classList</span>.</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">add</span>(<span
        style="color: #a31515;">'ios'</span>)</div>
     <div>}</div>
     <div><span
        style="color: #008000;">/**&nbsp;Sin&nbsp;un&nbsp;elemento&nbsp;tiene&nbsp;un</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;mensaje&nbsp;de&nbsp;validación,&nbsp;lo</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;muestra&nbsp;en&nbsp;su&nbsp;elemento&nbsp;de&nbsp;ayuda</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;y&nbsp;si&nbsp;no,&nbsp;muestra&nbsp;un&nbsp;texto&nbsp;de</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;ayuda.&nbsp;</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@param</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{HTMLInputElement|</span></div>
     <div><span style="color: #008000;">&nbsp;*</span><span
        style="color: #267f99;">&nbsp;&nbsp;HTMLTextAreaElement|</span></div>
     <div><span style="color: #008000;">&nbsp;*</span><span
        style="color: #267f99;">&nbsp;&nbsp;HTMLSelectElement|</span></div>
     <div><span style="color: #008000;">&nbsp;*</span><span
        style="color: #267f99;">&nbsp;&nbsp;HTMLOutputElement|null}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">e</span></div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;referencia&nbsp;a&nbsp;un&nbsp;elemento&nbsp;que</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;contiene&nbsp;datos.</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@param</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{HTMLOutputElement|</span></div>
     <div><span style="color: #008000;">&nbsp;*</span><span
        style="color: #267f99;">&nbsp;&nbsp;null}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">out</span></div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;elemento&nbsp;de&nbsp;ayuda&nbsp;para&nbsp;e.</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@param</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{string}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">ok</span><span
        style="color: #008000;">&nbsp;mensaje&nbsp;de</span></div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;ayuda&nbsp;cuando&nbsp;el&nbsp;estado&nbsp;de&nbsp;e&nbsp;es</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;válido.&nbsp;*/</span></div>
     <div><span style="color: #af00db;">export</span>&nbsp;<span
        style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">msg</span>(<span
        style="color: #001080;">e</span>,&nbsp;<span
        style="color: #001080;">out</span>,&nbsp;<span
        style="color: #001080;">ok</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">e</span>&nbsp;&amp;&amp;&nbsp;<span
        style="color: #001080;">out</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">validity</span>.<span
        style="color: #0070c1;">valid</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">out</span>.<span
        style="color: #001080;">value</span>&nbsp;=&nbsp;<span
        style="color: #001080;">ok</span></div>
     <div>&nbsp;&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">out</span>.<span
        style="color: #001080;">value</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #001080;">e</span>.<span
        style="color: #001080;">validationMessage</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}</div>
     <div>}</div><br>
     <div><span
        style="color: #008000;">/**&nbsp;Registra&nbsp;un&nbsp;service&nbsp;worker</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;para&nbsp;instalar&nbsp;la&nbsp;aplicación&nbsp;en</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;el&nbsp;caché&nbsp;del&nbsp;navegador.</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@param</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{string}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">sw</span><span
        style="color: #008000;">&nbsp;nombre&nbsp;del</span></div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;&nbsp;service&nbsp;worker.&nbsp;*/</span>
     </div>
     <div><span style="color: #af00db;">export</span>&nbsp;<span
        style="color: #0000ff;">async</span>&nbsp;<span
        style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">regSw</span>(<span
        style="color: #001080;">sw</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span
        style="color: #008000;">/*&nbsp;Registra&nbsp;el&nbsp;service&nbsp;worker,</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;que&nbsp;debe&nbsp;estar&nbsp;en&nbsp;la</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;carpeta&nbsp;principal.&nbsp;*/</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">registro</span>&nbsp;=&nbsp;<span
        style="color: #af00db;">await</span>&nbsp;<span
        style="color: #001080;">navigator</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">serviceWorker</span>.
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">register</span>(<span
        style="color: #001080;">sw</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">&grave;</span><span
        style="color: #0000ff;">&dollar;{</span><span
        style="color: #001080;">sw</span><span
        style="color: #0000ff;">}</span><span
        style="color: #a31515;">&nbsp;registrado.&grave;</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #0070c1;">registro</span>)</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">error</span>(<span
        style="color: #001080;">e</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">alert</span>(<span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span>)</div>
     <div>&nbsp;}</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("g4-movil", G4Movil);