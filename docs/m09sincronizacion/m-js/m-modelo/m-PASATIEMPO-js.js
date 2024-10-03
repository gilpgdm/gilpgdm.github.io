<!DOCTYPE html>
<html lang="es" prefix="og: https://ogp.me/ns#">

<head>
 <meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" sizes="32x32" href="/favicon.ico">
<meta name="theme-color" content="#039623">
<link rel="manifest" href="/site.webmanifest">
<script src="/lib/js/muestra-codigo.js"></script>
 <title>1. js / modelo / PASATIEMPO.js - GilPG DM</title>
 <meta name="description" content="Código de «js/modelo/PASATIEMPO.js».">
 <meta name="og:image" content="https://gilpgdm.github.io/img/icono/icono2048.png">
 <style>
 /* https://paletton.com/#uid=74W0u0kllllaFw0g0qFqFg0w0aF */
 :root {
  --marginTop: 0.25rem;
  --padTop: 0;
  --h1PadTop: 2.5rem;
  --introDuracion: 2s;
  --introFuncion: ease-out;
  --padCont: 0.5rem;
  --padNav: 0.75rem 0.5rem;
  --anchoNav: 300px;
  --anchoLectura: 900px;
  --colLetra: black;
  --colFondo: white;
  --colPush: var(--colFondo);
  --colPushHover: var(--colFondo);
  --colPushFocus: var(--colFondo);
  --colPushActive: #bae397;
  --colFondoPush: #609732;
  --colFondoPushHover: #8abd5f;
  --colFondoPushFocus: #3e7213;
  --colFondoPushActive: #224c00;
  --paddingPush: 0.2rem 0.3rem;
  --borderPush: none;
  --borderRadiusPush: 0.6em;
  --colA: #6a7b15;
  --colAVisited: #6f256f;
  --colAActive: #e498af;
  --colAPush: var(--colFondo);
  --colAVisitedPush: var(--colFondo);
  --colAPushHover: var(--colFondo);
  --colAVisitedPushHover: var(--colFondo);
  --colAPushFocus: var(--colFondo);
  --colAVisitedPushFocus: var(--colFondo);
  --colAPushActive: var(--colFondo);
  --colAVisitedPushActive: var(--colFondo);
  --colFondoAPush: #6a7b15;
  --colFondoAVisitedPush: #6f256f;
  --colFondoAPushHover: #91a437;
  --colFondoAVisitedPushHover: #a66fa6;
  --colFondoAPushFocus: #445200;
  --colFondoAVisitedPushFocus: #530e53;
  --colFondoAPushActive: #e498af;
  --colFondoAVisitedPushActive: #e498af;
  --colSombra: #49494980;
  --navSombra: 0.5rem 0 0.5rem var(--colSombra);
  --shadowTitulo: 3px 1px 2px black;
  /* --colTitulo: #bae397; */
  --colTitulo: #609732;
  /* --colTituloFondo: #609732; */
  --colPrincipalTituloStrong: #6E256E;
  --colAStrong: var(--colLetra);
  /* --colNavH1Sel: #b35f7c; */
  --colFondoNav: var(--colFondo);
  --colFondoNavSel: #e498af;
  --colScrollbar: #CFD8DC;
  --colThumb: #90a4ae;
  --colThumbActivo: #3f3f3f;
  --colResaltado: #e9c8d2;
  --colResaltado2: #bae397;
  --colResaltado3: #cfcfcf;
  --colLetraResaltado: black;
  --colLetraCodeComment: #224c00;
  --colLetraCodeString: #903357;
  --colLetraCodeReserved: #445200;
  --colSecundario: #e498af;
  --colTarget: #cef4ff;
  --colStack1: black;
  --colStack2: #224ba5;
  --colStack3: #92731f;
  --anchoThumb: 7px;
  --borderRadiusThumb: 3.5px;
  --gap: 0.5rem;
  --fontMono: 'Xanh Mono', monospace;
  --fontSans: 'Patrick Hand', sans-serif;
  /* --fontSerif: 'Purple Purse', serif; */
  --fontSerif: Georgia, 'Times New Roman', Times, serif;
  font-family: var(--fontSerif);
  color: var(--colLetra);
  background-color: var(--colFondo);
  scrollbar-width: thin;
  scrollbar-color: var(--colThumb) var(--colScrollbar);
 }

 @media (prefers-color-scheme: light) {
  :root {
   --colLetra: black;
   --colFondo: white;
  }
 }

 /* https://paletton.com/#uid=74W0u0kaVz84jP27qHbeJtFiHpX */
 @media (prefers-color-scheme: dark) {

  :root {
   --colLetra: white;
   /* --colFondo: #272727; */
   --colFondo: black;
   --colPushActive: #e3f5d4;
   --colFondoPush: #bbe697;
   --colFondoPushHover: #d0eeb7;
   --colFondoPushFocus: #9ed372;
   --colFondoPushActive: #7db84d;
   --colA: #e9f7a3;
   --colAVisited: #c89ac8;
   --colAActive: #983351;
   --colFondoAPush: #e9f7a3;
   --colFondoAVisitedPush: #c89ac8;
   --colFondoAPushHover: #f6fcda;
   --colFondoAVisitedPushHover: #dec0de;
   --colFondoAPushFocus: #b4c853;
   --colFondoAVisitedPushFocus: #9a539a;
   --colFondoAPushActive: #983351;
   --colFondoAVisitedPushActive: #983351;
   --colSombra: #00000080;
   --colTitulo: #e3f5d4;
   --colPrincipalTituloStrong: #C899C8;
   /* --colTituloFondo: #7db84d; */
   /* --colNavH1Sel: #d37290; */
   --colFondoNavSel: #7a3059;
   --colScrollbar: #616161;
   --colThumb: #ffffff;
   --colResaltado: #7a3059;
   --colResaltado2: #5c922f;
   --colResaltado3: #4e4e4e;
   --colLetraResaltado: white;
   --colLetraCodeComment: #d0eeb7;
   --colLetraCodeString: #eeb7c8;
   --colLetraCodeReserved: #f0fac0;
  }
 }

 /* xanh-mono-regular - latin_latin-ext */
 @font-face {
  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-display: swap;
  font-family: 'Xanh Mono';
  font-style: normal;
  font-weight: 400;
  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  src: url('/fonts/xanh-mono-v18-latin_latin-ext-regular.woff2') format('woff2');
 }

 /* xanh-mono-italic - latin_latin-ext */
 @font-face {
  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-display: swap;
  font-family: 'Xanh Mono';
  font-style: italic;
  font-weight: 400;
  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  src: url('/fonts/xanh-mono-v18-latin_latin-ext-italic.woff2') format('woff2');
 }

 /* patrick-hand-regular - latin_latin-ext */
 @font-face {
  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-display: swap;
  font-family: 'Patrick Hand';
  font-style: normal;
  font-weight: 400;
  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  src: url('/fonts/patrick-hand-v23-latin_latin-ext-regular.woff2') format('woff2');
 }

 /* purple-purse-regular - latin_latin-ext */
 @font-face {
  /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
  font-display: swap;
  font-family: 'Purple Purse';
  font-style: normal;
  font-weight: 400;
  /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  src: url('/fonts/purple-purse-v23-latin_latin-ext-regular.woff2') format('woff2');
 }

 @font-face {
  font-family: 'Material Symbols Outlined';
  font-style: normal;
  src:
   url(/fonts/MaterialSymbolsOutlined[FILL\,GRAD\,opsz\,wght].woff2) format('woff2'),
   url(/fonts/MaterialSymbolsOutlined[FILL\,GRAD\,opsz\,wght].ttf) format('truetype');
 }

 .material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  width: 24px;
  height: 24px;
  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
 }

 body::-webkit-scrollbar {
  width: var(--anchoThumb);
  height: var(--anchoThumb);
 }

 body::-webkit-scrollbar-track {
  background: var(--colScrollbar);
 }

 body::-webkit-scrollbar-thumb {
  background-color: var(--colThumb);
  border-radius: var(--borderRadiusThumb);
 }

 body::-webkit-scrollbar-thumb:active {
  background-color: var(--colThumbActivo);
 }

 body {
  margin-top: 0;
 }

 a {
  color: var(--colA);
 }

 a:visited {
  color: var(--colAVisited);
 }

 a:active {
  color: var(--colAActive);
 }

 .anterior,
 .siguiente,
 .paginaAnterior,
 .paginaSiguiente,
 button {
  display: inline-block;
  padding: var(--paddingPush);
  border: var(--borderPush);
  border-radius: var(--borderRadiusPush);
  text-align: center;
  text-decoration: none;
 }

 .anterior,
 .siguiente,
 .paginaAnterior,
 .paginaSiguiente {
  color: var(--colAPush);
  background-color: var(--colFondoAPush);
 }

 .anterior:visited,
 .siguiente:visited,
 .paginaAnterior:visited,
 .paginaSiguiente:visited {
  color: var(--colAVisitedPush);
  background-color: var(--colFondoAVisitedPush);
 }

 .anterior.bye,
 .siguiente.bye,
 .paginaAnterior.bye,
 .paginaSiguiente.bye {
  display: none;
 }

 .anterior:hover,
 .siguiente:hover,
 .paginaAnterior:hover,
 .paginaSiguiente:hover {
  color: var(--colAPushHover);
  background-color: var(--colFondoAPushHover);
 }

 .anterior:visited:hover,
 .siguiente:visited:hover,
 .paginaAnterior:visited:hover,
 .paginaSiguiente:visited:hover {
  color: var(--colAVisitedPushHover);
  background-color: var(--colFondoAVisitedPushHover);
 }

 .anterior:focus,
 .siguiente:focus,
 .paginaAnterior:focus,
 .paginaSiguiente:focus {
  color: var(--colAPushFocus);
  background-color: var(--colFondoAPushFocus);
 }

 .anterior:visited:focus,
 .siguiente:visited:focus,
 .paginaAnterior:visited:focus,
 .paginaSiguiente:visited:focus {
  color: var(--colAVisitedPushFocus);
  background-color: var(--colFondoAVisitedPushFocus);
 }

 .anterior:active,
 .siguiente:active,
 .paginaAnterior:active,
 .paginaSiguiente:active {
  color: var(--colAPushActive);
  background-color: var(--colFondoAPushActive);
 }

 .anterior:visited:active,
 .siguiente:visited:active,
 .paginaAnterior:visited:active,
 .paginaSiguiente:visited:active {
  color: var(--colAVisitedPushActive);
  background-color: var(--colFondoAVisitedPushActive);
 }

 button {
  color: var(--colPush);
  background-color: var(--colFondoPush);
 }

 button:hover {
  color: var(--colPushHover);
  background-color: var(--colFondoPushHover);
 }

 button:focus {
  color: var(--colPushFocus);
  background-color: var(--colFondoPushFocus);
 }

 button:active {
  color: var(--colPushActive);
  background-color: var(--colFondoPushActive);
 }

 .anterior span,
 .siguiente span,
 .paginaAnterior span,
 .paginaSiguiente span,
 button span {
  vertical-align: middle;
 }

 a[data-logo] {
  display: block;
  height: 54px;
  line-height: 54px;
  padding-left: 54px;
  margin-top: 1rem;
  background-image: url("/img/icono/maskable_icon_x48.png");
  background-position: 3px center;
  background-repeat: no-repeat;
 }

 a strong,
 a code,
 h1 strong,
 h1 code {
  font-size: 1em;
 }

 a strong,
 a code {
  color: var(--colAStrong);
 }

 nav a {
  font-family: var(--fontSans);
 }

 pre {
  font-family: var(--fontMono);
 }

 code {
  font-family: var(--fontMono);
  font-size: 1rem;
 }

 .tree {
  font-family: var(--fontSans);
 }

 .tree summary {
  text-decoration: underline;
  cursor: pointer;
 }

 .tree li {
  margin-top: 1em;
  margin-bottom: 1em;
 }

 h1:not(.default) {
  font-family: var(--fontSans);
  color: var(--colTituloFondo);
 }

 h1,
 .lectura a,
 .lectura p,
 .lectura blockquote {
  overflow-wrap: anywhere;
 }

 .autor {
  font-family: var(--fontSans);
  font-size: 1.5rem;
  color: var(--colTituloFondo);
 }

 figure {
  text-align: center;
 }

 figure img {
  width: 100%;
 }

 figcaption {
  font-family: var(--fontMono);
 }

 .print .noPrint {
  display: none;
 }

 @media print {
  .noPrint {
   display: none;
  }

  .pruebaDeEscritorio {
   page-break-before: always;
  }
 }

 iframe {
  box-sizing: border-box;
  width: 300px;
 }

 .lectura {
  max-width: var(--anchoLectura);
  margin: 1rem auto;
 }

 .lectura p,
 .lectura blockquote {
  text-align: justify;
 }

 .horizontal {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: start;
  justify-content: center;
 }

 .horizontal>*:first-child {
  flex: 1 1 300px;
  text-align: center;
 }

 .horizontal>*:nth-child(2) {
  flex: 1 1 auto;
 }

 .columnas4 {
  columns: 4 180px;
  column-gap: 1rem;
 }

 .columnas2 {
  columns: 2 360px;
  column-gap: 1rem;
 }

 .resaltado {
  background-color: var(--colResaltado);
  color: var(--colLetraResaltado);
 }

 .resaltado2 {
  background-color: var(--colResaltado2);
  color: var(--colLetraResaltado);
 }

 .resaltado3 {
  background-color: var(--colResaltado3);
  color: var(--colLetraResaltado);
 }

 table.borde {
  margin-left: auto;
  margin-right: auto;
 }

 table.borde,
 table.borde td {
  border: thin solid;
  border-collapse: collapse;
 }

 table.borde th,
 table.borde td {
  padding: 0.4rem;
 }

 table.codeShow {
  margin-left: auto;
  margin-right: auto;
 }

 .codeShow td:first-child {
  text-align: right;
  padding: 0 0 0 0;
  vertical-align: top;
  font-family: var(--fontMono);
  white-space: pre;
  font-size: 1rem;
  line-height: 1.2rem;
  /* Avoid selection */
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
 }

 .codeShow td:nth-child(2) {
  padding: 0 0 0 0.25rem;
  vertical-align: top;
  font-family: var(--fontMono);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  font-size: 1rem;
  line-height: 1.2rem;
 }

 .codeReserved {
  color: var(--colLetraCodeReserved);
  font-weight: bolder;
 }

 .codeString {
  color: var(--colLetraCodeString);
  font-weight: 600;
 }

 .codeComment {
  color: var(--colLetraCodeComment);
  font-style: italic;
 }

 @media print {

  .codeShow button {
   display: none;
  }
 }


 footer {
  margin-top: 1rem;
  display: block;
  text-align: center;
  font-family: var(--fontSans);
  font-size: small;
 }
