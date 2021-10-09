import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G5CtrlSesion extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. www/CtrlSesion.js</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">CUE</span> = <span
      style="color: #a31515;">"cue"</span>;</div>
   <div><span style="color: #008000;">/** </span><span
      style="color: #0000ff;">@type</span><span style="color: #008000;">
    </span><span style="color: #267f99;">{HTMLFormElement|null}</span><span
      style="color: #008000;"> */</span></div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">sesion</span> = <span
      style="color: #001080;">document</span>[<span
      style="color: #a31515;">"sesion"</span>]</div>
   <div><span style="color: #008000;">/** </span><span
      style="color: #0000ff;">@type</span><span style="color: #008000;">
    </span><span style="color: #267f99;">{HTMLFormElement|null}</span><span
      style="color: #008000;"> */</span></div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">login</span> = <span
      style="color: #001080;">document</span>[<span
      style="color: #a31515;">"login"</span>]</div><br>
   <div><span style="color: #0000ff;">let</span> <span
      style="color: #001080;">esHumano</span> = <span
      style="color: #0000ff;">false</span></div><br>
   <div><span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">sesion</span> !== <span
      style="color: #0000ff;">null</span>) {</div>
   <div>&nbsp;<span style="color: #0070c1;">sesion</span>.<span
      style="color: #001080;">terminar</span>.<span
      style="color: #795e26;">addEventListener</span>(</div>
   <div>&nbsp; <span style="color: #a31515;">"click"</span>, <span
      style="color: #795e26;">terminaSesión</span>)</div>
   <div>}</div>
   <div><span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">login</span> !== <span
      style="color: #0000ff;">null</span>) {</div>
   <div>&nbsp;<span style="color: #0070c1;">login</span>.<span
      style="color: #795e26;">addEventListener</span>(<span
      style="color: #a31515;">"submit"</span>,</div>
   <div>&nbsp; <span style="color: #795e26;">iniciaSesión</span>)</div>
   <div>&nbsp;<span style="color: #0070c1;">login</span>.<span
      style="color: #001080;">humano</span>.<span
      style="color: #795e26;">addEventListener</span>(</div>
   <div>&nbsp; <span style="color: #a31515;">"input"</span>, () <span
      style="color: #0000ff;">=&gt;</span> <span
      style="color: #001080;">esHumano</span> =</div>
   <div>&nbsp; &nbsp;<span style="color: #0070c1;">login</span>.<span
      style="color: #001080;">humano</span>.<span
      style="color: #001080;">valueAsNumber</span> &gt; <span
      style="color: #098658;">0</span></div>
   <div>&nbsp;)</div>
   <div>}</div><br>
   <div><span style="color: #795e26;">actualizaFormas</span>();</div><br>
   <div><span style="color: #0000ff;">function</span> <span
      style="color: #795e26;">actualizaFormas</span>() {</div>
   <div>&nbsp;<span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">cue</span> =</div>
   <div>&nbsp; <span style="color: #001080;">sessionStorage</span>.<span
      style="color: #795e26;">getItem</span>(<span
      style="color: #0070c1;">CUE</span>)</div>
   <div>&nbsp;<span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">sesion</span> !== <span
      style="color: #0000ff;">null</span>) {</div>
   <div>&nbsp; <span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">cue</span> === <span
      style="color: #0000ff;">null</span>) {</div>
   <div>&nbsp; &nbsp;<span style="color: #008000;">// Sesión terminada.</span>
   </div>
   <div>&nbsp; &nbsp;<span style="color: #0070c1;">sesion</span>.<span
      style="color: #001080;">hidden</span> = <span
      style="color: #0000ff;">true</span></div>
   <div>&nbsp; &nbsp;<span style="color: #0070c1;">sesion</span>.<span
      style="color: #001080;">cue</span>.<span
      style="color: #001080;">value</span> = <span
      style="color: #a31515;">""</span></div>
   <div>&nbsp; } <span style="color: #af00db;">else</span> {</div>
   <div>&nbsp; &nbsp;<span style="color: #008000;">// Sesión iniciada.</span>
   </div>
   <div>&nbsp; &nbsp;<span style="color: #0070c1;">sesion</span>.<span
      style="color: #001080;">hidden</span> = <span
      style="color: #0000ff;">false</span></div>
   <div>&nbsp; &nbsp;<span style="color: #0070c1;">sesion</span>.<span
      style="color: #001080;">cue</span>.<span
      style="color: #001080;">value</span> = <span
      style="color: #0070c1;">cue</span></div>
   <div>&nbsp; }</div>
   <div>&nbsp;}</div>
   <div>&nbsp;<span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">login</span> !== <span
      style="color: #0000ff;">null</span>) {</div>
   <div>&nbsp; <span style="color: #0070c1;">login</span>.<span
      style="color: #001080;">cue</span>.<span
      style="color: #001080;">value</span> = <span
      style="color: #a31515;">""</span></div>
   <div>&nbsp; <span style="color: #0070c1;">login</span>.<span
      style="color: #001080;">match</span>.<span
      style="color: #001080;">value</span> = <span
      style="color: #a31515;">""</span></div>
   <div>&nbsp; <span style="color: #0070c1;">login</span>.<span
      style="color: #001080;">humano</span>.<span
      style="color: #001080;">valueAsNumber</span> = <span
      style="color: #098658;">0</span></div>
   <div>&nbsp; <span style="color: #001080;">esHumano</span> = <span
      style="color: #0000ff;">false</span>;</div>
   <div>&nbsp; <span style="color: #0070c1;">login</span>.<span
      style="color: #001080;">hidden</span> = <span
      style="color: #0070c1;">cue</span> !== <span
      style="color: #0000ff;">null</span></div>
   <div>&nbsp;}</div>
   <div>}</div>
   <div><span style="color: #008000;">/** </span><span
      style="color: #0000ff;">@param</span><span style="color: #008000;">
    </span><span style="color: #267f99;">{Event}</span><span
      style="color: #008000;"> </span><span
      style="color: #001080;">evt</span><span style="color: #008000;"> */</span>
   </div>
   <div><span style="color: #0000ff;">async</span> <span
      style="color: #0000ff;">function</span> <span
      style="color: #795e26;">iniciaSesión</span>(<span
      style="color: #001080;">evt</span>) {</div>
   <div>&nbsp;<span style="color: #af00db;">try</span> {</div>
   <div>&nbsp; <span style="color: #001080;">evt</span>.<span
      style="color: #795e26;">preventDefault</span>();</div>
   <div>&nbsp; <span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">login</span> &amp;&amp; <span
      style="color: #0070c1;">sesion</span>) {</div>
   <div>&nbsp; &nbsp;<span style="color: #af00db;">if</span> (!<span
      style="color: #001080;">esHumano</span>) {</div>
   <div>&nbsp; &nbsp; <span style="color: #af00db;">throw</span> <span
      style="color: #0000ff;">new</span> <span
      style="color: #267f99;">Error</span>(</div>
   <div>&nbsp; &nbsp; &nbsp;<span style="color: #a31515;">"Comprueba que eres
     humano."</span>)</div>
   <div>&nbsp; &nbsp;}</div>
   <div>&nbsp; &nbsp;<span style="color: #008000;">// Toma los datos de la
     forma.</span></div>
   <div>&nbsp; &nbsp;<span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">datos</span> =</div>
   <div>&nbsp; &nbsp; <span style="color: #0000ff;">new</span> <span
      style="color: #267f99;">FormData</span>(<span
      style="color: #0070c1;">login</span>)</div>
   <div>&nbsp; &nbsp;<span style="color: #008000;">/* Usa el método POST
     para</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp; * enviar los datos de la
     forma</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp; * al recurso</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp; * &nbsp;"/valida"</span>
   </div>
   <div><span style="color: #008000;">&nbsp; &nbsp; * en el servidor. */</span>
   </div>
   <div>&nbsp; &nbsp;<span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">res</span> = <span
      style="color: #af00db;">await</span> <span
      style="color: #795e26;">fetch</span>(</div>
   <div>&nbsp; &nbsp; <span style="color: #a31515;">"/valida"</span>,</div>
   <div>&nbsp; &nbsp; {</div>
   <div>&nbsp; &nbsp; &nbsp;<span style="color: #001080;">method</span><span
      style="color: #001080;">:</span> <span
      style="color: #a31515;">"POST"</span>,</div>
   <div>&nbsp; &nbsp; &nbsp;<span style="color: #001080;">body</span><span
      style="color: #001080;">:</span> <span style="color: #0070c1;">datos</span>
   </div>
   <div>&nbsp; &nbsp; })</div>
   <div>&nbsp; &nbsp;<span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">res</span>.<span style="color: #0070c1;">ok</span>)
    {</div>
   <div>&nbsp; &nbsp; <span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">resp</span> = <span
      style="color: #af00db;">await</span> <span
      style="color: #0070c1;">res</span>.<span
      style="color: #795e26;">text</span>()</div>
   <div>&nbsp; &nbsp; <span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">resp</span> === <span
      style="color: #a31515;">"ok"</span>) {</div>
   <div>&nbsp; &nbsp; &nbsp;<span
      style="color: #001080;">sessionStorage</span>.<span
      style="color: #795e26;">setItem</span>(<span
      style="color: #0070c1;">CUE</span>,</div>
   <div>&nbsp; &nbsp; &nbsp; <span style="color: #0070c1;">login</span>.<span
      style="color: #001080;">cue</span>.<span
      style="color: #001080;">value</span>)</div>
   <div>&nbsp; &nbsp; &nbsp;<span
      style="color: #795e26;">actualizaFormas</span>()</div>
   <div>&nbsp; &nbsp; } <span style="color: #af00db;">else</span> {</div>
   <div>&nbsp; &nbsp; &nbsp;<span style="color: #795e26;">alert</span>(<span
      style="color: #a31515;">"Datos incorrectos."</span>)</div>
   <div>&nbsp; &nbsp; }</div>
   <div>&nbsp; &nbsp;} <span style="color: #af00db;">else</span> {</div>
   <div>&nbsp; &nbsp; <span style="color: #af00db;">throw</span> <span
      style="color: #0000ff;">new</span> <span
      style="color: #267f99;">Error</span>(<span
      style="color: #0070c1;">res</span>.<span
      style="color: #0070c1;">statusText</span>)</div>
   <div>&nbsp; &nbsp;}</div>
   <div>&nbsp; }</div>
   <div>&nbsp;} <span style="color: #af00db;">catch</span> (<span
      style="color: #001080;">e</span>) {</div>
   <div>&nbsp; <span style="color: #001080;">console</span>.<span
      style="color: #795e26;">error</span>(<span
      style="color: #001080;">e</span>)</div>
   <div>&nbsp; <span style="color: #795e26;">alert</span>(<span
      style="color: #001080;">e</span>.<span
      style="color: #001080;">message</span>)</div>
   <div>&nbsp;}</div>
   <div>}</div><br>
   <div><span style="color: #0000ff;">async</span> <span
      style="color: #0000ff;">function</span> <span
      style="color: #795e26;">terminaSesión</span>() {</div>
   <div>&nbsp;<span style="color: #001080;">sessionStorage</span>.<span
      style="color: #795e26;">removeItem</span>(<span
      style="color: #0070c1;">CUE</span>)</div>
   <div>&nbsp;<span style="color: #795e26;">actualizaFormas</span>()</div>
   <div>}</div>
  </div>
    </muestra-codigo>`;
 }
}

customElements.define("g5-ctrl-sesion", G5CtrlSesion);