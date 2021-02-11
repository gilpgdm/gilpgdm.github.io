import { muestraError } from "../lib/utilHtml.js";

registraServiceWorker();
async function registraServiceWorker() {
  try {
    const registro = await navigator.serviceWorker.register("/sw.js");
    console.log("Service Worker registrado.");
    console.log(registro);
  } catch (e) {
    muestraError(e);
  }
}