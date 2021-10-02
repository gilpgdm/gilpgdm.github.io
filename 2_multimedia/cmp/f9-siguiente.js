import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class F9siguiente extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>F. Selector <em>sel1</em> <strong>+</strong> <em>sel2</em></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Seleciona los elementos que cumplan con el selector de la derecha y que
       sean hermanos inmediatamente después de los elementos de la izquierda. No
       se toma en cuenta el contenido tipo texto.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/9_selectores/src/9f_siguiente.html"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/9_selectores/src/9f_siguiente.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3E%0A%20%20Selector%20sel1%20%2B%20sel2%0A%20%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20%2F*%20Selecciona%20todos%20los%0A%20%20%20*%20%20strong%0A%20%20%20*%20inmediatamente%20despu%C3%A9s%20de%0A%20%20%20*%20%20em%20*%2F%0A%20%20em%2Bstrong%20%7B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3E%0A%20%20Selector%0A%20%20%3Cem%3Esel1%3C%2Fem%3E%0A%20%20%3Cstrong%3E%2B%3C%2Fstrong%3E%0A%20%20%3Cem%3Esel2%3C%2Fem%3E%0A%20%3C%2Fh1%3E%0A%20%3Cp%3E%0A%20%20%3Cem%3EEste%3C%2Fem%3E%0A%20%20%3Cstrong%3Eejercicio%3C%2Fstrong%3E%0A%20%20est%C3%A1%0A%20%20%3Cem%3Emuy%3C%2Fem%3E%0A%20%20divertido%0A%20%20%3Cstrong%3Eggg%3C%2Fstrong%3E%0A%20%20%3Cem%3Ejajaja%3C%2Fem%3E%0A%20%20%3C!--%20sub%C3%ADndice%20--%3E%0A%20%20%3Csub%3Ejejeje%3C%2Fsub%3E%0A%20%20%3Cstrong%3Ejijiji%3C%2Fstrong%3E%0A%20%20%F0%9F%A4%A3%F0%9F%A4%A3%F0%9F%A4%A3.%0A%20%3C%2Fp%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;&nbsp;Selector&nbsp;sel1&nbsp;+&nbsp;sel2</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;Selecciona&nbsp;todos&nbsp;los</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;strong</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;inmediatamente&nbsp;después&nbsp;de</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;em&nbsp;*/</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">em</span>+<span
      style="color: #800000;">strong</span>&nbsp;{</div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #ff0000;">background-color</span>:&nbsp;<span
      style="color: #0451a5;">yellow</span>;</div>
   <div>&nbsp;&nbsp;}</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
   <div><span style="color: #800000;">&lt;/head&gt;</span></div>
   <div><span style="color: #800000;">&lt;body&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span></div>
   <div>&nbsp;&nbsp;Selector</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>sel1<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span>+<span
      style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>sel2<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>Este<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;strong&gt;</span>ejercicio<span
      style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;está</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>muy<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;divertido</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span>ggg<span
      style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>jajaja<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">&lt;!--&nbsp;subíndice&nbsp;--&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;sub&gt;</span>jejeje<span
      style="color: #800000;">&lt;/sub&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #800000;">&lt;strong&gt;</span>jijiji<span
      style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;🤣🤣🤣.</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("f9-siguiente", F9siguiente);