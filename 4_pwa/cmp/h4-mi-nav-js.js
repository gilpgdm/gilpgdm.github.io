import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class H4MiNavJs extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. js/mi-nav.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">export</span>&nbsp;<span
        style="color: #0000ff;">class</span>&nbsp;<span
        style="color: #267f99;">MiNav</span></div>
     <div>&nbsp;<span style="color: #0000ff;">extends</span>&nbsp;<span
        style="color: #267f99;">HTMLElement</span>&nbsp;{</div>
     <div>&nbsp;<span style="color: #795e26;">connectedCallback</span>()&nbsp;{
     </div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
        style="color: #001080;">innerHTML</span>&nbsp;=&nbsp;<span
        style="color: #008000;">/*&nbsp;html&nbsp;*/</span></div>
     <div>&nbsp;&nbsp;&nbsp;&grave;<span
        style="color: #800000;">&lt;a</span>&nbsp;<span
        style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"index.html"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;span</span>&nbsp;<span
        style="color: #ff0000;">class</span>=<span
        style="color: #0000ff;">"material-icons"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;home</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;/span&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inicio</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/a&gt;</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;a</span>&nbsp;<span
        style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"ayuda.html"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;span</span>&nbsp;<span
        style="color: #ff0000;">class</span>=<span
        style="color: #0000ff;">"material-icons"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;help</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;/span&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ayuda</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;/a&gt;</span>&grave;</div>
     <div>&nbsp;}</div>
     <div>}</div>
     <div><span style="color: #001080;">customElements</span>.</div>
     <div>&nbsp;<span style="color: #795e26;">define</span>(<span
        style="color: #a31515;">"mi-nav"</span>,&nbsp;<span
        style="color: #267f99;">MiNav</span>)</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("h4-mi-nav-js", H4MiNavJs);