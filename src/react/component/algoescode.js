
import CodeFlask from 'codeflask'

class AlgoesCode extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template')
        template.innerHTML = `<div className="border" id="editor"></div>`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.__element = null;
        this.__flask = null;
    }

    static get observedAttributes() {
        return ['src']
    }

    async connectedCallback() {
        const src = this.hasAttribute('src') ? this.getAttribute('src') : 'null';
        this.__element = this.shadowRoot.querySelector('#editor');
        this.__flask = new CodeFlask(this.__element, { language: 'js', styleParent: this.shadowRoot, lineNumbers: true });
        this.__flask.updateCode(src);
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'src') {
            const src = this.hasAttribute('src') ? this.getAttribute('src') : 'null';
            if (this.__flask) {
                this.__flask.updateCode(src);
            }
        }
    }
}
customElements.define('algoes-code', AlgoesCode);