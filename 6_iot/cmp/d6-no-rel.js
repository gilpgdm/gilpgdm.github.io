import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D6NoRel extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Diseño no Relacional</h1>
   <div class="lectura">
     <figure>
       <img class="dc" src="/6_iot/img/nosql_iot.svg"
         alt="Diseño No SQL de la Base de Datos">
     </figure>
   </div>`;
 }
}

customElements.define("d6-no-rel", D6NoRel);