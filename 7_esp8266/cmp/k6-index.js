import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class K6Index extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>K. index.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #795e26;">express</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"express"</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #267f99;">http</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">require</span>(<span
        style="color: #a31515;">'http'</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">path</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"path"</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #267f99;">WebSocketServer</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #795e26;">require</span>(<span
        style="color: #a31515;">'websocket'</span>).<span
        style="color: #267f99;">server</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #795e26;">setValor</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"./setValor"</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #795e26;">getValor</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"./getValor"</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">app</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">express</span>()</div>
     <div><span style="color: #008000;">//&nbsp;@ts-ignore</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">httpServer</span>&nbsp;=&nbsp;<span
        style="color: #267f99;">http</span>.<span
        style="color: #267f99;">Server</span>(<span
        style="color: #0070c1;">app</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">archivos</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #0070c1;">path</span>.<span
        style="color: #795e26;">join</span>(<span
        style="color: #001080;">__dirname</span>,&nbsp;<span
        style="color: #a31515;">"www"</span>)</div><br>
     <div><span style="color: #0070c1;">app</span>.<span
        style="color: #795e26;">use</span>(<span
        style="color: #795e26;">express</span>.<span
        style="color: #795e26;">static</span>(<span
        style="color: #0070c1;">archivos</span>))</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">wsServer</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">WebSocketServer</span>({</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">httpServer</span></div>
     <div>&nbsp;})</div><br>
     <div><span style="color: #795e26;">getValor</span>().</div>
     <div>&nbsp;<span style="color: #795e26;">then</span>(<span
        style="color: #001080;">valor</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">cons</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">Set</span>()</div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">wsServer</span>.<span
        style="color: #795e26;">on</span>(<span
        style="color: #a31515;">'request'</span>,&nbsp;<span
        style="color: #001080;">req</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">con</span>&nbsp;=&nbsp;<span
        style="color: #001080;">req</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #795e26;">accept</span>(<span
        style="color: #0000ff;">undefined</span>,&nbsp;<span
        style="color: #001080;">req</span>.<span
        style="color: #001080;">origin</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">cons</span>.<span
        style="color: #795e26;">add</span>(<span
        style="color: #0070c1;">con</span>);</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"Conexión."</span>);</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"Envía"</span>,&nbsp;<span
        style="color: #a31515;">"cliente"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #001080;">valor</span>);
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">con</span>.<span
        style="color: #795e26;">sendUTF</span>(<span
        style="color: #001080;">valor</span>);</div><br>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">con</span>.<span
        style="color: #795e26;">on</span>(<span
        style="color: #a31515;">"message"</span>,&nbsp;<span
        style="color: #0000ff;">async</span>&nbsp;<span
        style="color: #001080;">men</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"Recibe"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #008000;">//&nbsp;@ts-ignore</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"cliente"</span>,&nbsp;<span
        style="color: #001080;">men</span>.<span
        style="color: #001080;">utf8Data</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">valor</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">valor</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"0"</span>&nbsp;?&nbsp;<span
        style="color: #a31515;">"1"</span>&nbsp;:&nbsp;<span
        style="color: #a31515;">"0"</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">await</span>&nbsp;<span
        style="color: #795e26;">setValor</span>(<span
        style="color: #001080;">valor</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"Envía"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"clientes"</span>,&nbsp;<span
        style="color: #001080;">valor</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #af00db;">for</span>&nbsp;(<span
        style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">item</span>&nbsp;<span
        style="color: #0000ff;">of</span>&nbsp;<span
        style="color: #0070c1;">cons</span>.<span
        style="color: #795e26;">keys</span>())&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">item</span>.<span
        style="color: #795e26;">sendUTF</span>(<span
        style="color: #001080;">valor</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;&nbsp;})</div><br>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">con</span>.<span
        style="color: #795e26;">on</span>(<span
        style="color: #a31515;">"close"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;(<span
        style="color: #001080;">razon</span>,&nbsp;<span
        style="color: #001080;">descripcion</span>)&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #0070c1;">cons</span>.<span
        style="color: #795e26;">delete</span>(<span
        style="color: #0070c1;">con</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"Desconexión"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">razon</span>,&nbsp;<span
        style="color: #001080;">descripcion</span>)</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;})</div>
     <div>&nbsp;&nbsp;})</div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">httpServer</span>.<span
        style="color: #795e26;">listen</span>(<span
        style="color: #098658;">3000</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;()&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"Escuchando&nbsp;puerto&nbsp;3000."</span>))
     </div>
     <div>&nbsp;}).</div>
     <div>&nbsp;<span style="color: #795e26;">catch</span>(<span
        style="color: #001080;">e</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #001080;">e</span>))</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("k6-index", K6Index);