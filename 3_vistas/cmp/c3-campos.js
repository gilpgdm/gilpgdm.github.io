import "../../js/config.js";
import { Diapositiva } from "../../lib/Diapositiva.js";
import "../../lib/muestra-codigo.js";

export class C3Campos extends Diapositiva {
 /** @override */
 connectedCallback() {
  super.connectedCallback();
  this.innerHTML = /* html */
   `<h1>C. Campos</h1>
   <div class="lectura">
    <p>
     Los campos de texto en Material Design están definidas en
     <a href="https://material.io/components/text-fields"
       target="_blank">https://material.io/components/text-fields</a>.
    </p>
    <p>
     Los menús en Material Design están definifos en
     <a href="https://material.io/components/menus"
       target="_blank">https://material.io/components/menus</a>.
    </p>
   </div>
   <div class="horizontal">
    <div>
     <h2>Salida</h2>
     <iframe src="/3_vistas/src/3c_campos.html" height="420"></iframe>
     <p class="noPrint">
      <a href="/3_vistas/src/3c_campos.html" target="_blank">Ábrelo en otra
       pestaña.</a>
     </p>
     <p class="noPrint">
      <a target="_blank"
        href="https://gilpgedit.github.io/#%3C!DOCTYPE%20html%3E%0A%3Chtml%20lang%3D%22es%22%3E%0A%3Chead%3E%0A%20%3Cmeta%20charset%3D%22UTF-8%22%3E%0A%20%3Cmeta%20name%3D%22viewport%22%0A%20%20%20content%3D%22width%3Ddevice-width%22%3E%0A%20%3Ctitle%3ECampos%3C%2Ftitle%3E%0A%20%3Cstyle%3E%0A%20%20html%20%7B%0A%20%20%20%2F*%20Flecha%20abajo%20sin%20foco%0A%20%20%20%20%20%20%3Csvg%20width%3D%2224%22%20height%3D%2224%22%3E%0A%20%20%20%20%20%20%20%3Cpolygon%20stroke%3D%22gray%22%0A%20%20%20%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20%20%20%20points%3D%227%2010%2012%2015%2017%2010%22%3E%0A%20%20%20%20%20%20%20%3C%2Fpolygon%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E%20*%2F%0A%20%20%20--flAb%3A%20url(%22data%3Aimage%2Fsvg%2Bxml%2C%253Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%253E%253Cpolygon%20stroke%3D'gray'%20fill-rule%3D'evenodd'%20points%3D'7%2010%2012%2015%2017%2010'%253E%253C%2Fpolygon%253E%253C%2Fsvg%253E%22)%3B%0A%20%20%20%2F*%20Flecha%20arriba%20foco%0A%20%20%20%20%20%20%3Csvg%20width%3D%2224%22%20height%3D%2224%22%3E%0A%20%20%20%20%20%20%20%3Cpolygon%20stroke%3D%22%236a0080%22%0A%20%20%20%20%20%20%20%20%20fill-rule%3D%22evenodd%22%0A%20%20%20%20%20%20%20%20%20points%3D%227%2015%2012%2010%2017%2015%22%3E%0A%20%20%20%20%20%20%20%3C%2Fpolygon%3E%0A%20%20%20%20%20%20%3C%2Fsvg%3E%20*%2F%0A%20%20%20--flArr%3A%20url(%22data%3Aimage%2Fsvg%2Bxml%2C%253Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'24'%20height%3D'24'%253E%253Cpolygon%20stroke%3D'%25236a0080'%20fill-rule%3D'evenodd'%20points%3D'7%2015%2012%2010%2017%2015'%253E%253C%2Fpolygon%253E%253C%2Fsvg%253E%250A%22)%3B%0A%20%20%20--colTxt%3A%20black%3B%0A%20%20%20--colBk%3A%20white%3B%0A%20%20%20--colCmp%3A%20gray%3B%0A%20%20%20--colCmpFc%3A%20%236a0080%3B%0A%20%20%20--colCmpEr%3A%20%23b00020%3B%0A%20%20%20--colCmpBk%3A%20%23F5F5F5%3B%0A%20%20%20--colCmpBkHv%3A%20%23EEEEEE%3B%0A%20%20%20--colCmpBkFc%3A%20%23E0E0E0%3B%0A%20%20%20--colCmpOp%3A%20white%3B%0A%20%20%20--colCmpOpBk%3A%20%239c27b0%3B%0A%20%20%20--fntFam%3A%20-apple-system%2C%0A%20%20%20%20BlinkMacSystemFont%2C%20Roboto%2C%0A%20%20%20%20sans-serif%3B%0A%20%20%20color%3A%20var(--colTxt)%3B%0A%20%20%20font-family%3A%20var(--fntFam)%3B%0A%20%20%20background-color%3A%20var(--colBk)%3B%0A%20%20%7D%0A%0A%20%20%2F*%20Quita%20un%20borde%20rojo%20que%0A%20%20%20%20%20*%20coloca%20Firefox.%20*%2F%0A%20%20%3A-moz-ui-invalid%20%7B%0A%20%20%20box-shadow%3A%20none%3B%0A%20%20%7D%0A%0A%20%20cm-din%20%7B%0A%20%20%20display%3A%20block%3B%0A%20%20%20position%3A%20relative%3B%0A%20%20%20color%3A%20var(--colCmp)%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colCmpBk)%3B%0A%20%20%20border-top-left-radius%3A%204px%3B%0A%20%20%20border-top-right-radius%3A%204px%3B%0A%20%20%20margin%3A%201rem%200%3B%0A%20%20%20padding%3A%201.25rem%200%200%200%3B%0A%20%20%7D%0A%0A%20%20cm-din%3Ahover%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colCmpBkHv)%3B%0A%20%20%7D%0A%0A%20%20cm-din%3Afocus-within%20%7B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colCmpBkFc)%3B%0A%20%20%7D%0A%0A%20%20cm-din%20label%20%7B%0A%20%20%20position%3A%20absolute%3B%0A%20%20%20top%3A%201.75rem%3B%0A%20%20%20left%3A%201rem%3B%0A%20%20%20font-size%3A%201rem%3B%0A%20%20%20color%3A%20var(--colCmp)%3B%0A%20%20%20transition%3A%200.3s%20ease-in%3B%0A%20%20%7D%0A%0A%20%20cm-din%20.valor%2Blabel%2C%0A%20%20cm-din%20%3Afocus%2Blabel%2C%0A%20%20cm-din%20%5Btype%3Dfile%5D%2Blabel%20%7B%0A%20%20%20top%3A%200.5rem%3B%0A%20%20%20font-size%3A%200.75rem%3B%0A%20%20%7D%0A%0A%20%20cm-din%3Eoutput%2C%0A%20%20cm-din%20select%2C%0A%20%20cm-din%20input%20%7B%0A%20%20%20display%3A%20block%3B%0A%20%20%20box-sizing%3A%20border-box%3B%0A%20%20%20font-size%3A%201rem%3B%0A%20%20%20padding%3A%200.5rem%201rem%200.5rem%201rem%0A%20%20%7D%0A%0A%20%20cm-din%20select%2C%0A%20%20cm-din%20input%20%7B%0A%20%20%20background-color%3A%20transparent%3B%0A%20%20%20font-family%3A%20var(--fntFam)%3B%0A%20%20%20border-top%3A%20none%3B%0A%20%20%20border-left%3A%20none%3B%0A%20%20%20border-right%3A%20none%3B%0A%20%20%20border-bottom-width%3A%201px%3B%0A%20%20%20border-bottom-style%3A%20solid%3B%0A%20%20%20border-bottom-color%3A%0A%20%20%20%20var(--colCmp)%3B%0A%20%20%20resize%3A%20none%3B%0A%20%20%20outline%3A%20none%3B%0A%20%20%20width%3A%20100%25%3B%0A%20%20%20transition%3A%200.3s%20ease-in%3B%0A%20%20%7D%0A%0A%20%20cm-din%20%3Afocus%20%7B%0A%20%20%20border-bottom-width%3A%202px%3B%0A%20%20%7D%0A%0A%20%20cm-din%20small%20%7B%0A%20%20%20display%3A%20block%3B%0A%20%20%20height%3A%201em%3B%0A%20%20%20font-size%3A%200.75rem%3B%0A%20%20%20padding-left%3A%201rem%3B%0A%20%20%20background-color%3A%20var(--colBk)%3B%0A%20%20%20transition%3A%200.3s%20ease-in%3B%0A%20%20%7D%0A%0A%20%20cm-din%20%3Afocus%2Blabel%20%7B%0A%20%20%20color%3A%20var(--colCmpFc)%3B%0A%20%20%7D%0A%0A%20%20cm-din%20%3Afocus%20%7B%0A%20%20%20border-bottom-color%3A%0A%20%20%20%20var(--colCmpFc)%3B%0A%20%20%7D%0A%0A%20%20cm-din%20%3Ainvalid%2C%0A%20%20cm-din%20%3Afocus%3Ainvalid%20%7B%0A%20%20%20border-bottom-color%3A%0A%20%20%20%20var(--colCmpEr)%3B%0A%20%20%20outline%3A%20none%3B%0A%20%20%7D%0A%0A%20%20cm-din%20%3Ainvalid%2Blabel%20%7B%0A%20%20%20color%3A%20var(--colCmpEr)%3B%0A%20%20%7D%0A%0A%20%20cm-din%20%3Ainvalid~small%20%7B%0A%20%20%20color%3A%20var(--colCmpEr)%3B%0A%20%20%7D%0A%0A%20%20cm-din%20select%20%7B%0A%20%20%20-webkit-appearance%3A%20none%3B%0A%20%20%20-moz-appearance%3A%20none%3B%0A%20%20%20appearance%3A%20none%3B%0A%20%20%20padding-right%3A%201rem%3B%0A%20%20%20background-repeat%3A%20no-repeat%3B%0A%20%20%20background-position-x%3A%20right%3B%0A%20%20%20background-position-y%3A%20center%3B%0A%20%20%20background-image%3A%20var(--flAb)%3B%0A%20%20%7D%0A%0A%20%20cm-din%20select%3Afocus%20%7B%0A%20%20%20background-image%3A%20var(--flArr)%0A%20%20%7D%0A%0A%20%20cm-din%20option%20%7B%0A%20%20%20padding%3A%200.3rem%201rem%3B%0A%20%20%20background-color%3A%20var(--colBk)%3B%0A%20%20%7D%0A%0A%20%20cm-din%20option%3Achecked%20%7B%0A%20%20%20color%3A%20var(--colCmpOp)%3B%0A%20%20%20background-color%3A%0A%20%20%20%20var(--colCmpOpBk)%3B%0A%20%20%7D%0A%20%3C%2Fstyle%3E%0A%3C%2Fhead%3E%0A%3Cbody%3E%0A%20%3Ch1%3ECampos%3C%2Fh1%3E%0A%20%3Ccm-din%3E%0A%20%20%3Coutput%20id%3D%22saludo%22%3E%0A%20%20%20Hola%0A%20%20%3C%2Foutput%3E%0A%20%20%3Clabel%20for%3D%22Saludo%22%3E%0A%20%20%20Saludo%0A%20%20%3C%2Flabel%3E%0A%20%3C%2Fcm-din%3E%0A%20%3Ccm-din%3E%0A%20%20%3Cinput%20id%3D%22nombre%22%20required%3E%0A%20%20%3Clabel%20for%3D%22nombre%22%3E%0A%20%20%20Nombre*%0A%20%20%3C%2Flabel%3E%0A%20%20%3Csmall%3E*Requerido%3C%2Fsmall%3E%0A%20%3C%2Fcm-din%3E%0A%20%3Ccm-din%3E%0A%20%20%3Cinput%20id%3D%22email%22%20type%3D%22email%22%3E%0A%20%20%3Clabel%20for%3D%22email%22%3EEmail%3C%2Flabel%3E%0A%20%3C%2Fcm-din%3E%0A%20%3Ccm-din%3E%0A%20%20%3Cselect%20id%3D%22grupo%22%3E%0A%20%20%20%3Coption%20value%3D%22%22%3E%3C%2Foption%3E%0A%20%20%20%3Coption%20value%3D%22IC21%22%3E%0A%20%20%20%20IC-21%0A%20%20%20%3C%2Foption%3E%0A%20%20%20%3Coption%20value%3D%22IC22%22%3E%0A%20%20%20%20IC-22%0A%20%20%20%3C%2Foption%3E%0A%20%20%20%3Coption%20value%3D%22IC23%22%3E%0A%20%20%20%20IC-23%0A%20%20%20%3C%2Foption%3E%0A%20%20%3C%2Fselect%3E%0A%20%20%3Clabel%20for%3D%22grupo%22%3EGrupo%3C%2Flabel%3E%0A%20%3C%2Fcm-din%3E%0A%20%3Cscript%3E%0A%20%20class%20CmDin%20extends%20HTMLElement%20%7B%0A%20%20%20connectedCallback()%20%7B%0A%20%20%20%20setTimeout(%0A%20%20%20%20%20()%20%3D%3E%20this.prepara()%2C%0A%20%20%20%20%20100)%0A%20%20%20%7D%0A%20%20%20prepara()%20%7B%0A%20%20%20%20%2F**%0A%20%20%20%20%20*%20%40type%20%7B%0A%20%20%20%20%20*%20%20HTMLInputElement%7C%0A%20%20%20%20%20*%20%20HTMLSelectElement%7C%0A%20%20%20%20%20*%20%20HTMLOutputElement%7C%0A%20%20%20%20%20*%20%20null%7D%20*%2F%0A%20%20%20%20this._elem%20%3D%20this.%0A%20%20%20%20%20querySelector(%0A%20%20%20%20%20%20%22input%2C%20select%2C%20output%22)%0A%20%20%20%20if%20(this._elem)%20%7B%0A%20%20%20%20%20this.addEventListener(%22input%22%2C%0A%20%20%20%20%20%20()%20%3D%3E%20this.analiza())%0A%20%20%20%20%7D%0A%20%20%20%20this.analiza()%3B%0A%20%20%20%7D%0A%20%20%20analiza()%20%7B%0A%20%20%20%20const%20e%20%3D%20this._elem%3B%0A%20%20%20%20if%20(e)%20%7B%0A%20%20%20%20%20if%20(!e.validity.badInput%20%26%26%0A%20%20%20%20%20%20e.value.length%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%20%20e.classList.remove(%22valor%22)%0A%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20e.classList.add(%22valor%22)%0A%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%7D%0A%20%20%7D%0A%20%20customElements.%0A%20%20%20define(%22cm-din%22%2C%20CmDin)%0A%20%3C%2Fscript%3E%0A%3C%2Fbody%3E%0A%3C%2Fhtml%3E">
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
      <div>&nbsp;<span style="color: #800000;">&lt;title&gt;</span>Campos<span
         style="color: #800000;">&lt;/title&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;style&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">html</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #008000;">/*&nbsp;Flecha&nbsp;abajo&nbsp;sin&nbsp;foco</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;svg&nbsp;width="24"&nbsp;height="24"&gt;</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;polygon&nbsp;stroke="gray"</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill-rule="evenodd"</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;points="7&nbsp;10&nbsp;12&nbsp;15&nbsp;17&nbsp;10"&gt;</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/polygon&gt;</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/svg&gt;&nbsp;*/</span>
      </div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--flAb</span>:&nbsp;<span
         style="color: #795e26;">url</span>(<span
         style="color: #a31515;">"data:image/svg+xml,%3Csvg&nbsp;xmlns='http://www.w3.org/2000/svg'&nbsp;width='24'&nbsp;height='24'%3E%3Cpolygon&nbsp;stroke='gray'&nbsp;fill-rule='evenodd'&nbsp;points='7&nbsp;10&nbsp;12&nbsp;15&nbsp;17&nbsp;10'%3E%3C/polygon%3E%3C/svg%3E"</span>);
      </div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #008000;">/*&nbsp;Flecha&nbsp;arriba&nbsp;foco</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;svg&nbsp;width="24"&nbsp;height="24"&gt;</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;polygon&nbsp;stroke="#6a0080"</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill-rule="evenodd"</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;points="7&nbsp;15&nbsp;12&nbsp;10&nbsp;17&nbsp;15"&gt;</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/polygon&gt;</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/svg&gt;&nbsp;*/</span>
      </div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--flArr</span>:&nbsp;<span
         style="color: #795e26;">url</span>(<span
         style="color: #a31515;">"data:image/svg+xml,%3Csvg&nbsp;xmlns='http://www.w3.org/2000/svg'&nbsp;width='24'&nbsp;height='24'%3E%3Cpolygon&nbsp;stroke='%236a0080'&nbsp;fill-rule='evenodd'&nbsp;points='7&nbsp;15&nbsp;12&nbsp;10&nbsp;17&nbsp;15'%3E%3C/polygon%3E%3C/svg%3E%0A"</span>);
      </div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colTxt</span>:&nbsp;<span
         style="color: #0451a5;">black</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colBk</span>:&nbsp;<span
         style="color: #0451a5;">white</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colCmp</span>:&nbsp;<span
         style="color: #0451a5;">gray</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colCmpFc</span>:&nbsp;<span
         style="color: #0451a5;">#6a0080</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colCmpEr</span>:&nbsp;<span
         style="color: #0451a5;">#b00020</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colCmpBk</span>:&nbsp;<span
         style="color: #0451a5;">#F5F5F5</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colCmpBkHv</span>:&nbsp;<span
         style="color: #0451a5;">#EEEEEE</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colCmpBkFc</span>:&nbsp;<span
         style="color: #0451a5;">#E0E0E0</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colCmpOp</span>:&nbsp;<span
         style="color: #0451a5;">white</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--colCmpOpBk</span>:&nbsp;<span
         style="color: #0451a5;">#9c27b0</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">--fntFam</span>:&nbsp;-apple-system,</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;BlinkMacSystemFont,&nbsp;Roboto,</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #0451a5;">sans-serif</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">color</span>:&nbsp;<span
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
      <div>&nbsp;&nbsp;<span
         style="color: #008000;">/*&nbsp;Quita&nbsp;un&nbsp;borde&nbsp;rojo&nbsp;que</span>
      </div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;coloca&nbsp;Firefox.&nbsp;*/</span>
      </div>
      <div>&nbsp;&nbsp;<span
         style="color: #800000;">:-moz-ui-invalid</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">box-shadow</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">display</span>:&nbsp;<span
         style="color: #0451a5;">block</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">position</span>:&nbsp;<span
         style="color: #0451a5;">relative</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">color</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmp</span>);</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-color</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpBk</span>);</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-top-left-radius</span>:&nbsp;<span
         style="color: #098658;">4px</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-top-right-radius</span>:&nbsp;<span
         style="color: #098658;">4px</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">margin</span>:&nbsp;<span
         style="color: #098658;">1rem</span>&nbsp;<span
         style="color: #098658;">0</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">padding</span>:&nbsp;<span
         style="color: #098658;">1.25rem</span>&nbsp;<span
         style="color: #098658;">0</span>&nbsp;<span
         style="color: #098658;">0</span>&nbsp;<span
         style="color: #098658;">0</span>;</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din:hover</span>&nbsp;{
      </div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-color</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpBkHv</span>);</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span
         style="color: #800000;">cm-din:focus-within</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-color</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpBkFc</span>);</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">label</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">position</span>:&nbsp;<span
         style="color: #0451a5;">absolute</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">top</span>:&nbsp;<span
         style="color: #098658;">1.75rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">left</span>:&nbsp;<span
         style="color: #098658;">1rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">font-size</span>:&nbsp;<span
         style="color: #098658;">1rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">color</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmp</span>);</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">transition</span>:&nbsp;<span
         style="color: #098658;">0.3s</span>&nbsp;<span
         style="color: #0451a5;">ease-in</span>;</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">.valor</span>+<span
         style="color: #800000;">label</span>,</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">:focus</span>+<span
         style="color: #800000;">label</span>,</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;[<span
         style="color: #ff0000;">type</span>=<span
         style="color: #a31515;">file</span>]+<span
         style="color: #800000;">label</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span style="color: #ff0000;">top</span>:&nbsp;<span
         style="color: #098658;">0.5rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">font-size</span>:&nbsp;<span
         style="color: #098658;">0.75rem</span>;</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&gt;<span
         style="color: #800000;">output</span>,</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">select</span>,</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">input</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">display</span>:&nbsp;<span
         style="color: #0451a5;">block</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">box-sizing</span>:&nbsp;<span
         style="color: #0451a5;">border-box</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">font-size</span>:&nbsp;<span
         style="color: #098658;">1rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">padding</span>:&nbsp;<span
         style="color: #098658;">0.5rem</span>&nbsp;<span
         style="color: #098658;">1rem</span>&nbsp;<span
         style="color: #098658;">0.5rem</span>&nbsp;<span
         style="color: #098658;">1rem</span></div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">select</span>,</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">input</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-color</span>:&nbsp;<span
         style="color: #0451a5;">transparent</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">font-family</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--fntFam</span>);</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-top</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-left</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-right</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-bottom-width</span>:&nbsp;<span
         style="color: #098658;">1px</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-bottom-style</span>:&nbsp;<span
         style="color: #0451a5;">solid</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-bottom-color</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmp</span>);</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">resize</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">outline</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">width</span>:&nbsp;<span
         style="color: #098658;">100%</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">transition</span>:&nbsp;<span
         style="color: #098658;">0.3s</span>&nbsp;<span
         style="color: #0451a5;">ease-in</span>;</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">:focus</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-bottom-width</span>:&nbsp;<span
         style="color: #098658;">2px</span>;</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">small</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">display</span>:&nbsp;<span
         style="color: #0451a5;">block</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">height</span>:&nbsp;<span
         style="color: #098658;">1em</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">font-size</span>:&nbsp;<span
         style="color: #098658;">0.75rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">padding-left</span>:&nbsp;<span
         style="color: #098658;">1rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-color</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colBk</span>);</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">transition</span>:&nbsp;<span
         style="color: #098658;">0.3s</span>&nbsp;<span
         style="color: #0451a5;">ease-in</span>;</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">:focus</span>+<span
         style="color: #800000;">label</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">color</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpFc</span>);</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">:focus</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-bottom-color</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpFc</span>);</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">:invalid</span>,</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">:focus:invalid</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">border-bottom-color</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpEr</span>);</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">outline</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">:invalid</span>+<span
         style="color: #800000;">label</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">color</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpEr</span>);</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">:invalid</span>~<span
         style="color: #800000;">small</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">color</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpEr</span>);</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">select</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">-webkit-appearance</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">-moz-appearance</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">appearance</span>:&nbsp;<span
         style="color: #0451a5;">none</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">padding-right</span>:&nbsp;<span
         style="color: #098658;">1rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-repeat</span>:&nbsp;<span
         style="color: #0451a5;">no-repeat</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-position-x</span>:&nbsp;<span
         style="color: #0451a5;">right</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-position-y</span>:&nbsp;<span
         style="color: #0451a5;">center</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-image</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--flAb</span>);</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">select:focus</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-image</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--flArr</span>)</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">option</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">padding</span>:&nbsp;<span
         style="color: #098658;">0.3rem</span>&nbsp;<span
         style="color: #098658;">1rem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-color</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colBk</span>);</div>
      <div>&nbsp;&nbsp;}</div><br>
      <div>&nbsp;&nbsp;<span style="color: #800000;">cm-din</span>&nbsp;<span
         style="color: #800000;">option:checked</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">color</span>:&nbsp;<span
         style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpOp</span>);</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #ff0000;">background-color</span>:</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">var</span>(<span
         style="color: #001080;">--colCmpOpBk</span>);</div>
      <div>&nbsp;&nbsp;}</div>
      <div>&nbsp;<span style="color: #800000;">&lt;/style&gt;</span></div>
      <div><span style="color: #800000;">&lt;/head&gt;</span></div>
      <div><span style="color: #800000;">&lt;body&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;h1&gt;</span>Campos<span
         style="color: #800000;">&lt;/h1&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;cm-din&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;output</span>&nbsp;<span
         style="color: #ff0000;">id</span>=<span
         style="color: #0000ff;">"saludo"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Hola</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/output&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label</span>&nbsp;<span
         style="color: #ff0000;">for</span>=<span
         style="color: #0000ff;">"Saludo"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Saludo</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/cm-din&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;cm-din&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;input</span>&nbsp;<span
         style="color: #ff0000;">id</span>=<span
         style="color: #0000ff;">"nombre"</span>&nbsp;<span
         style="color: #ff0000;">required</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label</span>&nbsp;<span
         style="color: #ff0000;">for</span>=<span
         style="color: #0000ff;">"nombre"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;Nombre*</div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;&nbsp;<span
         style="color: #800000;">&lt;small&gt;</span>*Requerido<span
         style="color: #800000;">&lt;/small&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/cm-din&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;cm-din&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;input</span>&nbsp;<span
         style="color: #ff0000;">id</span>=<span
         style="color: #0000ff;">"email"</span>&nbsp;<span
         style="color: #ff0000;">type</span>=<span
         style="color: #0000ff;">"email"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label</span>&nbsp;<span
         style="color: #ff0000;">for</span>=<span
         style="color: #0000ff;">"email"</span><span
         style="color: #800000;">&gt;</span>Email<span
         style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/cm-din&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;cm-din&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;select</span>&nbsp;<span
         style="color: #ff0000;">id</span>=<span
         style="color: #0000ff;">"grupo"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;option</span>&nbsp;<span
         style="color: #ff0000;">value</span>=<span
         style="color: #0000ff;">""</span><span
         style="color: #800000;">&gt;&lt;/option&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;option</span>&nbsp;<span
         style="color: #ff0000;">value</span>=<span
         style="color: #0000ff;">"IC21"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;IC-21</div>
      <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/option&gt;</span>
      </div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;option</span>&nbsp;<span
         style="color: #ff0000;">value</span>=<span
         style="color: #0000ff;">"IC22"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;IC-22</div>
      <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/option&gt;</span>
      </div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #800000;">&lt;option</span>&nbsp;<span
         style="color: #ff0000;">value</span>=<span
         style="color: #0000ff;">"IC23"</span><span
         style="color: #800000;">&gt;</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;IC-23</div>
      <div>&nbsp;&nbsp;&nbsp;<span style="color: #800000;">&lt;/option&gt;</span>
      </div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;/select&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #800000;">&lt;label</span>&nbsp;<span
         style="color: #ff0000;">for</span>=<span
         style="color: #0000ff;">"grupo"</span><span
         style="color: #800000;">&gt;</span>Grupo<span
         style="color: #800000;">&lt;/label&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;/cm-din&gt;</span></div>
      <div>&nbsp;<span style="color: #800000;">&lt;script&gt;</span></div>
      <div>&nbsp;&nbsp;<span style="color: #0000ff;">class</span>&nbsp;<span
         style="color: #267f99;">CmDin</span>&nbsp;<span
         style="color: #0000ff;">extends</span>&nbsp;<span
         style="color: #267f99;">HTMLElement</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #795e26;">connectedCallback</span>()&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #795e26;">setTimeout</span>(</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;<span
         style="color: #0000ff;">=&gt;</span>&nbsp;<span
         style="color: #0000ff;">this</span>.<span
         style="color: #795e26;">prepara</span>(),</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #098658;">100</span>)</div>
      <div>&nbsp;&nbsp;&nbsp;}</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #795e26;">prepara</span>()&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #008000;">/**</span></div>
      <div><span
         style="color: #008000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;</span><span
         style="color: #0000ff;">@type</span><span
         style="color: #008000;">&nbsp;</span><span
         style="color: #267f99;">{</span></div>
      <div><span
         style="color: #267f99;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;HTMLInputElement|</span>
      </div>
      <div><span
         style="color: #267f99;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;HTMLSelectElement|</span>
      </div>
      <div><span
         style="color: #267f99;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;HTMLOutputElement|</span>
      </div>
      <div><span
         style="color: #267f99;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*&nbsp;&nbsp;null}</span><span
         style="color: #008000;">&nbsp;*/</span></div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #0000ff;">this</span>.<span
         style="color: #001080;">_elem</span>&nbsp;=&nbsp;<span
         style="color: #0000ff;">this</span>.</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #795e26;">querySelector</span>(</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #a31515;">"input,&nbsp;select,&nbsp;output"</span>)</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #af00db;">if</span>&nbsp;(<span
         style="color: #0000ff;">this</span>.<span
         style="color: #001080;">_elem</span>)&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #0000ff;">this</span>.<span
         style="color: #795e26;">addEventListener</span>(<span
         style="color: #a31515;">"input"</span>,</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;()&nbsp;<span
         style="color: #0000ff;">=&gt;</span>&nbsp;<span
         style="color: #0000ff;">this</span>.<span
         style="color: #795e26;">analiza</span>())</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #0000ff;">this</span>.<span
         style="color: #795e26;">analiza</span>();</div>
      <div>&nbsp;&nbsp;&nbsp;}</div>
      <div>&nbsp;&nbsp;&nbsp;<span
         style="color: #795e26;">analiza</span>()&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #0000ff;">const</span>&nbsp;<span
         style="color: #0070c1;">e</span>&nbsp;=&nbsp;<span
         style="color: #0000ff;">this</span>.<span
         style="color: #001080;">_elem</span>;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #af00db;">if</span>&nbsp;(<span
         style="color: #0070c1;">e</span>)&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #af00db;">if</span>&nbsp;(!<span
         style="color: #0070c1;">e</span>.<span
         style="color: #001080;">validity</span>.<span
         style="color: #001080;">badInput</span>&nbsp;&amp;&amp;</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #0070c1;">e</span>.<span
         style="color: #001080;">value</span>.<span
         style="color: #001080;">length</span>&nbsp;===&nbsp;<span
         style="color: #098658;">0</span>)&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #0070c1;">e</span>.<span
         style="color: #001080;">classList</span>.<span
         style="color: #795e26;">remove</span>(<span
         style="color: #a31515;">"valor"</span>)</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}&nbsp;<span
         style="color: #af00db;">else</span>&nbsp;{</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
         style="color: #0070c1;">e</span>.<span
         style="color: #001080;">classList</span>.<span
         style="color: #795e26;">add</span>(<span
         style="color: #a31515;">"valor"</span>)</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</div>
      <div>&nbsp;&nbsp;&nbsp;&nbsp;}</div>
      <div>&nbsp;&nbsp;&nbsp;}</div>
      <div>&nbsp;&nbsp;}</div>
      <div>&nbsp;&nbsp;<span style="color: #001080;">customElements</span>.</div>
      <div>&nbsp;&nbsp;&nbsp;<span style="color: #795e26;">define</span>(<span
         style="color: #a31515;">"cm-din"</span>,&nbsp;<span
         style="color: #267f99;">CmDin</span>)</div>
      <div>&nbsp;<span style="color: #800000;">&lt;/script&gt;</span></div>
      <div><span style="color: #800000;">&lt;/body&gt;</span></div>
      <div><span style="color: #800000;">&lt;/html&gt;</span></div>
     </div>
    </muestra-codigo>
   </div>`;
 }
}

customElements.define("c3-campos", C3Campos);