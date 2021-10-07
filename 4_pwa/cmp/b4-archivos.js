import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B4Archivos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Archivos</h1>
   <div class="lectura">
     <ul>
       <li>
         <p>css</p>
         <ul>
           <li>
             <p><a href="p_estilos.html">estilos.css</a></p>
           </li>
         </ul>
       </li>
       <li>
         <p>img</p>
         <ul>
           <li>
             <p><a href="k_icono256.html">icono256.png</a></p>
           </li>
           <li>
             <p><a href="l_icono1024.html">icono1024.png</a></p>
           </li>
           <li>
             <p><a href="m_icono2048.html">icono2048.png</a></p>
           </li>
         </ul>
       </li>
       <li>
         <p>js</p>
         <ul>
           <li>
             <p><a href="f_config.html">config.js</a></p>
           </li>
           <li>
             <p><a href="e_CtrlRecomienda.html">CtrlRecomienda.js</a></p>
           </li>
           <li>
             <p><a href="h_mi-nav_js.html">mi-nav.js</a></p>
           </li>
         </ul>
       </li>
       <li>
         <p>lib</p>
         <ul>
           <li>
             <p>css</p>
             <ul>
               <li>
                 <p><a href="s_botones.html">botones.css</a></p>
               </li>
               <li>
                 <p><a href="u_cmp-din_css.html">cm-din.css</a>
                 </p>
               </li>
               <li>
                 <p><a href="v_material-icons.html">material-icons.css</a>
                 </p>
               </li>
               <li>
                 <p><a href="i_mi-nav_css.html">mi-nav.css</a></p>
               </li>
               <li>
                 <p><a href="q_principal.html">principal.css</a></p>
               </li>
               <li>
                 <p><a href="r_ripple.html">ripple.css</a></p>
               </li>
             </ul>
           </li>
           <li>
             <p>fonts</p>
             <ul>
               <li>
                 <p><a
                       href="w_MaterialIcons-Regular_codepoints.html">MaterialIcons-Regular.codepoints</a>
                 </p>
               </li>
               <li>
                 <p><a
                       href="x_MaterialIcons-Regular.html">MaterialIcons-Regular.ttf</a>
                 </p>
               </li>
             </ul>
           </li>
           <li>
             <p><a href="t_cmp-din_js.html">cm-din.js</a></p>
           </li>
           <li>
             <p><a href="g_movil.html">movil.js</a></p>
           </li>
         </ul>
       </li>
       <li>
         <p><a href="c_ayuda.html">ayuda.html</a></p>
       </li>
       <li>
         <p><a href="j_favicon.html">favicon.ico</a></p>
       </li>
       <li>
         <p><a href="d_index.html">index.html</a></p>
       </li>
       <li>
         <p><a href="y_LICENSE.html">LICENSE</a></p>
       </li>
       <li>
         <p><a href="n_webmanifest.html">site.webmanifest</a></p>
       </li>
       <li>
         <p><a href="o_sw.html">sw.js</a></p>
       </li>
     </ul>
   </div>`;
 }
}

customElements.define("b4-archivos", B4Archivos);