import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class A7Blink extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>A. Blink.ino</h1>
   <figure>
     <img src="/7_esp8266/img/Video-Blink.gif" alt="Video de la placa">
   </figure>
   <div class="lectura">
     <p>
       Para empezar a programar, revisa que al conectar tu dispositivo ESP8266,
       Arduino IDE lo reconozca y tenga habilitado el menú
       <q>Herramientas > Puerto</q>;
       si no es así, tienes que revisar que el driver para Windows esté bien
       cargado.
     </p>
     <p>
       <a href="https://drive.google.com/file/d/1dXv5jirpTN09kPwgxMthgKtV-fc2YOU0/view?usp=sharing"
           target="_blank">Revisa que el driver para Windows esté bien
         cargado.</a>
     </p>
     <p class="noPrint">
       <a href="https://drive.google.com/file/d/1buuaEpXd02E8eeHhDwzxcC4sZsvcVV5A/view?usp=sharing"
           target="_blank">Ve como capturar y ejecutar un ejemplo parecido a
         este.</a>
     </p>
     <p class="noPrint">
       <a href="https://drive.google.com/file/d/1yqVaTYYt8BxQLhvmZW2bwdiTkqxPQKcB/view?usp=sharing"
           target="_blank">Ve como desplegar este ejemplo en Tinkercad y
         compartirlo.</a>
     </p>
   </div>
   <muestra-codigo>
     <div>
       <div><span
             style="color: #008000;">/*&nbsp;Este&nbsp;programa&nbsp;es&nbsp;un&nbsp;derivado&nbsp;de</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;ESP8266&nbsp;Blink&nbsp;by&nbsp;Simon&nbsp;Peter&nbsp;*/</span>
       </div><br>
       <div><span
             style="color: #008000;">/**&nbsp;Función&nbsp;que&nbsp;se&nbsp;invoca&nbsp;una&nbsp;sola</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;vez&nbsp;al&nbsp;inicio&nbsp;del&nbsp;programa.&nbsp;*/</span>
       </div>
       <div><span style="color: #0000ff;">void</span>&nbsp;<span
             style="color: #795e26;">setup</span>()&nbsp;{</div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;/*&nbsp;Todas&nbsp;las&nbsp;placas&nbsp;compatibles</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;con&nbsp;Arduino&nbsp;incluyen&nbsp;un&nbsp;led</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;de&nbsp;prueba&nbsp;ligado&nbsp;a&nbsp;un&nbsp;pin</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cuyo&nbsp;número&nbsp;está&nbsp;definido&nbsp;por</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;la&nbsp;constante&nbsp;LED_BUILTIN.</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Inicializa&nbsp;el&nbsp;pin&nbsp;para</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LED_BUILTIN&nbsp;como&nbsp;salida.&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;<span style="color: #795e26;">pinMode</span>(<span
             style="color: #0000ff;">LED_BUILTIN</span>,&nbsp;<span
             style="color: #0000ff;">OUTPUT</span>);</div>
       <div>}</div><br>
       <div><span
             style="color: #008000;">/*&nbsp;Función&nbsp;que&nbsp;se&nbsp;invoca</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;repetidamente&nbsp;mientras&nbsp;el</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;programa&nbsp;esté&nbsp;activo.&nbsp;*/</span>
       </div>
       <div><span style="color: #0000ff;">void</span>&nbsp;<span
             style="color: #795e26;">loop</span>()&nbsp;{</div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;/*&nbsp;Enciende&nbsp;el&nbsp;LED_BUILTIN&nbsp;(LOW</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;es&nbsp;el&nbsp;nivel&nbsp;de&nbsp;voltaje).&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;<span style="color: #795e26;">digitalWrite</span>(<span
             style="color: #0000ff;">LED_BUILTIN</span>,&nbsp;<span
             style="color: #0000ff;">LOW</span>);</div>
       <div>&nbsp;&nbsp;<span style="color: #795e26;">delay</span>(<span
             style="color: #098658;">1000</span>);<span
             style="color: #008000;">&nbsp;//&nbsp;Espera&nbsp;1&nbsp;segundo</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;/*&nbsp;Apaga&nbsp;el&nbsp;LED_BUILTIN&nbsp;haciendo</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;que&nbsp;el&nbsp;nivel&nbsp;de&nbsp;voltaje&nbsp;sea</span>
       </div>
       <div><span
             style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HIGH.&nbsp;*/</span>
       </div>
       <div>&nbsp;&nbsp;<span style="color: #795e26;">digitalWrite</span>(<span
             style="color: #0000ff;">LED_BUILTIN</span>,&nbsp;<span
             style="color: #0000ff;">HIGH</span>);</div>
       <div>&nbsp;&nbsp;<span style="color: #795e26;">delay</span>(<span
             style="color: #098658;">1000</span>);</div>
       <div>}</div><br>
     </div>
   </muestra-codigo>`;
 }
}

customElements.define("a7-blink", A7Blink);