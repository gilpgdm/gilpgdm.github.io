/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">PWA</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_instrucciones.html">Instrucciones</a></p></li>
        <li><p><a href="4_archivos.html">Archivos</a></p></li>
        <li><p><a href="5_index.html">index.html</a></p></li>
        <li><p><a href="6_CtrlDivide.html">js/CtrlDivide.js</a></p></li>
        <li><p><a href="7_agent.html">js/agent.js</a></p></li>
        <li><p><a href="8_regSw.html">js/regSw.js</a></p></li>
        <li><p><a href="9_sw.html">sw.js</a></p></li>
        <li><p><a href="10_webmanifest.html">site.webmanifest</a></p></li>
        <li><p><a href="11_estilos.html">css/estilos.css</a></p></li>
        <li><p><a href="12_campo.html">css/campo.css</a></p></li>
        <li><p><a href="13_nav.html">cmp/mi-nav.js</a></p></li>
        <li><p><a href="14_nav_css.html">css/mi-nav.css</a></p></li>
        <li><p><a href="15_favicon.html">favicon.ico</a></p></li>
        <li><p><a href="16_icono256.html">img/icono256.png</a></p></li>
        <li><p><a href="17_icono1024.html">img/icono1024.png</a></p></li>
        <li><p><a href="18_icono2048.html">img/icono2048.png</a></p></li>
        <li><p><a href="19_ayuda.html">ayuda.html</a></p></li>
        <li><p><a href="20_gps.html">gps.html</a></p></li>
        <li><p><a href="21_archivos.html">archivos.html</a></p></li>
        <li><p><a href="22_README.html">README.md</a></p></li>
        <li><p><a href="23_LICENSE.html">LICENSE</a></p></li>
      </ol>`;
  }
});