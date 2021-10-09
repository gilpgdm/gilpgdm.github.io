import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F5IndexHtml extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. www/index.html</h1>
   <muestra-codigo>
   <div>
   <div><span style="color: #800000;">&lt;!DOCTYPE</span> <span
      style="color: #ff0000;">html</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;html</span> <span
      style="color: #ff0000;">lang</span>=<span
      style="color: #0000ff;">"es"</span><span
      style="color: #800000;">&gt;</span></div>
   <div><span style="color: #800000;">&lt;head&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span> <span
      style="color: #ff0000;">charset</span>=<span
      style="color: #0000ff;">"UTF-8"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;meta</span> <span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"viewport"</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">content</span>=<span
      style="color: #0000ff;">"width=device-width"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;title&gt;</span>Autenticación<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Autenticación<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;form</span> <span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"sesion"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;output</span> <span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"cue"</span><span
      style="color: #800000;">&gt;&lt;/output&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;button</span> <span
      style="color: #ff0000;">type</span>=<span
      style="color: #0000ff;">"button"</span></div>
   <div>&nbsp; &nbsp; <span style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"terminar"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp; &nbsp;Terminar sesión</div>
   <div>&nbsp; <span style="color: #800000;">&lt;/button&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/form&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;form</span> <span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"login"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;label&gt;</span></div>
   <div>&nbsp; &nbsp; Cue</div>
   <div>&nbsp; &nbsp; <span style="color: #800000;">&lt;input</span> <span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"cue"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;label&gt;</span></div>
   <div>&nbsp; &nbsp; Match</div>
   <div>&nbsp; &nbsp; <span style="color: #800000;">&lt;input</span> <span
      style="color: #ff0000;">type</span>=<span
      style="color: #0000ff;">"password"</span></div>
   <div>&nbsp; &nbsp; &nbsp; <span style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"match"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;label&gt;</span></div>
   <div>&nbsp; &nbsp; Soy humano</div>
   <div>&nbsp; &nbsp; <span style="color: #800000;">&lt;input</span> <span
      style="color: #ff0000;">name</span>=<span
      style="color: #0000ff;">"humano"</span></div>
   <div>&nbsp; &nbsp; &nbsp; <span style="color: #ff0000;">type</span>=<span
      style="color: #0000ff;">"range"</span> <span
      style="color: #ff0000;">value</span>=<span
      style="color: #0000ff;">"0"</span></div>
   <div>&nbsp; &nbsp; &nbsp; <span style="color: #ff0000;">min</span>=<span
      style="color: #0000ff;">"0"</span> <span
      style="color: #ff0000;">max</span>=<span
      style="color: #0000ff;">"1"</span><span
      style="color: #800000;">&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #800000;">&lt;button&gt;</span>Iniciar
    sesión<span style="color: #800000;">&lt;/button&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/form&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
   <div>&nbsp; <span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp; &nbsp;<span style="color: #0000ff;">&amp;copy;</span> 2021</div>
   <div>&nbsp; &nbsp;Gilberto Pacheco Gallegos</div>
   <div>&nbsp; <span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/footer&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;script</span> <span
      style="color: #ff0000;">type</span>=<span
      style="color: #0000ff;">"module"</span></div>
   <div>&nbsp; &nbsp;<span style="color: #ff0000;">src</span>=<span
      style="color: #0000ff;">"CtrlSesion.js"</span><span
      style="color: #800000;">&gt;&lt;/script&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
   </muestra-codigo>`;
 }
}

customElements.define("f5-index-html", F5IndexHtml);