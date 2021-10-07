import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C5ER extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Diagrama Entidad Relación</h1>
   <div class="lectura">
     <figure>
       <img class="dc" src="/5_sesion/img/aut_entidades.svg"
         alt="Diagrama de Entidad Relación de la Base de Datos">
     </figure>
   </div>`;
 }
}

customElements.define("c5-er", C5ER);