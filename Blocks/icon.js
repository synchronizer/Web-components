document.querySelector('head').innerHTML += '<link rel="stylesheet" href="Blocks/icon.css">';

export class Icon extends HTMLElement {
    constructor() {
      super();
      if (!this.getAttribute('size')) this.setAttribute('size', 'm');
    //    this.classList.add('icon');
    this.className = 'icon ' + this.className;
    if (!this.getAttribute('src')) return;
       this.setAttribute('style', `-webkit-mask-image: url('${this.getAttribute('src')}');`)
       

    }
  }
  
  customElements.define("b-icon", Icon); 