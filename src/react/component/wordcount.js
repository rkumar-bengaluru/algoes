
const template = document.createElement('template');
template.innerHTML = `<div></div>`;

class WordCount extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('div').innerHTML='';
    }

    static get observedAttributes() {
        return ['area-attribute'];
    }

    countWords(text) {
        return text.split(/\s+/g).length -1;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'area-attribute') {
            const count = `Words: ${this.countWords(newValue)}`;
            const text = document.createElement('span');
            text.textContent = count;
            this.shadowRoot.querySelector('div').innerHTML=count;
        }
    }
}
customElements.define('word-count-area', WordCount);