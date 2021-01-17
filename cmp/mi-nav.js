/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol>
        <li><p><a href="/index.html">Inicio</a></p></li>
        <li><p><a href="/2_sw.html">Software a Instalar</a></p></li>
        <li><p><a href="/3_multiplataforma">Las App Multiplataforma</a></p></li>
        <li><p><a href="/4_multimedia">Elementos Multimedia de HTML5</a></p></li>
        <li><p><a href="/5_posicionamiento">Posicionamiento con CSS3</a></p></li>
        <li><p><a href="/6_dispositivo">Acceso al Dispositivo</a></p></li>
        <li><p><a href="/7_pwa">PWA con Acceso al Dispositivo</a></p></li>
        <li><p><a href="/9_arquitectura">Arquitectura IoT</a></p></li>
        <li><p><a href="/10_esp8266">ESP8266</a></p></li>
        <li><p><a href="/11_cliente">Implementación de Cliente ESP8266</a></p></li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);