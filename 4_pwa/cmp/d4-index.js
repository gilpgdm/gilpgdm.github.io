import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D4Index extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. index.html</h1>
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
     <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span></div>
     <div>&nbsp;&nbsp;Inicio&nbsp;-&nbsp;Ejemplo&nbsp;de&nbsp;PWA</div>
     <div>&nbsp;<span style="color: #800000;">&lt;/title&gt;</span></div>
     <div>&nbsp;<span style="color: #008000;">&lt;!--</span></div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;Color&nbsp;de&nbsp;la&nbsp;barra&nbsp;de&nbsp;navegación</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;de&nbsp;Chrome&nbsp;en&nbsp;dispositivos</span>
     </div>
     <div><span style="color: #008000;">&nbsp;&nbsp;móviles.</span></div>
     <div><span style="color: #008000;">&nbsp;--&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
        style="color: #ff0000;">name</span>=<span
        style="color: #0000ff;">"theme-color"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
        style="color: #0000ff;">"#6a0080"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #008000;">&lt;!--</span></div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;Ícono&nbsp;para&nbsp;la&nbsp;página&nbsp;web.&nbsp;Debe</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;ponerse&nbsp;en&nbsp;la&nbsp;raíz&nbsp;de&nbsp;la&nbsp;página.</span>
     </div>
     <div><span style="color: #008000;">&nbsp;--&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"icon"</span>&nbsp;<span
        style="color: #ff0000;">sizes</span>=<span
        style="color: #0000ff;">"32x32"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"favicon.ico"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #008000;">&lt;!--</span></div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;Configuración&nbsp;de&nbsp;la&nbsp;PWA&nbsp;para</span>
     </div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;Chrome&nbsp;y&nbsp;Edge.</span></div>
     <div><span style="color: #008000;">&nbsp;--&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"manifest"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"site.webmanifest"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #008000;">&lt;!--</span></div>
     <div><span
        style="color: #008000;">&nbsp;&nbsp;Configuración&nbsp;para&nbsp;Web&nbsp;Clip&nbsp;en</span>
     </div>
     <div><span style="color: #008000;">&nbsp;&nbsp;Safari.</span></div>
     <div><span style="color: #008000;">&nbsp;--&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;meta</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">name</span>=<span
        style="color: #0000ff;">"apple-mobile-web-app-title"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
        style="color: #0000ff;">"pwa"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;meta</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">name</span>=<span
        style="color: #0000ff;">"apple-mobile-web-app-capable"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
        style="color: #0000ff;">"yes"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;meta</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">name</span>=<span
        style="color: #0000ff;">"apple-mobile-web-app-status-bar-style"</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
        style="color: #0000ff;">"default"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"apple-touch-icon"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"img/icono2048.png"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"apple-touch-icon"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">sizes</span>=<span
        style="color: #0000ff;">"256x256"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"img/icono256.png"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"apple-touch-icon"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">sizes</span>=<span
        style="color: #0000ff;">"1024x1024"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"img/icono1024.png"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"apple-touch-icon"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">sizes</span>=<span
        style="color: #0000ff;">"2048x2048"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"img/icono2048.png"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;link</span>&nbsp;<span
        style="color: #ff0000;">rel</span>=<span
        style="color: #0000ff;">"stylesheet"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">href</span>=<span
        style="color: #0000ff;">"css/estilos.css"</span><span
        style="color: #800000;">&gt;</span></div>
     <div><span style="color: #800000;">&lt;/head&gt;</span></div>
     <div><span style="color: #800000;">&lt;body&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;form</span>&nbsp;<span
        style="color: #ff0000;">novalidate</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Inicio<span
        style="color: #800000;">&lt;/h1&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;cm-din&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;select</span>&nbsp;<span
        style="color: #ff0000;">id</span>=<span
        style="color: #0000ff;">"inGenero"</span>&nbsp;<span
        style="color: #ff0000;">required</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;option</span>&nbsp;<span
        style="color: #ff0000;">value</span>=<span
        style="color: #0000ff;">""</span><span
        style="color: #800000;">&gt;&lt;/option&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;option</span>&nbsp;<span
        style="color: #ff0000;">value</span>=<span
        style="color: #0000ff;">"pop"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pop</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;/option&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;option</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #ff0000;">value</span>=<span
        style="color: #0000ff;">"regueton"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reguetón</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;/option&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;option</span>&nbsp;<span
        style="color: #ff0000;">value</span>=<span
        style="color: #0000ff;">"tango"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tango</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;/option&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/select&gt;</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;label</span>&nbsp;<span
        style="color: #ff0000;">for</span>=<span
        style="color: #0000ff;">"inGenero"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;*Género</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;small&gt;</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;output</span>&nbsp;<span
        style="color: #ff0000;">id</span>=<span
        style="color: #0000ff;">"msgGenero"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*Requerido</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;/output&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/small&gt;</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/cm-din&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;button</span>&nbsp;<span
        style="color: #ff0000;">class</span>=<span
        style="color: #0000ff;">"contained"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;Recomendar</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/button&gt;</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;cm-din&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;output</span>&nbsp;<span
        style="color: #ff0000;">id</span>=<span
        style="color: #0000ff;">"outSalida"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/output&gt;</span>
     </div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #800000;">&lt;label</span>&nbsp;<span
        style="color: #ff0000;">for</span>=<span
        style="color: #0000ff;">"outSalida"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;Resultado</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span>
     </div>
     <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/cm-din&gt;</span></div>
     <div>&nbsp;&nbsp;<span
        style="color: #800000;">&lt;mi-nav&gt;&lt;/mi-nav&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;/form&gt;</span></div>
     <div>&nbsp;<span style="color: #800000;">&lt;script</span>&nbsp;<span
        style="color: #ff0000;">type</span>=<span
        style="color: #0000ff;">"module"</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">src</span>=<span
        style="color: #0000ff;">"js/CtrlRecomienda.js"</span><span
        style="color: #800000;">&gt;</span></div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/script&gt;</span>
     </div>
     <div><span style="color: #800000;">&lt;/body&gt;</span></div>
     <div><span style="color: #800000;">&lt;/html&gt;</span></div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("d4-index", D4Index);