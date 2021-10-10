import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class E6Instrucciones extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>E. Instrucciones</h1>
   <div class="lectura">
     <ol>
       <li>
         <p>
           <a href="https://drive.google.com/file/d/10MfE6AYQHtSyfJW3Kb1PiARX1VNfkMwr/view?usp=sharing"
               target="_blank">Crea la base de datos iot en Atlas y agrega un
             documento para el dispositivo.</a>
         </p>
       </li>
       <li>
         <p>
           Crea un sitio de Replit de nombre iot con Node.js usando los
           archivos de este proyecto. El proceso es parecido al de la lección
           <em>Control de sesión</em>.
         </p>
       </li>
     </ol>
   </div>`;
 }
}

customElements.define("e6-instrucciones", E6Instrucciones);