import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A5Arquitectura extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Arquitectura</h1>
    <div class="lectura">
     <p>
      En las siguientes páginas se muestra la construcción de un sistema de
      control de acceso.
     </p>
     <p>
      También se ejemplifica la forma en que un PWA invoca procesos en el
      servidor web.
     </p>
     <p>
      Revisa el código y pruébalo en Replit con la url
      <a href="https://replit.com/@GilbertoPacheco/auth?v=1"
        target="_blank">https://replit.com/@GilbertoPacheco/auth?v=1</a>.
     </p>
     <p>
      Cada <dfn>servicio</dfn> es una función y para accederlo, el servidor le
      asigna un <dfn>nombre de recurso</dfn>, el cual es una ruta dentro de la
      URL; es como si fuera el nombre del archivo. Por ejemplo, en la URL
      <q>http://localhost:3000/valida</q>, el nombre del recurso es
      <q>/valida</q>.
     </p>
     <p>
      En este caso, a todos los archivos de HTML y JavaScript les llamaremos
      <df>www</df>.
     </p>
     <p>
      Para validar el acceso usaremos un servicio llamado
      <dfn>validaUsuario</dfn>
      que tiene asociado el nombre de recurso
      <dfn>valida</dfn>.
     </p>
     <p>
      Para poder validar el acceso, <q>validaUsuario</q> guarda la contraseña
      de cada usuario en una entidad llamada <dfn>Usuario</dfn>. En este ejemplo
      se usa el servidor Atlas para la base de datos tipo MongoDB.
     </p>
     <h2>Diagrama de componentes</h2>
     <figure>
       <img class="dc" src="/5_sesion/img/aut_componentes.svg"
           alt="Diagrama de Componentes">
     </figure>
   </div>`;
 }
}

customElements.define("a5-arquitectura", A5Arquitectura);