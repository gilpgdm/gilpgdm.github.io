import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C7Dispositivo extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Dispositivo.ino</h1>
   <div class="lectura">
    <ul>
     <li>
      <p>Implementación del ejemplo de IoT con web sockets en Arduino IDE.</p>
     </li>
    </ul>
   </div>
   <figure>
    <img src="/7_esp8266/img/MiGet.png" alt="Salida serial">
   </figure>
   <div class="lectura">
    <p>
     En el siguiente código, sustituye la configuración por los datos de
     tu red WiFi. La URL y la huella digital deben correspponder a tu
     proyecto de IoT.
    </p>
    <p>Sigue las siguientes instrucciones para obtener la huella digital:</p>
    <ol>
     <li>
      <p>Usa Chrome para abrir la URL del código.</p>
     </li>
     <li>
      <p>
       Haz clic en el candadito que está junto a la URL. Se abre un menú
       contextual.
      </p>
     </li>
     <li>
      <p>
       Haz clic en donde dice <q>Certificado (válido)</q>. Aparece
       un cuadro de diálogo. Observa hasta cuando puedes usar esta
       información. Despues de la fecha indicada, debes actualizar tu
       código.
      </p>
     </li>
     <li>
      <p>
       Selecciona la pestaña <q>Detalles</q>. Haz scroll hasta que
       aparezca la <q>Huella digital</q>. Haz clic en esta propiedad
       y abajo se muestra su valor. Copia y pega este valor a tu
       código.
      </p>
     </li>
    </ol>
    <p>
     Para monitorear su funcionamiento, debes hacer clic en el botón de
     arriba a la derecha en la ventana de Arduino, que tiene una lupa y
     tiene el mensaje flotante que dice <strong>Monitor Serie</strong>.
     Debes ajustar los baudios a la misma velocidad que en el código,
     donde dice
     <code class="language-cpp">Serial.begin(115200);</code>
     que en este caso es 115200 baudios. Si no se ven los mensajes,
     baja la velocidad tanto en el código, como en el monitor.
    </p>
    <p class="noPrint">
     <a href="https://drive.google.com/file/d/1OebIZysF3_Ma_8ED7MK7tiX50lU-4Hah/view?usp=sharing"
       target="_blank">Ve como configurar y ejecutar este ejemplo.</a>
    </p>
   </div>
   <muestra-codigo>
    <div>
     <div><span style="color: #af00db;">#include</span><span
        style="color: #0000ff;">&nbsp;</span><span
        style="color: #a31515;">&lt;ESP8266WiFi.h&gt;</span></div>
     <div><span style="color: #af00db;">#include</span><span
        style="color: #0000ff;">&nbsp;</span><span
        style="color: #a31515;">&lt;ESP8266WiFiMulti.h&gt;</span></div>
     <div><span style="color: #af00db;">#include</span><span
        style="color: #0000ff;">&nbsp;</span><span
        style="color: #a31515;">&lt;ArduinoWebsockets.h&gt;</span></div><br>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0000ff;">char</span>*&nbsp;<span
        style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #001080;">SSID</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #a31515;">"Galaxy&nbsp;A723C85"</span>;</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0000ff;">char</span>*&nbsp;<span
        style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #001080;">PASS</span>&nbsp;=</div>
     <div>&nbsp;<span style="color: #a31515;">"bdoi1764"</span>;</div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0000ff;">char</span>*&nbsp;<span
        style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #001080;">HUELLA_DIGITAL</span>&nbsp;=</div>
     <div>&nbsp;<span
        style="color: #a31515;">"a57a9b583ab02ab6f8b7df082df9fb3c88930eb8"</span>;
     </div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0000ff;">char</span>*&nbsp;<span
        style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #001080;">URL</span>&nbsp;=</div>
     <div>&nbsp;<span
        style="color: #a31515;">"wss://ws1.gilbertopacheco.repl.co/"</span>;
     </div><br>
     <div><span style="color: #af00db;">using</span>&nbsp;<span
        style="color: #0000ff;">namespace</span>&nbsp;<span
        style="color: #267f99;">websockets</span>;</div>
     <div>ESP8266WiFiMulti&nbsp;<span style="color: #001080;">WiFiMulti</span>;
     </div>
     <div>WebsocketsClient&nbsp;&nbsp;<span
        style="color: #001080;">client</span>;</div><br>
     <div><span style="color: #008000;">//&nbsp;Pin&nbsp;del&nbsp;botón.</span>
     </div>
     <div><span style="color: #0000ff;">const</span>&nbsp;<span
        style="color: #0000ff;">int</span>&nbsp;<span
        style="color: #001080;">BOTON</span>&nbsp;=&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div><span style="color: #0000ff;">bool</span>&nbsp;<span
        style="color: #001080;">presionado</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">false</span>;</div>
     <div><span style="color: #0000ff;">bool</span>&nbsp;<span
        style="color: #001080;">conectado</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">false</span>;</div>
     <div><span style="color: #0000ff;">String</span>&nbsp;<span
        style="color: #001080;">valor</span>;</div><br>
     <div><span style="color: #0000ff;">void</span>&nbsp;<span
        style="color: #795e26;">onMessageCallback</span>(</div>
     <div>&nbsp;&nbsp;<span
        style="color: #267f99;">WebsocketsMessage</span>&nbsp;<span
        style="color: #001080;">message</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">print</span>(<span
        style="color: #a31515;">"Got&nbsp;Message:&nbsp;"</span>);</div>
     <div>&nbsp;<span style="color: #001080;">valor</span>&nbsp;=&nbsp;<span
        style="color: #001080;">message</span>.<span
        style="color: #795e26;">data</span>();</div>
     <div>&nbsp;<span style="color: #795e26;">digitalWrite</span>(LED_BUILTIN,
     </div>
     <div>&nbsp;&nbsp;<span
        style="color: #001080;">valor</span>&nbsp;==&nbsp;<span
        style="color: #a31515;">"1"</span>&nbsp;?&nbsp;LOW&nbsp;:&nbsp;HIGH);
     </div>
     <div>&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>(<span
        style="color: #001080;">message</span>.<span
        style="color: #795e26;">data</span>());</div>
     <div>}</div><br>
     <div><span style="color: #0000ff;">void</span>&nbsp;<span
        style="color: #795e26;">onEventsCallback</span>(</div>
     <div>&nbsp;&nbsp;<span
        style="color: #267f99;">WebsocketsEvent</span>&nbsp;<span
        style="color: #001080;">event</span>,</div>
     <div>&nbsp;&nbsp;<span style="color: #267f99;">String</span>&nbsp;<span
        style="color: #001080;">data</span>)&nbsp;{</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">event</span>&nbsp;==</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #267f99;">WebsocketsEvent</span>::ConnectionOpened)&nbsp;{
     </div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>(<span
        style="color: #a31515;">"Conectado."</span>);</div>
     <div>&nbsp;&nbsp;<span
        style="color: #001080;">conectado</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">true</span>;</div>
     <div>&nbsp;}&nbsp;<span style="color: #af00db;">else</span>&nbsp;<span
        style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">event</span>&nbsp;==</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #267f99;">WebsocketsEvent</span>::ConnectionClosed)&nbsp;{
     </div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>(<span
        style="color: #a31515;">"Desconectado."</span>);</div>
     <div>&nbsp;&nbsp;<span
        style="color: #001080;">conectado</span>&nbsp;=&nbsp;<span
        style="color: #0000ff;">false</span>;</div>
     <div>&nbsp;}</div>
     <div>}</div><br>
     <div><span style="color: #0000ff;">void</span>&nbsp;<span
        style="color: #795e26;">setup</span>()&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">begin</span>(<span
        style="color: #098658;">115200</span>);</div>
     <div><span
        style="color: #008000;">&nbsp;//&nbsp;Serial.setDebugOutput(true);</span>
     </div>
     <div>&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>();</div>
     <div>&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>();</div>
     <div>&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>();</div>
     <div>&nbsp;<span
        style="color: #795e26;">pinMode</span>(LED_BUILTIN,&nbsp;OUTPUT);</div>
     <div>&nbsp;<span style="color: #795e26;">pinMode</span>(<span
        style="color: #001080;">BOTON</span>,&nbsp;INPUT);</div>
     <div>&nbsp;<span style="color: #af00db;">for</span>&nbsp;(<span
        style="color: #0000ff;">uint8_t</span>&nbsp;<span
        style="color: #001080;">t</span>&nbsp;=&nbsp;<span
        style="color: #098658;">4</span>;&nbsp;<span
        style="color: #001080;">t</span>&nbsp;&gt;&nbsp;<span
        style="color: #098658;">0</span>;</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">t</span>--)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">printf</span>(</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #a31515;">"ESPERANDO&nbsp;</span><span
        style="color: #001080;">%d</span><span
        style="color: #a31515;">...</span><span
        style="color: #ee0000;">\n</span><span
        style="color: #a31515;">"</span>,&nbsp;<span
        style="color: #001080;">t</span>);</div>
     <div>&nbsp;&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">flush</span>();</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">delay</span>(<span
        style="color: #098658;">1000</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>(</div>
     <div>&nbsp;&nbsp;<span
        style="color: #a31515;">"Conectando&nbsp;WiFi..."</span>);</div>
     <div>&nbsp;<span style="color: #001080;">WiFi</span>.<span
        style="color: #795e26;">mode</span>(WIFI_STA);</div>
     <div>&nbsp;<span style="color: #001080;">WiFiMulti</span>.<span
        style="color: #795e26;">addAP</span>(<span
        style="color: #001080;">SSID</span>,&nbsp;<span
        style="color: #001080;">PASS</span>);</div>
     <div>&nbsp;<span style="color: #af00db;">while</span>&nbsp;(<span
        style="color: #001080;">WiFiMulti</span>.<span
        style="color: #795e26;">run</span>()&nbsp;!=</div>
     <div>&nbsp;&nbsp;&nbsp;WL_CONNECTED)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #795e26;">delay</span>(<span
        style="color: #098658;">500</span>);</div>
     <div>&nbsp;}</div>
     <div>&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>(<span
        style="color: #a31515;">"WiFi&nbsp;conectado."</span>);</div>
     <div>&nbsp;<span style="color: #001080;">client</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">onMessage</span>(<span
        style="color: #795e26;">onMessageCallback</span>);</div>
     <div>&nbsp;<span style="color: #001080;">client</span>.<span
        style="color: #795e26;">onEvent</span>(<span
        style="color: #795e26;">onEventsCallback</span>);</div>
     <div>&nbsp;<span style="color: #001080;">client</span>.</div>
     <div>&nbsp;&nbsp;&nbsp;<span
        style="color: #795e26;">setFingerprint</span>(<span
        style="color: #001080;">HUELLA_DIGITAL</span>);</div>
     <div>&nbsp;<span style="color: #001080;">client</span>.<span
        style="color: #795e26;">connect</span>(<span
        style="color: #001080;">URL</span>);</div>
     <div>}</div><br>
     <div><span style="color: #0000ff;">void</span>&nbsp;<span
        style="color: #795e26;">loop</span>()&nbsp;{</div>
     <div>&nbsp;<span style="color: #001080;">client</span>.<span
        style="color: #795e26;">poll</span>();</div>
     <div>&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
        style="color: #001080;">conectado</span>)&nbsp;{</div>
     <div>&nbsp;&nbsp;<span style="color: #0000ff;">bool</span>&nbsp;<span
        style="color: #001080;">actual</span>&nbsp;=&nbsp;<span
        style="color: #795e26;">digitalRead</span>(<span
        style="color: #001080;">BOTON</span>);</div>
     <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(!<span
        style="color: #001080;">presionado</span>&nbsp;&amp;&amp;</div>
     <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
        style="color: #001080;">actual</span>&nbsp;==&nbsp;LOW)&nbsp;{</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">client</span>.<span
        style="color: #795e26;">send</span>(<span
        style="color: #001080;">valor</span>);</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">print</span>(<span
        style="color: #a31515;">"Envía"</span>);</div>
     <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">Serial</span>.<span
        style="color: #795e26;">println</span>(<span
        style="color: #001080;">valor</span>);</div>
     <div>&nbsp;&nbsp;}</div>
     <div>&nbsp;&nbsp;<span
        style="color: #001080;">presionado</span>&nbsp;=&nbsp;(<span
        style="color: #001080;">actual</span>&nbsp;==&nbsp;LOW);</div>
     <div>&nbsp;}</div>
     <div>}</div><br>
    </div>
   </muestra-codigo>`;
 }
}

customElements.define("c7-dispositivo", C7Dispositivo);