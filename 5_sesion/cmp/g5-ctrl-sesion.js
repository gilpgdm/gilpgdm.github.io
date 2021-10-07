import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G5CtrlSesion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. www/js/CtrlSesion.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">CUE</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"cue"</span>;</div>
     <div><span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@type</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{HTMLFormElement|null}</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">sesión</span>&nbsp;=&nbsp;<span
        style="color: #001080;">document</span>[<span
        style="color: #a31515;">"sesión"</span>]</div>
     <div><span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@type</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{HTMLFormElement|null}</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">login</span>&nbsp;=&nbsp;<span
        style="color: #001080;">document</span>[<span
        style="color: #a31515;">"login"</span>]</div><br>
     <div><span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">humanoAcreditado</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">false</span></div><br>
     <div><span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">sesión</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #0070c1;">sesión</span>.<span
        style="color: #001080;">terminar</span>.<span
        style="color: #795e26;">addEventListener</span>(</div>
     <div>&nbsp;&nbsp;<span style="color: #a31515;">"click"</span>,&nbsp;<span
        style="color: #795e26;">terminaSesión</span>)</div>
     <div>}</div>
     <div><span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">login</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #0070c1;">login</span>.<span
        style="color: #795e26;">addEventListener</span>(<span
        style="color: #a31515;">"submit"</span>,</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">iniciaSesión</span>)</div>
     <div>&nbsp;<span style="color: #0070c1;">login</span>.<span
        style="color: #001080;">humano</span>.<span
        style="color: #795e26;">addEventListener</span>(</div>
     <div>&nbsp;&nbsp;<span style="color: #a31515;">"input"</span>,&nbsp;<span
        style="color: #795e26;">soyHumano</span>)</div>
     <div>}</div><br>
     <div><span style="color: #795e26;">muestraSesion</span>();</div><br>
     <div><span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">soyHumano</span>()&nbsp;{</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">login</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span
        style="color: #001080;">humanoAcreditado</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">login</span>.<span
        style="color: #001080;">humano</span>.<span
        style="color: #001080;">valueAsNumber</span>&nbsp;&gt;&nbsp;<span
        style="color: #098658;">0</span></div>
     <div>&nbsp;}</div>
     <div>}</div><br>
     <div><span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">muestraSesion</span>()&nbsp;{</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">cue</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">sessionStorage</span>.<span
        style="color: #795e26;">getItem</span>(<span
        style="color: #0070c1;">CUE</span>)</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">sesión</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">sesión</span>.<span
        style="color: #001080;">hidden</span>&nbsp;=&nbsp;<span
        style="color: #0070c1;">cue</span>&nbsp;===&nbsp;<span
        style="color: #0000ff;">null</span></div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">sesión</span>.<span
        style="color: #001080;">cue</span>.<span
        style="color: #001080;">value</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0070c1;">cue</span>&nbsp;===&nbsp;<span
        style="color: #0000ff;">null</span>&nbsp;?&nbsp;<span
        style="color: #a31515;">""</span>&nbsp;:&nbsp;<span
        style="color: #0070c1;">cue</span></div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">login</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">login</span>.<span
        style="color: #001080;">hidden</span>&nbsp;=&nbsp;<span
        style="color: #0070c1;">cue</span>&nbsp;!==&nbsp;<span
        style="color: #0000ff;">null</span></div>
     <div>&nbsp;}</div>
     <div>}</div><br>
     <div><span style="color: #008000;">/**&nbsp;</span><span
        style="color: #0000ff;">@param</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{Event}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">evt</span><span
        style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">async</span>&nbsp;<span
        style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">iniciaSesión</span>(<span
        style="color: #001080;">evt</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">evt</span>.<span
        style="color: #795e26;">preventDefault</span>();</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(!<span
        style="color: #0070c1;">login</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"Login&nbsp;nulo."</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(!<span
        style="color: #0070c1;">sesión</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #a31515;">"Sesión&nbsp;nula."</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(!<span
        style="color: #001080;">humanoAcreditado</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">alert</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"Comprueba&nbsp;que&nbsp;eres&nbsp;humano."</span>)
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">return</span>;</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span
        style="color: #008000;">//&nbsp;Toma&nbsp;los&nbsp;datos&nbsp;de&nbsp;la&nbsp;forma.</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">datos</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">FormData</span>(<span
        style="color: #0070c1;">login</span>)</div>
     <div>&nbsp;&nbsp;<span
        style="color: #008000;">/*&nbsp;Usa&nbsp;el&nbsp;método&nbsp;POST&nbsp;para&nbsp;enviar</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;los&nbsp;datos&nbsp;de&nbsp;la&nbsp;forma&nbsp;al</span>
     </div>
     <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;recurso</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;"/verifica"</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;en&nbsp;el&nbsp;servidor.&nbsp;*/</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">res</span>&nbsp;=&nbsp;<span
        style="color: #af00db;">await</span>&nbsp;<span
        style="color: #795e26;">fetch</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #a31515;">"/valida"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">method</span><span
        style="color: #001080;">:</span>&nbsp;<span
        style="color: #a31515;">"POST"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #001080;">body</span><span
        style="color: #001080;">:</span>&nbsp;<span
        style="color: #0070c1;">datos</span></div>
     <div>&nbsp;&nbsp;&nbsp;})</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">res</span>.<span
        style="color: #0070c1;">ok</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">resp</span>&nbsp;=&nbsp;<span
        style="color: #af00db;">await</span>&nbsp;<span
        style="color: #0070c1;">res</span>.<span
        style="color: #795e26;">text</span>()</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #0070c1;">resp</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">sessionStorage</span>.<span
        style="color: #795e26;">setItem</span>(<span
        style="color: #0070c1;">CUE</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #0070c1;">login</span>.<span
        style="color: #001080;">cue</span>.<span
        style="color: #001080;">value</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #795e26;">muestraSesion</span>()</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #0070c1;">login</span>.<span
        style="color: #001080;">cue</span>.<span
        style="color: #001080;">value</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">""</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #0070c1;">login</span>.<span
        style="color: #001080;">match</span>.<span
        style="color: #001080;">value</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">""</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #0070c1;">login</span>.<span
        style="color: #001080;">humano</span>.<span
        style="color: #001080;">valueAsNumber</span>&nbsp;=&nbsp;<span
        style="color: #098658;">0</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">humanoAcreditado</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">false</span></div>
     <div>&nbsp;&nbsp;&nbsp;}&nbsp;<span
        style="color: #af00db;">else</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #795e26;">alert</span>(<span
        style="color: #a31515;">"Datos&nbsp;incorrectos."</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #af00db;">throw</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Error</span>(<span
        style="color: #0070c1;">res</span>.<span
        style="color: #0070c1;">statusText</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">catch</span>&nbsp;(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">muestraError</span>(<span
        style="color: #001080;">e</span>)</div>
     <div>&nbsp;}</div>
     <div>}</div><br>
     <div><span style="color: #0000ff;">async</span>&nbsp;<span
        style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">terminaSesión</span>()&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">sessionStorage</span>.<span
        style="color: #795e26;">removeItem</span>(<span
        style="color: #0070c1;">CUE</span>)</div>
     <div>&nbsp;<span style="color: #795e26;">muestraSesion</span>()</div>
     <div>}</div><br>
     <div><span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">muestraError</span>(<span
        style="color: #001080;">e</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">error</span>(<span
        style="color: #001080;">e</span>)</div>
     <div>&nbsp;<span style="color: #795e26;">alert</span>(<span
        style="color: #001080;">e</span>.<span
        style="color: #001080;">message</span>)</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("g5-ctrl-sesion", G5CtrlSesion);