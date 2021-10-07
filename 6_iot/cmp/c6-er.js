import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class C6ER extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Diagrama Entidad Relación</h1>
   <div class="lectura">
     <figure>
       <img class="dc" src="/6_iot/img/entidades_iot.svg"
         alt="Diagrama de Entidad Relación de la Base de Datos">
     </figure>
   </div>`;
 }
}

customElements.define("c6-er", C6ER);