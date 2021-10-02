import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C2audio extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. El Elemento <strong>audio</strong></h1>
   <div class="lectura">
    <p>Permite manejar una transmisión de audio o video.</p>
    <p>
     Aunque este elemento puede llevar contenido, por ejemplo texto, este no se
     muestra al usuario; es para desplegarse en navegadores que no soportan el
     elemento
     <code class="language-html">audio</code>,
     para poder probar con plugins o para indicar como acceder al contenido.
    </p>
    <p>
     Si el contenido incluye subtítulos o lenguaje de señas, es mejor usar el
     elemento
     <code class="language-html">video</code>.
    </p>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <iframe src="/2_multimedia/src/2c_audio.html" height="300"></iframe>
     <p class="noPrint">
      <a href="/2_multimedia/src/2c_audio.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EAudio%3C%2Ftitle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EAudio%3C%2Fh1%3E%0A%20%3Cp%3E%0A%20%20%3Caudio%20controls%0A%20%20%20%20src%3D%22https%3A%2F%2Fwww.royaltyfreemusicclips.com%2Fpir%2Flibs%2Fmedia%2F1234_Rock_it.wav%22%3E%0A%20%20%20Tu%20navegador%20no%20soporta%20audio.%0A%20%20%3C%2Faudio%3E%0A%20%3C%2Fp%3E%0A%20%3Cfooter%3E%0A%20%20%3Cp%3E%0A%20%20%20M%C3%BAsica%20gratuita%20libre%20de%0A%20%20%20regal%C3%ADas%20por%0A%20%20%20%3Ca%20target%3D%22_blank%22%0A%20%20%20%20%20href%3D%22https%3A%2F%2Fwww.royaltyfreemusicclips.com%22%3E%0A%20%20%20%20Royalty%20Free%20Music%20Clips%3C%2Fa%3E.%0A%20%20%3C%2Fp%3E%0A%20%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
      <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Audio<span
         style="color: #800000;">&lt;/title&gt;</span></div>
      <div><span style="color: #800000;">&lt;/head&gt;</span></div>
      <div><span style="color: #800000;">&lt;body&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Audio<span
         style="color: #800000;">&lt;/h1&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;audio</span>&nbsp;<span
         style="color: #ff0000;">controls</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">src</span>=<span
         style="color: #0000ff;">"https://www.royaltyfreemusicclips.com/pir/libs/media/1234_Rock_it.wav"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Tu&nbsp;navegador&nbsp;no&nbsp;soporta&nbsp;audio.
      </div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/audio&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Música&nbsp;gratuita&nbsp;libre&nbsp;de</div>
      <div>&nbsp;&nbsp;&nbsp;regalías&nbsp;por</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;a</span>&nbsp;<span
         style="color: #ff0000;">target</span>=<span
         style="color: #0000ff;">"_blank"</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">href</span>=<span
         style="color: #0000ff;">"https://www.royaltyfreemusicclips.com"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;Royalty&nbsp;Free&nbsp;Music&nbsp;Clips<span
         style="color: #800000;">&lt;/a&gt;</span>.</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/p&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/footer&gt;</span></div>
      <div><span style="color: #800000;">&lt;/body&gt;</span></div>
      <div><span style="color: #800000;">&lt;/html&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("c2-audio", C2audio);