</style>
 <style>
 body {
  scroll-padding-top: var(--padTop);
 }

 body {
  animation-timing-function: var(--introFuncion);
  animation-duration: var(--introDuracion);
  animation-fill-mode: forwards;
  animation-name: appear;
 }

 body.noTransition {
  animation-name: noTransition;
 }

 @keyframes appear {
  from {
   opacity: 0;
  }

  to {
   opacity: 1;
  }
 }

 @keyframes noTransition {
  0% {
   opacity: 0;
  }

  0.7% {
   opacity: 1;
  }

  100% {
   opacity: 1;
  }
 }

 #principal {
  padding-top: var(--padTop);
  box-sizing: border-box;
  transition: margin-left 0.7s ease-in-out;
 }

 #principal a {
  word-wrap: break-word;
 }

 #principal>#abre {
  position: fixed;
  top: var(--gap);
  left: var(--gap);
  transition-property: top, left;
  transition-duration: 0.7s, 0.7s;
  transition-timing-function: ease-in-out;
 }

 #principal>.anterior {
  position: fixed;
  top: var(--gap);
  transition-property: top, left;
  transition-duration: 0.7s, 0.7s;
  transition-timing-function: ease-in-out;
 }

 #principal>.siguiente {
  position: fixed;
  top: var(--gap);
  right: var(--gap);
  transition: top 0.7s ease-in-out;
 }

 .scroll #principal>#abre,
 .scroll #principal>.anterior,
 .scroll #principal>.siguiente {
  top: -10rem;
 }

 #principal>h1:not(.default) {
  margin-top: var(--marginTop);
  padding: var(--h1PadTop) 1rem 1rem 1rem;
  color: var(--colTitulo);
  background-color: var(--colTituloFondo);
 }

 #principal>h1:not(.default) strong,
 #principal>h1:not(.default) code {
  color: var(--colPrincipalTituloStrong);
 }

 #nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  overflow: auto;
  color: var(--colLetra);
  background-color: var(--colFondoNav);
  padding: var(--padCont);
  transition: transform 0.7s ease-in-out;
  scrollbar-width: thin;
  scrollbar-color: var(--colThumb) var(--colScrollbar);
  overflow-wrap: anywhere;
 }

 #nav::-webkit-scrollbar {
  width: var(--anchoThumb);
  height: var(--anchoThumb);
 }

 #nav::-webkit-scrollbar-track {
  background: var(--colScrollbar);
 }

 #nav::-webkit-scrollbar-thumb {
  background-color: var(--colThumb);
  border-radius: var(--borderRadiusThumb);
 }

 #nav::-webkit-scrollbar-thumb:active {
  background-color: var(--colThumbActivo);
 }

 #nav p {
  margin: 0;
 }

 #nav a:not([data-logo]) {
  display: block;
  padding: var(--padNav);
 }

 #nav a.actual code,
 #nav a.actual strong {
  color: var(--colAStrong);
 }

 #nav a.actual {
  background-color: var(--colFondoNavSel);
 }

 @media screen and (max-width: 999px) {
  #principal {
   max-width: 100vw;
  }

  #cierra {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: var(--colSombra);
   transform: translateX(-120%);
   transition: transform 0.7s ease-out;
  }

  #nav {
   width: min(var(--anchoNav), 70%);
   box-shadow: var(--navSombra);
  }

  .xmenu>#nav {
   transform: translateX(-120%);
  }

  .menu>#cierra,
  .menu>#nav {
   transform: translateX(0);
  }

  #principal>.anterior {
   left: calc(2 * var(--gap) + 2rem);
  }
 }

 @media screen and (min-width: 1000px) {
  #cierra {
   display: none;
  }

  #nav {
   width: var(--anchoNav);
  }

  .menu>#nav {
   transform: translateX(-120%);
  }

  .xmenu>#principal {
   margin-left: var(--anchoNav)
  }

  .menu>#principal>.anterior {
   left: calc(2 * var(--gap) + 2rem);
  }

  .xmenu>#principal>.anterior {
   top: var(--gap);
   left: calc(var(--anchoNav) + var(--gap));
  }

  .xmenu.scroll #principal>.anterior {
   top: -10rem;
  }
 }

 @media print {

  #nav,
  #principal>#abre,
  #principal>.anterior,
  #principal>.siguiente {
   display: none;
  }

  #principal>h1:not(.default) {
   margin-top: 0.5rem;
   padding: 1rem;
   color: var(--colTituloFondo);
   background-color: transparent;
  }

 }
