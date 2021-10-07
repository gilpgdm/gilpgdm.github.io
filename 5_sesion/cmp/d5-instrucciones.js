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
       <a href="https://drive.google.com/file/d/1_n_R8U31zloq1x4EFuXepaWCOUgDkKoT/view?usp=sharing"
         target="_blank">Crea un sitio de Replit de nombre aut con
        Node.js y base de datos.</a>
      </p>
      <p>La instrucción para agregar librerías es:</p>
      <pre><kbd>npm i express multer mongodb</kbd></pre>
     </li>
     <li>
      <p>Edita el código, utilizando las páginas que siguen.</p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1q-egiof-2m3jO1DbSoXAmskBn8lJkRyu/view?usp=sharing"
         target="_blank">Prueba tu código localmente con Visual Studio
        Code.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/16YhVAWW_Rw0OEfZkjkPMpPhBeO_-HCf_/view?usp=sharing"
         target="_blank">Súbelo a Replit y pruébalo.</a>
      </p>
     </li>
    </ol>
   </div>`;
 }
}

customElements.define("d5-instrucciones", D5Instrucciones);