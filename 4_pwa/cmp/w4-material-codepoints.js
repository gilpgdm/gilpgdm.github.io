import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class W4MaterialCodepoints extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>W. lib/fonts/MaterialIcons-Regular.codepoints</h1>
   <div class="lectura">
    <p>Archivo necesario para mostrar los íconos.</p>
    <p class="noPrint">
     <a href="src/MaterialIcons-Regular.codepoints"
       download>Descarga el archivo.</a>
    </p>
   </div>`;
 }
}

customElements.define("w4-material-codepoints", W4MaterialCodepoints);