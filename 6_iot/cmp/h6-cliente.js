import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class H6Cliente extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. cliente.js</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">MongoClient</span> =</div>
   <div>&nbsp;<span style="color: #795e26;">require</span>(<span
      style="color: #a31515;">"mongodb"</span>).<span
      style="color: #001080;">MongoClient</span>;</div>
   <div><span style="color: #008000;">/* Cambia el valor por el que te</span>
   </div>
   <div><span style="color: #008000;">&nbsp;* proporciona Atlas y cambia</span>
   </div>
   <div><span style="color: #008000;">&nbsp;* &lt;password&gt; por la
     contraseña</span></div>
   <div><span style="color: #008000;">&nbsp;* del usuario que creaste
     dentro</span></div>
   <div><span style="color: #008000;">&nbsp;* de Atlas. */</span></div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">uri</span> =</div>
   <div>&nbsp;<span
      style="color: #a31515;">"mongodb+srv://*****************"</span></div><br>
   <div><span style="color: #0000ff;">function</span> <span
      style="color: #795e26;">cliente</span>() {</div>
   <div>&nbsp;<span style="color: #af00db;">return</span> <span
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
   <div>&nbsp; });</div>
   <div>}</div><br>
   <div><span style="color: #795e26;">module</span>.<span
      style="color: #795e26;">exports</span> = <span
      style="color: #795e26;">cliente</span>;</div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("h6-cliente", H6Cliente);