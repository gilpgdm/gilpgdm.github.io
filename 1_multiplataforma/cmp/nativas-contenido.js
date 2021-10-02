import { Diapositiva } from "../../lib/Diapositiva.js";

export class NativasContenido extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<ol type="A">
     <li>
      <p>
       <a href="/1_multiplataforma/a_nativa.html">App nativa</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_multiplataforma/b_multiplataforma.html">App
        multiplataforma</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_multiplataforma/c_diferencias.html">Diferencias entre app
        nativa y app multiplataforma</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_multiplataforma/d_ventajas_nativas.html">Ventajas de las
        app nativas</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_multiplataforma/e_desventajas_nativas.html">Desventajas de
        las app nativas</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_multiplataforma/f_ventajas_multiplataforma.html">Ventajas de
        las app multiplataforma</a>
      </p>
     </li>
     <li>
      <p>
       <a href="/1_multiplataforma/g_desventajas_multiplataforma.html">Desventajas
        de las App Multiplataforma</a>
      </p>
     </li>
   </ol>`;
 }
}

customElements.define("nativas-contenido", NativasContenido);