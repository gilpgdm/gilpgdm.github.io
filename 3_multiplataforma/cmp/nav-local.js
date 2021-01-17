/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Las App Multiplataforma</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_nativa.html">App Nativa</a></p></li>
        <li><p><a href="4_multiplataforma.html">App Multiplataforma</a></p></li>
        <li><p><a href="5_diferencias.html">Diferencias entre App Nativa y App Multiplataforma</a></p></li>
        <li><p><a href="6_ventajas_nativas.html">Ventajas de las App Nativas</a></p></li>
        <li><p><a href="7_ventajas_multiplataforma.html">Ventajas de las App Multiplataforma</a></p></li>
      </ol>`;
  }
});