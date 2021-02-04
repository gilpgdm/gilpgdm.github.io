/* This work by Gilberto Pacheco Gallegos is licensed under the Creative Commons
 * Atribución 4.0 Internacional License. To view a copy of this license, visit
 * http://creativecommons.org/licenses/by/4.0/. */

export const SHADOW_HTML = /* html */
  `<style>
    :host {
      display: block;
      font-family: var(--font-mono);
      white-space: pre;
    }
    table {
      margin-left: auto;
      margin-right: auto;
    }
    #nums {
      text-align: right;
      padding: 0 0 0 0;
      vertical-align: top;
      font-family: var(--font-mono);
      white-space: pre;
      line-height:1.1rem;
    }
    #cod {
      padding: 0 0 0 0.25rem;
      vertical-align: top;
      font-family: var(--font-mono);
      white-space: pre;
      line-height:1.1rem;
    }
  </style><link rel="stylesheet" href="/css/material-icons.css"><table><tr><td colspan=2><button type=button title="Copiar al portapapeles"><span class="material-icons rem">content_copy</span></button></td></tr><tr><td id=nums></td><td id=cod><slot></slot></td></tr></table>`;