</style>
 
</head>

<body  class="xmenu">
 <div id="principal">
   <h1 >1. js / modelo / PASATIEMPO.js</h1><table class="codeShow">
 <caption style="text-align: left">
  <button type=button title="Copiar al portapapeles"
    onclick="copyToClipboard(this)">
   <span class="material-symbols-outlined">
    content_copy
   </span>
  </button>
 </caption>
 <tbody>
  <tr><td>1</td><td><span class="codeComment">/**</span></td></tr>
  <tr><td>2</td><td><span class="codeComment"> * <span class="codeReserved">@typedef</span> {Object} PASATIEMPO</span></td></tr>
  <tr><td>3</td><td><span class="codeComment"> * <span class="codeReserved">@property</span> {string} [PAS_ID]</span></td></tr>
  <tr><td>4</td><td><span class="codeComment"> * <span class="codeReserved">@property</span> {string} PAS_NOMBRE</span></td></tr>
  <tr><td>5</td><td><span class="codeComment"> * <span class="codeReserved">@property</span> {number} [PAS_MODIFICACION]</span></td></tr>
  <tr><td>6</td><td><span class="codeComment"> * <span class="codeReserved">@property</span> {number} [PAS_ELIMINADO]</span></td></tr>
  <tr><td>7</td><td><span class="codeComment"> */</span></td></tr>
 </tbody>
