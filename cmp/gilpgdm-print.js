import "../js/config.js";
import { Diapositiva } from "../lib/Diapositiva.js";
import "./gilpgdm-index.js";
import "../cmp/sw-index.js";
import "../1_multiplataforma/cmp/nativas-print.js";
import "../2_multimedia/cmp/multimedia-print.js";
import "../3_vistas/cmp/vistas-print.js";
import "../4_pwa/cmp/pwa-print.js";
import "../5_sesion/cmp/sesion-print.js";
import "../6_iot/cmp/iot-print.js";
import "../7_esp8266/cmp/esp8266-print.js";

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
     <h1 class="presentación">2. Elementos Multimedia de HTML5</h1>
     <multimedia-print></multimedia-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">3. Vistas móviles</h1>
     <vistas-print></vistas-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">4. PWA</h1>
     <pwa-print></pwa-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">5. Control de sesión</h1>
     <sesion-print></sesion-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">6. IoT</h1>
     <iot-print></iot-print>
     <mi-footer></mi-footer>
    </section>
    <section>
     <h1 class="presentación">7. ESP8266</h1>
     <esp8266-print></esp8266-print>
     <mi-footer></mi-footer>
    </section>`;
 }
}

customElements.define("gilpgdm-print", GilPGDMPrint);