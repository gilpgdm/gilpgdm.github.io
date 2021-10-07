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
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">MongoClient</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">require</span>(<span
        style="color: #a31515;">'mongodb'</span>).<span
        style="color: #001080;">MongoClient</span>;</div>
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
        style="color: #008000;">&nbsp;*&nbsp;de&nbsp;Atlas.&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">uri</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"mongodb+srv://usuario:&lt;password&gt;@cluster0.nvilc.mongodb.net/myFirstDatabase?retryWrites=true&amp;w=majority"</span>;
     </div><br>
     <div><span style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">cliente</span>()&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
        style="color: #0000ff;">new</span>&nbsp;<span
        style="color: #795e26;">MongoClient</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0070c1;">uri</span>,</div>
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
     <div>}</div><br>
     <div><span style="color: #795e26;">module</span>.<span
        style="color: #795e26;">exports</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">cliente</span>;</div>
    </div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("h6-cliente", H6Cliente);