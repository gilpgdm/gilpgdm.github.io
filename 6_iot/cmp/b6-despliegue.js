import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B6Despliegue extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Despliegue</h1>
   <div class="lectura">
     <figure>
       <img class="dc" src="/6_iot/img/despliegue_iot.svg"
         alt="Diagrama de Despliegue">
     </figure>
   </div>`;
 }
}

customElements.define("b6-despliegue", B6Despliegue);