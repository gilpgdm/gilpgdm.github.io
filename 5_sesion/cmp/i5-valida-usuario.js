import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class I5ValidaUsuario extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. validaUsuario.js</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">MongoClient</span> =</div>
   <div>&nbsp;<span style="color: #795e26;">require</span>(<span
      style="color: #a31515;">"mongodb"</span>).<span
      style="color: #001080;">MongoClient</span></div>
   <div><span style="color: #008000;">/* Cambia el valor por el que te</span>
   </div>
   <div><span style="color: #008000;">&nbsp;* proporciona Atlas y cambia</span>
   </div>
   <div><span style="color: #008000;">&nbsp;* &lt;password&gt; por la contraseña
     del</span></div>
   <div><span style="color: #008000;">&nbsp;* usuario que creaste dentro
     de</span></div>
   <div><span style="color: #008000;">&nbsp;* Atlas. */</span></div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">uri</span> = <span
      style="color: #a31515;">"mongodb+srv://*******"</span></div><br>
   <div><span style="color: #008000;">/**</span></div>
   <div><span style="color: #008000;">&nbsp;* </span><span
      style="color: #0000ff;">@param</span><span style="color: #008000;">
    </span><span style="color: #267f99;">{import("express").</span></div>
   <div><span style="color: #008000;">&nbsp;*</span><span
      style="color: #267f99;"> &nbsp; Request}</span><span
      style="color: #008000;"> </span><span
      style="color: #001080;">req</span><span style="color: #008000;"> solicitud
     que</span></div>
   <div><span style="color: #008000;">&nbsp;* &nbsp; &nbsp;recibe el
     &nbsp;servidor web.</span></div>
   <div><span style="color: #008000;">&nbsp;* </span><span
      style="color: #0000ff;">@param</span><span style="color: #008000;">
    </span><span style="color: #267f99;">{import("express").</span></div>
   <div><span style="color: #008000;">&nbsp;*</span><span
      style="color: #267f99;"> &nbsp;Response}</span><span
      style="color: #008000;"> </span><span
      style="color: #001080;">res</span><span style="color: #008000;"> respuesta
     que</span></div>
   <div><span style="color: #008000;">&nbsp;* &nbsp; &nbsp;devuelve el servidor
     web. */</span></div>
   <div><span style="color: #0000ff;">async</span> <span
      style="color: #0000ff;">function</span></div>
   <div>&nbsp;<span style="color: #795e26;">validaUsuario</span>(<span
      style="color: #001080;">req</span>, <span
      style="color: #001080;">res</span>) {</div>
   <div>&nbsp;<span style="color: #008000;">/* Crea un cliente que se
     conecta</span></div>
   <div><span style="color: #008000;">&nbsp; * a la base de datos. */</span>
   </div>
   <div>&nbsp;<span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">client</span> = <span
      style="color: #0000ff;">new</span> <span
      style="color: #795e26;">MongoClient</span>(</div>
   <div>&nbsp; <span style="color: #0070c1;">uri</span>,</div>
   <div>&nbsp; {</div>
   <div>&nbsp; &nbsp;<span style="color: #001080;">useNewUrlParser</span><span
      style="color: #001080;">:</span> <span
      style="color: #0000ff;">true</span>,</div>
   <div>&nbsp; &nbsp;<span
      style="color: #001080;">useUnifiedTopology</span><span
      style="color: #001080;">:</span> <span style="color: #0000ff;">true</span>
   </div>
   <div>&nbsp; })</div>
   <div>&nbsp;<span style="color: #af00db;">try</span> {</div>
   <div>&nbsp; <span style="color: #af00db;">await</span> <span
      style="color: #0070c1;">client</span>.<span
      style="color: #795e26;">connect</span>()</div>
   <div>&nbsp; <span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">usuario</span> = <span
      style="color: #0070c1;">client</span>.</div>
   <div>&nbsp; &nbsp;<span style="color: #795e26;">db</span>(<span
      style="color: #a31515;">"aut"</span>).</div>
   <div>&nbsp; &nbsp;<span style="color: #795e26;">collection</span>(<span
      style="color: #a31515;">"usuario"</span>)</div>
   <div>&nbsp; <span style="color: #008000;">/* Los datos enviados por la</span>
   </div>
   <div><span style="color: #008000;">&nbsp; &nbsp;* página vienen en la
     propiedad</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp;* body de req. */</span>
   </div>
   <div>&nbsp; <span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">datos</span> = <span
      style="color: #001080;">req</span>.<span
      style="color: #001080;">body</span></div>
   <div>&nbsp; <span style="color: #008000;">/* Cuenta en la base de
     datos</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp;* los documentos que
     tengan</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp;* &nbsp;nombre ===
     datos.cue</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp;* y</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp;* &nbsp;contrasena ===
     datos.match</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp;*/</span></div>
   <div>&nbsp; <span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">total</span> = <span
      style="color: #af00db;">await</span> <span
      style="color: #0070c1;">usuario</span>.</div>
   <div>&nbsp; &nbsp;<span style="color: #795e26;">countDocuments</span>({</div>
   <div>&nbsp; &nbsp; <span style="color: #001080;">nombre</span><span
      style="color: #001080;">:</span> <span
      style="color: #0070c1;">datos</span>.<span
      style="color: #001080;">cue</span>,</div>
   <div>&nbsp; &nbsp; <span style="color: #001080;">contrasena</span><span
      style="color: #001080;">:</span> <span
      style="color: #0070c1;">datos</span>.<span
      style="color: #001080;">match</span></div>
   <div>&nbsp; &nbsp;});</div>
   <div>&nbsp; <span style="color: #af00db;">if</span> (<span
      style="color: #0070c1;">total</span> &gt; <span
      style="color: #098658;">0</span>) {</div>
   <div>&nbsp; &nbsp;<span style="color: #008000;">/* Devuelve a la página el
     texto</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp; * &nbsp;"ok". */</span>
   </div>
   <div>&nbsp; &nbsp;<span style="color: #001080;">res</span>.<span
      style="color: #795e26;">send</span>(<span
      style="color: #a31515;">"ok"</span>);</div>
   <div>&nbsp; } <span style="color: #af00db;">else</span> {</div>
   <div>&nbsp; &nbsp;<span style="color: #008000;">/* Devuelve a la página el
     texto</span></div>
   <div><span style="color: #008000;">&nbsp; &nbsp; * &nbsp;"". */</span></div>
   <div>&nbsp; &nbsp;<span style="color: #001080;">res</span>.<span
      style="color: #795e26;">send</span>(<span
      style="color: #a31515;">""</span>)</div>
   <div>&nbsp; }</div>
   <div>&nbsp;} <span style="color: #af00db;">catch</span> (<span
      style="color: #001080;">e</span>) {</div>
   <div>&nbsp; <span style="color: #001080;">res</span>.<span
      style="color: #795e26;">send</span>(<span
      style="color: #a31515;">""</span>);</div>
   <div>&nbsp; <span style="color: #001080;">console</span>.<span
      style="color: #795e26;">log</span>(<span
      style="color: #001080;">e</span>);</div>
   <div>&nbsp;} <span style="color: #af00db;">finally</span> {</div>
   <div>&nbsp; <span style="color: #0070c1;">client</span>.<span
      style="color: #795e26;">close</span>();</div>
   <div>&nbsp;}</div>
   <div>}</div><br>
   <div><span style="color: #795e26;">module</span>.<span
      style="color: #795e26;">exports</span> = <span
      style="color: #795e26;">validaUsuario</span>;</div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("i5-valida-usuario", I5ValidaUsuario);