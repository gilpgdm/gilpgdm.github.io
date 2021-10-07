import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A6Casos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Casos de Uso</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>
       <a href="https://replit.com/@GilbertoPacheco/ws1?v=1"
         target="_blank">Revisa el código y pruébalo en Replit.</a>
      </p>
     </li>
    </ul>
    <figure>
     <img class="dc" src="/6_iot/img/casos_iot.svg"
       alt="Diagrama de Casos de Uso">
    </figure>
   </div>`;
 }
}

customElements.define("a6-casos", A6Casos);