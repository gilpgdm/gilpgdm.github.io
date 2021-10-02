import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class E9Descendiente extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Selector con descendientes <em>sel1</em> <em>sel2</em></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       Seleciona los elementos que cumplan con el selector de la derecha y que
       sean descendientes en cualquier nivel de anidamiento de los elementos que
       cumplan con el seletor de la izquierda.
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
  <div class="horizontal">
  <div>
   <h3>Salida</h3>
   <iframe src="/9_selectores/src/9e_descendiente.html" height="200"></iframe>
   <p class="noPrint">
    <a target="_blank" href="/9_selectores/src/9e_descendiente.html">Ábrelo en otra
     pestaña.</a>
   </p>
   <p class="noPrint">
    <a target="_blank"
      href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3E%0A%20%20Selector%20sel1%20sel2%0A%20%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20%2F*%20Selecciona%20todos%20los%0A%20%20%20*%20%20em%0A%20%20%20*%20que%20sean%20descendientes%20en%0A%20%20%20*%20cualquier%20nivel%20de%20anidamiento%0A%20%20%20*%20de%0A%20%20%20*%20%20p%20*%2F%0A%20%20p%20em%20%7B%0A%20%20%20background-color%3A%20yellow%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3E%0A%20%20Selector%0A%20%20%3Cem%3Esel1%3C%2Fem%3E%0A%20%20%3Cem%3Esel2%3C%2Fem%3E%0A%20%3C%2Fh1%3E%0A%20%3Cp%3E%0A%20%20%3Cstrong%3E%0A%20%20%20%C3%89nfasis%20fuerte.%0A%20%20%3C%2Fstrong%3E%0A%20%20%3Cem%3E%C3%89nfasis.%3C%2Fem%3E%0A%20%20M%C3%A1s%20texto.%0A%20%20%3Cspan%3E%0A%20%20%20%3Cem%3EOtro%20%C3%A9nfasis.%3C%2Fem%3E%0A%20%20%20%3Cstrong%3E%0A%20%20%20%20Otro%20%C3%A9nfasis%20fuerte.%0A%20%20%20%3C%2Fstrong%3E%0A%20%20%20%3Cspan%3E%0A%20%20%20%20%3Cem%3EHola.%3C%2Fem%3E%0A%20%20%20%20%3Cstrong%3EAdios.%3C%2Fstrong%3E%0A%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fspan%3E%0A%20%3C%2Fp%3E%0A%20%3Cfooter%3E%0A%20%20%3Cp%3E%0A%20%20%20%3Cem%3E%C2%A9%202021%3C%2Fem%3E%0A%20%20%20Gilberto%20Pacheco%20Gallegos.%0A%20%20%3C%2Fp%3E%0A%20%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
   <div>&nbsp;&nbsp;Selector&nbsp;sel1&nbsp;sel2</div>
   <div>&nbsp;<span style="color: #800000;">&lt;/title&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
   <div>&nbsp;&nbsp;<span
      style="color: #008000;">/*&nbsp;Selecciona&nbsp;todos&nbsp;los</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;em</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;que&nbsp;sean&nbsp;descendientes&nbsp;en</span>
   </div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;cualquier&nbsp;nivel&nbsp;de&nbsp;anidamiento</span>
   </div>
   <div><span style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;de</span></div>
   <div><span
      style="color: #008000;">&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;p&nbsp;*/</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">p</span>&nbsp;<span
      style="color: #800000;">em</span>&nbsp;{</div>
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
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>sel2<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/h1&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Énfasis&nbsp;fuerte.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;em&gt;</span>Énfasis.<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;Más&nbsp;texto.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;span&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;em&gt;</span>Otro&nbsp;énfasis.<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;strong&gt;</span>
   </div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;Otro&nbsp;énfasis&nbsp;fuerte.</div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/strong&gt;</span>
   </div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;span&gt;</span>
   </div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;em&gt;</span>Hola.<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;strong&gt;</span>Adios.<span
      style="color: #800000;">&lt;/strong&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/span&gt;</span>
   </div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/span&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;<span
      style="color: #800000;">&lt;em&gt;</span>©&nbsp;2021<span
      style="color: #800000;">&lt;/em&gt;</span></div>
   <div>&nbsp;&nbsp;&nbsp;Gilberto&nbsp;Pacheco&nbsp;Gallegos.</div>
   <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
   <div>&nbsp;<span style="color: #800000;">&lt;/footer&gt;</span></div>
   <div><span style="color: #800000;">&lt;/body&gt;</span></div>
   <div><span style="color: #800000;">&lt;/html&gt;</span></div>
  </div>
    </muestra-codigo>
 </div>`;
 }
}

customElements.define("e9-descendiente", E9Descendiente);