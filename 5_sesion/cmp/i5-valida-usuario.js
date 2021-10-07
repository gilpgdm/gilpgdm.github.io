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
       <div><span style="color: #0000ff;">const</span>&nbsp;<span
             style="color: #267f99;">MongoClient</span>&nbsp;=</div>
       <div>&nbsp;&nbsp;<span style="color: #795e26;">require</span>(<span
             style="color: #a31515;">'mongodb'</span>).<span
             style="color: #267f99;">MongoClient</span>;</div>
       <div><span
             style="color: #008000;">/*&nbsp;Cambia&nbsp;el&nbsp;valor&nbsp;por&nbsp;el&nbsp;que&nbsp;te</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;*&nbsp;proporciona&nbsp;Atlas&nbsp;y&nbsp;cambia</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;*&nbsp;&lt;password&gt;&nbsp;por&nbsp;la&nbsp;contraseña</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;*&nbsp;del&nbsp;usuario&nbsp;que&nbsp;creaste&nbsp;dentro</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;*&nbsp;de&nbsp;Atlas.&nbsp;*/</span>
       </div>
       <div><span style="color: #0000ff;">const</span>&nbsp;<span
             style="color: #0070c1;">uri</span>&nbsp;=&nbsp;<span
             style="color: #a31515;">"mongodb+srv://UUU:&lt;password&gt;@cluster0.nvilc.mongodb.net/myFirstDatabase?retryWrites=true&amp;w=majority"</span>;
       </div><br>
       <div><span style="color: #008000;">/**</span></div>
       <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
             style="color: #0000ff;">@param</span><span
             style="color: #008000;">&nbsp;</span><span
             style="color: #267f99;">{import("express").</span></div>
       <div><span style="color: #008000;">&nbsp;*</span><span
             style="color: #267f99;">&nbsp;&nbsp;&nbsp;Request}</span><span
             style="color: #008000;">&nbsp;</span><span
             style="color: #001080;">req</span><span
             style="color: #008000;">&nbsp;solicitud&nbsp;que</span></div>
       <div><span
             style="color: #008000;">&nbsp;*&nbsp;&nbsp;recibe&nbsp;el&nbsp;&nbsp;servidor&nbsp;web.</span>
       </div>
       <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
             style="color: #0000ff;">@param</span><span
             style="color: #008000;">&nbsp;</span><span
             style="color: #267f99;">{import("express").</span></div>
       <div><span style="color: #008000;">&nbsp;*</span><span
             style="color: #267f99;">&nbsp;&nbsp;Response}</span><span
             style="color: #008000;">&nbsp;</span><span
             style="color: #001080;">res</span><span
             style="color: #008000;">&nbsp;respuesta&nbsp;que</span></div>
       <div><span
             style="color: #008000;">&nbsp;*&nbsp;&nbsp;devuelve&nbsp;el&nbsp;servidor&nbsp;web.&nbsp;*/</span>
       </div>
       <div><span style="color: #0000ff;">async</span>&nbsp;<span
             style="color: #0000ff;">function</span></div>
       <div>&nbsp;&nbsp;<span
             style="color: #795e26;">validaUsuario</span>(<span
             style="color: #001080;">req</span>,&nbsp;<span
             style="color: #001080;">res</span>)&nbsp;{</div>
       <div>&nbsp;&nbsp;<span
             style="color: #008000;">/*&nbsp;Crea&nbsp;un&nbsp;cliente&nbsp;que&nbsp;se</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;conecta&nbsp;a&nbsp;la&nbsp;base&nbsp;de</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;datos.&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
             style="color: #0070c1;">client</span>&nbsp;=&nbsp;<span
             style="color: #0000ff;">new</span>&nbsp;<span
             style="color: #267f99;">MongoClient</span>(</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">uri</span>,
       </div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;{</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #001080;">useNewUrlParser</span><span
             style="color: #001080;">:</span>&nbsp;<span
             style="color: #0000ff;">true</span>,</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #001080;">useUnifiedTopology</span><span
             style="color: #001080;">:</span>&nbsp;<span
             style="color: #0000ff;">true</span></div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;});</div>
       <div>&nbsp;&nbsp;<span style="color: #af00db;">try</span>&nbsp;{</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #af00db;">await</span>&nbsp;<span
             style="color: #0070c1;">client</span>.<span
             style="color: #795e26;">connect</span>();</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #0000ff;">const</span>&nbsp;<span
             style="color: #0070c1;">usuario</span>&nbsp;=&nbsp;<span
             style="color: #0070c1;">client</span>.</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #795e26;">db</span>(<span
             style="color: #a31515;">"aut"</span>).</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #795e26;">collection</span>(<span
             style="color: #a31515;">"usuario"</span>);</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #008000;">/*&nbsp;Los&nbsp;datos&nbsp;enviados&nbsp;por&nbsp;la</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;página&nbsp;vienen&nbsp;en&nbsp;la</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;propiedad&nbsp;body&nbsp;de&nbsp;req.&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #0000ff;">const</span>&nbsp;<span
             style="color: #0070c1;">datos</span>&nbsp;=&nbsp;<span
             style="color: #001080;">req</span>.<span
             style="color: #001080;">body</span>;</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #008000;">/*&nbsp;Cuenta&nbsp;en&nbsp;la&nbsp;base&nbsp;de&nbsp;datos</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;los&nbsp;documentos&nbsp;que&nbsp;tengan</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;nombre&nbsp;===&nbsp;datos.cue</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;y</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;contrasena&nbsp;===&nbsp;datos.match</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #0000ff;">const</span>&nbsp;<span
             style="color: #0070c1;">total</span>&nbsp;=&nbsp;<span
             style="color: #af00db;">await</span>&nbsp;<span
             style="color: #0070c1;">usuario</span>.</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #795e26;">countDocuments</span>({</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #001080;">nombre</span><span
             style="color: #001080;">:</span>&nbsp;<span
             style="color: #0070c1;">datos</span>.<span
             style="color: #001080;">cue</span>,</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #001080;">contrasena</span><span
             style="color: #001080;">:</span>&nbsp;<span
             style="color: #0070c1;">datos</span>.<span
             style="color: #001080;">match</span></div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #af00db;">if</span>&nbsp;(<span
             style="color: #0070c1;">total</span>&nbsp;&gt;&nbsp;<span
             style="color: #098658;">0</span>)&nbsp;{</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #008000;">/*&nbsp;Devuelve&nbsp;a&nbsp;la&nbsp;página&nbsp;el</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;texto&nbsp;"ok".&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #001080;">res</span>.<span
             style="color: #795e26;">send</span>(<span
             style="color: #a31515;">"ok"</span>);</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #af00db;">return</span>;</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #008000;">/*&nbsp;Devuelve&nbsp;a&nbsp;la&nbsp;página&nbsp;el</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;texto&nbsp;"".&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #001080;">res</span>.<span
             style="color: #795e26;">send</span>(<span
             style="color: #a31515;">""</span>);</div>
       <div>&nbsp;&nbsp;}&nbsp;<span
             style="color: #af00db;">catch</span>&nbsp;(<span
             style="color: #001080;">e</span>)&nbsp;{</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #001080;">res</span>.<span
             style="color: #795e26;">send</span>(<span
             style="color: #a31515;">""</span>);</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #001080;">console</span>.<span
             style="color: #795e26;">log</span>(<span
             style="color: #001080;">e</span>);</div>
       <div>&nbsp;&nbsp;}&nbsp;<span
             style="color: #af00db;">finally</span>&nbsp;{</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #0070c1;">client</span>.<span
             style="color: #795e26;">close</span>();</div>
       <div>&nbsp;&nbsp;}</div>
       <div>}</div><br>
       <div><span style="color: #795e26;">module</span>.<span
             style="color: #267f99;">exports</span>&nbsp;=&nbsp;<span
             style="color: #001080;">validaUsuario</span>;</div>
     </div>
   </muestra-codigo>`;
 }
}

customElements.define("i5-valida-usuario", I5ValidaUsuario);