</table>
 <footer>
 <p>
  <a rel="license"
    href="http://creativecommons.org/licenses/by/4.0/"><img
     alt="Licencia Creative Commons" style="border-width:0"
     src="/img/icono/160x30.webp" width="80" height="15" /></a>
  <br />Esta
  <span xmlns:dct="http://purl.org/dc/terms/"
    href="http://purl.org/dc/dcmitype/InteractiveResource"
    rel="dct:type">obra</span>
  de
  <a xmlns:cc="http://creativecommons.org/ns#"
    href="https://gilpgijs.github.io" property="cc:attributionName"
    rel="cc:attributionURL">Gilberto Pacheco Gallegos</a>
  está bajo una
  <a rel="license"
    href="http://creativecommons.org/licenses/by/4.0/">Licencia
   Creative Commons Atribución 4.0 Internacional</a>.
 </p>
</footer>
 <button id="abre" type="button" title="Menú" class="cambiaMenu">
  <span class="material-symbols-outlined">
   menu
  </span>
 </button>
 <a class="anterior" href="/m09sincronizacion/m-js/m-modelo/index.html" title="F. Carpeta « js / modelo »"><span class="material-symbols-outlined">
     skip_previous
    </span></a>
 <a class="siguiente" href="/m09sincronizacion/m-js/m-modelo/m-validaId-js.html" title="2. js / modelo / validaId.js"><span class="material-symbols-outlined">
     skip_next
     </span></a>
