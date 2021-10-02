import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "./a2-imagenes.js";
import "./b2-audio-video.js";
import "./c2-audio.js";
import "./d2-video.js";
import "./multimedia-index.js";

export class MultimediaPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<section>
     <multimedia-index></multimedia-index>
    </section>
    <section>
     <a2-imagenes></a2-imagenes>
    </section>
    <section>
     <b2-audio-video></b2-audio-video>
    </section>
    <section>
    <c2-audio></c2-audio>
    </section>
    <section>
     <d2-video></d2-video>
    </section>`;
 }
}

customElements.define("multimedia-print", MultimediaPrint);