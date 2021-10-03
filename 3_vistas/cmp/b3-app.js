import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B3App extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Imágenes</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Hay varios tipos de elementos especializados en mostrar imágenes.</p>
     </li>
    </ul>
    <h2>El elemento <strong>img</strong></h2>
    <ul>
     <li>
      <p>Es un elemento de fraseo que muestra una imagen.</p>
     </li>
     <li>
      <p>Puede tener los siguientes atributos:</p>
      <dl>
       <dt><dfn><code class="language-html">src</code></dfn></dt>
       <dd>
        <p>URL del recurso.</p>
       </dd>
       <dt><dfn><code class="language-html">alt</code></dfn></dt>
       <dd>
        <p>Texto que se muestra cuando no se puede descargar la imagen.</p>
       </dd>
      </dl>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element"
         target="_blank">https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element</a>
      </p>
     </li>
    </ul>
    <h2>El elemento <strong>figure</strong></h2>
    <ul>
     <li>
      <p>
       Es un elemento de agrupamiento específicamente diseñado para mostrar
       imágenes.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element"
         target="_blank">https://html.spec.whatwg.org/multipage/grouping-content.html#the-figure-element</a>
      </p>
     </li>
    </ul>
    <h2>El elemento <strong>figcaption</strong></h2>
    <ul>
     <li>
      <p>
       Es un elemento de agrupamiento específicamente diseñado para mostrar el
       texto que describe el contenido de un
       <code class="language-html">figure</code>.
      </p>
     </li>
     <li>
      <p>
       Su especificación está en
       <a href="https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element"
         target="_blank">https://html.spec.whatwg.org/multipage/grouping-content.html#the-figcaption-element</a>
      </p>
     </li>
    </ul>
    <h2>Ejemplo</h2>
   </div>
   <div class="horizontal">
    <div>
     <h3>Salida</h3>
     <iframe src="/2_multimedia/src/2a_imagenes.html" height="300"></iframe>
     <p class="noPrint">
      <a href="/2_multimedia/src/2a_imagenes.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EIm%C3%A1genes%3C%2Ftitle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EIm%C3%A1genes%3C%2Fh1%3E%0A%20%3Cstyle%3E%0A%20%20img%20%7B%0A%20%20%20max-width%3A%20100%25%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%20%3Cfigure%3E%0A%20%20%3Cimg%20alt%3D%22Un%20gatito%22%0A%20%20%20%20src%3D%22https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FMDJ9IbxxvDUQM%2Fgiphy.gif%22%3E%0A%20%20%3Cfigcaption%3EGatito.%3C%2Ffigcaption%3E%0A%20%3C%2Ffigure%3E%0A%20%3Cfooter%3E%0A%20%20%3Cp%3E%0A%20%20%20Im%C3%A1gen%20de%0A%20%20%20%3Ca%20href%3D%22https%3A%2F%2Fgiphy.com%22%0A%20%20%20%20%20target%3D%22_blank%22%3E%0A%20%20%20%20Giphy%3C%2Fa%3E.%0A%20%20%3C%2Fp%3E%0A%20%3C%2Ffooter%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
    <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Imágenes<span
       style="color: #800000;">&lt;/title&gt;</span></div>
    <div><span style="color: #800000;">&lt;/head&gt;</span></div>
    <div><span style="color: #800000;">&lt;body&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Imágenes<span
       style="color: #800000;">&lt;/h1&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">img</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">max-width</span>:&nbsp;<span
       style="color: #098658;">100%</span></div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;figure&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;img</span>&nbsp;<span
       style="color: #ff0000;">alt</span>=<span
       style="color: #0000ff;">"Un&nbsp;gatito"</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">src</span>=<span
       style="color: #0000ff;">"https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;&nbsp;<span
       style="color: #800000;">&lt;figcaption&gt;</span>Gatito.<span
       style="color: #800000;">&lt;/figcaption&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;/figure&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;footer&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;p&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;Imágen&nbsp;de</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;a</span>&nbsp;<span
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

customElements.define("b3-app", B3App);