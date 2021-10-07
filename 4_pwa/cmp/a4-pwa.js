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
     <a href="https://replit.com/@GilbertoPacheco/pwa?v=1"
       target="_blank">Revisa el código, Prueba e instala el ejemplo.</a>
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
       <a href="https://drive.google.com/file/d/1pf1U49FbtVhOy8PawCbloQ2TCsEGrPrw/view?usp=sharing"
         target="_blank">Crea la base de tu sitio web.</a>
      </p>
     </li>
     <li>
      <p>Añade los archivos de este proyecto.</p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1dp1XxWJg07n7B0_ivuo_gykJWAMnsT1p/view?usp=sharing"
         target="_blank">Prueba tu PWA localmente.</a>
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
       <a href="https://drive.google.com/file/d/1bI1VHh6zgcyd-SI_ivAXola0cVR3WlPU/view?usp=sharing"
         target="_blank">Despliega tu PWA en Replit y pruébalo en
        Windows.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1FrtKSJWrmpaueTjyhdTYwbtQFBz_i8qr/view?usp=sharing"
         target="_blank">Instala y usa tu PWA en Android.</a>
       (El video está desactualizado, pero el mecanismo de instalación es
       el mismo.)
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1a_w5cAm5gg2pEzYKMDv4PivD0vmWjwUQ/view?usp=sharing"
         target="_blank">Instala y usa tu PWA en tu iPhone o en tu
        iPad.</a>
       (El video está desactualizado, pero el mecanismo de instalación es
       el mismo.)
      </p>
     </li>
    </ol>
   </div>`;
 }
}

customElements.define("a4-pwa", A4PWA);