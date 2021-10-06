import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A3Referencias extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Referencias</h1>
   <div class="lectura">
    <dl>
     <dt>Material.io</dt>
     <dd>
      <p>
       <a href="https://material.io/" target="_blank">https://material.io/</a>
      </p>
     </dd>
     <dt>Material Icons</dt>
     <dd>
      <p>
       <a href="https://material.io/resources/icons"
         target="_blank">https://material.io/resources/icons</a>
      </p>
     </dd>
     <dt>Colores en Material</dt>
     <dd>
      <p>
       <a href="https://material.io/design/color/the-color-system.html"
         target="_blank">https://material.io/design/color/the-color-system.html</a>
      </p>
     </dd>
     <dt>Color Tool</dt>
     <dd>
      <p>
       <a href="https://material.io/resources/color"
         target="_blank">https://material.io/resources/color</a>
      </p>
     </dd>
     <dt>Adaptación multiplataforma</dt>
     <dd>
      <p>
       <a href="https://material.io/design/platform-guidance/cross-platform-adaptation.html"
         target="_blank">https://material.io/design/platform-guidance/cross-platform-adaptation.html</a>
      </p>
     </dd>
    </dl>
    <ul class="noPrint">
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1FrtKSJWrmpaueTjyhdTYwbtQFBz_i8qr/view?usp=sharing"
         target="_blank">Observa las interfaces en Android.</a>
      </p>
     </li>
     <li>
      <p>
       <a href="https://drive.google.com/file/d/1a_w5cAm5gg2pEzYKMDv4PivD0vmWjwUQ/view?usp=sharing"
         target="_blank">Observa las interfaces en iOS (iPhone o
        iPad).</a>
      </p>
     </li>
    </ul>
   </div>`;
 }
}

customElements.define("a3-referencias", A3Referencias);