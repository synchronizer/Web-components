document.querySelector('head').innerHTML += '<link rel="stylesheet" href="Blocks/button/button.css">'

export class Button extends HTMLElement {
    constructor() {
      super();
      this.classList.add('button');
      if (this.getAttribute('data-icon-left')) {
        this.innerHTML = `<b-icon class="button__icon" src='${this.getAttribute('data-icon-left')}'></b-icon> ` + this.innerHTML;
        this.removeAttribute('data-icon-left')
      }
      if (this.getAttribute('data-icon-right')) {
        this.innerHTML += `<b-icon class="button__icon" src='${this.getAttribute('data-icon-right')}'></b-icon>`
        this.removeAttribute('data-icon-right')
      }


      if (!this.getAttribute('data-size')) {this.setAttribute('data-size', 'm')};

      if (this.getAttribute('data-onclick')) {
        const onclick = this.getAttribute('data-onclick');
        this.addEventListener('click', () => {eval(onclick)})
        this.removeAttribute('data-onclick');
      };
  
    }
  }
  
  customElements.define("b-button", Button);