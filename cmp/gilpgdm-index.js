import "../js/config.js";
import { Diapositiva } from "../lib/Diapositiva.js";

export class GilPGDMIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
    <h2>por Gilberto Pacheco Gallegos</h2>
    <p>
     Este sitio es continuación de
     <a href="https://gilpgijs.github.io"
       target="_blank">https://gilpgijs.github.io</a>,
     <a href="https://gilpgpoojs.github.io"
       target="_blank">https://gilpgpoojs.github.io</a>
     y
     <a href="https://gilpgihc.github.io"
       target="_blank">https://gilpgihc.github.io</a>
    </p>
    <mi-nav open></mi-nav>
   </div>`;
 }
}

customElements.define("gilpgdm-index", GilPGDMIndex);