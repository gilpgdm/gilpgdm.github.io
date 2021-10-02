import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class I9Active extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>I. Pseudoclase <strong>:active</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Seleciona los elementos que estén activos; por ejemplo al hacerles clic.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/9_selectores/src/9i_active.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/9_selectores/src/9i_active.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3ESelector%20%3Aactive%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20%3Aactive%20%7B%0A%20%20%20color%3A%20blue%3B%0A%20%20%7D%0A%0A%20%20span%3Aactive%20%7B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3ESelector%20%3Aactive%3C%2Fh1%3E%0A%20%3Cp%3E%3Cbutton%3EHaz%20Click%3C%2Fbutton%3E%3C%2Fp%3E%0A%20%3Cp%3E%3Cspan%3EHaz%20Click%3C%2Fspan%3E%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;<span
      style="color: #800000;">&lt;title&gt;</span>Selector&nbsp;:active<span
      style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">:active</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
      style="color: #0451a5;">blue</span>;</div>
   <div>&nbsp;&nbsp;}</div><br>
   <div>&nbsp;&nbsp;<span style="color: #800000;">span:active</span>&nbsp;{
   </div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;h1&gt;</span>Selector&nbsp;:active<span
      style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;&lt;button&gt;</span>Haz&nbsp;Click<span
      style="color: #800000;">&lt;/button&gt;&lt;/p&gt;</span></div>
   <div>&nbsp;<span
      style="color: #800000;">&lt;p&gt;&lt;span&gt;</span>Haz&nbsp;Click<span
      style="color: #800000;">&lt;/span&gt;&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("i9-active", I9Active);