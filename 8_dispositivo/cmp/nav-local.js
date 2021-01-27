/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

customElements.define("nav-local", class extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<ol>
        <li><p><a href="index.html">PWA</a></p></li>
        <li><p><a href="2_contenido.html">Contenido</a></p></li>
        <li><p><a href="3_archivos.html">Archivos</a></p></li>
        <li><p><a href="4_Dispositivo.html">Dispositivo.ino</a></p></li>
        <li><p><a href="5_ResInt_h.html">ResInt.hpp</a></p></li>
        <li><p><a href="6_ResInt_c.html">ResInt.cpp</a></p></li>
        <li><p><a href="7_utilIoT_h.html">utilIoT.hpp</a></p></li>
        <li><p><a href="8_utilIoT_c.html">utilIoT.cpp</a></p></li>
        <li><p><a href="9_ProxySalida_h.html">ProxySalida.hpp</a></p></li>
        <li><p><a href="10_ProxySalida_c.html">ProxySalida.cpp</a></p></li>
        <li><p><a href="11_ProxyEntrada_h.html">ProxyEntrada.hpp</a></p></li>
        <li><p><a href="12_ProxyEntrada_c.html">ProxyEntrada.cpp</a></p></li>
        <li><p><a href="13_ProxyHistorial_h.html">ProxyHistorial.hpp</a></p></li>
        <li><p><a href="14_ProxyHistorial_c.html">ProxyHistorial.cpp</a></p></li>
      </ol>`;
  }
});