import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class X4MaterialRegular extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>X. lib/fonts/MaterialIcons-Regular.ttf</h1>
   <div class="lectura">
    <p>Archivo necesario para mostrar los íconos.</p>
    <p class="noPrint">
     <a href="src/MaterialIcons-Regular.ttf"
       download>Descarga el archivo.</a>
    </p>
   </div>`;
 }
}

customElements.define("x4-material-regular", X4MaterialRegular);