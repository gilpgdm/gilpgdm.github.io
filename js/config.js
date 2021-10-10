import "../cmp/mi-nav.js";
import "../lib/layout-cajon.js";
import "../lib/mi-footer.js";
import { registraServiceWorker, setTitle } from "../lib/utilHtml.js";

registraServiceWorker();

document.addEventListener("DOMContentLoaded", () => setTitle("gilpgdm"));