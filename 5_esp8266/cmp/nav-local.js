/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Elementos Multimedia de HTML5</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_blink.html">Blink.ino</a></p></li>
        <li><p><a href="4_button.html">Button.ino</a></p></li>
        <li><p><a href="5_descarga.html">Descarga de datos por WiFi</a></p></li>
        <li><p><a href="6_MiGet.html">MiGet.ino</a></p></li>
        <li><p><a href="7_modifica.html">Modifica datos por WiFi</a></p></li>
        <li><p><a href="8_MiPatch.html">MiPatch.ino</a></p></li>
        <li><p><a href="9_publica.html">Publica datos por WiFi</a></p></li>
        <li><p><a href="10_MiPost.html">MiPost.ino</a></p></li>
      </ol>`;
  }
});