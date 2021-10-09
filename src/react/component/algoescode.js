
import CodeFlask from 'codeflask'

class AlgoesCode extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template')
        template.innerHTML = `<div className="border" id="editor"></div>`;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.__element = null;
    }
    static get observedAttributes() {
        return ['src', 'readonly', 'mode', 'theme']
    }

    async connectedCallback() {
        const src = this.hasAttribute('src') ? this.getAttribute('src') : 'null';
        console.log(src);
        this.__element = this.shadowRoot.querySelector('#editor');
        console.log(this.__element);
        const flask = new CodeFlask(this.__element, { language: 'js', styleParent: this.shadowRoot,lineNumbers: true });
        flask.updateCode(src);
       
    }

}
customElements.define('algoes-code', AlgoesCode);