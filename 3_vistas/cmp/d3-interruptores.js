import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class D3Interruptores extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>D. Interruptores</h1>
   <div class="lectura">
    <p>
     Los interruptores en Material Design están defnidos en
     <a href="https://material.io/components/switches"
       target="_blank">https://material.io/components/switches</a>.
    </p>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/3_vistas/src/3d_interruptor.html"></iframe>
     <p class="noPrint">
      <a href="/3_vistas/src/3d_interruptor.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3EInterruptores%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20html%20%7B%0A%20%20%20--colTxt%3A%20black%3B%0A%20%20%20--colBk%3A%20white%3B%0A%20%20%20--colIntOn%3A%20%236a0080%3B%0A%20%20%20--colIntOnHv%3A%20%236a008033%3B%0A%20%20%20--colIntOnFc%3A%20%236a008044%3B%0A%20%20%20--colIntOnAct%3A%20%236a008055%3B%0A%20%20%20--colIntOnBk%3A%20%23d05ce3%3B%0A%20%20%20--colIntOff%3A%20%23f0f0f0%3B%0A%20%20%20--colIntOffHv%3A%20%23e0e0e088%3B%0A%20%20%20--colIntOffFc%3A%20%23d0d0d077%3B%0A%20%20%20--colIntOffAct%3A%20%23c0c0c077%3B%0A%20%20%20--colIntOffBk%3A%20%23BDBDBD%3B%0A%20%20%20--colIntIos%3A%20white%3B%0A%20%20%20--colIntIosOnBk%3A%20%232acc2a%3B%0A%20%20%20--colIntIosOnBkFc%3A%20%231bbb1b%3B%0A%20%20%20--colIntIosOffBk%3A%20%23dbdbdb%3B%0A%20%20%20--colIntIosOffBkFc%3A%20%23BDBDBD%3B%0A%20%20%20--fntFam%3A%20-apple-system%2C%0A%20%20%20%20BlinkMacSystemFont%2C%20Roboto%2C%0A%20%20%20%20sans-serif%3B%0A%20%20%20color%3A%20var(--colTxt)%3B%0A%20%20%20font-family%3A%20var(--fntFam)%3B%0A%20%20%20background-color%3A%20var(--colBk)%3B%0A%20%20%7D%0A%0A%20%20cm-int%20%7B%0A%20%20%20display%3A%20block%3B%0A%20%20%20margin%3A%201rem%200%3B%0A%20%20%7D%0A%0A%20%20cm-int%20input%20%7B%0A%20%20%20vertical-align%3A%20middle%3B%0A%20%20%20-webkit-appearance%3A%20none%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%20%7B%0A%20%20%20width%3A%202rem%3B%0A%20%20%7D%0A%0A%20%20cm-int%20input%3Afocus%20%7B%0A%20%20%20outline%3A%20none%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3A%3A-webkit-slider-runnable-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntOnBk)%3B%0A%20%20%20border-radius%3A%205px%3B%0A%20%20%20height%3A%2010px%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3A%3A-webkit-slider-runnable-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntOffBk)%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20-webkit-appearance%3A%20none%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntOn)%3B%0A%20%20%20margin-top%3A%20-5px%3B%0A%20%20%20width%3A%2020px%3B%0A%20%20%20height%3A%2020px%3B%0A%20%20%20border-radius%3A%2010px%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3Ahover%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOnHv)%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3Afocus%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOnFc)%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3Aactive%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOnAct)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntOff)%3B%0A%20%20%20border-width%3A%20thin%3B%0A%20%20%20border-style%3A%20solid%3B%0A%20%20%20border-color%3A%20var(--colIntOffBk)%0A%20%20%7D%0A%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3Ahover%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOffHv)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3Afocus%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOffFc)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3Aactive%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOffAct)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3A%3A-moz-range-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntOnBk)%3B%0A%20%20%20border-radius%3A%205px%3B%0A%20%20%20height%3A%2010px%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3A%3A-moz-range-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntOffBk)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3A%3A-moz-range-thumb%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntOn)%3B%0A%20%20%20margin-top%3A%20-5px%3B%0A%20%20%20width%3A%2020px%3B%0A%20%20%20height%3A%2020px%3B%0A%20%20%20border%3A%20none%3B%0A%20%20%20border-radius%3A%2010px%3B%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3Ahover%3A%3A-moz-range-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOnHv)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3Afocus%3A%3A-moz-range-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOnFc)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input%3Aactive%3A%3A-moz-range-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOnAct)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3A%3A-moz-range-thumb%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntOff)%3B%0A%20%20%20border-width%3A%20thin%3B%0A%20%20%20border-style%3A%20solid%3B%0A%20%20%20border-color%3A%20var(--colIntOffBk)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3Ahover%3A%3A-moz-range-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOffHv)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3Afocus%3A%3A-moz-range-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOffFc)%0A%20%20%7D%0A%0A%20%20body%3Anot(.ios)%20cm-int%20input.off%3Aactive%3A%3A-moz-range-thumb%20%7B%0A%20%20%20box-shadow%3A%0A%20%20%20%200%200%200%200.5rem%20var(--colIntOffAct)%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%20%7B%0A%20%20%20width%3A%203rem%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%3A%3A-webkit-slider-runnable-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIosOnBk)%3B%0A%20%20%20border-radius%3A%2014px%3B%0A%20%20%20height%3A%2028px%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%3Afocus%3A%3A-webkit-slider-runnable-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIosOnBkFc)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input.off%3A%3A-webkit-slider-runnable-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIosOffBk)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input.off%3Afocus%3A%3A-webkit-slider-runnable-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIosOffBkFc)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20margin-top%3A%201px%3B%0A%20%20%20width%3A%2026px%3B%0A%20%20%20height%3A%2026px%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIos)%3B%0A%20%20%20border-width%3A%20thin%3B%0A%20%20%20border-style%3A%20solid%3B%0A%20%20%20border-color%3A%0A%20%20%20%20var(--colIntIosOnBk)%3B%0A%20%20%20border-radius%3A%2013px%3B%0A%20%20%20-webkit-appearance%3A%20none%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%3Afocus%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20border-color%3A%0A%20%20%20%20var(--colIntIosOnBkFc)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input.off%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20border-color%3A%0A%20%20%20%20var(--colIntIosOffBk)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input.off%3Afocus%3A%3A-webkit-slider-thumb%20%7B%0A%20%20%20border-color%3A%0A%20%20%20%20var(--colIntIosOffBkFc)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%3A%3A-moz-range-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIosOnBk)%3B%0A%20%20%20border-radius%3A%2014px%3B%0A%20%20%20height%3A%2028px%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%3Afocus%3A%3A-moz-range-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIosOnBkFc)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input.off%3A%3A-moz-range-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIosOffBk)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input.off%3Afocus%3A%3A-moz-range-track%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIosOffBkFc)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%3A%3A-moz-range-thumb%20%7B%0A%20%20%20width%3A%2026px%3B%0A%20%20%20height%3A%2026px%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colIntIos)%3B%0A%20%20%20border-width%3A%20thin%3B%0A%20%20%20border-style%3A%20solid%3B%0A%20%20%20border-color%3A%0A%20%20%20%20var(--colIntIosOnBk)%3B%0A%20%20%20border-radius%3A%2013px%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input%3Afocus%3A%3A-moz-range-thumb%20%7B%0A%20%20%20border-color%3A%0A%20%20%20%20var(--colIntIosOnBkFc)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input.off%3A%3A-moz-range-thumb%20%7B%0A%20%20%20border-color%3A%0A%20%20%20%20var(--colIntIosOffBk)%3B%0A%20%20%7D%0A%0A%20%20body.ios%20cm-int%20input.off%3Afocus%3A%3A-moz-range-thumb%20%7B%0A%20%20%20border-color%3A%0A%20%20%20%20var(--colIntIosOffBkFc)%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3EInterruptores%3C%2Fh1%3E%0A%20%3Ccm-int%3E%0A%20%20%3Clabel%3E%0A%20%20%20Muestra%20resultados%0A%20%20%20%3Cinput%20type%3D%22range%22%3E%0A%20%20%3C%2Flabel%3E%0A%20%3C%2Fcm-int%3E%0A%20%3Cscript%3E%0A%20%20if%20(%2F.*android.*%2Fi.%0A%20%20%20test(navigator.userAgent))%20%7B%0A%20%20%20document.body.classList%0A%20%20%20%20.add(%22android%22)%3B%0A%20%20%7D%0A%20%20if%20(%0A%20%20%20%2F.*(iPad%7CiPhone%7CiPod%7CMac).*%2F.%0A%20%20%20%20test(navigator.userAgent))%20%7B%0A%20%20%20document.body.classList.%0A%20%20%20%20add('ios')%3B%0A%20%20%7D%0A%20%20class%20CmInt%20extends%20HTMLElement%20%7B%0A%20%20%20connectedCallback()%20%7B%0A%20%20%20%20setTimeout(%0A%20%20%20%20%20()%20%3D%3E%20this.prepara()%2C%0A%20%20%20%20%20100)%3B%0A%20%20%20%7D%0A%20%20%20prepara()%20%7B%0A%20%20%20%20%2F**%20%40private%20*%2F%0A%20%20%20%20this._input%20%3D%0A%20%20%20%20%20this.querySelector(%22input%22)%3B%0A%20%20%20%20const%20i%20%3D%20this._input%3B%0A%20%20%20%20if%20(i)%20%7B%0A%20%20%20%20%20i.type%20%3D%20%22range%22%3B%0A%20%20%20%20%20i.min%20%3D%20%220%22%3B%0A%20%20%20%20%20i.max%20%3D%20%221%22%3B%0A%20%20%20%20%20i.addEventListener(%22change%22%2C%0A%20%20%20%20%20%20()%20%3D%3E%20this.analiza())%3B%0A%20%20%20%20%20this.analiza()%3B%0A%20%20%20%20%7D%0A%20%20%20%7D%0A%20%20%20analiza()%20%7B%0A%20%20%20%20const%20i%20%3D%20this._input%3B%0A%20%20%20%20if%20(i)%20%7B%0A%20%20%20%20%20if%20(i.valueAsNumber%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20i.classList.add(%22off%22)%3B%0A%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20i.classList.remove(%22off%22)%3B%0A%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%7D%0A%20%20%7D%0A%20%20customElements.%0A%20%20%20define(%22cm-int%22%2C%20CmInt)%3B%0A%20%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
       Revísalo en gilpgedit.</a>
     </p>
    </div>
    <muestra-codigo>
    <div>
    <div><span style="color: #800000;">&lt;!DOCTYPE</span>&nbsp;<span
       style="color: #ff0000;">html</span><span
       style="color: #800000;">&gt;</span></div>
    <div><span style="color: #800000;">&lt;html</span>&nbsp;<span
       style="color: #ff0000;">lang</span>=<span
       style="color: #0000ff;">"es"</span><span
       style="color: #800000;">&gt;</span></div>
    <div><span style="color: #800000;">&lt;head&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
       style="color: #ff0000;">charset</span>=<span
       style="color: #0000ff;">"UTF-8"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;meta</span>&nbsp;<span
       style="color: #ff0000;">name</span>=<span
       style="color: #0000ff;">"viewport"</span></div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">content</span>=<span
       style="color: #0000ff;">"width=device-width"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;<span
       style="color: #800000;">&lt;title&gt;</span>Interruptores<span
       style="color: #800000;">&lt;/title&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">html</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colTxt</span>:&nbsp;<span
       style="color: #0451a5;">black</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colBk</span>:&nbsp;<span
       style="color: #0451a5;">white</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOn</span>:&nbsp;<span
       style="color: #0451a5;">#6a0080</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOnHv</span>:&nbsp;<span
       style="color: #0451a5;">#6a008033</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOnFc</span>:&nbsp;<span
       style="color: #0451a5;">#6a008044</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOnAct</span>:&nbsp;<span
       style="color: #0451a5;">#6a008055</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOnBk</span>:&nbsp;<span
       style="color: #0451a5;">#d05ce3</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOff</span>:&nbsp;<span
       style="color: #0451a5;">#f0f0f0</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOffHv</span>:&nbsp;<span
       style="color: #0451a5;">#e0e0e088</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOffFc</span>:&nbsp;<span
       style="color: #0451a5;">#d0d0d077</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOffAct</span>:&nbsp;<span
       style="color: #0451a5;">#c0c0c077</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntOffBk</span>:&nbsp;<span
       style="color: #0451a5;">#BDBDBD</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntIos</span>:&nbsp;<span
       style="color: #0451a5;">white</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntIosOnBk</span>:&nbsp;<span
       style="color: #0451a5;">#2acc2a</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntIosOnBkFc</span>:&nbsp;<span
       style="color: #0451a5;">#1bbb1b</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntIosOffBk</span>:&nbsp;<span
       style="color: #0451a5;">#dbdbdb</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--colIntIosOffBkFc</span>:&nbsp;<span
       style="color: #0451a5;">#BDBDBD</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">--fntFam</span>:&nbsp;-apple-system,</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;BlinkMacSystemFont,&nbsp;Roboto,</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0451a5;">sans-serif</span>;
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colTxt</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">font-family</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--fntFam</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">background-color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colBk</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">cm-int</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">display</span>:&nbsp;<span
       style="color: #0451a5;">block</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin</span>:&nbsp;<span
       style="color: #098658;">1rem</span>&nbsp;<span
       style="color: #098658;">0</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">vertical-align</span>:&nbsp;<span
       style="color: #0451a5;">middle</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">-webkit-appearance</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
       style="color: #098658;">2rem</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:focus</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">outline</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input::-webkit-slider-runnable-track</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOnBk</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">5px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">height</span>:&nbsp;<span
       style="color: #098658;">10px</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off::-webkit-slider-runnable-track</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffBk</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input::-webkit-slider-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">-webkit-appearance</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOn</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin-top</span>:&nbsp;<span
       style="color: #098658;">-5px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
       style="color: #098658;">20px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">height</span>:&nbsp;<span
       style="color: #098658;">20px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">10px</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:hover::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOnHv</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:focus::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOnFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:active::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOnAct</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOff</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-width</span>:&nbsp;<span
       style="color: #0451a5;">thin</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-style</span>:&nbsp;<span
       style="color: #0451a5;">solid</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffBk</span>)</div>
    <div>&nbsp;&nbsp;}</div><br><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:hover::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffHv</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:focus::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffFc</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:active::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffAct</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input::-moz-range-track</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOnBk</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">5px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">height</span>:&nbsp;<span
       style="color: #098658;">10px</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off::-moz-range-track</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffBk</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input::-moz-range-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOn</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin-top</span>:&nbsp;<span
       style="color: #098658;">-5px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
       style="color: #098658;">20px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">height</span>:&nbsp;<span
       style="color: #098658;">20px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">10px</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:hover::-moz-range-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOnHv</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:focus::-moz-range-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOnFc</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:active::-moz-range-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOnAct</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off::-moz-range-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOff</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-width</span>:&nbsp;<span
       style="color: #0451a5;">thin</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-style</span>:&nbsp;<span
       style="color: #0451a5;">solid</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-color</span>:&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffBk</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:hover::-moz-range-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffHv</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:focus::-moz-range-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffFc</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body:not</span>(<span
       style="color: #800000;">.ios</span>)&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:active::-moz-range-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">box-shadow</span>:</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0</span>&nbsp;<span
       style="color: #098658;">0.5rem</span>&nbsp;<span
       style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntOffAct</span>)</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
       style="color: #098658;">3rem</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input::-webkit-slider-runnable-track</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOnBk</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">14px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">height</span>:&nbsp;<span
       style="color: #098658;">28px</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:focus::-webkit-slider-runnable-track</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOnBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off::-webkit-slider-runnable-track</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOffBk</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:focus::-webkit-slider-runnable-track</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOffBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input::-webkit-slider-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">margin-top</span>:&nbsp;<span
       style="color: #098658;">1px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
       style="color: #098658;">26px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">height</span>:&nbsp;<span
       style="color: #098658;">26px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIos</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-width</span>:&nbsp;<span
       style="color: #0451a5;">thin</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-style</span>:&nbsp;<span
       style="color: #0451a5;">solid</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOnBk</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">13px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">-webkit-appearance</span>:&nbsp;<span
       style="color: #0451a5;">none</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:focus::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOnBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOffBk</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:focus::-webkit-slider-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOffBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input::-moz-range-track</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOnBk</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">14px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">height</span>:&nbsp;<span
       style="color: #098658;">28px</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:focus::-moz-range-track</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOnBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off::-moz-range-track</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOffBk</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:focus::-moz-range-track</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOffBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input::-moz-range-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">width</span>:&nbsp;<span
       style="color: #098658;">26px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">height</span>:&nbsp;<span
       style="color: #098658;">26px</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">background-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIos</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-width</span>:&nbsp;<span
       style="color: #0451a5;">thin</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-style</span>:&nbsp;<span
       style="color: #0451a5;">solid</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOnBk</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #ff0000;">border-radius</span>:&nbsp;<span
       style="color: #098658;">13px</span>;</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input:focus::-moz-range-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOnBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off::-moz-range-thumb</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOffBk</span>);</div>
    <div>&nbsp;&nbsp;}</div><br>
    <div>&nbsp;&nbsp;<span style="color: #800000;">body.ios</span>&nbsp;<span
       style="color: #800000;">cm-int</span>&nbsp;<span
       style="color: #800000;">input.off:focus::-moz-range-thumb</span>&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">border-color</span>:
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
       style="color: #001080;">--colIntIosOffBkFc</span>);</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
    <div><span style="color: #800000;">&lt;/head&gt;</span></div>
    <div><span style="color: #800000;">&lt;body&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Interruptores<span
       style="color: #800000;">&lt;/h1&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;cm-int&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label&gt;</span></div>
    <div>&nbsp;&nbsp;&nbsp;Muestra&nbsp;resultados</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #800000;">&lt;input</span>&nbsp;<span
       style="color: #ff0000;">type</span>=<span
       style="color: #0000ff;">"range"</span><span
       style="color: #800000;">&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;/cm-int&gt;</span></div>
    <div>&nbsp;<span style="color: #800000;">&lt;script&gt;</span></div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #811f3f;">/.</span>*<span
       style="color: #811f3f;">android.</span>*<span
       style="color: #811f3f;">/</span><span style="color: #0000ff;">i</span>.
    </div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">test</span>(<span
       style="color: #001080;">navigator</span>.<span
       style="color: #0070c1;">userAgent</span>))&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #001080;">body</span>.<span
       style="color: #0070c1;">classList</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;.<span style="color: #795e26;">add</span>(<span
       style="color: #a31515;">"android"</span>);</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;<span style="color: #af00db;">if</span>&nbsp;(</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #811f3f;">/.</span>*<span
       style="color: #d16969;">(</span><span
       style="color: #811f3f;">iPad</span><span
       style="color: #ee0000;">|</span><span
       style="color: #811f3f;">iPhone</span><span
       style="color: #ee0000;">|</span><span
       style="color: #811f3f;">iPod</span><span
       style="color: #ee0000;">|</span><span
       style="color: #811f3f;">Mac</span><span
       style="color: #d16969;">)</span><span
       style="color: #811f3f;">.</span>*<span style="color: #811f3f;">/</span>.
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">test</span>(<span
       style="color: #001080;">navigator</span>.<span
       style="color: #0070c1;">userAgent</span>))&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #001080;">document</span>.<span
       style="color: #001080;">body</span>.<span
       style="color: #0070c1;">classList</span>.</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">add</span>(<span
       style="color: #a31515;">'ios'</span>);</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
       style="color: #267f99;">CmInt</span>&nbsp;<span
       style="color: #0000ff;">extends</span>&nbsp;<span
       style="color: #267f99;">HTMLElement</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;<span
       style="color: #795e26;">connectedCallback</span>()&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">setTimeout</span>(
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;<span
       style="color: #0000ff;">=&gt;</span>&nbsp;<span
       style="color: #0000ff;">this</span>.<span
       style="color: #795e26;">prepara</span>(),</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #098658;">100</span>);
    </div>
    <div>&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">prepara</span>()&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #008000;">/**&nbsp;</span><span
       style="color: #0000ff;">@private</span><span
       style="color: #008000;">&nbsp;*/</span></div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #0000ff;">this</span>.<span
       style="color: #001080;">_input</span>&nbsp;=</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0000ff;">this</span>.<span
       style="color: #795e26;">querySelector</span>(<span
       style="color: #a31515;">"input"</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">i</span>&nbsp;=&nbsp;<span
       style="color: #0000ff;">this</span>.<span
       style="color: #001080;">_input</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #0070c1;">i</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0070c1;">i</span>.<span
       style="color: #001080;">type</span>&nbsp;=&nbsp;<span
       style="color: #a31515;">"range"</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0070c1;">i</span>.<span
       style="color: #001080;">min</span>&nbsp;=&nbsp;<span
       style="color: #a31515;">"0"</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0070c1;">i</span>.<span
       style="color: #001080;">max</span>&nbsp;=&nbsp;<span
       style="color: #a31515;">"1"</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0070c1;">i</span>.<span
       style="color: #795e26;">addEventListener</span>(<span
       style="color: #a31515;">"change"</span>,</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;<span
       style="color: #0000ff;">=&gt;</span>&nbsp;<span
       style="color: #0000ff;">this</span>.<span
       style="color: #795e26;">analiza</span>());</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0000ff;">this</span>.<span
       style="color: #795e26;">analiza</span>();</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">analiza</span>()&nbsp;{
    </div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0000ff;">const</span>&nbsp;<span
       style="color: #0070c1;">i</span>&nbsp;=&nbsp;<span
       style="color: #0000ff;">this</span>.<span
       style="color: #001080;">_input</span>;</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #0070c1;">i</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #af00db;">if</span>&nbsp;(<span
       style="color: #0070c1;">i</span>.<span
       style="color: #001080;">valueAsNumber</span>&nbsp;===&nbsp;<span
       style="color: #098658;">0</span>)&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0070c1;">i</span>.<span
       style="color: #0070c1;">classList</span>.<span
       style="color: #795e26;">add</span>(<span
       style="color: #a31515;">"off"</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span
       style="color: #af00db;">else</span>&nbsp;{</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
       style="color: #0070c1;">i</span>.<span
       style="color: #0070c1;">classList</span>.<span
       style="color: #795e26;">remove</span>(<span
       style="color: #a31515;">"off"</span>);</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;}</div>
    <div>&nbsp;&nbsp;<span style="color: #001080;">customElements</span>.</div>
    <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">define</span>(<span
       style="color: #a31515;">"cm-int"</span>,&nbsp;<span
       style="color: #267f99;">CmInt</span>);</div>
    <div>&nbsp;<span style="color: #800000;">&lt;/script&gt;</span></div>
    <div><span style="color: #800000;">&lt;/body&gt;</span></div>
    <div><span style="color: #800000;">&lt;/html&gt;</span></div>
   </div>
     </muestra-codigo>
   </div>`;
 }
}

customElements.define("d3-interruptores", D3Interruptores);