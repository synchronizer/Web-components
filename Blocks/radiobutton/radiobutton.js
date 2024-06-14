document.querySelector('head').innerHTML += '<link rel="stylesheet" href="Blocks/radiobutton/radiobutton.css">';

export class Radiobutton extends HTMLElement {
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
  customElements.define("b-radiobutton", Radiobutton);