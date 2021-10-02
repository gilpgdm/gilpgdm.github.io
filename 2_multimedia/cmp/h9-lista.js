import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class H9Lista extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>
    H. Lista de selectores <em>sel1</em> <strong>,</strong> <em>sel2</em>
   </h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Seleciona los elementos que cumplan con cualquiera de los selectores que
       aparecen separados por coma
       (<code class="language-html">,</code>).
    </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/9_selectores/src/9h_lista.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/9_selectores/src/9h_lista.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3E%0A%20%20Selector%20sel1%20%2C%20sel2%0A%20%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20%2F*%20Selecciona%20todos%20los%0A%20%20%20*%20%20h1%2C%20div%20y%20nav%20*%2F%0A%20%20h1%2C%0A%20%20div%2C%0A%20%20nav%20%7B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3ESelector%20sel1%20%2C%20sel2%3C%2Fh1%3E%0A%20%3Cp%3EHola.%3C%2Fp%3E%0A%20%3Cnav%3ENavegaci%C3%B3n.%3C%2Fnav%3E%0A%20%3Cdiv%3EAdios.%3C%2Fdiv%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
     Revísalo en gilpgedit.
    </a>
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
   <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span></div>
   <div>&nbsp;&nbsp;Selector&nbsp;sel1&nbsp;,&nbsp;sel2</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;Selecciona&nbsp;todos&nbsp;los</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;h1,&nbsp;div&nbsp;y&nbsp;nav&nbsp;*/</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">h1</span>,</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">div</span>,</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">nav</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;h1&gt;</span>Selector&nbsp;sel1&nbsp;,&nbsp;sel2<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span>Hola.<span
      style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;nav&gt;</span>Navegación.<span
      style="color: #800000;">&lt;/nav&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;div&gt;</span>Adios.<span
      style="color: #800000;">&lt;/div&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("h9-lista", H9Lista);