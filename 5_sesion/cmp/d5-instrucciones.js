import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D5Instrucciones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Instrucciones</h1>
   <div class="lectura">
    <ol>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1MOzhSfUtSbia9mABh6tCZSDyYRaC5MtS/view?usp=sharing"
         target="_blank">Crea la base de datos en Atlas.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1dKuFogISfIV1O4rnsysBjuUexmpJFUJl/view?usp=sharing"
         target="_blank">Crea un sitio de Replit de tipo <em>Node.js</em>
         utilizando las páginas que siguen y pruébalo.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1BnRquRDpNmnTUM9iijjeY1WV1J1MrT9z/view?usp=sharing"
         target="_blank">Observa paso a paso la comunicación entre ciente y
        servidor.</a>
      </p>
     </li>
    </ol>
   </div>`;
 }
}

customElements.define("d5-instrucciones", D5Instrucciones);