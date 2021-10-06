import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class G3GPS extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>G. GPS</h1>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/3_vistas/src/3g_gps.html" height="200"></iframe>
     <p class="noPrint">
      <a href="/3_vistas/src/3g_gps.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EGPS%3C%2Ftitle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EGPS%3C%2Fh1%3E%0A%20%3Cp%3E%0A%20%20%3Clabel%3E%0A%20%20%20Latitud%0A%20%20%20%3Coutput%20id%3D%22latitud%22%3E%3C%2Foutput%3E%0A%20%20%3C%2Flabel%3E%0A%20%3C%2Fp%3E%0A%20%3Cp%3E%0A%20%20%3Clabel%3E%0A%20%20%20Longitud%0A%20%20%20%3Coutput%20id%3D%22longitud%22%3E%3C%2Foutput%3E%0A%20%20%3C%2Flabel%3E%0A%20%3C%2Fp%3E%0A%20%3Cscript%3E%0A%20%20navigator.geolocation.%0A%20%20%20watchPosition(p%20%3D%3E%20%7B%0A%20%20%20%20latitud.value%20%3D%0A%20%20%20%20%20p.coords.latitude%3B%0A%20%20%20%20longitud.value%20%3D%0A%20%20%20%20%20p.coords.longitude%3B%0A%20%20%20%7D)%3B%0A%20%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
       Revísalo en gilpgedit.</a>
     </p>
    </div>
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
         style="color: #0000ff;">"UTF-8"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
         style="color: #ff0000;">name</span>=<span
         style="color: #0000ff;">"viewport"</span></div>
      <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
         style="color: #0000ff;">"width=device-width"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>GPS<span
         style="color: #800000;">&lt;/title&gt;</span></div>
      <div><span style="color: #800000;">&lt;/head&gt;</span></div>
      <div><span style="color: #800000;">&lt;body&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>GPS<span
         style="color: #800000;">&lt;/h1&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Latitud</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;output</span>&nbsp;<span
         style="color: #ff0000;">id</span>=<span
         style="color: #0000ff;">"latitud"</span><span
         style="color: #800000;">&gt;&lt;/output&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Longitud</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;output</span>&nbsp;<span
         style="color: #ff0000;">id</span>=<span
         style="color: #0000ff;">"longitud"</span><span
         style="color: #800000;">&gt;&lt;/output&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #001080;">navigator</span>.<span
         style="color: #0070c1;">geolocation</span>.</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #795e26;">watchPosition</span>(<span
         style="color: #001080;">p</span>&nbsp;<span
         style="color: #0000ff;">=&gt;</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #001080;">latitud</span>.<span
         style="color: #001080;">value</span>&nbsp;=</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #001080;">p</span>.<span
         style="color: #0070c1;">coords</span>.<span
         style="color: #0070c1;">latitude</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #001080;">longitud</span>.<span
         style="color: #001080;">value</span>&nbsp;=</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #001080;">p</span>.<span
         style="color: #0070c1;">coords</span>.<span
         style="color: #0070c1;">longitude</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;});</div>
      <div>&nbsp;<span style="color: #800000;">&lt;/script&gt;</span></div>
      <div><span style="color: #800000;">&lt;/body&gt;</span></div>
      <div><span style="color: #800000;">&lt;/html&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("g3-gps", G3GPS);