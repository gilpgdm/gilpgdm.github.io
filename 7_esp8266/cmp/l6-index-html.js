import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class L6IndexHtml extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>L. www/index.html</h1>
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
        style="color: #0000ff;">"utf-8"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
        style="color: #ff0000;">name</span>=<span
        style="color: #0000ff;">"viewport"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
        style="color: #0000ff;">"width=device-width"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>IoT<span
        style="color: #800000;">&lt;/title&gt;</span></div>
     <div><span style="color: #800000;">&lt;/head&gt;</span></div>
     <div><span style="color: #800000;">&lt;body&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>IoT<span
        style="color: #800000;">&lt;/h1&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;output</span>&nbsp;<span
        style="color: #ff0000;">id</span>=<span
        style="color: #0000ff;">"salida"</span><span
        style="color: #800000;">&gt;&lt;/output&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;button</span>&nbsp;<span
        style="color: #ff0000;">type</span>=<span
        style="color: #0000ff;">"button"</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #ff0000;">onclick</span>=<span
        style="color: #0000ff;">"</span><span
        style="color: #795e26;">envia</span><span
        style="color: #0000ff;">()</span><span
        style="color: #0000ff;">"</span><span style="color: #800000;">&gt;</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;Enviar</div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/button&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;script&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">let</span>&nbsp;<span
        style="color: #001080;">valor</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">""</span></div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">ws</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #267f99;">WebSocket</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"wss://ws1.gilbertopacheco.repl.co"</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">ws</span>.<span
        style="color: #001080;">onopen</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;()&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">'Conectado'</span>)</div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">ws</span>.<span
        style="color: #001080;">onmessage</span>&nbsp;=&nbsp;<span
        style="color: #001080;">evt</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">valor</span>&nbsp;=&nbsp;<span
        style="color: #001080;">evt</span>.<span
        style="color: #001080;">data</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">salida</span>.<span
        style="color: #001080;">value</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">valor</span>&nbsp;===&nbsp;<span
        style="color: #a31515;">"1"</span>&nbsp;?&nbsp;<span
        style="color: #a31515;">"🔴"</span>&nbsp;:&nbsp;<span
        style="color: #a31515;">"⚪"</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">envia</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">ws</span>.<span
        style="color: #795e26;">send</span>(<span
        style="color: #001080;">valor</span>)</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;<span style="color: #800000;">&lt;/script&gt;</span></div>
     <div><span style="color: #800000;">&lt;/body&gt;</span></div>
     <div><span style="color: #800000;">&lt;/html&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("l6-index-html", L6IndexHtml);