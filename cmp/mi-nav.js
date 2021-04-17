/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

class MiNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<h2>Contenido</h2>
      <ol>
        <li><p><a href="/index.html">Inicio</a></p></li>
        <li><p><a href="/b_sw.html">Software a Instalar</a></p></li>
        <li>
          <details>
            <summary>
              <h3>Las App Multiplataforma</h3>
            </summary>
            <ol>
              <li><p><a href="/c_multiplataforma/index.html">Las App Multiplataforma</a></p></li>
              <li><p><a href="/c_multiplataforma/3_nativa.html">App Nativa</a></p></li>
              <li><p><a href="/c_multiplataforma/4_multiplataforma.html">App Multiplataforma</a></p></li>
              <li><p><a href="/c_multiplataforma/5_diferencias.html">Diferencias entre App Nativa y App Multiplataforma</a></p></li>
              <li><p><a href="/c_multiplataforma/6_ventajas_nativas.html">Ventajas de las App Nativas</a></p></li>
              <li><p><a href="/c_multiplataforma/7_ventajas_multiplataforma.html">Ventajas de las App Multiplataforma</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Elementos multimedia de HTML5</h3>
            </summary>
            <ol>
              <li><p><a href="/d_multimedia/index.html">Elementos multimedia de HTML5</a></p></li>
              <li><p><a href="/d_multimedia/3_a.html">El elemento <strong>a</strong></a></p></li>
              <li><p><a href="/d_multimedia/4_imagenes.html">Imágenes</a></p></li>
              <li><p><a href="/d_multimedia/5_ejemplo_imagenes.html">Ejemplo de imágenes</a></p></li>
              <li><p><a href="/d_multimedia/6_audio_y_video.html">Audio y video</a></p></li>
              <li><p><a href="/d_multimedia/7_audio.html">El elemento <strong>audio</strong></a></p></li>
              <li><p><a href="/d_multimedia/8_ejemplo_audio.html">Ejemplo de <strong>audio</strong></a></p></li>
              <li><p><a href="/d_multimedia/9_video.html">El elemento <strong>video</strong></a></p></li>
              <li><p><a href="/d_multimedia/10_ejemplo_video.html">Ejemplo de <strong>video</strong></a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Vistas móviles</h3>
            </summary>
            <ol>
              <li><p><a href="/d_x_vistas/index.html">Vistas móviles</a></p></li>
              <li><p><a href="/d_x_vistas/1_app.html">Una app básica</a></p></li>
              <li><p><a href="/d_x_vistas/2_campos.html">Campos</a></p></li>
              <li><p><a href="/d_x_vistas/3_interruptores.html">Interruptores</a></p></li>
              <li><p><a href="/d_x_vistas/4_sliders.html">Sliders</a></p></li>
              <li><p><a href="/d_x_vistas/5_botones.html">Botones</a></p></li>
              <li><p><a href="/d_x_vistas/6_formulario.html">Formularios</a></p></li>
              <li><p><a href="/d_x_vistas/7_gps.html">GPS</a></p></li>
              <li><p><a href="/d_x_vistas/8_archivos.html">Archivos y cámara</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>PWA</h3>
            </summary>
            <ol>
              <li><p><a href="/e_pwa/index.html">PWA</a></p></li>
              <li><p><a href="/e_pwa/3_instrucciones.html">Instrucciones</a></p></li>
              <li><p><a href="/e_pwa/4_archivos.html">Archivos</a></p></li>
              <li><p><a href="/e_pwa/5_index.html">index.html</a></p></li>
              <li><p><a href="/e_pwa/6_CtrlDivide.html">js/CtrlDivide.js</a></p></li>
              <li><p><a href="/e_pwa/7_config.html">js/config.js</a></p></li>
              <li><p><a href="/e_pwa/8_sw.html">sw.js</a></p></li>
              <li><p><a href="/e_pwa/9_webmanifest.html">site.webmanifest</a></p></li>
              <li><p><a href="/e_pwa/10_estilos.html">css/estilos.css</a></p></li>
              <li><p><a href="/e_pwa/11_botones.html">lib/css/botones.css</a></p></li>
              <li><p><a href="/e_pwa/12_campo-dinamico_css.html">lib/css/campo-dinamico.css</a></p></li>
              <li><p><a href="/e_pwa/13_campo_interruptor_css.html">lib/css/campo-interruptor.css</a></p></li>
              <li><p><a href="/e_pwa/14_campo-slider_css.html">lib/css/campo-slider.css</a></p></li>
              <li><p><a href="/e_pwa/15_principal.html">lib/css/principal.css</a></p></li>
              <li><p><a href="/e_pwa/16_campo-dinamico_js.html">lib/campo-dinamico.js</a></p></li>
              <li><p><a href="/e_pwa/17_campo_interruptor_js.html">lib/campo-interruptor.js</a></p></li>
              <li><p><a href="/e_pwa/18_campo-slider_js.html">lib/campo-slider.js</a></p></li>
              <li><p><a href="/e_pwa/19_movil.html">lib/movil.js</a></p></li>
              <li><p><a href="/e_pwa/20_favicon.html">favicon.ico</a></p></li>
              <li><p><a href="/e_pwa/21_icono256.html">img/icono256.png</a></p></li>
              <li><p><a href="/e_pwa/22_icono1024.html">img/icono1024.png</a></p></li>
              <li><p><a href="/e_pwa/23_icono2048.html">img/icono2048.png</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>IoT</h3>
            </summary>
            <ol>
              <li><p><a href="/f_iot/index.html">IoT</a></p></li>
              <li><p><a href="/f_iot/3_casos.html">Casos de Uso</a></p></li>
              <li><p><a href="/f_iot/4_despliegue.html">Despliegue</a></p></li>
              <li><p><a href="/f_iot/5_er.html">Diagrama Entidad Relación</a></p></li>
              <li><p><a href="/f_iot/6_no_rel.html">Diseño no Relacional</a></p></li>
              <li><p><a href="/f_iot/7_instrucciones.html">Instrucciones</a></p></li>
              <li><p><a href="/f_iot/8_archivos.html">Archivos</a></p></li>
              <li><p><a href="/f_iot/9_tipos.html">js/tipos.js</a></p></li>
              <li><p><a href="/f_iot/10_init.html">js/init.js</a></p></li>
              <li><p><a href="/f_iot/11_index.html">index.html</a></p></li>
              <li><p><a href="/f_iot/12_CtrlMovil.html">js/CtrlMovil.js</a></p></li>
              <li><p><a href="/f_iot/13_fabrica.html">lib/fabrica.js</a></p></li>
              <li><p><a href="/f_iot/14_tiposFire.html">lib/tiposFire.js</a></p></li>
              <li><p><a href="/f_iot/15_util.html">lib/util.js</a></p></li>
              <li><p><a href="/f_iot/16_footer.html">cmp/mi-footer.js</a></p></li>
              <li><p><a href="/f_iot/17_estilos.html">css/estilos.css</a></p></li>
              <li><p><a href="/f_iot/18_dispositivo.html">dispositivo.html</a></p></li>
              <li><p><a href="/f_iot/19_ResInt.html">disp/ResInt.js</a></p></li>
              <li><p><a href="/f_iot/20_utilIoT.html">disp/utilIoT.js</a></p></li>
              <li><p><a href="/f_iot/21_CtrlDispositivo.html">disp/CtrlDispositivo.js</a></p></li>
              <li><p><a href="/f_iot/22_ProxySalida.html">disp/ProxySalida.js</a></p></li>
              <li><p><a href="/f_iot/23_ProxyEntrada.html">disp/ProxyEntrada.js</a></p></li>
              <li><p><a href="/f_iot/24_ProxyHistorial.html">disp/ProxyHistorial.js</a></p></li>
              <li><p><a href="/f_iot/25_historial.html">historial.html</a></p></li>
              <li><p><a href="/f_iot/26_CtrlHistorial.html">js/CtrlHistorial.js</a></p></li>
              <li><p><a href="/f_iot/27_README.html">README.md</a></p></li>
              <li><p><a href="/f_iot/28_LICENSE.html">LICENSE</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>ESP8266</h3>
            </summary>
            <ol>
              <li><p><a href="/g_esp8266/index.html">ESP8266</a></p></li>
              <li><p><a href="/g_esp8266/3_blink.html">Blink.ino</a></p></li>
              <li><p><a href="/g_esp8266/4_button.html">Button.ino</a></p></li>
              <li><p><a href="/g_esp8266/5_descarga.html">Descarga de datos por WiFi</a></p></li>
              <li><p><a href="/g_esp8266/6_MiGet.html">MiGet.ino</a></p></li>
              <li><p><a href="/g_esp8266/7_modifica.html">Modifica datos por WiFi</a></p></li>
              <li><p><a href="/g_esp8266/8_MiPatch.html">MiPatch.ino</a></p></li>
              <li><p><a href="/g_esp8266/9_publica.html">Publica datos por WiFi</a></p></li>
              <li><p><a href="/g_esp8266/10_MiPost.html">MiPost.ino</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Implementación de Cliente ESP8266</h3>
            </summary>
            <ol>
              <li><p><a href="/h_dispositivo/index.html">Implementación de Cliente ESP8266</a></p></li>
              <li><p><a href="/h_dispositivo/3_archivos.html">Archivos</a></p></li>
              <li><p><a href="/h_dispositivo/4_Dispositivo.html">Dispositivo.ino</a></p></li>
              <li><p><a href="/h_dispositivo/5_ResInt_h.html">ResInt.hpp</a></p></li>
              <li><p><a href="/h_dispositivo/6_ResInt_c.html">ResInt.cpp</a></p></li>
              <li><p><a href="/h_dispositivo/7_utilIoT_h.html">utilIoT.hpp</a></p></li>
              <li><p><a href="/h_dispositivo/8_utilIoT_c.html">utilIoT.cpp</a></p></li>
              <li><p><a href="/h_dispositivo/9_ProxySalida_h.html">ProxySalida.hpp</a></p></li>
              <li><p><a href="/h_dispositivo/10_ProxySalida_c.html">ProxySalida.cpp</a></p></li>
              <li><p><a href="/h_dispositivo/11_ProxyEntrada_h.html">ProxyEntrada.hpp</a></p></li>
              <li><p><a href="/h_dispositivo/12_ProxyEntrada_c.html">ProxyEntrada.cpp</a></p></li>
              <li><p><a href="/h_dispositivo/13_ProxyHistorial_h.html">ProxyHistorial.hpp</a></p></li>
              <li><p><a href="/h_dispositivo/14_ProxyHistorial_c.html">ProxyHistorial.cpp</a></p></li>
            </ol>
          </details>
        </li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);