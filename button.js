// import { Icon } from "./icon.js";

export class Button extends HTMLElement {
    constructor() {
      super();
      this.classList.add('button');
      if (this.getAttribute('data-icon-left')) {
        this.innerHTML = `<b-icon class="button__icon" src='${this.getAttribute('data-icon-left')}'></b-icon> ` + this.innerHTML;
      }
      if (this.getAttribute('data-icon-right')) {
        this.innerHTML += `<b-icon class="button__icon" src='${this.getAttribute('data-icon-right')}'></b-icon>`
      }


      if (!this.getAttribute('data-size')) {this.setAttribute('data-size', 'm')};
  
    }
  }
  
  customElements.define("b-button", Button);