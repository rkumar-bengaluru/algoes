import { useState } from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './wordcount'
const WordCountDemo = () => {
    const defaultCode = "const template = document.createElement('template');\ntemplate.innerHTML = `<div></div>`;\n\nclass WordCount extends HTMLElement {\n\tconstructor() {\n\t\tsuper();\n\t\tthis.attachShadow({\n\t\t\tmode: 'open'\n\t\t});\n\t\tthis.shadowRoot.appendChild(template.content.cloneNode(true));\n\t\tthis.shadowRoot.querySelector('div').innerHTML = '';\n\t}\n\n\tstatic get observedAttributes() {\n\t\treturn ['area-attribute'];\n\t}\n\n\tcountWords(text) {\n\t\treturn text.split(/\s+/g).length - 1;\n\t}\n\n\tattributeChangedCallback(name, oldValue, newValue) {\n\t\tif (name === 'area-attribute') {\n\t\t\tconst count = `Words: ${this.countWords(newValue)}`;\n\t\t\tconst text = document.createElement('span');\n\t\t\ttext.textContent = count;\n\t\t\tthis.shadowRoot.querySelector('div').innerHTML = count;\n\t\t}\n\t}\n}\ncustomElements.define('word-count-area', WordCount);\n";
    const [text, setText] = useState('');
    const [code, setCode] = useState(defaultCode);

    function showComponent(e, type) {
        e.preventDefault();
        switch (type) {
            case 0:
                setCode(defaultCode);
                break;
            case 1:
                setCode("import {useState} from 'react';\nimport {UnControlled as CodeMirror} from 'react-codemirror2';\nimport './wordcount'\nconst WordCountDemo = () => {\n\tconst [text, setText] = useState('');\n\treturn ( \n\t\t<div className = \"\" >\n\t\t\t<textarea rows = \"4\" cols = \"50\"\n\t\t\t\tonChange = {\n\t\t\t\t(e) => setText(e.target.value)} > < /textarea> \n\t\t\t<word-count-area area-attribute = {text} > < /word-count-area> \n\t\t/div>\n\t)\n}\nexport default WordCountDemo;\n");
                break;
            default:
                break;
        }
    }
    return (
        <div className="container-fluid">
            <h6>Web Component</h6>
            <p>Web Components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.</p>
            <div className="row">
                <div className="col">
                    <h6>Custom Elements</h6>
                    <p>Custom elements give developers the ability to extend HTML and create their own tags. Because custom elements are standards based they benefit from the Web's built-in component model. The result is more modular code that can be reused in many different contexts.</p>
                </div>
                <div className="col">
                    <h6>Shadow DOM</h6>
                    <p>Shadow DOM is a web standard that offers component style and markup encapsulation. It is a critically important piece of the Web Components story as it ensures that a component will work in any environment even if other CSS or JavaScript is at play on the page.</p>
                </div>
            </div>
            <h6>Source Code</h6>
            <div className="row">
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col">
                            <a href="/algoes" onClick={(e) => showComponent(e, 0)}>Word Count Web Component</a>
                        </div>
                        <div className="col">
                            <a href="/algoes" onClick={(e) => showComponent(e, 1)}>React Usage Of Web Component</a>
                        </div>
                    </div>
                    <div>
                        <CodeMirror
                            value={code}
                            options={{ lineNumbers: true, mode: "javascript" }} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <h6>Demo</h6>
                    <p>Type the words below and WordCount WebComponent will display the number of words typed...</p>
                    <textarea rows="4" cols="50" onChange={(e) => setText(e.target.value)}></textarea>
                    <word-count-area area-attribute={text}></word-count-area>
                </div>

            </div>

        </div>
    )
}
export default WordCountDemo;