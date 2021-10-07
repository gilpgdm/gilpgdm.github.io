import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class H3Archivos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>H. Archivos y cámara</h1>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/3_vistas/src/3h_archivos.html" height="300"></iframe>
     <p class="noPrint">
      <a href="/3_vistas/src/3h_archivos.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EArchivos%20y%20C%C3%A1mara%3C%2Ftitle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EArchivos%20y%20C%C3%A1mara%3C%2Fh1%3E%0A%20%3Cp%3E%0A%20%20%3Clabel%3E%0A%20%20%20Foto%20de%20M%C3%B3vil%0A%20%20%20%3Cinput%20type%3D%22file%22%0A%20%20%20%20%20accept%3D%22image%2F*%22%0A%20%20%20%20%20capture%3D%22camera%22%3E%0A%20%20%3C%2Flabel%3E%0A%20%3C%2Fp%3E%0A%20%3Cp%3E%0A%20%20%3Clabel%3E%0A%20%20%20Video%20de%20M%C3%B3vil%0A%20%20%20%3Cinput%20type%3D%22file%22%0A%20%20%20%20%20accept%3D%22video%2F*%22%0A%20%20%20%20%20capture%3D%22%22%3E%0A%20%20%3C%2Flabel%3E%0A%20%3C%2Fp%3E%0A%20%3Cp%3E%0A%20%20%3Clabel%20for%3D%22archivo%22%3E%0A%20%20%20Archivo%0A%20%20%20%3Cinput%20type%3D%22file%22%3E%0A%20%20%3C%2Flabel%3E%0A%20%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
      <div>&nbsp;<span
         style="color: #800000;">&lt;title&gt;</span>Archivos&nbsp;y&nbsp;Cámara<span
         style="color: #800000;">&lt;/title&gt;</span></div>
      <div><span style="color: #800000;">&lt;/head&gt;</span></div>
      <div><span style="color: #800000;">&lt;body&gt;</span></div>
      <div>&nbsp;<span
         style="color: #800000;">&lt;h1&gt;</span>Archivos&nbsp;y&nbsp;Cámara<span
         style="color: #800000;">&lt;/h1&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Foto&nbsp;de&nbsp;Móvil</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;input</span>&nbsp;<span
         style="color: #ff0000;">type</span>=<span
         style="color: #0000ff;">"file"</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">accept</span>=<span
         style="color: #0000ff;">"image/*"</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">capture</span>=<span
         style="color: #0000ff;">"camera"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Video&nbsp;de&nbsp;Móvil</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;input</span>&nbsp;<span
         style="color: #ff0000;">type</span>=<span
         style="color: #0000ff;">"file"</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">accept</span>=<span
         style="color: #0000ff;">"video/*"</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">capture</span>=<span
         style="color: #0000ff;">""</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label</span>&nbsp;<span
         style="color: #ff0000;">for</span>=<span
         style="color: #0000ff;">"archivo"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Archivo</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;input</span>&nbsp;<span
         style="color: #ff0000;">type</span>=<span
         style="color: #0000ff;">"file"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
      <div><span style="color: #800000;">&lt;/body&gt;</span></div>
      <div><span style="color: #800000;">&lt;/html&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("h3-archivos", H3Archivos);