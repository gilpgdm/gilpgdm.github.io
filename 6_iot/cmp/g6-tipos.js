import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G6Tipos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. tipos.js</h1>
   <muestra-codigo>
    <div>
     <div><span
        style="color: #008000;">/**&nbsp;@typedef&nbsp;{Object}&nbsp;dispositivo</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@property</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{string}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">_id</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@property</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{string}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">valor</span><span
        style="color: #008000;">&nbsp;*/</span></div><br>
     <div><span style="color: #008000;">/**</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@typedef</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{Object}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">historico</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@property</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{string}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">[_id]</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@property</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{string}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">dispositivoId</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@property</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{string}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">valor</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span><span
        style="color: #0000ff;">@property</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #267f99;">{number}</span><span
        style="color: #008000;">&nbsp;</span><span
        style="color: #001080;">timestamp</span></div>
     <div><span style="color: #008000;">&nbsp;*/</span></div><br>
     <div>&nbsp;<span style="color: #267f99;">module</span>.<span
        style="color: #267f99;">exports</span>&nbsp;=&nbsp;<span
        style="color: #098658;">0</span>;</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("g6-tipos", G6Tipos);