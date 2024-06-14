import {Button} from './button.js';

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