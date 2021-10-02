import  "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class MultimediaContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li><p><a href="/2_multimedia/a_imagenes.html">Imágenes</a></p></li>
     <li><p><a href="/2_multimedia/b_audio_y_video.html">Audio y video</a></p></li>
     <li><p><a href="/2_multimedia/c_audio.html">El elemento <strong>audio</strong></a></p></li>
     <li><p><a href="/2_multimedia/d_video.html">El elemento <strong>video</strong></a></p></li>
    </ol>`;
 }
}

customElements.define("multimedia-contenido", MultimediaContenido);