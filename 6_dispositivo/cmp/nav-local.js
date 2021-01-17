/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Posicionamiento con CSS3</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_propiedades.html">Propiedades de Posicionamiento</a></p></li>
        <li><p><a href="4_position.html">La Propiedad <strong>position</strong></a></p></li>
        <li><p><a href="5_ejemplo_fixed.html">Ejemplo de <strong>fixed</strong></a></p></li>
        <li><p><a href="6_ejemplo_relative.html">Ejemplo de <strong>relative</strong></a></p></li>
        <li><p><a href="7_ejemplo_absolute.html">Ejemplo de <strong>absolute</strong></a></p></li>
        <li><p><a href="8_ejemplo_sticky.html">Ejemplo de <strong>sticky</strong></a></p></li>
      </ol>`;
  }
});