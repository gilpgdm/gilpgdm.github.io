import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class B7Button extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>B. Button.ino</h1>
   <figure>
     <img src="/7_esp8266/img/Video-Button.gif" alt="Video de la placa">
   </figure>
   <div class="lectura">
     <p class="noPrint">
       <a href="https://drive.google.com/file/d/1dFU-A3HvWAyTSyquOT1C2N5b6dUyQywq/view?usp=sharing"
           target="_blank">Ve como desplegar este ejemplo en Tinkercad y
         compartirlo.</a>
     </p>
   </div>
   <muestra-codigo>
     <div>
       <div><span
             style="color: #008000;">/*&nbsp;Este&nbsp;es&nbsp;un&nbsp;derivado&nbsp;de&nbsp;Button</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;por&nbsp;DojoDave&nbsp;y&nbsp;Tom&nbsp;Igoe&nbsp;*/</span>
       </div><br>
       <div><span
             style="color: #008000;">/*&nbsp;Pin&nbsp;para&nbsp;el&nbsp;botón.&nbsp;*/</span>
       </div>
       <div><span style="color: #0000ff;">const</span>&nbsp;<span
             style="color: #0000ff;">int</span>&nbsp;<span
             style="color: #001080;">BOTON</span>&nbsp;=&nbsp;<span
             style="color: #098658;">0</span>;</div><br>
       <div><span style="color: #0000ff;">int</span>&nbsp;<span
             style="color: #001080;">estadoDelBoton</span>&nbsp;=&nbsp;<span
             style="color: #098658;">0</span>;</div><br>
       <div><span style="color: #0000ff;">void</span>&nbsp;<span
             style="color: #795e26;">setup</span>()&nbsp;{</div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;/*&nbsp;Inicializa&nbsp;el&nbsp;pin&nbsp;para</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LED_BUILTIN&nbsp;como&nbsp;salida.&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;<span style="color: #795e26;">pinMode</span>(<span
             style="color: #0000ff;">LED_BUILTIN</span>,&nbsp;<span
             style="color: #0000ff;">OUTPUT</span>);</div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;/*&nbsp;Initializa&nbsp;el&nbsp;pin&nbsp;para</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BOTON&nbsp;como&nbsp;entrada.&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;<span style="color: #795e26;">pinMode</span>(<span
             style="color: #001080;">BOTON</span>,&nbsp;<span
             style="color: #0000ff;">INPUT</span>);</div>
       <div>}</div><br>
       <div><span style="color: #0000ff;">void</span>&nbsp;<span
             style="color: #795e26;">loop</span>()&nbsp;{</div>
       <div>&nbsp;&nbsp;<span
             style="color: #001080;">estadoDelBoton</span>&nbsp;=</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #795e26;">digitalRead</span>(<span
             style="color: #001080;">BOTON</span>);</div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;/*&nbsp;Checa&nbsp;si&nbsp;el&nbsp;botón&nbsp;está</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;presionado.&nbsp;Esto&nbsp;es,&nbsp;si</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;estadoDelBotón&nbsp;es&nbsp;LOW:&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
             style="color: #001080;">estadoDelBoton</span>&nbsp;==&nbsp;<span
             style="color: #0000ff;">LOW</span>)&nbsp;{</div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Enciende&nbsp;el&nbsp;LED_BUILTIN.</span>
       </div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #795e26;">digitalWrite</span>(<span
             style="color: #0000ff;">LED_BUILTIN</span>,</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #0000ff;">LOW</span>);</div>
       <div>&nbsp;&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;{
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;//&nbsp;Apaga&nbsp;el&nbsp;LED_BUILTIN.</span>
       </div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #795e26;">digitalWrite</span>(<span
             style="color: #0000ff;">LED_BUILTIN</span>,</div>
       <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
             style="color: #0000ff;">HIGH</span>);</div>
       <div>&nbsp;&nbsp;}</div>
       <div>}</div><br>
     </div>`;
 }
}

customElements.define("b7-button", B7Button);