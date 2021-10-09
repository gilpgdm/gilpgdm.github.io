import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A4PWA extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. PWA</h1>
   <div class="lectura">
    <p>
     Las <dfn>Progressive Web Application</dfn> o PWA son aplicaciones que
     se pueden instalar en varias plataformas.
    </p>
    <p>
     <a href="src/pwa.zip" download>Descarga el ejemplo.</a>
    </p>
    <p>
     <a href="https://replit.com/@GilbertoPachec3/pwa?v=1"
       target="_blank">Revisa el código en Replit. Prueba e instala el
      ejemplo.</a>
    </p>
    <h2>Instrucciones</h2>
    <ol>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1gPTgkmsgiuQa56DDKE6fAlv4VJVMov7t/view?usp=sharing"
         target="_blank">Crea los íconos del proyecto con GIMP.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1ujeNp8TaHjqqRXl_TFT0omUGymmFWTLm/view?usp=sharing"
         target="_blank">Usa o crea una cuenta de Google.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1dmifWNqm_gRmQuMEe67HqKBYzzDTwEHt/view?usp=sharing"
         target="_blank">Crea una cuenta de Replit usando la cuenta de Google.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1XMmasbHWeDMT7jLHBjYsPsEQ7JBrNTcy/view?usp=sharing"
         target="_blank">Crea un proyecto <em>HTML, CSS, JS</em> en Replit y edita o sube
        los archivos de este proyecto y pruébalo.</a>
      </p>
      <p>
       Cada vez que hagas cambios en los archivos, debes modificar el valor de CACHE en
       el archivo sw.js.
      </p>
      <p>
       Recuerda usar la combinación de teclas
       <strong><kbd>Ctrl</kbd>+<kbd>Mayúsculas</kbd>+<kbd>r</kbd></strong>
       para forzar que se actualice el navegador en caso de que no se vean
       los cambios.
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1XoJ0ordsKsaAQpOfMXdaQUOq5VBFZ5M1/view?usp=sharing"
         target="_blank">Instala tu PWA en Windows.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1z7teVdzAqk0tZo-cHmTqtKuG-mGHmSAe/view?usp=sharing"
         target="_blank">Instala y usa tu PWA en Android.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1dX00-bV2NnIHsgoyaTydgUod6mazAOBV/view?usp=sharing"
         target="_blank">Instala y usa tu PWA en tu iPhone o en tu iPad.</a>
      </p>
     </li>
    </ol>
   </div>`;
 }
}

customElements.define("a4-pwa", A4PWA);