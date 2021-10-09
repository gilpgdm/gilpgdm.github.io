import "../js/config.js";
import { Diapositiva } from "../lib/Diapositiva.js";

export class SwIndex extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<div class="lectura">
   <dl>
    <dt>Microsoft Edge Chromium</dt>
    <dd>
     <p>
      Ya viene instalado en las computadoras más nuevas, pero si la tuya
      no lo tiene, lo puedes descargar de
      <a href="https://www.microsoft.com/es-es/edge"
        target="_blank">https://www.microsoft.com/es-es/edge</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1Wwsq6D3MaX8CDPpCIu53p9Lvx_42D5ou/view?usp=sharing"
        target="_blank">Video de instalación.</a>
     </p>
    </dd>
    <dt>Mozilla Firefox</dt>
    <dd>
     <p>
      Lo puedes descargar de
      <a href="https://www.mozilla.org"
        target="_blank">https://www.mozilla.org</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1Wr5AZUh1isg2qH0GtzQrz-MwjCfm2ZJC/view?usp=sharing"
        target="_blank">Video de Instalación.</a>
     </p>
    </dd>
    <dt>Google Chrome</dt>
    <dd>
     <p>
      Lo puedes descargar de
      <a href="https://google.com/chrome"
        target="_blank">https://google.com/chrome</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1DvSCM9GSypdK1GEI7EpBnIp9olPG3zNE/view?usp=sharing"
        target="_blank">Video de Instalación.</a>
     </p>
    </dd>
    <dt>Node.js</dt>
    <dd>
     <p>
      Lo puedes descargar de
      <a href="https://nodejs.org/" target="_blank">https://nodejs.org/</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1s_3a4dEOOhTWhhCFv8J5bEevktGSaS3n/view?usp=sharing"
        target="_blank">Video de Instalación.</a>
     </p>
    </dd>
    <dt>Visual Studio Code</dt>
    <dd>
     <p>
      Lo puedes descargar de
      <a href="https://code.visualstudio.com/"
        target="_blank">https://code.visualstudio.com/</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1B0yS96lNKwFu_ZhCGhL9M2qSlD6jEqa1/view?usp=sharing"
        target="_blank">Video de Instalación.</a>
     </p>
    </dd>
    <dt>GIMP</dt>
    <dd>
     <p>
      Lo puedes descargar de
      <a href="https://www.gimp.org/" target="_blank">https://www.gimp.org/</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/1i5dc5d7Dy_VHwiAK0w2J-CE09xCcgEVw/view?usp=sharing"
        target="_blank">Video de Instalación.</a>
     </p>
    </dd>
    <dt>Arduino IDE</dt>
    <dt>Arduino core for ESP8266 WiFi chip</dt>
    <dd>
     <p>
      Puedes descargar Arduino IDE desde
      <a href="https://www.arduino.cc/en/main/software"
        target="_blank">https://www.arduino.cc/en/main/software</a>.
     </p>
     <p>
      Puedes descargar Arduino core for ESP8266 WiFi chip desde
      <a href="https://github.com/esp8266/Arduino"
        target="_blank">https://github.com/esp8266/Arduino</a>.
     </p>
     <p class="noPrint">
      <a href="https://drive.google.com/file/d/18YJwnpYDLFQLGdOl3MBmaMR5DbYBeZoM/view?usp=sharing"
        target="_blank">Video de Instalación de Arduino IDE + ESP8266.</a>
     </p>
    </dd>
   </dl>
  </div>`;
 }
}

customElements.define("sw-index", SwIndex);