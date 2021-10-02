import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";


export class B2AudioVideo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Audio y Video</h1>
   <div class="lectura">
    <p>
     <strong>
      Respeta las licencias de uso del contenido que coloques en tu
      sitio.
     </strong>
    </p>
    <p>
     Los 2 elementos se pueden usar para reproducir tanto audio como video. La
     principal diferencia es que el elemento
     <code class="language-html">audio</code>
     no tiene espacio para desplegar contenido visual (como video o subtítulos),
     mientras que el elemento
     <code class="language-html">video</code>
     si lo tiene.
    </p>
    <h2>Atributos Comunes</h2>
    <p>
     Los elementos multimedia
     <code class="language-html">audio</code>
     y
     <code class="language-html">video</code>
     tienen los siguientes atributos en común:
    </p>
    <dl>
     <dt><dfn><code class="language-html">src</code></dfn></dt>
     <dd>
      <p>
       La URL del recurso de audio o video a desplegar. Si está
       presente, debe contener una URL no vacía. Puede rodearse con
       espacios.
      </p>
     </dd>
     <dt><dfn><code class="language-html">crossorigin</code></dfn></dt>
     <dd>
      <p>
       Especifica el valor CORS (Cross-origin resource sharing), que
       puede ser:
      </p>
      <ul>
       <li><code class="language-html">anonymous</code></li>
       <li><code class="language-html">use-credentials</code></li>
      </ul>
     </dd>
     <dt><dfn><code class="language-html">preload</code></dfn></dt>
     <dd>
      <p>Puede tener los siguientes valores:</p>
      <dl>
       <dt><dfn><code class="language-html">none</code></dfn></dt>
       <dd>
        <p>
         El recurso no se descarga antes de reproducirse, pues no se
         espera que el usuario necesite el recurso, o el servidor
         espera minimizar tráfico innecesario. No se proporciona
         ningún indicio sobre la agresividad para descargar el
         recurso una vez que se empieza a reproducir.
        </p>
       </dd>
       <dt><dfn><code class="language-html">metadata</code></dfn></dt>
       <dd>
        <p>
         Descargar solamente los metadatos del recurso (dimensiones,
         lista de títulos, duración, etc.) y aún unos pocos cuadros
         del inicio. Una vez iniciada la reproducción, los datos se
         descargan a la velocidad más baja que garantice una
         reproducción consistente.
        </p>
       </dd>
       <dt><dfn><code class="language-html">auto</code></dfn></dt>
       <dd>
        <p>
         El usuario puede descargar el recurso agresivamente sin
         riesgo para el servidor, incluyendo la descarga total antes
         de reproducirse.
        </p>
       </dd>
      </dl>
     </dd>
     <dt><dfn><code class="language-html">autoplay</code></dfn></dt>
     <dd>
      <p>
       Es un atributo booleano. Cuando está presente, se inicia la
       reproducción del recurso tan pronto como se pueda, sin
       detenerse. Se recomienda no usar esta característica y permitir
       al usuario iniciar la reproducción explícitamente.
      </p>
     </dd>
     <dt><dfn><code class="language-html">loop</code></dfn></dt>
     <dd>
      <p>
       Es un atributo booleano. Si está presente, indica que cuando la
       reproducción del recurso termine, debe reiniciar.
      </p>
     </dd>
     <dt><dfn><code class="language-html">muted</code></dfn></dt>
     <dd>
      <p>
       Es un atributo booleano. Su presencia silencia la salida de
       audio, potencialmente contraviniendo las preferencias del
       usuario.
      </p>
     </dd>
     <dt><dfn><code class="language-html">controls</code></dfn></dt>
     <dd>
      <p>
       Es un atributo booleano. Cuando se especifica, indica que se
       deben mostrar los controles del elemento.
      </p>
     </dd>
    </dl>
   </div>`;
 }
}

customElements.define("b2-audio-video", B2AudioVideo);