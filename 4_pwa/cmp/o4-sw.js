import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class O4Sw extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>O. sw.js</h1>
   <muestra-codigo>
    <div>
     <div><span
        style="color: #008000;">/*&nbsp;Este&nbsp;archivo&nbsp;debe&nbsp;estar</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;colocado&nbsp;en&nbsp;la&nbsp;carpeta&nbsp;raíz&nbsp;del</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;sitio.</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span></div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;Cualquier&nbsp;cambio&nbsp;en&nbsp;el</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;contenido&nbsp;de&nbsp;este&nbsp;archivo&nbsp;hace</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;que&nbsp;el&nbsp;service&nbsp;worker&nbsp;se</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;reinstale.</span></div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;</span></div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;Normalmente&nbsp;se&nbsp;cambia&nbsp;el&nbsp;número</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;en&nbsp;el&nbsp;nombre&nbsp;del&nbsp;caché&nbsp;cuando</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;cambia&nbsp;el&nbsp;contenido&nbsp;de&nbsp;los</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;archivos.&nbsp;*/</span>
     </div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">CACHE</span>&nbsp;=&nbsp;<span
        style="color: #a31515;">"pwa-1.10"</span></div><br>
     <div><span
        style="color: #008000;">/**&nbsp;Archivos&nbsp;requeridos&nbsp;para&nbsp;que</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;la&nbsp;aplicación&nbsp;funcione&nbsp;fuera&nbsp;de</span>
     </div>
     <div><span style="color: #008000;">&nbsp;*&nbsp;línea.</span></div>
     <div><span style="color: #008000;">&nbsp;*/</span></div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">ARCHIVOS</span>&nbsp;=&nbsp;[</div>
     <div>&nbsp;<span style="color: #a31515;">"css/estilos.css"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"img/icono256.png"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"img/icono1024.png"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"img/icono2048.png"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"js/config.js"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"js/CtrlRecomienda.js"</span>,
     </div>
     <div>&nbsp;<span style="color: #a31515;">"js/mi-nav.js"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"lib/css/botones.css"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"lib/css/cm-din.css"</span>,</div>
     <div>&nbsp;<span
        style="color: #a31515;">"lib/css/material-icons.css"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"lib/css/mi-nav.css"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"lib/css/principal.css"</span>,
     </div>
     <div>&nbsp;<span style="color: #a31515;">"lib/css/ripple.css"</span>,</div>
     <div>&nbsp;<span
        style="color: #a31515;">"lib/fonts/MaterialIcons-Regular.codepoints"</span>,
     </div>
     <div>&nbsp;<span
        style="color: #a31515;">"lib/fonts/MaterialIcons-Regular.ttf"</span>,
     </div>
     <div>&nbsp;<span style="color: #a31515;">"lib/cm-din.js"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"lib/movil.js"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"ayuda.html"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"favicon.ico"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"index.html"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"site.webmanifest"</span>,</div>
     <div>&nbsp;<span style="color: #a31515;">"/"</span></div>
     <div>]</div><br>
     <div><span style="color: #795e26;">addEventListener</span>(<span
        style="color: #a31515;">"install"</span>,</div>
     <div>&nbsp;<span style="color: #001080;">evt</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"sw&nbsp;instalado."</span>)</div>
     <div>&nbsp;&nbsp;<span
        style="color: #008000;">/*&nbsp;Realiza&nbsp;la&nbsp;instalación.</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;Carga&nbsp;los&nbsp;archivos</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;requeridos&nbsp;en&nbsp;la&nbsp;caché.&nbsp;*/</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">//&nbsp;@ts-ignore</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">evt</span>.<span
        style="color: #795e26;">waitUntil</span>(<span
        style="color: #795e26;">cargaCache</span>())</div>
     <div>&nbsp;});</div><br>
     <div><span
        style="color: #008000;">/*&nbsp;Toma&nbsp;los&nbsp;archivos&nbsp;solicitados</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;de&nbsp;la&nbsp;caché;&nbsp;si&nbsp;no&nbsp;los</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;*&nbsp;encuentra,&nbsp;se&nbsp;descargan.&nbsp;*/</span>
     </div>
     <div><span style="color: #795e26;">addEventListener</span>(<span
        style="color: #a31515;">"fetch"</span>,</div>
     <div>&nbsp;<span style="color: #001080;">evt</span>&nbsp;<span
        style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #008000;">//&nbsp;@ts-ignore</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">evt</span>.<span
        style="color: #001080;">request</span>.<span
        style="color: #001080;">method</span></div>
     <div>&nbsp;&nbsp;&nbsp;===&nbsp;<span
        style="color: #a31515;">"GET"</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #008000;">//&nbsp;@ts-ignore</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">evt</span>.<span
        style="color: #795e26;">respondWith</span>(<span
        style="color: #795e26;">usaCache</span>(<span
        style="color: #001080;">evt</span>))</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;});</div><br>
     <div><span style="color: #795e26;">addEventListener</span>(<span
        style="color: #a31515;">"activate"</span>,</div>
     <div>&nbsp;()&nbsp;<span style="color: #0000ff;">=&gt;</span>&nbsp;<span
        style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"sw&nbsp;activo."</span>))</div><br>
     <div><span style="color: #0000ff;">async</span>&nbsp;<span
        style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">cargaCache</span>()&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"Cargando&nbsp;cache"</span>,</div>
     <div>&nbsp;&nbsp;<span style="color: #0070c1;">CACHE</span>);</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">cache</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">await</span>&nbsp;<span
        style="color: #001080;">caches</span>.<span
        style="color: #795e26;">open</span>(<span
        style="color: #0070c1;">CACHE</span>)</div>
     <div>&nbsp;<span style="color: #af00db;">await</span>&nbsp;<span
        style="color: #0070c1;">cache</span>.<span
        style="color: #795e26;">addAll</span>(<span
        style="color: #0070c1;">ARCHIVOS</span>)</div>
     <div>&nbsp;<span style="color: #001080;">console</span>.<span
        style="color: #795e26;">log</span>(<span
        style="color: #a31515;">"Cache"</span>,&nbsp;<span
        style="color: #0070c1;">CACHE</span>,</div>
     <div>&nbsp;&nbsp;<span style="color: #a31515;">"cargado"</span>)</div>
     <div>}</div><br>
     <div><span style="color: #0000ff;">async</span>&nbsp;<span
        style="color: #0000ff;">function</span>&nbsp;<span
        style="color: #795e26;">usaCache</span>(<span
        style="color: #001080;">evt</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">cache</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">await</span>&nbsp;<span
        style="color: #001080;">caches</span>.<span
        style="color: #795e26;">open</span>(<span
        style="color: #0070c1;">CACHE</span>);</div>
     <div>&nbsp;<span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0070c1;">response</span>&nbsp;=</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">await</span>&nbsp;<span
        style="color: #0070c1;">cache</span>.<span
        style="color: #795e26;">match</span>(<span
        style="color: #001080;">evt</span>.<span
        style="color: #001080;">request</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;{&nbsp;<span
        style="color: #001080;">ignoreSearch</span><span
        style="color: #001080;">:</span>&nbsp;<span
        style="color: #0000ff;">true</span>&nbsp;});</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">response</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
        style="color: #001080;">response</span>;</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">return</span>&nbsp;<span
        style="color: #795e26;">fetch</span>(<span
        style="color: #001080;">evt</span>.<span
        style="color: #001080;">request</span>);</div>
     <div>&nbsp;}</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("o4-sw", O4Sw);