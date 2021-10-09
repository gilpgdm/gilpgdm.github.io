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
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #795e26;">express</span> = <span
      style="color: #795e26;">require</span>(<span
      style="color: #a31515;">"express"</span>)</div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #267f99;">http</span> = <span
      style="color: #795e26;">require</span>(<span
      style="color: #a31515;">"http"</span>)</div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">path</span> = <span
      style="color: #795e26;">require</span>(<span
      style="color: #a31515;">"path"</span>)</div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #795e26;">multer</span> = <span
      style="color: #795e26;">require</span>(<span
      style="color: #a31515;">'multer'</span>)</div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #795e26;">validaUsuario</span> =</div>
   <div>&nbsp;<span style="color: #795e26;">require</span>(<span
      style="color: #a31515;">"./validaUsuario"</span>)</div><br>
   <div><span style="color: #008000;">// Complemento para el servidor web</span>
   </div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">app</span> = <span
      style="color: #795e26;">express</span>()</div>
   <div><span style="color: #008000;">/** Comportamiento base del</span></div>
   <div><span style="color: #008000;">&nbsp;* servidor web */</span></div>
   <div><span style="color: #008000;">// @ts-ignore</span></div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">httpserver</span> = <span
      style="color: #267f99;">http</span>.<span
      style="color: #267f99;">Server</span>(<span
      style="color: #0070c1;">app</span>)</div>
   <div><span style="color: #008000;">/** Ubicación de la carpeta de</span>
   </div>
   <div><span style="color: #008000;">&nbsp;* archivos del sitio. */</span>
   </div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">archivos</span> =</div>
   <div>&nbsp;<span style="color: #0070c1;">path</span>.<span
      style="color: #795e26;">join</span>(<span
      style="color: #001080;">__dirname</span>, <span
      style="color: #a31515;">"www"</span>)</div>
   <div><span style="color: #008000;">/** Manejo de datos multipart. */</span>
   </div>
   <div><span style="color: #0000ff;">const</span> <span
      style="color: #0070c1;">multipart</span> = <span
      style="color: #795e26;">multer</span>()</div><br>
   <div><span style="color: #008000;">// utiliza la carpeta de archivos.</span>
   </div>
   <div><span style="color: #0070c1;">app</span>.<span
      style="color: #795e26;">use</span>(<span
      style="color: #795e26;">express</span>.<span
      style="color: #795e26;">static</span>(<span
      style="color: #0070c1;">archivos</span>))</div>
   <div><span style="color: #008000;">/* El recurso "/valida" procesa</span>
   </div>
   <div><span style="color: #008000;">&nbsp;* solicitudes post en formato</span>
   </div>
   <div><span style="color: #008000;">&nbsp;* multipart sin archivos
     adjuntos</span></div>
   <div><span style="color: #008000;">&nbsp;* e invoca la función</span></div>
   <div><span style="color: #008000;">&nbsp;* validaUsuario para procesar
     la</span></div>
   <div><span style="color: #008000;">&nbsp;* solicitud. */</span></div>
   <div><span style="color: #0070c1;">app</span>.<span
      style="color: #795e26;">post</span>(<span
      style="color: #a31515;">"/valida"</span>,</div>
   <div>&nbsp;<span style="color: #0070c1;">multipart</span>.<span
      style="color: #795e26;">none</span>(),</div>
   <div>&nbsp;<span style="color: #795e26;">validaUsuario</span>)</div>
   <div><span style="color: #008000;">/* El servidor empieza a escuchar</span>
   </div>
   <div><span style="color: #008000;">&nbsp;* solucitudes en el puerto
     3000.*/</span></div>
   <div><span style="color: #0070c1;">httpserver</span>.<span
      style="color: #795e26;">listen</span>(<span
      style="color: #098658;">3000</span>)</div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("h5-index-js", H5IndexJs);