</div>
<div id="cierra" class="cambiaMenu"></div>
<nav id="nav">
 <button type="button" title="Cierra" class="cambiaMenu">
  <span class="material-symbols-outlined">
   close
  </span>
 </button>
 
   <p>
    <a href="/"
      data-logo="true">GilPG DM</a>
   </p>
   
   <p>
    <a href="/m09sincronizacion/">13. Sincronización</a>
   </p>
   <p>
    <a href="/m09sincronizacion/m-js/">L. Carpeta « js »</a>
   </p>
   
     <p>
      <a class="paginaAnterior" href="/m09sincronizacion/m-js/m-bd/m-pasatiemposReemplaza-js.html"
        title="8. js / bd / pasatiemposReemplaza.js"><span
        class="material-symbols-outlined">
         arrow_upward
        </span></a>
     </p>
   <h1><a href="/m09sincronizacion/m-js/m-modelo/index.html">F. Carpeta « js / modelo »</a></h1>
   
   <ol type="1">
    
   <li>
    <p>
     <a href="/m09sincronizacion/m-js/m-modelo/m-PASATIEMPO-js.html" class="actual">js / modelo / PASATIEMPO.js</a>
    </p>
   </li>
   <li>
    <p>
     <a href="/m09sincronizacion/m-js/m-modelo/m-validaId-js.html">js / modelo / validaId.js</a>
    </p>
   </li>
   <li>
    <p>
     <a href="/m09sincronizacion/m-js/m-modelo/m-validaNombre-js.html">js / modelo / validaNombre.js</a>
    </p>
   </li>
   <li>
    <p>
     <a href="/m09sincronizacion/m-js/m-modelo/m-validaPasatiempo-js.html">js / modelo / validaPasatiempo.js</a>
    </p>
   </li>
   <li>
    <p>
     <a href="/m09sincronizacion/m-js/m-modelo/m-validaPasatiempos-js.html">js / modelo / validaPasatiempos.js</a>
    </p>
   </li>
   </ol>
   
    <p>
     <a class="paginaSiguiente" href="/m09sincronizacion/m-srv/index.html"
       title="M. Carpeta « srv »"><span
       class="material-symbols-outlined">
        arrow_downward
       </span></a>
    </p>
 
