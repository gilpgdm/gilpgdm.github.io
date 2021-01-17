/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">Elementos Multimedia de HTML5</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_a.html">El Elemento <strong>a</strong></a></p></li>
        <li><p><a href="4_imagenes.html">Imágenes</a></p></li>
        <li><p><a href="5_ejemplo_imagenes.html">Ejemplo de Imágenes</a></p></li>
        <li><p><a href="6_audio_y_video.html">Audio y Video</a></p></li>
        <li><p><a href="7_audio.html">El Elemento <strong>audio</strong></a></p></li>
        <li><p><a href="8_ejemplo_audio.html">Ejemplo de <strong>audio</strong></a></p></li>
        <li><p><a href="9_video.html">El Elemento <strong>video</strong></a></p></li>
        <li><p><a href="10_ejemplo_video.html">Ejemplo de <strong>video</strong></a></p></li>
      </ol>`;
  }
});