import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class N4Webmanifest extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>N. site.webmanifest</h1>
   <muestra-codigo>
    <div>
     <div>{</div>
     <div>&nbsp;<span style="color: #0451a5;">"short_name"</span>:&nbsp;<span
        style="color: #a31515;">"PWA"</span>,</div>
     <div>&nbsp;<span style="color: #0451a5;">"name"</span>:&nbsp;<span
        style="color: #a31515;">"Ejemplo&nbsp;de&nbsp;PWA"</span>,</div>
     <div>&nbsp;<span style="color: #0451a5;">"start_url"</span>:&nbsp;<span
        style="color: #a31515;">"/index.html"</span>,</div>
     <div>&nbsp;<span style="color: #0451a5;">"display"</span>:&nbsp;<span
        style="color: #a31515;">"standalone"</span>,</div>
     <div>&nbsp;<span style="color: #0451a5;">"theme_color"</span>:&nbsp;<span
        style="color: #a31515;">"#6a0080"</span>,</div>
     <div>&nbsp;<span
        style="color: #0451a5;">"background_color"</span>:&nbsp;<span
        style="color: #a31515;">"#ffffff"</span>,</div>
     <div>&nbsp;<span style="color: #0451a5;">"icons"</span>:&nbsp;[</div>
     <div>&nbsp;&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"src"</span>:&nbsp;<span
        style="color: #a31515;">"img/icono2048.png"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"sizes"</span>:&nbsp;<span
        style="color: #a31515;">"2048x2048"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"type"</span>:&nbsp;<span
        style="color: #a31515;">"image/png"</span></div>
     <div>&nbsp;&nbsp;},</div>
     <div>&nbsp;&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"src"</span>:&nbsp;<span
        style="color: #a31515;">"img/icono1024.png"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"sizes"</span>:&nbsp;<span
        style="color: #a31515;">"1024x1024"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"type"</span>:&nbsp;<span
        style="color: #a31515;">"image/png"</span></div>
     <div>&nbsp;&nbsp;},</div>
     <div>&nbsp;&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"src"</span>:&nbsp;<span
        style="color: #a31515;">"img/icono256.png"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"sizes"</span>:&nbsp;<span
        style="color: #a31515;">"256x256"</span>,</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #0451a5;">"type"</span>:&nbsp;<span
        style="color: #a31515;">"image/png"</span></div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;]</div>
     <div>}</div>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("n4-webmanifest", N4Webmanifest);