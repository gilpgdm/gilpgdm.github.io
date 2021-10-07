import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class H5IndexJs extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. index.js</h1>
   <muestra-codigo>
    <div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #795e26;">express</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"express"</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #267f99;">http</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"http"</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">path</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"path"</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #795e26;">multer</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">require</span>(<span
        style="color: #a31515;">'multer'</span>)</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #795e26;">validaUsuario</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #795e26;">require</span>(<span
        style="color: #a31515;">"./validaUsuario"</span>)</div><br>
     <div><span
        style="color: #008000;">//&nbsp;Complemento&nbsp;para&nbsp;el&nbsp;servidor&nbsp;web</span>
     </div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">app</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">express</span>()</div>
     <div><span
        style="color: #008000;">/**&nbsp;Comportamiento&nbsp;base&nbsp;del</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;servidor&nbsp;web&nbsp;*/</span>
     </div>
     <div><span style="color: #008000;">//&nbsp;@ts-ignore</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">httpserver</span>&nbsp;=&nbsp;<span
        style="color: #267f99;">http</span>.<span
        style="color: #267f99;">Server</span>(<span
        style="color: #0070c1;">app</span>)</div>
     <div><span
        style="color: #008000;">/**&nbsp;Ubicación&nbsp;de&nbsp;la&nbsp;carpeta&nbsp;de</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;archivos&nbsp;del&nbsp;sitio.&nbsp;*/</span>
     </div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">archivos</span>&nbsp;=&nbsp;<span
        style="color: #0070c1;">path</span>.</div>
     <div>&nbsp;<span style="color: #795e26;">join</span>(<span
        style="color: #001080;">__dirname</span>,&nbsp;<span
        style="color: #a31515;">"www"</span>)</div>
     <div><span
        style="color: #008000;">/**&nbsp;Manejo&nbsp;de&nbsp;datos&nbsp;multipart.&nbsp;*/</span>
     </div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">multipart</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">multer</span>()</div><br>
     <div><span
        style="color: #008000;">//&nbsp;utiliza&nbsp;la&nbsp;carpeta&nbsp;de&nbsp;archivos.</span>
     </div>
     <div><span style="color: #0070c1;">app</span>.<span
        style="color: #795e26;">use</span>(<span
        style="color: #795e26;">express</span>.<span
        style="color: #795e26;">static</span>(<span
        style="color: #0070c1;">archivos</span>))</div>
     <div><span
        style="color: #008000;">/*&nbsp;El&nbsp;recurso&nbsp;"/valida"&nbsp;procesa</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;solicitudes&nbsp;post&nbsp;en&nbsp;formato</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;multipart&nbsp;sin&nbsp;archivos&nbsp;adjuntos</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;e&nbsp;invoca&nbsp;la&nbsp;función</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;validaUsuario&nbsp;para&nbsp;procesar&nbsp;la</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;solicitud.&nbsp;*/</span>
     </div>
     <div><span style="color: #0070c1;">app</span>.<span
        style="color: #795e26;">post</span>(<span
        style="color: #a31515;">"/valida"</span>,</div>
     <div>&nbsp;<span style="color: #0070c1;">multipart</span>.<span
        style="color: #795e26;">none</span>(),</div>
     <div>&nbsp;<span style="color: #795e26;">validaUsuario</span>)</div>
     <div><span
        style="color: #008000;">/*&nbsp;El&nbsp;servidor&nbsp;empieza&nbsp;a&nbsp;escuchar</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;solucitudes&nbsp;en&nbsp;el&nbsp;puerto</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;3000.&nbsp;&nbsp;*/</span>
     </div>
     <div><span style="color: #0070c1;">httpserver</span>.<span
        style="color: #795e26;">listen</span>(<span
        style="color: #098658;">3000</span>)</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("h5-index-js", H5IndexJs);