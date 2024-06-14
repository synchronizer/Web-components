




import {Button} from './button.js'
import { Checkbutton } from './checkbutton.js';
  
  
  
  
  class bRadiobutton extends HTMLElement {
    constructor() {
      super();
      this.classList.add('radiobutton')
      this.innerHTML = Array.from(this.querySelectorAll('item')).map(item => `<b-checkbutton data-size=${this.getAttribute('data-size') || 'm'} >${item.textContent}</b-checkbutton>`).join('');
      Array.from(this.querySelectorAll('b-checkbutton')).forEach((item, key) => {
        if (this.getAttribute('data-selected') == (key+1)) item.setAttribute('data-checked', '');
        item.addEventListener('click', e => {
          Array.from(this.querySelectorAll('b-checkbutton')).forEach(item2 => {
            item2.removeAttribute('data-checked');
          });
          item.setAttribute('data-checked','');
          this.setAttribute('data-selected', (key + 1))
        })
      });
    }
  }
  customElements.define("b-radiobutton", bRadiobutton);
  
  
  
  class bIncrementable extends HTMLElement {
    constructor() {
      super();
  
      this.innerHTML = `<b-button data-counter=${this.getAttribute('data-counter') || '0'}>${this.textContent}</b-button>`
      const button = this.querySelector('b-button');
      button.addEventListener('click', () => button.setAttribute('data-counter', Number(button.getAttribute('data-counter')) + 1))
  
    }
  }
  
  customElements.define("b-incrementable", bIncrementable); 
  
  
  class bIcon extends HTMLElement {
    constructor() {
      super();
      if (!this.getAttribute('size')) this.setAttribute('size', 'm');
    //    this.classList.add('icon');
    this.className = 'icon ' + this.className;
    if (!this.getAttribute('src')) return;
       this.setAttribute('style', `-webkit-mask-image: url('${this.getAttribute('src')}');`)
       

    }
  }
  
  customElements.define("b-icon", bIcon); 