</nav>
 <script>
 registraServiceWorker("/sw.js")
 const LOCAL_STORAGE_MENU = "menu"
 const MENU = "menu"
 const XMENU = "xmenu"
 const SCROLL = "scroll"
 const nav = document.querySelector("#nav")
 const abre = document.querySelector("#abre")

 /**@type {string} */
 let urlAnterior = "/m09sincronizacion/m-js/m-modelo/index.html"
 /**@type {string} */
 let urlSiguiente = "/m09sincronizacion/m-js/m-modelo/m-validaId-js.html"
 /**@type {number|null} */
 let iniciaX = null
 /**@type {number|null} */
 let iniciaY = null
 /** @type {number} */
 let posY = 0
 /** @type {number} */
 let dy = 0
 /** @type {boolean} */
 let scrolling = false

 document.addEventListener("keydown", teclas)
 document.addEventListener("touchstart", iniciaTouch)
 document.addEventListener("touchmove", desplazaTouch)
 addEventListener("scroll", onScroll)
 if (abre) {
  abre.addEventListener("click", cambiaMenu)
 }
 const cambian = Array.from(document.querySelectorAll(".cambiaMenu"))
 for (const c of cambian) {
  c.addEventListener("click", cambiaMenu)
 }
 const menu = localStorage.getItem(LOCAL_STORAGE_MENU)
 if (menu) {
  if (menu === MENU) {
   document.body.classList.remove(XMENU)
   document.body.classList.add(MENU)
  } else {
   document.body.classList.remove(MENU)
   document.body.classList.add(XMENU)
  }
 }

 function registraServiceWorker(url) {
  if (navigator.serviceWorker) {
   navigator.serviceWorker.register(url).
    then(registro => {
     console.log("Service Worker registrado.")
     console.log(registro)
    }).
    catch(muestraError)
  }
 }

 function muestraError(e) {
  console.error(e)
  alert(e.message)
 }

 async function copyToClipboard(button) {
  try {
   const table = button.closest("table")
   if (table !== null) {
    const lineas = Array.from(table.querySelectorAll("td:nth-child(2)"))
    const codigo = lineas
     .map(linea => linea.textContent || "")
     .join("\n")
    if (codigo) {
     await navigator.clipboard.writeText(codigo)
     alert("Texto copiado al portapapeles.")
    }
   }
  } catch (e) {
   alert(e.message)
  }
 }

 function cambiaMenu() {
  document.body.classList.toggle(XMENU)
  document.body.classList.toggle(MENU)
  if (document.body.classList.contains(MENU)) {
   localStorage.setItem(LOCAL_STORAGE_MENU, MENU)
  } else {
   localStorage.setItem(LOCAL_STORAGE_MENU, XMENU)
  }
 }

 /** @param {KeyboardEvent} ev*/
 function teclas(ev) {
  switch (ev.key) {
   case "ArrowLeft":
    retrocede()
    break
   case "ArrowRight":
    avanza()
    break
  }
 }

 function retrocede() {
  if (urlAnterior) {
   location.href = urlAnterior
  }
 }

 function avanza() {
  if (urlSiguiente) {
   location.href = urlSiguiente
  }
 }

 /** @param {TouchEvent} ev*/
 function iniciaTouch(ev) {
  const toqueInicial = ev.touches[0]
  iniciaX = toqueInicial.clientX
  iniciaY = toqueInicial.clientY
 }

 /** @param {TouchEvent} ev*/
 function desplazaTouch(ev) {
  if (iniciaX && iniciaY) {
   const desplazamiento = ev.touches[0]
   var desplazamientoX = desplazamiento.clientX
   var desplazamientoY = desplazamiento.clientY
   var difX = desplazamientoX - iniciaX
   var difY = desplazamientoY - iniciaY
   // Checa que el movimiento no sea muy corto.
   if (Math.abs(difX) + Math.abs(difY) > 90) {
    if (Math.abs(difX) > Math.abs(difY)) {
     if (difX > 70) {
      retrocede()
     } else {
      avanza()
     }
     // Reinicia valores.
     iniciaX = null
     iniciaY = null
    }
   }
  }
 }

 function onScroll() {
  dy = scrollY - posY
  posY = scrollY
  if (!scrolling) {
   requestAnimationFrame(avanzaScroll)
  }
  scrolling = true
 }

 function avanzaScroll() {
  if (posY === 0) {
   document.body.classList.remove(SCROLL)
  } else if (dy < 0) {
   document.body.classList.remove(SCROLL)
  } else if (dy > 0) {
   document.body.classList.add(SCROLL)
  }
  scrolling = false
 }

</script>
</body>

</html>
