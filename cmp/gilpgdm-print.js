import "../js/config.js";
import { Diapositiva } from "../lib/Diapositiva.js";
import "./gilpgdm-index.js";
import "../cmp/sw-index.js";
import "../1_multiplataforma/cmp/nativas-print.js";

export class GilPGDMPrint extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<gilpgdm-index></gilpgdm-index>
    <mi-footer></mi-footer>
    <section>
     <h1 class="presentación">Software a Instalar</h1>
     <sw-index></sw-index>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">1. Las App Multiplataforma</h1>
     <nativas-print></nativas-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">2. Introducción a HTML</h1>
     <introduccion-print></introduccion-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">3. Elementos básicos de HTML</h1>
     <elementos-print></elementos-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">4. CSS</h1>
     <css-print></css-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">5. Propiedades básicas de CSS</h1>
     <basicas-print></basicas-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">6. La propiedad <strong>display</strong></h1>
     <display-print></display-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">7. El modelo de cajas</h1>
     <cajas-print></cajas-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">8. Posicionamiento</h1>
     <posicionamiento-print></posicionamiento-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">9. Selectores</h1>
     <selectores-print></selectores-print>
     <mi-footer></mi-footer>
    </section>`;
 }
}

customElements.define("gilpgdm-print", GilPGDMPrint);