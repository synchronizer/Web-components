import {Button} from '../button/button.js';

document.querySelector('head').innerHTML += '<link rel="stylesheet" href="Blocks/checkbutton/checkbutton.css">';

export  class Checkbutton extends Button {
  constructor() {
    super();
    this.classList.add('checkbutton')
    this.addEventListener('click', () => {
      this.toggleAttribute('data-checked')
    })

  }
}

customElements.define("b-checkbutton", Checkbutton);