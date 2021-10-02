import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D2Video extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. El Elemento <strong>video</strong></h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Se usa para desplegar sonidos, videos o películas.</p>
     </li>
     <li>
      <p>
       Aunque este elemento puede llevar contenido, por ejemplo texto, este
       no se muestra al usuario; es para desplegarse en navegadores que no
       soportan el elemento
       <code class="language-html">video</code>,
       para poder probar con plugins o indicar como acceder al contenido.
      </p>
     </li>
     <li>
      <p>
       Para que tu video se despliegue en el navegador Safari para las
       computadoras Apple (iPad, iPhone, Mac), tu servidor web debe soportar
       byte-range request. No todos los servidores soportan este tipo de
       solicitudes.
      </p>
     </li>
     <li>
      <p>
       Una opción es usar Giphy que en formato de video es más rápido y eficiente
       que en el formato GIF. Al seleccionar una imagen, haz clic en
       <strong>Media</strong> y copia la URL del formato MP4.
      </p>
     </li>
    </ul>
    <h3>Atributos adicionales</h3>
    <dl>
     <dt><dfn><code class="language-html">poster</code></dfn></dt>
     <dd>
      <p>
       Proporciona la URL de una imagen que se muestra mientras no se haya
       cargado ningún byte del video.
      </p>
     </dd>
    </dl>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <iframe src="/2_multimedia/src/2d_video.html" height="270"></iframe>
     <p class="noPrint">
      <a href="/2_multimedia/src/2d_video.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EVideo%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20video%20%7B%0A%20%20%20max-width%3A%20100%25%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EVideo%3C%2Fh1%3E%0A%20%3Cfigure%3E%0A%20%20%3Cvideo%20autoplay%20loop%0A%20%20%20%20src%3D%22https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F1W62t8wP8m1iM%2Fgiphy.mp4%22%3E%0A%20%20%20Tu%20navegador%20no%20soporta%20video.%0A%20%20%3C%2Fvideo%3E%0A%20%3C%2Ffigure%3E%0A%20%3Cfooter%3E%0A%20%20%3Cp%3E%0A%20%20%20Video%20de%0A%20%20%20%3Ca%20href%3D%22https%3A%2F%2Fgiphy.com%22%0A%20%20%20%20%20target%3D%22_blank%22%3E%0A%20%20%20%20Giphy%3C%2Fa%3E.%0A%20%20%3C%2Fp%3E%0A%20%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
      <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Video<span
         style="color: #800000;">&lt;/title&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">video</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">max-width</span>:&nbsp;<span
         style="color: #098658;">100%</span></div>
      <div>&nbsp;&nbsp;}</div>
      <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
      <div><span style="color: #800000;">&lt;/head&gt;</span></div>
      <div><span style="color: #800000;">&lt;body&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Video<span
         style="color: #800000;">&lt;/h1&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;figure&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;video</span>&nbsp;<span
         style="color: #ff0000;">autoplay</span>&nbsp;<span
         style="color: #ff0000;">loop</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">src</span>=<span
         style="color: #0000ff;">"https://media.giphy.com/media/1W62t8wP8m1iM/giphy.mp4"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Tu&nbsp;navegador&nbsp;no&nbsp;soporta&nbsp;video.
      </div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/video&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/figure&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Video&nbsp;de</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;a</span>&nbsp;<span
         style="color: #ff0000;">href</span>=<span
         style="color: #0000ff;">"https://giphy.com"</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">target</span>=<span
         style="color: #0000ff;">"_blank"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;Giphy<span
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

customElements.define("d2-video", D2Video);