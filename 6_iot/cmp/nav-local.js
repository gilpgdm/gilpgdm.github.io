/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">IoT</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_casos.html">Casos de Uso</a></p></li>
        <li><p><a href="4_despliegue.html">Despliegue</a></p></li>
        <li><p><a href="5_er.html">Diagrama Entidad Relación</a></p></li>
        <li><p><a href="6_no_rel.html">Diseño no Relacional</a></p></li>
        <li><p><a href="7_instrucciones.html">Instrucciones</a></p></li>
        <li><p><a href="8_archivos.html">Archivos</a></p></li>
        <li><p><a href="9_tipos.html">js/tipos.js</a></p></li>
        <li><p><a href="10_init.html">js/init.js</a></p></li>
        <li><p><a href="11_index.html">index.html</a></p></li>
        <li><p><a href="12_CtrlMovil.html">js/CtrlMovil.js</a></p></li>
        <li><p><a href="13_fabrica.html">lib/fabrica.js</a></p></li>
        <li><p><a href="14_tiposFire.html">lib/tiposFire.js</a></p></li>
        <li><p><a href="15_util.html">lib/util.js</a></p></li>
        <li><p><a href="16_footer.html">cmp/mi-footer.js</a></p></li>
        <li><p><a href="17_estilos.html">css/estilos.css</a></p></li>
        <li><p><a href="18_dispositivo.html">dispositivo.html</a></p></li>
        <li><p><a href="19_ResInt.html">disp/ResInt.js</a></p></li>
        <li><p><a href="20_utilIoT.html">disp/utilIoT.js</a></p></li>
        <li><p><a href="21_CtrlDispositivo.html">disp/CtrlDispositivo.js</a></p></li>
        <li><p><a href="22_ProxySalida.html">disp/ProxySalida.js</a></p></li>
        <li><p><a href="23_ProxyEntrada.html">disp/ProxyEntrada.js</a></p></li>
        <li><p><a href="24_ProxyHistorial.html">disp/ProxyHistorial.js</a></p></li>
        <li><p><a href="25_historial.html">historial.html</a></p></li>
        <li><p><a href="26_CtrlHistorial.html">js/CtrlHistorial.js</a></p></li>
        <li><p><a href="27_README.html">README.md</a></p></li>
        <li><p><a href="28_LICENSE.html">LICENSE</a></p></li>
      </ol>`;
  }
});