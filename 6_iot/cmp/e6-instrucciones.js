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
           <a href="https://drive.google.com/file/d/188rODiKDihuNU_HAtqWiL7FI3r-Van1-/view?usp=sharing"
               target="_blank">Crea la base de datos iot en Atlas y agrega un
             documento por cada dispositivo.</a>
         </p>
       </li>
       <li>
         <p>
           Crea un sitio de Replit de nombre iot con Node.js. El proceso es
           parecido al de la sección <em>Control de sesión</em>.
         </p>
         <p>La instrucción para agregar librerías es:</p>
         <pre><kbd>npm i express cors mongodb</kbd></pre>
       </li>
       <li>
         <p>Edita el código, utilizando las páginas que siguen.</p>
       </li>
       <li>
         <p>
           Prueba tu código localmente con Visual Studio Code. El proceso es
           parecido al de la sección <em>Control de sesión</em>.</p>
       </li>
       <li>
         <p>
           Súbelo a Replit y pruébalo. El proceso es
           parecido al de la sección <em>Control de sesión</em>.
         </p>
       </li>
     </ol>
   </div>`;
 }
}

customElements.define("e6-instrucciones", E6Instrucciones);