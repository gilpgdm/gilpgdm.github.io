import  "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";

export class PWAContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li><p><a href="/4_pwa/a_pwa.html">PWA</a></p></li>
     <li><p><a href="/4_pwa/b_archivos.html">Archivos</a></p></li>
     <li><p><a href="/4_pwa/c_ayuda.html">ayuda.html</a></p></li>
     <li><p><a href="/4_pwa/d_index.html">index.html</a></p></li>
     <li><p><a href="/4_pwa/e_CtrlRecomienda.html">js/CtrlRecomienda.js</a></p></li>
     <li><p><a href="/4_pwa/f_config.html">js/config.js</a></p></li>
     <li><p><a href="/4_pwa/g_movil.html">lib/movil.js</a></p></li>
     <li><p><a href="/4_pwa/h_mi-nav_js.html">js/mi-nav.js</a></p></li>
     <li><p><a href="/4_pwa/i_mi-nav_css.html">lib/css/mi-nav.css</a></p></li>
     <li><p><a href="/4_pwa/j_favicon.html">favicon.ico</a></p></li>
     <li><p><a href="/4_pwa/k_icono256.html">img/icono256.png</a></p></li>
     <li><p><a href="/4_pwa/l_icono1024.html">img/icono1024.png</a></p></li>
     <li><p><a href="/4_pwa/m_icono2048.html">img/icono2048.png</a></p></li>
     <li><p><a href="/4_pwa/n_webmanifest.html">site.webmanifest</a></p></li>
     <li><p><a href="/4_pwa/o_sw.html">sw.js</a></p></li>
     <li><p><a href="/4_pwa/p_estilos.html">css/estilos.css</a></p></li>
     <li><p><a href="/4_pwa/q_principal.html">lib/css/principal.css</a></p></li>
     <li><p><a href="/4_pwa/r_ripple.html">lib/css/ripple.css</a></p></li>
     <li><p><a href="/4_pwa/s_botones.html">lib/css/botones.css</a></p></li>
     <li><p><a href="/4_pwa/t_cmp-din_js.html">lib/cm-din.js</a></p></li>
     <li><p><a href="/4_pwa/u_cmp-din_css.html">lib/css/cm-din.css</a></p></li>
     <li><p><a href="/4_pwa/v_material-icons.html">lib/css/material-icons.css</a></p></li>
     <li><p><a href="/4_pwa/w_MaterialIcons-Regular_codepoints.html">lib/fonts/MaterialIcons-Regular.codepoints</a></p></li>
     <li><p><a href="/4_pwa/x_MaterialIcons-Regular.html">lib/fonts/MaterialIcons-Regular.ttf</a></p></li>
     <li><p><a href="/4_pwa/y_LICENSE.html">LICENSE</a></p></li>
    </ol>`;
 }
}

customElements.define("pwa-contenido", PWAContenido);