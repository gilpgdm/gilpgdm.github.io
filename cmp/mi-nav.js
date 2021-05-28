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
              <li><p><a href="/d_x_vistas/5_progreso.html">Indicadores de progreso</a></p></li>
              <li><p><a href="/d_x_vistas/5_botones.html">Botones</a></p></li>
              <li><p><a href="/d_x_vistas/6_navegacion.html">Navegación</a></p></li>
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
              <li><p><a href="/e_pwa/2_instrucciones.html">Instrucciones</a></p></li>
              <li><p><a href="/e_pwa/3_archivos.html">Archivos</a></p></li>
              <li><p><a href="/e_pwa/4_ayuda.html">ayuda.html</a></p></li>
              <li><p><a href="/e_pwa/5_index.html">index.html</a></p></li>
              <li><p><a href="/e_pwa/6_CtrlDivide.html">js/CtrlDivide.js</a></p></li>
              <li><p><a href="/e_pwa/7_config.html">js/config.js</a></p></li>
              <li><p><a href="/e_pwa/22_movil.html">lib/movil.js</a></p></li>
              <li><p><a href="/e_pwa/8_mi-nav_js.html">js/mi-nav.js</a></p></li>
              <li><p><a href="/e_pwa/9_mi-nav_css.html">lib/css/mi-nav.css</a></p></li>
              <li><p><a href="/e_pwa/10_favicon.html">favicon.ico</a></p></li>
              <li><p><a href="/e_pwa/11_icono256.html">img/icono256.png</a></p></li>
              <li><p><a href="/e_pwa/12_icono1024.html">img/icono1024.png</a></p></li>
              <li><p><a href="/e_pwa/13_icono2048.html">img/icono2048.png</a></p></li>
              <li><p><a href="/e_pwa/14_webmanifest.html">site.webmanifest</a></p></li>
              <li><p><a href="/e_pwa/15_sw.html">sw.js</a></p></li>
              <li><p><a href="/e_pwa/16_estilos.html">css/estilos.css</a></p></li>
              <li><p><a href="/e_pwa/17_principal.html">lib/css/principal.css</a></p></li>
              <li><p><a href="/e_pwa/18_ripple.html">lib/css/ripple.css</a></p></li>
              <li><p><a href="/e_pwa/19_botones.html">lib/css/botones.css</a></p></li>
              <li><p><a href="/e_pwa/20_cmp-din_js.html">lib/cmp-din.js</a></p></li>
              <li><p><a href="/e_pwa/21_cmp-din_css.html">lib/css/cmp-din.css</a></p></li>
              <li><p><a href="/e_pwa/23_material-icons.html">lib/css/material-icons.css</a></p></li>
              <li><p><a href="/e_pwa/24_MaterialIcons-Regular_codepoints.html">lib/fonts/MaterialIcons-Regular.codepoints</a></p></li>
              <li><p><a href="/e_pwa/25_MaterialIcons-Regular.html">lib/fonts/MaterialIcons-Regular.ttf</a></p></li>
              <li><p><a href="/e_pwa/26_roboto.html">lib/css/roboto.css</a></p></li>
              <li><p><a href="/e_pwa/27_roboto-v27-latin-regular_woff.html">lib/fonts/roboto-v27-latin-regular.woff</a></p></li>
              <li><p><a href="/e_pwa/28_roboto-v27-latin-regular_woff2.html">lib/fonts/roboto-v27-latin-regular.woff2</a></p></li>
              <li><p><a href="29_LICENSE.html">LICENSE</a></p></li>
            </ol>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <h3>Control de sesión</h3>
            </summary>
            <ol>
              <li><p><a href="/e_sesion/index.html">Control de sesión</a></p></li>
              <li><p><a href="/e_sesion/3_arquitectura.html">Arquitectura</a></p></li>
              <li><p><a href="/e_sesion/4_despliegue.html">Despliegue</a></p></li>
              <li><p><a href="/e_sesion/5_er.html">Diagrama Entidad Relación</a></p></li>
              <li><p><a href="/e_sesion/7_instrucciones.html">Instrucciones</a></p></li>
              <li><p><a href="/e_sesion/8_archivos.html">Archivos</a></p></li>
              <li><p><a href="/e_sesion/9_index_html.html">www/index.html</a></p></li>
              <li><p><a href="/e_sesion/10_CtrlSesion.html">www/js/CtrlSesion.js</a></p></li>
              <li><p><a href="/e_sesion/12_index_js.html">index.js</a></p></li>
              <li><p><a href="/e_sesion/14_validaUsuario.html">servicios/validaUsuario.js</a></p></li>
              <li><p><a href="/e_sesion/15_LICENSE.html">LICENSE</a></p></li>
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
              <li><p><a href="/f_iot/9_tipos.html">servicios/tipos.js</a></p></li>
              <li><p><a href="/f_iot/10_index_html.html">www/index.html</a></p></li>
              <li><p><a href="/f_iot/11_CtrlMovil.html">www/js/CtrlMovil.js</a></p></li>
              <li><p><a href="/f_iot/12_dispositivo.html">www/dispositivo.html</a></p></li>
              <li><p><a href="/f_iot/13_CtrlDispositivo.html">www/js/CtrlDispositivo.js</a></p></li>
              <li><p><a href="/f_iot/18_ResInt.html">www/js/ResInt.js</a></p></li>
              <li><p><a href="/f_iot/19_util.html">www/js/util.js</a></p></li>
              <li><p><a href="/f_iot/14_proxyAgregaEntrada.html">www/js/proxyAgregaEntrada.js</a></p></li>
              <li><p><a href="/f_iot/15_proxyAgregaSalida.html">www/js/proxyAgregaSalida.js</a></p></li>
              <li><p><a href="/f_iot/16_proxyRecuperaEntrada.html">www/js/proxyRecuperaEntrada.js</a></p></li>
              <li><p><a href="/f_iot/17_proxyRecuperaSalida.html">www/js/proxyRecuperaSalida.js</a></p></li>
              <li><p><a href="/f_iot/20_estilos.html">www/css/estilos.css</a></p></li>
              <li><p><a href="/f_iot/21_footer.html">www/js/mi-footer.js</a></p></li>
              <li><p><a href="/f_iot/22_b.html">b.js</a></p></li>
              <li><p><a href="/f_iot/23_index_js.html">index.js</a></p></li>
              <li><p><a href="/f_iot/24_agregaEntrada.html">servicios/agregaEntrada.js</a></p></li>
              <li><p><a href="/f_iot/25_agregaSalida.html">servicios/agregaSalida.js</a></p></li>
              <li><p><a href="/f_iot/27_recuperaEntrada.html">servicios/recuperaEntrada.js</a></p></li>
              <li><p><a href="/f_iot/28_recuperaSalida.html">servicios/recuperaSalida.js</a></p></li>
              <li><p><a href="/f_iot/29_LICENSE.html">LICENSE</a></p></li>
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
              <li><p><a href="/g_esp8266/6_MiGet.html">MiGet.ino</a></p></li>
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
              <li><p><a href="/h_dispositivo/7_util_h.html">util.hpp</a></p></li>
              <li><p><a href="/h_dispositivo/8_util_c.html">util.cpp</a></p></li>
              <li><p><a href="/h_dispositivo/9_proxyAgregaEntrada_h.html">proxyAgregaEntrada.hpp</a></p></li>
              <li><p><a href="/h_dispositivo/10_proxyAgregaEntrada_c.html">proxyAgregaEntrada.cpp</a></p></li>
              <li><p><a href="/h_dispositivo/11_proxyRecuperaSalida_h.html">proxyRecuperaSalida.hpp</a></p></li>
              <li><p><a href="/h_dispositivo/12_proxyRecuperaSalida_c.html">proxyRecuperaSalida.cpp</a></p></li>
            </ol>
          </details>
        </li>
      </ol>`;
  }
}

customElements.define("mi-nav", MiNav);