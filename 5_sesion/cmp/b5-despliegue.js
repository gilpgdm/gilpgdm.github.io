import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B5Despliegue extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Despliegue</h1>
   <div class="lectura">
     <figure>
       <img class="dc" src="/5_sesion/img/aut_despliegue.svg"
         alt="Diagrama de Despliegue">
     </figure>
   </div>`;
 }
}

customElements.define("b5-despliegue", B5Despliegue);